import { BlockchainWallet } from "./blockchain.wallet";
import { WalletType } from "./blockchain.wallet.type";

/**
 * Primary blockchain wallet api definition. The interface determines fundamental behaviour of a concantrate blockchain walletimplementation
 */
export interface BlockchainWalletApi {
     
    generateWallet(userId: number,name: string, description: string, walletType:WalletType): Promise<BlockchainWallet>;
    generateWalletWithSeed(userId: number,seed: string,name: string, description: string, walletType:WalletType): Promise<BlockchainWallet>
}