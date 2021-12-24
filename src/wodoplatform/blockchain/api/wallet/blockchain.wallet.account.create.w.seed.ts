import { WalletType } from "./blockchain.wallet.type";

/**
 *  Baseline blockchain wallet account create params
 */
export interface BlockchainWalletAccountCreateWSeed {
    userId:         number,
    name:           string;
    description:    string;
    seed:           string,
    index:          number;
    walletType:     WalletType;
    enabled:        boolean;
}