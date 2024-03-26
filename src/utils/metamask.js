/*
 * @Author: hyq_bob bob.he@autech.one
 * @Date: 2024-03-25 19:06:54
 * @LastEditors: hyq_bob bob.he@autech.one
 * @LastEditTime: 2024-03-26 15:03:03
 * @FilePath: /ozfund-mobile/src/utils/metamask.js
 * @Description: metamask相关
 */
import { ethers } from "ethers";
const ethereum = window.ethereum;
// 请求用户授权
async function requestMetaMaskAccess() {
  return await ethereum.request({ method: "eth_requestAccounts" });
}
// 连接到MetaMask
async function getProvider() {
  await requestMetaMaskAccess();
  return new ethers.providers.Web3Provider(ethereum);
}
// 连接MetaMask
async function connectMetaMask() {
  if (typeof ethereum !== "undefined") {
    return getProvider();
  } else {
    console.log("MetaMask is not installed!");
  }
}
// 使用 ethers.js 验证地址
function isValidAddress(address) {
  return ethers.utils.isAddress(address);
}
async function resolveENSName(ensName) {
  const provider = new ethers.providers.JsonRpcProvider();
  const address = await provider.resolveName(ensName);
  if (address === null) {
    console.log("ENS name is not registered or invalid");
  } else {
    console.log("Resolved address:", address);
    return address;
  }
}
// 监听网络变化
async function addEventListenerChainChanged(fn) {
  if (typeof ethereum !== "undefined") {
    ethereum.on("chainChanged", (chainId) => {
      const provider = new ethers.providers.Web3Provider(ethereum);
      fn?.(provider, chainId);
    });
  }
}
// 监听账户变化事件
async function addEventListenerAccountsChanged(fn) {
  if (typeof ethereum !== "undefined") {
    ethereum.on("accountsChanged", (accounts) => {
      // 检查账户数组是否为空，空数组意味着用户断开了连接
      if (accounts.length === 0) {
        fn?.({ isConnectMetaMask: false, accounts: "" });
      } else {
        fn?.({ isConnectMetaMask: true, accounts: accounts[0] });
      }
    });
  }
}
// ETH 转换为 Wei
function EthTransactionWei(amount){
  return ethers.utils.parseEther(amount).toString();
}
// ERC-20 代币转换为最小单位
function Erc20Transaction(amount,decimals=18){
  return ethers.utils.parseUnits(amount,decimals).toString();
}
export {
  connectMetaMask,
  getProvider,
  requestMetaMaskAccess,
  resolveENSName,
  isValidAddress,
  addEventListenerChainChanged,
  addEventListenerAccountsChanged,
  EthTransactionWei,
  Erc20Transaction
};
