import type { Metadata } from '@rmrk-team/types';

export const pinMetadataWithFormData = async (formData: FormData) => {
  const result = await fetch('/ipfs/pin-metadata-json', {
    method: 'POST',
    body: formData,
  });
  if (result.status !== 200) throw new Error('Could not upload your metadata');
  return await result.json();
};

export const pinMetadataWithFiles = async ({
  mediaFile,
  thumbnailFile,
  metadataFields,
}: {
  mediaFile: File;
  thumbnailFile?: File;
  metadataFields: Metadata;
}): Promise<string> => {
  const data = new FormData();
  data.append('metadataFields', JSON.stringify(metadataFields));
  data.append('mediaFile', mediaFile);
  if (thumbnailFile) {
    data.append('thumbnailFile', thumbnailFile);
  }

  const { metadataUri } = await pinMetadataWithFormData(data);
  return metadataUri;
};
