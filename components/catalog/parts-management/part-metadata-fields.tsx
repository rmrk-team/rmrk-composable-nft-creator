import {
  type AddCatalogPartFormFields,
  initialPartMetadataFields,
} from 'components/catalog/parts-management/add-new-part-form';
import { PartMediaField } from 'components/catalog/parts-management/part-media-field';
import { Alert } from 'components/common/alert';
import { InputField } from 'components/common/forms/input-field';
import { FormLabel } from 'components/park-ui/form-label';
import { Switch } from 'components/park-ui/switch';
import { useFormikContext } from 'formik';
import React from 'react';
import { Box, Flex } from 'styled-system/jsx';

type Props = {
  partType: 1 | 2 | undefined; // 0 = None, 1 = Slot, 2 = Fixed
};

export const PartMetadataFields = ({ partType }: Props) => {
  const { setFieldValue, values } =
    useFormikContext<AddCatalogPartFormFields>();
  const [isUseCustomIpfsUri, setIsUseCustomIpfsUri] = React.useState(false);

  const toggleCustomIpfsUri = () => {
    if (isUseCustomIpfsUri) {
      void setFieldValue('metadataFields', initialPartMetadataFields);
      setIsUseCustomIpfsUri(false);
    } else {
      void setFieldValue('metadataUri', undefined);
      setIsUseCustomIpfsUri(true);
    }
  };

  return (
    <Flex direction={'column'} gap={2}>
      <FormLabel>Part metadata fields</FormLabel>
      <Switch
        checked={isUseCustomIpfsUri}
        onChange={toggleCustomIpfsUri}
        size={'sm'}
      >
        Use direct ipfs uri for the Part metadata object
      </Switch>
      {isUseCustomIpfsUri ? (
        <Flex direction={'column'} gap={2}>
          <Alert
            title="Advance use"
            bodyText="If you know what you are doing, you can use your own IPFS provider to upload your part metadata JSON and enter the ipfs uri here."
          />
          <InputField
            name="metadataUri"
            label="Part metadata url"
            placeholder="ipfs://QmbKQaLAyXB8xV8bnnmskVCLPMs36yRso23xWzpwgHyPui"
          />
        </Flex>
      ) : (
        <Flex direction={'column'} gap={6}>
          <InputField name="metadataFields.name" label="Part name" />
          <PartMediaField partType={partType} />
        </Flex>
      )}
    </Flex>
  );
};
