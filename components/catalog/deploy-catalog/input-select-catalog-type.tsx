import { InputSelect } from 'components/common/forms/input-select';
import * as Select from 'components/park-ui/select';
import { useField } from 'formik';
import { fileUploadCatalogThumbnailAcceptedFileTypes } from 'lib/consts/media-types';
import React from 'react';
import { VStack } from 'styled-system/jsx';

const catalogTypeOptions = Object.keys(
  fileUploadCatalogThumbnailAcceptedFileTypes,
).map((type) => ({
  value: type,
  label: type,
}));

export const InputSelectCatalogType = () => {
  const [field, meta, helpers] = useField('type');

  const onChange: Select.RootProps['onValueChange'] = (e) => {
    void helpers.setValue(e?.value?.[0]);
  };

  console.log('type', field);
  return (
    <VStack gap={2}>
      <InputSelect
        id="type"
        groupLabel="Castalog type"
        placeholder="Select a catalog type"
        onValueChange={onChange}
        items={catalogTypeOptions}
      />
    </VStack>
  );
};
