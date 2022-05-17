import { ITokenContract } from "./tokenContract";

export abstract class ITokenService {
  abstract getTokenInfo(): Promise<ITokenContract>;
}