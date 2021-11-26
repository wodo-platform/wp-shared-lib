import { BlockchainTransactionParams } from "./blockchain.transaction.params";
import { BlockchainWallet } from "./blockchain.wallet";
import { WalletType } from "./blockchain.wallet.type";

/**
 * Primary blockchain api definition. The interface determines fundamental behaviour of a concantrate blockchain implementation
 */
export interface BlockchainApi {
     
    sendBlockchainTransaction(params : BlockchainTransactionParams): Promise<string>;
}