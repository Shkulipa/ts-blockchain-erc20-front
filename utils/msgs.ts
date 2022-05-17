import { TChainId } from "../interfaces/useCheckWeb3.interface";

export const Msgs = {
  metamask: {
    installMetamask: "Please, install Metamask & reload the page"
  },
  network: {
    wrongNetwork: (nameNetwork: TChainId) => `Please, connect to ${nameNetwork}`,
    invalidNetwork: (nameNetwork: TChainId) => `Sorry, but ${nameNetwork} not support, check a <chainId.interface.ts> file`,
  },
  error: {
    common: "Sorry. smth went wrong :("
  }
};