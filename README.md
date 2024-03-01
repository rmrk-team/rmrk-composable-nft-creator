# RMRK Composable NFT creator

A simple no-code UI for creating your own composable NFTs using [RMRK EVM NFTs](https://evm.rmrk.app) standard.

---


## Usage
TODO: add vercel link here when available


## Development

### Install modules and start dev server

Install dependencies

`pnpm install` 

Copy sample env file by running `cp env.example .env.local` and fill in the relevant environment variables

Run nextjs dev server

`pnpm dev`

### Styling
This project uses [Panda.css](https://panda-css.com) for core styling and Panda's component library [Ark.ui](https://ark-ui.com) as well as [Park-ui](https://park-ui.com/) for a ready to use components. When running the dev server, styles will automatically re-generate using postcss when appropriate files are changed, however if you need to manually generate styles, run `pnpm panda`.

[Lucide](https://lucide.dev/) is used for icons.

### Interacting with blockchain
[wagmi](https://wagmi.sh/) for react hooks etc and [viem](https://viem.sh/) for framework agnostic utils.

### Other notes
This project uses [Biome.js](https://biomejs.dev) for code formatting (instead of prettier) and linting. To run both formatting and linting at any time, run `pnpm format && pnpm lint:fix`. Please visit Biome.js website to see how to install and use biome IDE plugin.


## Contributing

Try to include a single feature per pull request whenever possible.

