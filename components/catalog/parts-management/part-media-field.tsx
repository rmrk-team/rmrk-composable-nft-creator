import type { AddCatalogPartFormFields } from 'components/catalog/parts-management/add-new-part-form';
import { Alert } from 'components/common/alert';
import { FileUploadDropzone } from 'components/common/forms/file-upload-dropzone';
import { InputField } from 'components/common/forms/input-field';
import { FormLabel } from 'components/park-ui/form-label';
import { Switch } from 'components/park-ui/switch';
import { useFormikContext } from 'formik';
import { fileUploadCatalogPartAcceptedFileTypes } from 'lib/consts/media-types';
import { CircleAlert } from 'lucide-react';
import React from 'react';
import { Flex } from 'styled-system/jsx';

type Props = {
  partType: 1 | 2 | undefined; // 0 = None, 1 = Slot, 2 = Fixed
};

export const PartMediaField = ({ partType }: Props) => {
  const { setFieldValue, values } =
    useFormikContext<AddCatalogPartFormFields>();
  const [isUseCustomIpfsUri, setIsUseCustomIpfsUri] = React.useState(false);
  const toggleCustomIpfsUri = () => {
    if (isUseCustomIpfsUri) {
      void setFieldValue('metadataFields.mediaUri', undefined);
      setIsUseCustomIpfsUri(false);
    } else {
      void setFieldValue('metadataFields.mediaFiles', undefined);
      setIsUseCustomIpfsUri(true);
    }
  };

  return (
    <Flex direction={'column'} gap={2}>
      <FormLabel>Part media</FormLabel>

      <Switch
        checked={isUseCustomIpfsUri}
        onChange={toggleCustomIpfsUri}
        size={'sm'}
      >
        Use direct ipfs uri for the Part media file
      </Switch>

      {partType === 2 && !values.metadataFields.mediaFiles && (
        <Alert
          title="Fixed part"
          bodyText="Fixed parts must have a media"
          icon={<CircleAlert />}
        />
      )}

      {partType === 1 && (
        <Alert
          title="Slot part"
          bodyText="Media file is optional for slot part, and will be used as a fallback when nothing is equipped in the slot."
        />
      )}

      {isUseCustomIpfsUri ? (
        <Flex direction={'column'} gap={2}>
          <Alert
            title="Advance use"
            bodyText="If you know what you are doing, you can use your own IPFS provider to upload your media and enter the ipfs uri here"
          />
          <InputField
            name="metadataFields.mediaUri"
            placeholder="ipfs://QmbKQaLAyXB8xV8bnnmskVCLPMs36yRso23xWzpwgHyPui"
          />
        </Flex>
      ) : (
        <FileUploadDropzone
          name="metadataFields.mediaFiles"
          maxFiles={1}
          accept={fileUploadCatalogPartAcceptedFileTypes}
        />
      )}
    </Flex>
  );
};
