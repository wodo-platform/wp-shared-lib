import { WalletType } from "./blockchain.wallet.type";

/**
 *  Baseline blockchain wallet account create params
 */
export interface BlockchainWalletAccountCreate {
    userId:         number,
    name:           string;
    description:    string;
    enabled:        boolean;
}