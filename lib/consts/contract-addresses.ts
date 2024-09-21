import {
  astar,
  astarZkEVM,
  base,
  baseSepolia,
  bob,
  moonbeam,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const RMRKCatalogFactoryContractAddress = {
  [base.id]: '0xe42Bd7eE4c00624F975a00104613412f482c91b1',
  [baseSepolia.id]: '0xD23820304b10E8AC745E90B33924A886b92DF13f',
  [sepolia.id]: '0x14ec017a839687dc364A22ABd36fF300338A44ee',
  [moonbeam.id]: '0xD61C2594534b4B48BbF3eAdCF78884c06b41e643',
  [polygon.id]: '0xaa61013f9d11CaB44e373c07Db770d7f1231334A',
  [astar.id]: '0x8E1B3c288DE12c10625308153A317c41E9353882',
  [astarZkEVM.id]: '0xBC8B913a317cf44325134A7C21E6E75347F126a0',
  [bob.id]: '0x9C970747a0dAdC0905DA137E43672314211d8039',
} as const;
