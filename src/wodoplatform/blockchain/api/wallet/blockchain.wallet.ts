import { BlockchainWalletAccount } from "./blockchain.wallet.account";
import { WalletType } from "./blockchain.wallet.type";
import {BigNumber} from 'bignumber.js';


/**
 * Baseline e blockchain wallet interface. 
 * TODO: not good to have a dependency to a 3rd part library BigNumber in an API definition..nothing to do at this point. Investigate later
 */
export interface BlockchainWallet {
    id:             string;
    name:           string;
    description:    string;
    type:           WalletType;
    balance:        BigNumber;
    pending:        BigNumber;
    enabled:        boolean;
    seed:           string;
    mnemonic:       string | null;
    userId:         number;
    accounts:       BlockchainWalletAccount[] | null;
}
