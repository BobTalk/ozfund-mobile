<template>
  <div class="zoology_module_4">
    <div class="img">
      <!-- <img src="@/assets/images/zoology/gif/module4.png" alt="" /> -->
      <img
          v-animation="{deplay:5000}"
          :data-default_url="require('@/assets/images/zoology/gif/module4.png')"
          :data-gif_url="require('@/assets/images/zoology/gif/module4.gif')"
          alt=""
        />
    </div>
    <p class="title">{{ $t('global.auPay') }}</p>
    <!-- <p class="info">
      {{ $t("zoology.aupayInfo") }}
    </p> -->
    <VueClamp autoresize :max-lines="5" class="info">
      {{ $t("zoology.aupayInfo") }}
      <template #after="{ toggle, expanded }">
        <span @click="toggle" class="toggle">{{ expanded ? "收起" : "展开" }}</span>
      </template>
    </VueClamp>
    <div class="link-box">
    <WebSiteLinkItem :webSiteLinkCut="webSiteLinkCut" />
  </div>
  </div>
</template>

<script>
import WebSiteLinkItem from "@/views/components/render-item_link.vue";
import VueClamp from "vue-clamp";
export default {
  components: {
    WebSiteLinkItem,
    VueClamp
  },
  data() {
    return {
      webSiteLinkCut:[
        {
          href: "/",
          target: "_self",
          label: `${this.$t('global.ozFund')}${this.$t('global.officialWebsite')}`,
        },
        {
          href: "/",
          target: "_self",
          label: `${this.$t('global.ozbet')}${this.$t('global.officialWebsite')}`,
        },
        {
          href: "http://www.aupay.one/",
          target: "_blank",
          label: `${this.$t('global.auPay')}${this.$t('global.officialWebsite')}`,
        },
        {
          href: "javaScript:viod 0;",
          label:`${this.$t('global.about')}${this.$t('global.ozFund')}`,
          toggleShow: false,
          children: [
            {
              target: "_blank",
              href: "@/pdf/Oz-White-Paper.pdf",
              label: `${this.$t('global.whitePaper')}`,
            },
            {
              target: "_blank",
              href: "@/pdf/Oz-clause.pdf",
              label: `${this.$t('global.termsAndConditions')}`,
            },
            {
              target: "_blank",
              href: "@/pdf/Oz-Privacy-Policy.pdf",
              label: `${this.$t('global.privacyPolicy')}`,
            },
          ],
        },
        {
          href: "javaScript:viod 0;",
          label: `${this.$t('global.FollowUs')}`,
          inline: true,
          toggleShow: false,
          children: [
            {
              href: "https://t.me/ozfundglobal",
              label: "",
              target: "_blank",
              imgUrl: require("@/assets/images/home/tele1.png"),
            },
            {
              href: "https://twitter.com/OzfundOfficial",
              label: "",
              target: "_blank",
              imgUrl: require("@/assets/images/home/tiw1.png"),
            },
            {
              href: "https://www.youtube.com/channel/UCo9sUDCiEL8Efu-DIcb2rlQ",
              label: "",
              target: "_blank",
              imgUrl: require("@/assets/images/home/youtube1.png"),
            },
          ],
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.zoology_module_4 {
  padding: 0 0.4rem;

  .img {
    width: 4.13rem;
    height: 3.54rem;
    margin: 0 auto;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .title {
    height: 0.8rem;
    font-family: PingFangSC-Medium;
    font-size: 0.48rem;
    color: #333;
    letter-spacing: 0;
    text-align: center;
    line-height: 0.8rem;
    font-weight: 500;
    margin-top: 0.4rem;
  }

  .info {
    min-height: 3.36rem;
    font-family: PingFangSC-Light;
    font-size: 0.28rem;
    color: #222;
    letter-spacing: 0;
    text-align: center;
    line-height: 0.42rem;
    font-weight: 200;
    margin-top: 0.2rem;
  }
  .link-box {
    padding: 0.5rem 0;
  }
}
</style>
