import React from 'react'
import { CriticalError } from '../../components/errors/critical.error';
import { SCard } from '../../styles/other/card';
import { SMain, SContainer, SSideContainer, WrapperContent, SGetMyBalanceBtn } from '../../styles/home/home';
import { STitle } from '../../styles/other/title';
import { IHomePageProps } from '../../interfaces/homePage.interface';
import { SButton } from '../../styles/other/button';
import { SInput } from '../../styles/other/input';
import { SForm } from '../../styles/other/form';
import { SMsgErrorInput } from '../../styles/error/MsgErrorInput';
import { WrapperInputField } from '../../styles/other/wrapperInputField';
import { STable, STR, STD, STH } from '../../styles/other/table';
import { RecentTsx } from '../../components/recentTsx';
import { SErrorModal } from '../../styles/error/errorModal';

export const HomePage = ({ 
  error,
  tokensContract,
  errorData,
  isLoading,
  getMyBalance,
  myBalance,
  formGetContract,
  formTransferTokens,
  recentTsxs
}: IHomePageProps): JSX.Element => {
  // if network is uncorrect or metamask hasn't installed
  if(error) return <CriticalError error={error} />;

  // form for get contract total supply token of this contract
  const formGetContractBalance = (
    <>
      <STitle>Read from smart contract</STitle>
      <SForm onSubmit={formGetContract.handleSubmit}>
        <WrapperInputField>
          <SInput 
            name="address"
            type="text"
            onChange={formGetContract.handleChange}
            value={formGetContract.values.address}
            placeholder="ERC20 contract address"
          />
          {
          formGetContract.errors.address && 
          formGetContract.touched.address && 
          <SMsgErrorInput>{formGetContract.errors.address}</SMsgErrorInput>
          }
        </WrapperInputField>

        <SButton type="submit" disabled={isLoading}>
          {isLoading ? "loading..." :"Get Token info"}
        </SButton>
      </SForm>
    </>
  );

  // list total supply tokens
  const { name, symbol, value: totalSupply, address: addressContract } = tokensContract;
  const listTokensCotract = (
    <STable>
      <STR>
        <STH>Name</STH>
        <STH>Symbol</STH>
        <STH>Total Supply</STH>
      </STR>
      <STR>
        <STD>{name}</STD>
        <STD>{symbol}</STD>
        <STD>{totalSupply}</STD>
      </STR>
    </STable>
  );

  // list of my balance in this tokens
  const { address: myAddress, value:myBalanceValue } = myBalance;
  const listMyBalance = (
    <STable>
      <STR>
        <STH>Address</STH>
        <STH>Balance</STH>
      </STR>
      <STR>
        <STD>{myAddress}</STD>
        <STD>{myBalanceValue}</STD>
      </STR>
    </STable>
  );

  // Btn for getting my balance
  const getMyBalanceLayout = (
    <>
      <SGetMyBalanceBtn 
        onClick={() => getMyBalance()} 
        disabled={isLoading || addressContract === "-"} 
        title={addressContract === "-" ? "you need 'get token info'" : ""}
      >
        {isLoading ? "loading..." : "Get My Balance" }
      </SGetMyBalanceBtn>
      {listMyBalance}
    </>
  );

  const formTransferToken = (
    <>
      <STitle>Send tokens</STitle>
      <SForm onSubmit={formTransferTokens.handleSubmit}>
        <WrapperInputField>
          <SInput 
            name="to"
            type="text"
            onChange={formTransferTokens.handleChange}
            value={formTransferTokens.values.to}
            placeholder="To"
          />
          {formTransferTokens.errors.to && 
          formTransferTokens.touched.to && 
          <SMsgErrorInput>{formTransferTokens.errors.to}</SMsgErrorInput>}
        </WrapperInputField>

        <WrapperInputField>
          <SInput 
            name="amount"
            type="number"
            onChange={formTransferTokens.handleChange}
            value={formTransferTokens.values.amount}
            placeholder="Amount"
          />
          {formTransferTokens.errors.amount && 
          formTransferTokens.touched.amount && 
          <SMsgErrorInput>{formTransferTokens.errors.amount}</SMsgErrorInput>}
        </WrapperInputField>

        <SButton 
          type="submit"
          disabled={isLoading || addressContract === "-"} 
          title={addressContract === "-" ? "you need 'get token info'" : ""}
        >
          {isLoading ? "loading..." :"Send"}
        </SButton>
      </SForm>
    </>
  );
  
  const rightSide = (
    <SCard>
      <STitle>Recent Transactions</STitle>
      {recentTsxs.map((tsx, idx) => <RecentTsx key={idx} tsx={tsx} />)}
    </SCard>
  );
  
  return (
    <SMain>
      <SContainer>

        <WrapperContent>
          <SSideContainer>
            <SCard>
              {formGetContractBalance}
              {listTokensCotract}
              {getMyBalanceLayout}
            </SCard>

            <SCard>
              {formTransferToken}
            </SCard>
          </SSideContainer>

          <SSideContainer>
            {rightSide}
          </SSideContainer>
        </WrapperContent>

      </SContainer>

      {errorData && <SErrorModal>{errorData}</SErrorModal>}
    </SMain>
  )
}
