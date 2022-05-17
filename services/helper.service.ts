class HelperService {
  formatUserAddress(address: string): string {
    const subValue = 4;
    const addressStart = address.substring(0, subValue);
    const addressEnd = address.substring(address.length - subValue, address.length);
    const concatStrs = addressStart + "..." + addressEnd;

    return concatStrs;
  }
}

export default new HelperService();