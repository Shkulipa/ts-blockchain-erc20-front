import { FormikProps } from 'formik';
import { ITokenContract } from './tokenContract';
import { ITsx } from './tsx.interface';

export interface IValues {
  address: string;
}

export interface IValuesTransfer {
  to: string;
  amount: number;
}

export interface IHomePageProps  {
  formGetContract: FormikProps<IValues>;
  formTransferTokens: FormikProps<IValuesTransfer>;
  error: string;
  errorData: string;
  isLoading: boolean;
  tokensContract: ITokenContract;
  getMyBalance: () => Promise<void>;
  myBalance: Omit<ITokenContract, "name" | "symbol">;
  recentTsxs: ITsx[];
}
