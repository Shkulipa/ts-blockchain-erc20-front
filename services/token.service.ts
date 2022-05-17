import { ethers } from "ethers";
import erc20abi from "../contracts/erc20ABI.json";
import { ITokenContract } from "../interfaces/tokenContract";
import HelperService from "../services/helper.service";

class TokenService {
  private provider = new ethers.providers.Web3Provider(window.ethereum);
  private erc20: ethers.Contract;

  constructor(address: string) {
    this.erc20 = new ethers.Contract(address, erc20abi, this.provider);
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

}

export default TokenService;