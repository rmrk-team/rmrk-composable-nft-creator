import { File, FilebaseClient } from '@filebase/client';
import type { Metadata } from '@rmrk-team/types';

const filebaseClient = new FilebaseClient({
  token: process.env.FILEBASE_TOKEN || '',
});

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const mediaFile: File | null = data.get('mediaFile') as unknown as File;
    const thumbnailFile: File | null = data.get(
      'thumbnailFile',
    ) as unknown as File;
    const metadataFieldsString: string | null = data.get(
      'metadataFields',
    ) as unknown as string;

    const metadataFields: Metadata = metadataFieldsString
      ? JSON.parse(metadataFieldsString)
      : {};

    if (!mediaFile) {
      return new Response('No file provided', {
        status: 400,
      });
    }

    const mediaFileCid = await filebaseClient.storeBlob(mediaFile);
    const mediaUri = mediaFileCid ? `ipfs://${mediaFileCid}` : undefined;

    let thumbnailCid: string | undefined = undefined;

    if (thumbnailFile) {
      thumbnailCid = await filebaseClient.storeBlob(thumbnailFile);
    }

    const thumbnailUri = thumbnailCid ? `ipfs://${thumbnailCid}` : undefined;

    //TODO: Handle mime type check for correct opensea metadata fields. If mediaFile mime is image, then duplicate it on `image` field, if it's not image, then add it to `animation_url` field and use thumbnail as `image` field.
    //TODO: Handle case where media (image, mediaUri, animation_url, thumbnailUri) are passed as ipfs uri instead of files
    const metadataCid = await filebaseClient.storeBlob(
      new Blob([JSON.stringify({ ...metadataFields, mediaUri, thumbnailUri })]),
    );

    return Response.json({ metadataUri: `ipfs://${metadataCid}` });
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
}  catch (error: any) {
    return new Response(`Pin metadata error: ${error.message}`, {
      status: 400,
    });
  }
}
