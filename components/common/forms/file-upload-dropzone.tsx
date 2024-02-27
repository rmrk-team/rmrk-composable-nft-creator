import React from 'react';
import * as FileUpload from 'components/park-ui/file-upload';
import { IconButton } from 'components/park-ui/icon-button';
import { Trash2Icon } from 'lucide-react';
import { Button } from 'components/park-ui/button';
import { useField } from 'formik';
import type { FileUploadRootProps } from '@ark-ui/react';
import { fileUploadCatalogThumbnailAcceptedFileTypes } from 'lib/consts/media-types';
import { VStack } from 'styled-system/jsx';
import { FormLabel } from 'components/park-ui/form-label';
import { Text } from 'components/park-ui/text';

type PreviewFile = File & { preview: string };

type Props = FileUpload.RootProps & {
  isDisabled?: boolean;
  name: string;
  label?: string;
};

export const FileUploadDropzone = ({
  isDisabled,
  name,
  label = 'Upload file',
  maxFiles = 1,
  maxFileSize = 50 * 1024 * 1024,
  accept = fileUploadCatalogThumbnailAcceptedFileTypes,
  ...fileUploadProps
}: Props) => {
  const [, meta, helpers] = useField(name);

  const setFormValue: FileUploadRootProps['onFilesChange'] = ({
    acceptedFiles,
  }) => {
    // the value can't be set to undefined or else it will be removed from the form, breaking validation
    void helpers.setValue(acceptedFiles ?? [], true);
  };

  return (
    <VStack gap={1} width="100%">
      <FormLabel htmlFor="name">{label}</FormLabel>
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
      <FileUpload.Root
        maxFiles={maxFiles}
        maxFileSize={maxFileSize}
        onFilesChange={setFormValue}
        disabled={isDisabled}
        accept={accept}
        {...fileUploadProps}
      >
        <FileUpload.Dropzone>
          <FileUpload.Label>Drop your files here</FileUpload.Label>
          <FileUpload.Trigger asChild>
            <Button size="sm">Open Dialog</Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
        <FileUpload.ItemGroup>
          {(files) =>
            files.map((file, id) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <FileUpload.Item key={id} file={file}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger asChild>
                  <IconButton variant="link" size="sm">
                    <Trash2Icon />
                  </IconButton>
                </FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            ))
          }
        </FileUpload.ItemGroup>
      </FileUpload.Root>
    </VStack>
  );
};
