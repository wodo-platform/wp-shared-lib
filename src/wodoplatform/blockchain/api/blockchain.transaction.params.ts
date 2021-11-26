export interface BlockchainTransactionParams {
    senderId: string;
    receiverId: string;
    assetId: string;
    fromAccountAddress: string,
    toAccountAddress: string,
    amount: string
    attributes: Map<string,any>;
}