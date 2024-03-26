<!--
 * @Author: hyq_bob bob.he@autech.one
 * @Date: 2024-03-19 17:26:19
 * @LastEditors: hyq_bob bob.he@autech.one
 * @LastEditTime: 2024-03-25 17:19:16
 * @FilePath: /ozfund-mobile/src/views/HomeToto/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="two_page">
    <div class="two_page_top">
      <img @click="$router.push('/')" src="@/assets/images/back.png" alt="">
      <p>{{$t('TOTO兑换')}}</p>
    </div>
    <p class="toto_tips">{{ $t('home.homeConversion') }}</p>
    <div class="two_page_w">
      <div class="conversion_input">
        <p>{{ $t('TOTO数量') }}：--</p>
        <div class="conversion_input_info">
          <i>¥</i>
          <input :placeholder="$t('请输入发起兑换的TOTO数量')">
        </div>
        <span>≈--zcoin</span>
      </div>
      <button disabled class="conversion_input_btn">{{ $t('兑换') }}</button>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { mapGetters } from 'vuex'
  export default {
    setup() {
      let key = ref('toto')
      const onClickTab = (k) => {
        key.value = k
      }
      return {
        key, onClickTab
      }
    },
    computed: {
      ...mapGetters('Wallet', ['totoSupply', 'ozcSupply', 'totoContractAddress', 'ozcoinContractAddress' ])
    },
  }
</script>

<style scoped lang="scss">
  .toto_tips {
    width: 100%;
    padding: 10px 15px;
    background: rgba(255,194,0,.1);
    font-size: 12px;
    color: #333333;
    margin-bottom: 15px;
  }
  .conversion_input {
    padding: 15px;
    background: #FFFFFF;
    border-radius: 8px;
    p {
      font-size: 16px;
      color: #333333;
      margin-bottom: 15px;
    }
    span {
      font-size: 14px;
      color: #333333;
    }
    .conversion_input_info {
      border-bottom: 1px solid rgba(230,230,230,1);
      padding-bottom: 18px;
      display: flex;
      margin-bottom: 10px;
      i {
        font-size: 30px;
        color: #333333;
        margin-right: 15px;
        display: block;
        width: 18px;
        flex-shrink: 0;
        flex-grow: 0;
        line-height: 42px;
      }
      input {
        font-size: 14px;
        color: #333333;
        width: 100%;
        border: none;
      }
    }
  }
  .conversion_input_btn {
    width: 100%;
    height: 44px;
    background: #0385F2;
    border-radius: 8px;
    font-size: 14px;
    color: #FFFFFF;
    margin-top: 15px;
    border: none;
  }
</style>