<template>
  <div class="purchase_module_two">
    <div class="content-box">
      <div class="purchase_module_left">
        <!-- <img
            v-if="scroll.moduleTwo === 2"
            ref="moduleTwo"
            class="page_gif"
            src="@/assets/images/purchase/gif/module2.gif"
            alt=""
          /> -->
        <img
          v-animation="{ deplay: 6000 }"
          :data-default_url="require('@/assets/images/purchase/gif/module2.png')"
          class="page_png"
          :data-gif_url="require('@/assets/images/purchase/gif/module2.gif')"
          alt=""
        />
      </div>
      <div class="purchase_module_right">
        <h3 class="min_tit">
          {{ $t("purchaseAndPledge.obtain") }}&nbsp;
          {{$t("global.ozc")}}&nbsp;
          {{ $t("purchaseAndPledge.stake") }}&nbsp;
          {{$t("global.toto")}}
        </h3>
        <p class="ratio_">
          {{ $t("purchaseAndPledge.interestRateReference") }}：{{ stakeRate }}%
        </p>
        <p>
         <clamp :content='$t("purchaseAndPledge.info")' /> <br />
          {{ $t("purchaseAndPledge.note") }}
        </p>
        <div class="purchase_btns">
          <button
            @click="pledgeOrExtract('pledge')"
            class="purchase_btn_one pledge"
          >
            {{ $t("purchaseAndPledge.obtain") }}
            <div class="arrow">
              <i></i>
            </div>
          </button>
          <button
            @click="pledgeOrExtract('extract')"
            class="purchase_btn_two extract"
          >
            {{ $t("purchaseAndPledge.withdrawal") }}
            <div class="arrow">
              <i></i>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- 质押pop -->
    <div v-show="modal.show" class="modal_wrap">
      <div class="modal">
        <img
          @click="modal.show = false"
          class="modal_close"
          src="@/assets/images/purchase/modalClose.png"
          alt=""
        />
        <ul class="modal_head">
          <li
            @click="pledgeOrExtract('pledge')"
            :class="{ modal_head_pledge: true, cur: modal.key === 'pledge' }"
          >
            {{ $t("purchaseAndPledge.obtain") }}
          </li>
          <li
            @click="pledgeOrExtract('extract')"
            :class="{ modal_head_extract: true, cur: modal.key === 'extract' }"
          >
            {{ $t("purchaseAndPledge.withdrawal") }}
          </li>
        </ul>
        <div>
          <div v-if="modal.key === 'pledge'" class="modal_body modal_pledge">
            <div class="modal_input">
              <p>
                {{ $t("purchaseAndPledge.quantity") }}({{ this.ozcBalance || 0 }}{{ $t("global.ozc") }})
                <i @click="allPledge" class="all_pledge_number">
                  {{ $t("全部") }}
                </i>
              </p>
              <input
                v-model="pledgeNumber"
                class="pledge_input"
                type="number"
              />
            </div>
            <ul class="modal_data">
              <li>
                <p>
                  {{ $t("purchaseAndPledge.obtain")
                  }}{{ $t("purchaseAndPledge.quantity") }}
                </p>
                <span>
                  <i class="pledge_number">{{ pledgeNumber }}</i>
                  {{ $t("global.ozc") }}
                </span>
              </li>
              <li>
                <p>{{ $t("purchaseAndPledge.annualizedReturn") }}</p>
                <span>{{ stakeRate }}%</span>
              </li>
            </ul>
            <button
              :disabled="freezeTime()"
              @click="pledgeBtn"
              class="modal_btn pledge_btn"
            >
              {{ $t("global.submit") }}
            </button>
            <i class="modal_btn_oper_i">{{ $t("pledgeTxt") }}</i>
          </div>
          <div v-if="modal.key === 'extract'" class="modal_body modal_extract">
            <ul class="modal_data" style="margin-top: 0;">
              <li>
                <p>
                  {{ $t("purchaseAndPledge.obtain")
                  }}{{ $t("purchaseAndPledge.quantity") }}
                </p>
                <span>{{ totoStakeAmount || 0 }} TOTO</span>
              </li>
              <li>
                <p>
                  {{ $t("purchaseAndPledge.obtain")
                  }}{{ $t("purchaseAndPledge.quantity") }}
                </p>
                <span>{{ ozcStakeAmount || 0 }} OZC</span>
              </li>
            </ul>
            <button
              :disabled="freezeTime()"
              @click="extractBtn"
              class="modal_btn extract_btn"
            >
              {{ $t("global.submit") }}
            </button>
            <i class="modal_btn_oper_i">{{ $t("extractTxt") }}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import { mapGetters } from "vuex";
import Clamp from '../../components/clamp.vue';
export default {
  components:{Clamp},
  computed: {
    ...mapGetters("Wallet", ["stakeRate", "ozcStakeAmount", "totoStakeAmount"]),
  },
  data() {
    return {
      pledgeNumber: null,
      modal: {
        show: false,
        key: "",
      },
    };
  },
  methods: {
    freezeTime() {
      return false;
    },
    pledgeOrExtract(key) {
      if (!this.address) return message.error(this.$t("请先连接钱包"));
      if (key === "pledge" && !Number(this.ozcBalance))
        return message.error("暂无OZC请先兑换");
      this.pledgeNumber = null;
      this.modal = {
        show: true,
        key,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.purchase_module_two {
  margin: 0.42rem 0 0.77rem;

  .content-box {
    display: flex;
    width: var(--content-w);
    align-items: center;
    margin: 0 auto;
    column-gap: 2.0375rem;
  }

  .purchase_module_left {
    width: 3.7415rem;
    height: 4.36rem;
  }

  .purchase_module_right {
    padding-right: 0.5rem;
    flex: 1;

    h3 {
      font-family: PingFangSC-Medium;
      font-size: 0.4rem;
      color: #333;
      font-weight: 500;
      margin-bottom: 0.14rem;
    }

    p {
      font-size: 0.14rem;
      color: #666;
      line-height: 0.24rem;
      font-weight: 200;
      text-align: left;
      margin-bottom: 0.24rem;

      i {
        color: #0385f2;
      }
    }
    .ratio_ {
      font-family: PingFangSC-Medium;
      font-weight:900;
      color: #e12828;
      font-size: .28rem;
    }
  }
}

.purchase_btns {
  display: flex;
  align-items: center;

  button {
    padding: 0 31px;
    height: 48px;
    border-radius: 10px;
    font-size: 18px;
    border: 1px solid #0385f2;
    display: flex;
    align-items: center;
    cursor: pointer;

    .arrow {
      width: 16px;
      height: 16px;
      font-size: 12px;
      display: block;
      border-radius: 50%;
      margin-left: 15px;

      i {
        width: 6px;
        height: 6px;
        display: block;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-color: #0385f2 #0385f2 transparent transparent;
        transform: rotateZ(45deg);
        margin-top: 5px;
        margin-left: 4px;
      }
    }
  }

  .purchase_btn_two {
    background: transparent;
    color: #0385f2;
    margin-left: 20px;

    .arrow {
      background: #0385f2;

      i {
        border-color: #ffffff #ffffff transparent transparent;
      }
    }
  }
}

.purchase_btn_one {
  background: #0385f2;
  color: #fff;

  .arrow {
    background: #fff;
    color: #0385f2;
  }
}
</style>
