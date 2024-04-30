'use client';

import { Collapsible } from '@ark-ui/react/collapsible';
import { createStyleContext } from 'lib/panda/create-style-context';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { collapsible } from 'styled-system/recipes';

const { withProvider, withContext } = createStyleContext(collapsible);

export const Root = withProvider(styled(Collapsible.Root), 'root');
export const Content = withContext(styled(Collapsible.Content), 'content');
export const Trigger = withContext(styled(Collapsible.Trigger), 'trigger');

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
