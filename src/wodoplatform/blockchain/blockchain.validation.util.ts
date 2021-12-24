import { WPError } from "../error/wp.error";
import { WP_ERROR_BC_TYPE } from "../error/wp.error.codes";
import { WP_ERROR_BC_WALLET_TYPE } from "../error/wp.error.codes";


import { WALLET_TYPE_BIP32, WalletType } from "./api/wallet/blockchain.wallet.type";
import { BANANO, WODO_COIN, CryptoAsset } from "./api/crypto.assets";

export class BlockchainValidationUtil {

    /**
     * 
     * @param walletType 
     * @returns WalletType
     */
    public static validateWalletType(walletType: string): WalletType {
        if (walletType === WALLET_TYPE_BIP32.name || walletType === WALLET_TYPE_BIP32.symbol) {
            return WALLET_TYPE_BIP32;
        }
        throw new WPError(WP_ERROR_BC_WALLET_TYPE,WP_ERROR_BC_WALLET_TYPE.description);
    }

    /**
     * 
     * @param cryptoAssetId 
     * @returns CryptoAsset
     */
    public static validateCrptoAsset(cryptoAssetId?: number): CryptoAsset {

        if (!cryptoAssetId) {
            return BANANO;
        }
        else {
            switch (cryptoAssetId) {
                case BANANO.id:
                    return BANANO;
                case WODO_COIN.id:
                    return WODO_COIN
                default:
                    throw new WPError(WP_ERROR_BC_TYPE,WP_ERROR_BC_TYPE.description);
            }

        }
    }
}