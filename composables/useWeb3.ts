import { useWeb3 as useWeb3Generic } from '@instadapp/vue-web3'
import Web3 from "web3";

const useWeb3 = () => useWeb3Generic<Web3>()

export {
    useWeb3
}