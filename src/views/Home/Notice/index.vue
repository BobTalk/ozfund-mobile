<template>
  <div :class="`notice_wrap ${className}`">
    <div :class="`notice_w ${isMobile() && 'mobile'}`">
      <img class="notice_horn" src="@/assets/images/home/notice.png" alt="" />
      <div ref="swiperNotice" class="swiper swiper_notice">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in noticeList" :key="item.value">
            <p @click="toNotice(item)">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.css";
import { isMobile } from '@/utils/base'
export default {
  props: {
    className: {
      require: false,
      default: ""
    }
  },
  data() {
    return {
      noticeList: [
        {
          label:
            "1行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们构成行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们构成行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们",
          value: "1",
        },
        {
          label:
            "2行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们构成行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们构成行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们",
          value: "2",
        },
        {
          label:
            "3行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们构成行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们构成行开发、建设和维护的DAO组织，在生态搭建前期，成员由各应用的主要开发者们",
          value: "3",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.noticeSwiper();
    });
  },
  methods: {
    isMobile,
    noticeSwiper() {
      const mySwiper = new Swiper(".swiper_notice", {
        loop: true,
        autoplay: {
          delay: 2000,
          pauseOnMouseEnter: true,
        },
        direction: "vertical",
      });
      mySwiper.el.onmouseover = function () {
        mySwiper.autoplay.stop();
      };
      mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
      };
    },
    toNotice(v) {
      console.log(v, "vvv");
    },
  },
};
</script>

<style lang="scss" scoped>
.notice_w {
  display: flex;
  width: var(--content-w);
  height: .6rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px 10px rgba(3, 133, 242, 0.03);
  border-radius: .12rem;
  padding: .15rem;
  margin: 0 auto;

  &.mobile {
    height: .8rem;
    padding: .26rem .2rem;
    width: 100%;
    .notice_horn{
      width: .34rem;
      height: .34rem;
      aspect-ratio: 1 / 1;
      margin-right: .2rem;
      object-fit: contain;
    }
    .swiper {
      p {
        font-size: .24rem;
        line-height: 1;
      }
    }
  }

  .notice_horn {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .swiper {
    height: 100%;
    width: 100%;
    padding: 0 !important;

    p {
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      color: #333;
      line-height: 30px;
    }
  }
}
</style>
