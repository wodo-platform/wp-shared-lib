import { BlockchainTransactionParams } from "./blockchain.transaction.params";
import { BlockchainWallet } from "./wallet/blockchain.wallet";
import { WalletType } from "./wallet/blockchain.wallet.type";

/**
 * Primary blockchain api definition. The interface determines fundamental behaviour of a concantrate blockchain implementation
 */
export interface BlockchainApi {
     
    sendBlockchainTransaction(params : BlockchainTransactionParams): Promise<string>;
    
}