<template>
  <div class="home">
    <h1><font-awesome-icon icon="globe-americas" />Estatística no mundo</h1>
    <Global :item="global" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Global from '@/components/Global.vue';

export default {
  name: 'Home',
  components: {
    Global,
  },
  created() {
    this.$store.commit('getInfo');
  },
  computed: {
    ...mapState({
      global: 'global',
    }),
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
  svg {
    margin-right: 8px;
  }
}
</style>
