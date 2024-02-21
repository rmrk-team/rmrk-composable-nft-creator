'use client';

import { ToggleGroup } from '@ark-ui/react/toggle-group';
import { createStyleContext } from 'lib/panda/create-style-context';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { toggleGroup } from 'styled-system/recipes';

const { withProvider, withContext } = createStyleContext(toggleGroup);

export const Root = withProvider(styled(ToggleGroup.Root), 'root');
export const Item = withContext(styled(ToggleGroup.Item), 'item');

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
