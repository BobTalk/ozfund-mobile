<template>
  <div class="home_module_six">
    <div class="w">
      <div class="home_module_left" ref="moduleFour">
        <img
          class="page_gif"
          src="@/assets/images/home/gif/module55.png"
          alt=""
          gifTime="4"
        />

      </div>
      <div class="home_module_right">
        <img
          src="@/assets/images/home/gif/module51.gif"
          alt=""
          class="home_module_right_gif"
        />
        <div class="home_module_right_content">
          <h3 class="pc_show">
            {{ $t("home.joinEcosystem") }}<br />{{ $t("home.latestUpdates") }}
          </h3>
          <div class="input_email">
            <input
              v-model="email"
              @keyup.enter="saveEmail"
              id="emailInput"
              type="text"
              :placeholder="$t('home.placeholderEmailSummary')"
            />
            <div @click="saveEmail" class="arrow email_sub">
              <img src="@/assets/images/home/arrow3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="pc_show">
          <div class="head_operate head_operate_mobile">
            <!-- <a @click="langSwitch" href="JavaScript:;"><img src="@/assets/images/home/yuy.png" alt=""/></a> -->
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCo9sUDCiEL8Efu-DIcb2rlQ"
              ><img src="@/assets/images/home/youtube.png" alt=""
            /></a>
            <a target="_blank" href="https://t.me/ozfundglobal"
              ><img src="@/assets/images/home/tele.png" alt=""
            /></a>
            <a target="_blank" href="https://twitter.com/OzfundOfficial"
              ><img src="@/assets/images/home/tiw.png" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    // 保存邮箱
    saveEmail() {
      let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!emailReg.test(this.email))
        return message.error(this.$t("tipMessage.email"));
      axios.get("/api/subscribe?email=" + this.email).then((res) => {
        if (res && res.data && res.data.code === 1) {
          this.$refs.hint.modal = {
            title: this.$t("提示信息"),
            type: "hint", // hint || connectWallet
            status: 1, // 1是成功 2是失败
            show: true,
            txt: this.$t("emailTxt"),
            cb: this.pcLineWalletNext,
          };
          this.email = null;
        }
        if (res && res.data && res.data.code === 0) {
          this.$refs.hint.modal = {
            title: this.$t("提示信息"),
            type: "hint", // hint || connectWallet
            status: 1, // 1是成功 2是失败
            show: true,
            txt: this.$t("您已成功订阅"),
            cb: this.pcLineWalletNext,
          };
          this.email = null;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home_module_six {
  padding: 1.09rem 0 0.7rem;
  .w {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home_module_left {
    margin-right: 1.34rem;
  }
  .home_module_left img {
    width: 2.9231rem;
  }
  .home_module_right_gif {
    width: 1.9rem;
  }
  .home_module_right_content {
    padding-left: .73rem;
    margin-top: -.5rem;
    margin-left: .15rem;
  }
  .home_module_right {
    h3 {
      font-size: .32rem;
      color: #333;
      font-weight: 500;
      margin-bottom: .2rem;
    }
  }
  .input_email {
    width: 3.9rem;
    height: .6rem;
    background: #fff;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      border: none;
      font-size: .16rem;
      padding: 0 .65rem 0 .2rem;
      border-radius: .08rem;
      border: 1px solid rgba(230, 230, 230, 1);
    }
    .arrow {
      width: .6rem;
      height: 100%;
      background: #0385f2;
      border-radius: .08rem;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .arrow {
      img {
        width: .23rem;
      }
    }
  }
}
</style>
