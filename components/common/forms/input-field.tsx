import { useField } from 'formik';
import { VStack } from 'styled-system/jsx';
import { FormLabel } from 'components/park-ui/form-label';
import { Input } from 'components/park-ui/input';
import { Text } from 'components/park-ui/text';
import React from 'react';

type Props = {
  name: string;
  label: string;
};
export const InputField = ({ name, label }: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <VStack gap={1}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input {...field} />
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
    </VStack>
  );
};
