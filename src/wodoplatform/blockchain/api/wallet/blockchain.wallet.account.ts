import {BigNumber} from 'bignumber.js';
import { WalletType } from './blockchain.wallet.type';

/**
 *  Baseline blockchain wallet account interface
 *  TODO: not good to have a dependency to a 3rd part library BigNumber in an API definition..nothing to do at this point. Investigate later
 */
export interface BlockchainWalletAccount {
    id:             string;
    name:           string;
    description:    string;
    address:        string;
    secret:         string;
    publicKey:      string;
    index:          number;
    walletType:     WalletType;
    balance:        BigNumber;
    pending:        BigNumber;
    enabled:        boolean;
}

