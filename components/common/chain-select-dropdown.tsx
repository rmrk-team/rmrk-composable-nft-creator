import { InputSelect } from 'components/common/forms/input-select';
import * as Select from 'components/park-ui/select';
import { allSupportedChains } from 'lib/wagmi-config';
import React from 'react';

const chainOptions = allSupportedChains.map((chain) => ({
  value: chain.id.toString(),
  label: chain.name,
}));

type Props = {
  defaultValue?: Select.RootProps['defaultValue'];
  onValueChange: Select.RootProps['onValueChange'];
};

export const ChainSelectDropdown = ({ defaultValue, onValueChange }: Props) => {
  return (
    <InputSelect
      defaultValue={defaultValue}
      id="select-chain"
      groupLabel="Chain"
      placeholder="Select a network"
      onValueChange={onValueChange}
      items={chainOptions}
    />
  );
};
