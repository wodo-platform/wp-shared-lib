export interface BlockchainTransactionResponseParams {
    senderId: string;
    receiverId: string;
    correlationId: string;
    assetId: string;
    fromAccountAddress: string,
    toAccountAddress: string,
    amount: string
    attributes: Map<string,any>;
}