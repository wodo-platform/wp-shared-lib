
import { BlockchainWalletAccount } from "./blockchain.wallet.account";

/**
 * Primary blockchain account api definition. The interface determines fundamental behaviour of a concantrate blockchain walletimplementation
 */
export interface BlockchainAccountApi {

    /**
     * 
     * @param userId 
     * @param walletId 
     * @param name 
     * @param description 
     * @param enabled 
     * @returns BlockchainWalletAccount
     */
     createWalletAccount(userId:number, walletId:number, name: string, description: string, enabled: boolean):Promise<BlockchainWalletAccount>

     /**
      * 
      * @param userId 
      * @param walletId 
      * @param name 
      * @param description 
      * @param address 
      * @param secret 
      * @param publicKey 
      * @param enabled 
      * @returns BlockchainWalletAccount
      */
     createWalletAccountWithSecrets(userId:number, walletId:number, name: string, description: string, address: string, secret: string, publicKey: string, enabled: boolean):Promise<BlockchainWalletAccount>
}