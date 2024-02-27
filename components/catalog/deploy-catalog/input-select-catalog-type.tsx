import { VStack } from 'styled-system/jsx';
import { InputSelect } from 'components/common/forms/input-select';
import React from 'react';
import { useField } from 'formik';
import { fileUploadCatalogThumbnailAcceptedFileTypes } from 'lib/consts/media-types';
import * as Select from 'components/park-ui/select';

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
