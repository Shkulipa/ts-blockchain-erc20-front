import { FormikHandlers, FormikState } from 'formik/dist/types';
import { ITokenContract } from './tokenContract';

export interface IValues {
  address: string;
}

export interface IHomePageProps 
  extends Pick<FormikHandlers, "handleSubmit" | "handleChange">,
  Pick<FormikState<IValues>, "errors" | "touched"> {
  values: IValues;
  error: string;
  errorData: string;
  isLoading: boolean;
  tokensContract: ITokenContract;
  getMyBalance: () => Promise<void>
  myBalance: Omit<ITokenContract, "name" | "symbol">
}
