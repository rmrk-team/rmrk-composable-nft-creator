import { decodeEventLog } from 'viem';
import { rmrkCatalogFactoryAbi } from 'lib/wagmi/generated';
import type { TransactionReceipt } from 'viem/types/transaction';

export const getCatalogAddressFromDeployedEventLogs = (
  receipt: TransactionReceipt | undefined,
) => {
  if (!receipt?.logs || receipt.logs.length === 0) return null;

  for (const log of receipt.logs) {
    try {
      const event = decodeEventLog({
        data: log.data,
        topics: log.topics,
        eventName: 'CatalogDeployed',
        abi: rmrkCatalogFactoryAbi,
        strict: false,
      });

      return event.args.catalog;
    } catch (e) {}
  }

  return null;
};
