import { ethers } from 'ethers';
import * as Yup from 'yup';

export const sendSchema = Yup.object().shape({
  to: Yup.string()
    .required('Required')
    .test("validate-adddress", "Please, provide a correct address", function(value) {
      return ethers.utils.isAddress(value!);
    }),
  amount: Yup.string()
  .required('Required')
  .test("more-zero", "Value should be more than 0", function(value) {
    return +value! > 0;
  }),
});