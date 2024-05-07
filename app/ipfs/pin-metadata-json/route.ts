import { createHash } from 'node:crypto';
import { type File, FilebaseClient } from '@filebase/client';
import type { Metadata } from '@rmrk-team/types';

const filebaseClient = new FilebaseClient({
  token: process.env.FILEBASE_TOKEN || '',
});

const md5 = (str: string) => createHash('md5').update(str).digest('hex');

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const mediaFile: File | null = data.get(
      'mediaFile',
    ) as unknown as File | null;
    const thumbnailFile: File | null = data.get(
      'thumbnailFile',
    ) as unknown as File;
    const metadataFieldsString: string | null = data.get(
      'metadataFields',
    ) as unknown as string;

    const metadataFields: Metadata = metadataFieldsString
      ? JSON.parse(metadataFieldsString)
      : {};

    const mediaFileCid = mediaFile
      ? await filebaseClient.storeBlob(mediaFile)
      : undefined;
    const mediaUri = mediaFileCid ? `ipfs://${mediaFileCid}` : undefined;

    let thumbnailCid: string | undefined = undefined;

    if (thumbnailFile) {
      thumbnailCid = await filebaseClient.storeBlob(thumbnailFile);
    }

    const thumbnailUri = thumbnailCid ? `ipfs://${thumbnailCid}` : undefined;

    const objectName = `${md5(
      `${mediaUri}${thumbnailUri}${metadataFieldsString}`,
    )}.json`;

    //TODO: Handle mime type check for correct opensea metadata fields. If mediaFile mime is image, then duplicate it on `image` field, if it's not image, then add it to `animation_url` field and use thumbnail as `image` field.
    //TODO: Handle case where media (image, mediaUri, animation_url, thumbnailUri) are passed as ipfs uri instead of files
    const metadataCid = await filebaseClient.storeBlob(
      new Blob([JSON.stringify({ ...metadataFields, mediaUri, thumbnailUri })]),
      objectName,
    );

    return Response.json({ metadataUri: `ipfs://${metadataCid}` });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error(error);
    return new Response(`Pin metadata error: ${error.message}`, {
      status: 400,
    });
  }
}
