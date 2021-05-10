<template>
  <section class="page">
    <div class="container">
      <template v-if="isLoading">
        <base-spinner></base-spinner>
      </template>
      <p v-else-if="Object.keys(tv).length === 0">No channels found</p>
      <ul v-else class="channels" data-simplebar>
        <channel-item
          v-for="(guide, id) in tvSearch"
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
    tvSearch() {
      const search = this.$route.query.search || "";
      const channels = {};
      for (let key of Object.keys(this.tv)) {
        if (
          key
            .split("_")[1]
            .toLowerCase()
            .includes(search.toLowerCase())
        ) {
          channels[key] = this.tv[key];
        }
      }
      return channels;
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

<style>
/* Костыль для большего соответствия макету */
@media screen and (min-width: 576px) {
  .channels {
    width: calc(100% + 20px);
  }

  .simplebar-wrapper {
    width: 100% !important;
  }

  .simplebar-mask {
    right: 20px !important;
  }
  .simplebar-track.simplebar-vertical {
    border-radius: 8px;
  }
  .simplebar-scrollbar.simplebar-visible:before {
    opacity: 0.2 !important;
  }
}
</style>
