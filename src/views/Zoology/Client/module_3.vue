<template>
  <div class="zoology_module_three">
    <div class="content-box">
      <div class="zoology_module_tit">
        <h3 class="min_tit">
          {{ $t("global.ozcoin") }}({{ $t("global.ozc") }})
        </h3>
        <p class="summary">{{ $t("zoology.ozcInfo") }}</p>
      </div>
      <img
        v-animation="{ deplay: 5000 }"
        class="img page_png"
        :data-default_url="require('@/assets/images/zoology/gif/module3.png')"
        :data-gif_url="require('@/assets/images/zoology/gif/module3.gif')"
        alt=""
      />
      <div class="zoology_module_tit">
        <h3 class="min_tit">{{ $t("global.toto") }}</h3>
        <p>{{ $t("zoology.totoInfo1") }}</p>
        <p>{{ $t("zoology.totoInfo2") }}</p>
        <p>{{ $t("zoology.totoInfo3") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.zoology_module_three {
  padding: 1.8rem 0 1.47rem;
  background: url("~@/assets/images/zoology/module2.png") no-repeat;
  background-size: 100% 100%;

  .content-box {
    display: flex;
    width: var(--content-w);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .zoology_module_tit {
    width: 9.84rem;
    text-align: center;
  }

  h3 {
    font-size: 0.4rem;
    color: #333;
    line-height: 0.44rem;
    font-weight: 500;
    margin-bottom: 0.24rem;
  }

  .summary,
  p {
    font-family: PingFangSC-Light;
    font-size: 0.14rem;
    color: #666;
    letter-spacing: 0;
    text-align: center;
    line-height: 0.24rem;
    font-weight: 200;
  }

  .img {
    width: 4.6rem;
    height: 3.02rem;
    object-fit: contain;
    margin: 0.64rem 0 0.4rem;
  }
}
</style>
