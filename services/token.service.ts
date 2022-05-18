import { ethers } from "ethers";
import erc20abi from "../contracts/erc20ABI.json";
import { IValuesTransfer } from "../interfaces/homePage.interface";
import { ITokenContract } from "../interfaces/tokenContract";
import HelperService from "../services/helper.service";

class TokenService {
  private provider = new ethers.providers.Web3Provider(window.ethereum);
  private erc20: ethers.Contract;
  private erc20Address: string;

  constructor(address: string) {
    this.erc20 = new ethers.Contract(address, erc20abi, this.provider);
    this.erc20Address = address;
  }

  get initCotract(): ethers.Contract {
    return this.erc20;
  }

  async getTokenInfo(): Promise<Omit<ITokenContract, "address">> {
    try {
      const tokenName = await this.erc20.name();
      const tokenSymbol = await this.erc20.symbol();

      const tokenSupply = await this.erc20.totalSupply();
      const tokenDecimals = await this.erc20.decimals();
      const parseValue = String(tokenSupply.toString() / Math.pow(10, tokenDecimals));
  
      return {
        name: tokenName,
        symbol: tokenSymbol,
        value: parseValue,
      }
    } catch(err) {
      console.error(err);
      throw(err);
    }
  }

  async getMyBalance(): Promise<Omit<ITokenContract, "symbol" | "name">> {
    try {
      await this.provider.send("eth_requestAccounts", []);
      const signer = this.provider.getSigner();
      const signerAddress = await signer.getAddress();
      
      const balance = await this.erc20.balanceOf(signerAddress);
      const tokenDecimals = await this.erc20.decimals();
      const parseValue = String(balance.toString() / Math.pow(10, tokenDecimals));

      const formatedUserAddress = HelperService.formatUserAddress(signerAddress);

      return {
        address: formatedUserAddress,
        value: parseValue
      }
    } catch(err) {
      console.error(err);
      throw(err);
    }
  }

  async transferToken({ to, amount }: IValuesTransfer): Promise<void> {
    try {
      await this.provider.send("eth_requestAccounts", []);
      const signer = this.provider.getSigner();
      const erc20 = new ethers.Contract(this.erc20Address, erc20abi, signer);
      const tokenDecimals = await this.erc20.decimals();
      const parseValue = BigInt(amount * Math.pow(10, tokenDecimals));
      
      await erc20.transfer(to, parseValue);
    } catch(err) {
      console.error(err);
      throw(err);
    }
  }

}

export default TokenService;