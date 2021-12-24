import { WalletType } from "./blockchain.wallet.type";

/**
 * Baseline e blockchain wallet interface. 
 * TODO: not good to have a dependency to a 3rd part library BigNumber in an API definition..nothing to do at this point. Investigate later
 */
export interface BlockchainWalletCreate {
    name:           string;
    description:    string;
    type:           WalletType;
    enabled:        boolean;
    userId:         number;
}
