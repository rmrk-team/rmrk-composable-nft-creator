import { Switch } from 'components/park-ui/switch';
import { useField } from 'formik';
import React from 'react';
import { VStack } from 'styled-system/jsx';

type Props = {
  name: string;
  label: string;
};

export const SwitchField = ({ name, label }: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <VStack gap={1} textAlign={'left'} alignItems={'flex-start'}>
      <Switch defaultChecked={field.value} {...field}>
        {label}
      </Switch>
    </VStack>
  );
};
