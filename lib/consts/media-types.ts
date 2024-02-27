import type { Accept } from 'react-dropzone';

export const supportedCatalogImageMimeTypes = ['image/png', 'image/svg+xml', 'image/webp'] as const;

export const fileUploadCatalogPartAcceptedFileTypes: Accept = {
  'image/png': ['.png'],
  'image/svg+xml': ['.svg'],
  'image/webp': ['.webp'],
};

export const fileUploadCatalogThumbnailAcceptedFileTypes: Accept = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/webp': ['.webp'],
};
