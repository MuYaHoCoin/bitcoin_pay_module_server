import {BIP32Interface, fromBase58} from 'bip32'
import * as bitcoin from 'bitcoinjs-lib'

const networkPrefix = {
    bitcoin: '00',
    ptsh: '05',
    bitcoinTestNet: '6f',
};
  
export function getAddress(xpub: string, index: number, network:string = 'bitcoinTestNet'){
    const node: BIP32Interface = fromBase58(xpub);
    const {publicKey} = node.derive(index);
    const {address} = bitcoin.payments.p2pkh({pubkey: publicKey, network: bitcoin.networks.testnet});

    return address ? address : "";
}