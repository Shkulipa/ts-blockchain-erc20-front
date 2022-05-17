import { ethers } from 'ethers';
import * as Yup from 'yup';

export const getContractValidSchema = Yup.object().shape({
  address: Yup.string()
    .required('Required')
    .test("validate-adddress", "Please, provide a correct address", function(value) {
      return ethers.utils.isAddress(value!);
    })
});