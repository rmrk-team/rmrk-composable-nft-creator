import type { Accept } from 'react-dropzone';

export const supportedCatalogImageMimeTypes = [
  'image/png',
  'image/svg+xml',
  'image/webp',
] as const;

export const supportedCatalogModelMimeTypes = ['model/gltf-binary'] as const;

export const catalogTypes = [
  ...supportedCatalogImageMimeTypes,
  ...supportedCatalogModelMimeTypes,
] as const;

export const fileUploadCatalogPartAcceptedFileTypes: Accept = {
  'image/png': ['.png'],
  'image/svg+xml': ['.svg'],
  'image/webp': ['.webp'],
  'model/gltf-binary': ['.glb'],
};

export const fileUploadCatalogThumbnailAcceptedFileTypes: Accept = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/webp': ['.webp'],
};

export const catalogPartTypes = [
  0, // None
  1, // Slot
  2, // Fixed
] as const;
