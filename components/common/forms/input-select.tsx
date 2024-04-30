import { Portal } from '@ark-ui/react';
import * as Select from 'components/park-ui/select';
import { ChevronsUpDownIcon } from 'lucide-react';
import React from 'react';

type Option = { label: string; value: string; disabled?: boolean };

type Props = Select.RootProps & {
  items: Option[];
  label?: string;
  groupLabel?: string;
  id: string;
  placeholder: string;
};

export const InputSelect = ({
  label,
  groupLabel,
  id,
  placeholder,
  items,
  ...selectProps
}: Props) => {
  return (
    <Select.Root
      {...selectProps}
      items={items}
      variant="outline"
      positioning={{ sameWidth: true }}
    >
      {label && <Select.Label>{label}</Select.Label>}

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
          <Select.Indicator>
            <ChevronsUpDownIcon />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup id={id}>
            {groupLabel && (
              <Select.ItemGroupLabel htmlFor={id}>
                {groupLabel}
              </Select.ItemGroupLabel>
            )}

            {items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
