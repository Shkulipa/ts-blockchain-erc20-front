export enum EChainIds {
  "MAINNET" = "mainnet",
  "ROPSTEN" = "ropsten",
  "RINKEBY" = "rinkeby",
  "GOERLI" = "goerli",
  "KOVAN" = "kovan"
}

export type TChainId = 
  EChainIds.MAINNET 
  | EChainIds.ROPSTEN
  | EChainIds.RINKEBY
  | EChainIds.GOERLI
  | EChainIds.KOVAN;

export interface IUseCheckNetworkProps {
  network: TChainId;
}