/**
 *  A crypto wallet is used to interact with a blockchain network.
 * There are two different types of digital keys that are known as public keys and private keys. 
 * To exchange cryptocurrencies, make a purchase, send or receive cryptocurrencies,
 * convert them back into fiat currencies and money, both these keys are used
 */
export class WalletType {

    type : number;
    name: string;
    symbol: string;
    description: string;

    constructor(type : number, name: string, symbol: string,description: string) {
        this.type = type;
        this.name = name;
        this.symbol = symbol;
        this.description = description;
    }
}

export var WALLET_TYPE_BIP32:WalletType = new WalletType(1,"BIP32_Hierarchical_Deterministic", "BIP32" ,"BIP32 Hierarchical Deterministic (HD). HD wallets can use a single master seed to generate many new key pairs");