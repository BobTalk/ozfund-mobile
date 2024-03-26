<template>
  <div class="purchase-module_4">
      <WebSiteLinkItem :webSiteLinkCut="webSiteLinkCut"/>
  </div>
</template>

<script>
import WebSiteLinkItem from "@/views/components/render-item_link.vue";
export default {
  name: "WebSiteLink",
  components:{
    WebSiteLinkItem
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
.purchase-module_4 {
  margin-top: 0.6rem;
  padding: 0 0.3rem .84rem;
}
</style>
