import { BlockchainTransaction } from "./blockchain.transaction";

export interface BlockchainTransactionParams extends BlockchainTransaction {
    senderId: string;
    receiverId: string;
    assetId: string;
    fromAccountAddress: string,
    toAccountAddress: string,
    amount: string
    attributes: Map<string,any>;
}