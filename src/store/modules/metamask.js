/*
 * @Author: hyq_bob bob.he@autech.one
 * @Date: 2024-03-25 18:53:19
 * @LastEditors: hyq_bob bob.he@autech.one
 * @LastEditTime: 2024-03-26 15:36:49
 * @FilePath: /ozfund-mobile/src/store/modules/metamask.js
 * @Description: 钱包相关操作
 */
import { ethers } from "ethers";
import ozcoinExpandAbi from "@/abi/ozcoinExpandAbi.json";
import {
  getProvider,
  isValidAddress,
  Erc20Transaction
} from "@/utils/metamask.js";
const state = {
  busdAddr: process.env.VUE_APP_BUSD_ADDR,
  ozcoinAddr: process.env.VUE_APP_OZCOIN_ADDR,
  totoAddr: process.env.VUE_APP_TOTO_ADDR,
};
const getters = {};
const actions = {
  // 这个函数用于检查是否连接到钱包
  async checkIfWalletIsConnected() {
    let accounts = [];
    // 检查window.ethereum是否可用
    if (window.ethereum) {
      try {
        // 使用ethers.js请求账户信息
        const provider = await getProvider();
        accounts = await provider.listAccounts();
      } catch (error) {
        console.error("Error fetching accounts: ", error);
      }
    } else {
      console.log("Please install MetaMask!");
    }
    // 检查是否获取到了账户
    return accounts.length > 0 ? accounts[0] : null;
  },
  async exchangeTOTOforOzcoin({state}, { amount, exchangeAddr,gasLimit=1000000 }) {
    let addressValidate = isValidAddress(exchangeAddr);
    if (!addressValidate) return;
    const provider = await getProvider();
    const signer = provider.getSigner(); // 签名
    // 智能合约地址和ABI
    const exchangeContractAddress = state.ozcoinAddr;
    const exchangeContractABI = ozcoinExpandAbi;
    // 创建合约实例
    const exchangeContract = new ethers.Contract(exchangeContractAddress, exchangeContractABI, signer);
    // 调用兑换函数
    const tx =  await exchangeContract.exchange(exchangeAddr,exchangeContractAddress,Erc20Transaction(amount.toString()), {
      gasLimit: ethers.utils.hexlify(gasLimit) // 设置为1000000，你需要根据实际情况调整这个值
    } );
    return await tx.wait(); // 等待交易确认

    // console.log(`交易成功！交易哈希：${tx.hash}`);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
};
