import * as yup from 'yup';
import { supportedCatalogImageMimeTypes } from 'lib/consts/media-types';

export const catalogMetadataSchema = yup.object({
  name: yup.string().min(3).max(100).required(),
  image: yup
    .string()
      .required(),
  description: yup
    .string()
      .required(),
});

export const catalogSchema = yup.object({
  type: yup.string().oneOf(supportedCatalogImageMimeTypes).defined().required(),
  metadataURI: yup
    .string().defined().required(),
});


export interface CatalogMetadataSchema extends yup.InferType<typeof catalogMetadataSchema> {}
export interface CatalogSchema extends yup.InferType<typeof catalogSchema> {}
