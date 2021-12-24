import { BlockchainWallet } from "./blockchain.wallet";
import { BlockchainWalletAccount } from "./blockchain.wallet.account";
import { BlockchainWalletAccountCreate } from "./blockchain.wallet.account.create";
import { BlockchainWalletCreate } from "./blockchain.wallet.create";
import { BlockchainWalletCreateWSeed } from "./blockchain.wallet.create.w.seed";
import { WalletType } from "./blockchain.wallet.type";

/**
 * Primary blockchain wallet api definition. The interface determines fundamental behaviour of a concantrate blockchain walletimplementation
 */
export interface BlockchainWalletApi {
     
   /**
    * 
    * @param params 
    */
     createWalletWallet(params: BlockchainWalletCreate): Promise<BlockchainWallet>;

    /**
     * 
     * @param userId 
     * @param seed 
     * @param name 
     * @param description 
     * @param walletType 
     * @returns BlockchainWallet
     */
     createWalletWalletWithSeed(params: BlockchainWalletCreateWSeed): Promise<BlockchainWallet>


    /**
     * 
     * @param params 
     */
     createWalletAccount(params: BlockchainWalletAccountCreate):Promise<BlockchainWalletAccount>

    
}