import { useCallback, useEffect, useState } from 'react';
import { IUseCheckNetworkProps } from '../interfaces/useCheckWeb3.interface';
import { Msgs } from '../utils/msgs';

/**
 * info abount chainid of network: 
 * https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/
 */
const chainIds = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
}

const useCheckWeb3 = ({ network }: IUseCheckNetworkProps) => {
  const [error, setError] = useState<string>("");

  const exsistNetwork = useCallback(() => {
    const { ethereum } = window;
    const networkChainId = chainIds[network];

    networkChainId 
      && String(ethereum!.networkVersion) !==  String(networkChainId) 
        && setError(Msgs.network.wrongNetwork(network))
  }, [network])
  
  useEffect(() => {
    const { ethereum } = window;
    if(!ethereum) return setError(Msgs.metamask.installMetamask);

    exsistNetwork();
    ethereum!.on('chainChanged', () => window.location.reload());
  }, [exsistNetwork]);

  return { error };
}

export default useCheckWeb3;