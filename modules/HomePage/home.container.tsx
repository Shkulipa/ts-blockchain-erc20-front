import { useEffect, useState } from 'react'
import { useFormik, FormikHelpers } from 'formik';
import useCheckWeb3 from '../../hooks/useWeb3.hook';
import { EChainIds } from '../../interfaces/useCheckWeb3.interface';
import { HomePage } from './home.page';
import { getContractValidSchema } from '../../validations/getContractValid.schema';
import { IValues, IValuesTransfer } from '../../interfaces/homePage.interface';
import { ITokenContract } from '../../interfaces/tokenContract';
import TokenService from '../../services/token.service';
import { Msgs } from '../../utils/msgs';
import { sendSchema } from '../../validations/send.schema';
import { ITsx } from '../../interfaces/tsx.interface';

const initialValues = {
  address: '',
}

const HomeContainer = (): JSX.Element => {
  // check network & existing metamsk
  const { error } = useCheckWeb3({ network: EChainIds.ROPSTEN });

  const [errorData, setErrorData] = useState<string>("");
  const [recentTsxs, setRecentTsxs] = useState<ITsx[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [myBalance, setMyBalance] = useState<Omit<ITokenContract, "name" | "symbol">>({
    address: "-",
    value: "-"
  })
  const [tokensContract, setTokensContract] = useState<ITokenContract>({
    address: "-",
    name: "-",
    symbol: "-",
    value: "-"
  });

  const cleanError = () => setTimeout(() => setErrorData(""), 5000);

  // form for get balance of contract
  const formGetContract = useFormik({
    initialValues,
    validationSchema: getContractValidSchema,
    onSubmit: getTokenInfo,
  });

  // func for submiting balance of contract
  async function getTokenInfo(
    { address }: IValues,
    { setSubmitting }: FormikHelpers<IValues>
  ) {
    setIsLoading(true);
    const contract = new TokenService(address);

    try {
      const { name, symbol, value } = await contract.getTokenInfo();
      setTokensContract({
        address,
        name,
        symbol,
        value
      });
      setMyBalance({
        address: "-",
        value: "-"
      });
    } catch(_) {
      setErrorData(Msgs.error.common);
      cleanError();
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  // form for get balance of contract
  const formTransferTokens = useFormik({
    initialValues: {
      to: "",
      amount: 0
    },
    validationSchema: sendSchema,
    onSubmit: sendTokens,
  });
  // 0x48064A4c359A829D4724F60BD8643D5a6532feE8
  // func for submiting balance of contract
  async function sendTokens(
    { to, amount }: IValuesTransfer,
    { setSubmitting }: FormikHelpers<IValuesTransfer>
  ) {
    setIsLoading(true);
    const contract = new TokenService(tokensContract.address);

    try {
      await contract.transferToken({ to, amount });
    } catch(_) {
      setErrorData(Msgs.error.common);
      cleanError();
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  // func for submiting balance of contract
  async function getMyBalance() {
    setIsLoading(true);
    const contract = new TokenService(tokensContract.address);

    try {
      const { address, value } = await contract.getMyBalance();
      setMyBalance({
        address,
        value
      })
    } catch(_) {
      setErrorData(Msgs.error.common);
      cleanError();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(tokensContract.address !== "-") {
      const contract = new TokenService(tokensContract.address);
      const erc20 = contract.initCotract;
      
      erc20.on("Transfer", (from, to, value) => {
        const newTsx = {
          from,
          to,
          value,
          symbol: tokensContract.symbol
        }
        setRecentTsxs(state => [newTsx, ...state]);
      });
    }
  }, [tokensContract]);

  return <HomePage 
    error={error}
    formGetContract={formGetContract}
    tokensContract={tokensContract}
    errorData={errorData}
    isLoading={isLoading}
    getMyBalance={getMyBalance}
    myBalance={myBalance} 
    formTransferTokens={formTransferTokens}
    recentTsxs={recentTsxs} />;
}

export default HomeContainer;