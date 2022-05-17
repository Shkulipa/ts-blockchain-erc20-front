import React, { useState } from 'react'
import { useFormik, FormikHelpers } from 'formik';
import useCheckWeb3 from '../../hooks/useWeb3.hook';
import { EChainIds } from '../../interfaces/useCheckWeb3.interface';
import { HomePage } from './home.page';
import { getContractValidSchema } from '../../validations/getContractValid.schema';
import { IValues } from '../../interfaces/homePage.interface';
import { ITokenContract } from '../../interfaces/tokenContract';
import TokenService from '../../services/token.service';
import { Msgs } from '../../utils/msgs';

const initialValues = {
  address: '',
}

const HomeContainer = (): JSX.Element => {
  // check network & existing metamsk
  const { error } = useCheckWeb3({ network: EChainIds.ROPSTEN });

  const [errorData, setErrorData] = useState<string>("");
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

  // form for get balance of contract
  const { handleChange, values, handleSubmit, errors, touched } = useFormik({
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
    } finally {
      setIsLoading(false);
    }
  };

  return <HomePage 
    error={error}
    handleChange={handleChange}
    values={values}
    handleSubmit={handleSubmit}
    errors={errors}
    touched={touched}
    tokensContract={tokensContract}
    errorData={errorData}
    isLoading={isLoading}
    getMyBalance={getMyBalance}
    myBalance={myBalance}
  />
}

export default HomeContainer;