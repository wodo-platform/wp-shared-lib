import { WALLET_TYPE_BIP32 } from "../blockchain/api/wallet/blockchain.wallet.type";
import { BANANO, WODO_COIN } from "../blockchain/api/crypto.assets";

/**
 * Wodo Platform error code definition. Each error case is presented  with a unique erorr code and categorized into different segments.
 * Error codes help developers determine the error case with specific,unique codes in busines and functional flows. Bugs and error cases
 * can be analyzed easily with the help of the specific error codes.
 * 
 * Morover, all API implementations handles error based on the wodo platform error catalog in order to compose deterministic, realibla and user-friendly
 * exceptions. End users, UI designers and 3rd party API consumers rely on the error catalog to understand exeptions and build reactive, 
 * resilient business logic.
 * 
 * Note: do not use WG_1 inernal server error for every error case,
 */
export interface WPErrorCode {
    code:string
    description:string
}

/**
 * Error code catalog of Wodo platform with numeric error code segmentation
 */
export const WPERORCODE_PREFIX = "WP_";

export const WP_ERROR_INTERNAL_SERVER: WPErrorCode = {
    code: WPERORCODE_PREFIX+"1",
    description: "Internal server error. Something has gone wrong."
},
WP_ERROR_BC_GENERAL: WPErrorCode = {
    code: WPERORCODE_PREFIX+"100",
    description: "An error occured while executing blockchain operation."
},
WP_ERROR_BC_TYPE: WPErrorCode = {
    code: WPERORCODE_PREFIX+"101",
    description: "Unspoorted blockchain type. Can not instantiate blockchain implementation instance. Expected values are [" + WODO_COIN.id + " , " + BANANO.id + "]"
},
WP_ERROR_BC_WALLET_TYPE: WPErrorCode = {
    code: WPERORCODE_PREFIX+"102",
    description: "wallet type is not supported. Expected values are [" + WALLET_TYPE_BIP32.name + "] or [" + WALLET_TYPE_BIP32.symbol + "]"
},
WP_ERROR_BC_WALLET_CREATE_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"103",
    description: "wallaet create payload is not valid."
},
WP_ERROR_BC_WALLET_CREATE_W_SEED_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"104",
    description: "wallaet create with seed payload is not valid."
},
WP_ERROR_BC_WALLET_UPDATE_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"105",
    description: "wallaet update payload is not valid."
},
WP_ERROR_BC_WALLET_UPDATE_W_SEED_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"106",
    description: "wallaet update with seed payload is not valid."
},
WP_ERROR_BC_WALLET_ACCOUNT_CREATE_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"107",
    description: "wallaet account create payload is not valid."
},
WP_ERROR_BC_WALLET_ACCOUNT_CREATE_W_SECRETS_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"108",
    description: "wallaet account create with secrets payload is not valid."
},
WP_ERROR_BC_WALLET_ACCOUNT_UPDATE_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"109",
    description: "wallaet account update payload is not valid."
},
WP_ERROR_BC_WALLET_ACCOUNT_UPDATE_W_SECRETS_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"110",
    description: "wallaet account update with secrets payload is not valid."
},
WP_ERROR_BC_PAYMENT_PAYLOAD_VALIDATION: WPErrorCode = {
    code: WPERORCODE_PREFIX+"111",
    description: "blockchain payment payload is not valid."
},
WP_ERROR_BC_WALLET_ACCOUNT_NOT_FOUND_ON_CHAIN: WPErrorCode = {
    code: WPERORCODE_PREFIX+"112",
    description: "wallaet account not found on the blockchain."
};