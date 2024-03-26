<template>
  <div v-if="expanded" class="html-box">
    <span
      v-html="oldContent"
      ref="htmlStr"
      class="html-content"
      @click="isToggle(!expanded)"
    ></span>
  </div>
  <VueClamp v-else autoresize :max-lines="maxLines" :class="content" tag="div">
    {{ content }}
    <template #after="{ expanded, clamped}">
      <span
        v-if="clamped || expanded"
        @click="isToggle(!expanded)"
        class="toggle"
      >
        {{ expanded ? $t("global.fold") : $t("global.expand") }}
      </span>
    </template>
  </VueClamp>
</template>

<script>
import VueClamp from "vue-clamp";
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
    maxLines: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      expanded: false,
      oldContent: this.content,
    };
  },
  watch: {
    expanded: function(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.oldContent =
            this.content +
            ` <span class="toggle">
          ${this.$t("global.fold")}
        </span>`;
        });
      } else {
        this.oldContent = this.content;
      }
    },
  },
  components: { VueClamp },
  methods: {
    isToggle(isExpand) {
      this.expanded = isExpand;
    },
  },
};
</script>
<style lang="scss" scoped>
.html-box {
  display: inline-flex;
  flex-wrap: wrap;
  .html-content {
    display: inline;
  }
  .toggle {
    text-wrap: nowrap;
  }
}
</style>
