import type { Address } from 'abitype';
import type { AddCatalogPartFormFields } from 'components/catalog/parts-management/add-new-part-form';
import { AddNewPartModal } from 'components/catalog/parts-management/add-new-part-modal';
import { pinMetadataWithFiles } from 'lib/ipfs/pin-metadata';
import { sleep } from 'lib/utils/sleep';
import { type SupportedChainId, wagmiConfig } from 'lib/wagmi-config';
import { useWriteRmrkCatalogImplAddPart } from 'lib/wagmi/generated';
import React, { useState } from 'react';
import invariant from 'tiny-invariant';
import { waitForTransactionReceipt } from 'wagmi/actions';

type Props = {
  catalogAddress: Address;
  chainId: SupportedChainId;
  currentTotalPartIds: number;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  refetchAllParts: () => Promise<any>;
};

export const AddNewPart = ({
  catalogAddress,
  chainId,
  currentTotalPartIds,
  refetchAllParts,
}: Props) => {
  //TODO: Temporarily using useWriteRmrkCatalogImplAddPart, but need to change to use addPartList to add multiple parts at once (allow up to 10 per batch before user needs to sign tx)
  const {
    data: hash,
    writeContractAsync,
    isPending,
    isError,
    error,
  } = useWriteRmrkCatalogImplAddPart();

  console.log('hash', { hash, error });

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onSubmit = async (
    addCatalogPartFormFields: AddCatalogPartFormFields,
  ) => {
    const { type, z, equippable, metadataFields, metadataUri } =
      addCatalogPartFormFields;
    try {
      if (typeof z !== 'number') {
        throw new Error('z-index is required');
      }
      invariant(type);

      let metadataURI = metadataUri;

      if (metadataFields?.name || metadataFields?.mediaFiles) {
        invariant(metadataFields?.name);

        if (type === 2) {
          if (!metadataFields.mediaFiles?.[0] && !metadataFields.mediaUri) {
            throw new Error('Media file is required for fixed parts');
          }
        }

        metadataURI = await pinMetadataWithFiles({
          mediaFile: metadataFields.mediaFiles?.[0],
          metadataFields: {
            name: metadataFields.name,
            description: metadataFields.description,
            mediaUri: metadataFields.mediaUri,
          },
        });
      }

      invariant(metadataURI);

      const nextPartId = currentTotalPartIds + 1;
      // setHash(undefined);
      const hash = await writeContractAsync({
        address: catalogAddress,
        args: [
          {
            partId: BigInt(nextPartId),
            part: {
              z,
              metadataURI,
              itemType: type,
              equippable: equippable || [],
            },
          },
        ],
        chainId,
      });
      const receipt = await waitForTransactionReceipt(wagmiConfig, {
        chainId,
        hash,
      });

      await sleep(500);
      await refetchAllParts();
      onClose();
      //TODO: show success message?
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AddNewPartModal
      chainId={chainId}
      catalogAddress={catalogAddress}
      onSubmit={onSubmit}
      onClose={onClose}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    />
  );
};
