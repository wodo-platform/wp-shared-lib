import { WALLET_TYPE_BIP32 } from "../blockchain/api/blockchain.wallet.type";
import { BANANO, WODO_COIN } from "../blockchain/crypto.assets";

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
};