import { ChainSelectDropdown } from 'components/common/chain-select-dropdown';
import { FormLabel } from 'components/park-ui/form-label';
import type * as Select from 'components/park-ui/select';
import { Text } from 'components/park-ui/text';
import { useField } from 'formik';
import React from 'react';
import { VStack } from 'styled-system/jsx';

const fieldName = 'chainId';

export const InputSelectChainSelect = () => {
  const [field, meta, helpers] = useField(fieldName);

  const onChange: Select.RootProps['onValueChange'] = (e) => {
    void helpers.setValue(e?.value?.[0]);
  };

  return (
    <VStack gap={2} alignItems={'flex-start'}>
      <FormLabel htmlFor={field.name}>Chain</FormLabel>
      <ChainSelectDropdown
        defaultValue={field.value ? [field.value] : undefined}
        onValueChange={onChange}
      />
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
    </VStack>
  );
};
