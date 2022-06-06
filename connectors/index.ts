import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { setWeb3LibraryCallback } from "@instadapp/vue-web3";
import Web3 from "web3";

function getLibrary(provider: any){
  return new Web3(provider);
}

setWeb3LibraryCallback(getLibrary);

const POLLING_INTERVAL = 12000;

const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://rpc.ankr.com/eth',
  137: 'https://rpc.ankr.com/polygon',
};

export const injected = new InjectedConnector({
  // supportedChainIds: [1, 3, 4, 5, 42, 56, 137]
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  qrcode: true
});

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1] },
  defaultChainId: 1
});