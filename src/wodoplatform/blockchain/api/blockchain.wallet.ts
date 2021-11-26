import { WalletType } from "./blockchain.wallet.type";

export interface BlockchainWallet {
    name:           string;
    type:           WalletType;
    description:    string;
    enabled:        boolean;
}