import { type SupportedChainId, allSupportedChains } from 'lib/wagmi-config';

export const getIsSupportedChainId = <T extends typeof allSupportedChains>(
  chainId: unknown,
): chainId is SupportedChainId => {
  if (typeof chainId !== 'number') return false;
  return allSupportedChains
    .map((chain) => chain.id)
    .includes(chainId as SupportedChainId);
};

export const assertIsSupportedChainId = (
  chainId: unknown,
): asserts chainId is SupportedChainId => {
  const isValidChainId = getIsSupportedChainId(chainId);
  if (!isValidChainId) {
    throw new Error(`Chain id ${chainId} is not supported`);
  }
};
