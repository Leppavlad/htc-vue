<template>
  <section class="page">
    <div class="container">
      <template v-if="isLoading">
        <base-spinner></base-spinner>
      </template>
      <p v-else-if="Object.keys(tv).length === 0">No channels found</p>
      <ul v-else class="channels">
        <channel-item
          v-for="(guide, id) in tv"
          :key="id"
          :title="id"
          :guide="guide"
        >
        </channel-item>
      </ul>
    </div>
  </section>
</template>

<script>
import ChannelItem from "@/components/tv/ChannelItem";
export default {
  components: {
    ChannelItem,
  },
  emits: ["isLoading"],
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  computed: {
    tv() {
      return this.$store.getters["tv/tv"] || null;
    },
    needsUpdate() {
      return this.$store.getters["tv/needsUpdate"];
    },
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      this.$emit("isLoading", true);
      try {
        await this.$store.dispatch("tv/loadTv");
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
      this.$emit("isLoading", false);
    },
  },
  created() {
    if (this.needsUpdate) this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.channels {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 700px;
  overflow-y: auto;
}
</style>
