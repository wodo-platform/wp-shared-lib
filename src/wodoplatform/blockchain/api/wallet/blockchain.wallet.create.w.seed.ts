import { WalletType } from "./blockchain.wallet.type";
import { BlockchainWalletAccountCreate } from "./blockchain.wallet.account.create";


/**
 * Baseline e blockchain wallet interface. 
 * TODO: not good to have a dependency to a 3rd part library BigNumber in an API definition..nothing to do at this point. Investigate later
 */
export interface BlockchainWalletCreateWSeed {
    name:           string;
    description:    string;
    type:           WalletType;
    seed:           string;
    mnemonic:       string | null; // TODO: is this genereated?
    enabled:        boolean;
    userId:         number;
    accounts:       BlockchainWalletAccountCreate[] | null;
}
