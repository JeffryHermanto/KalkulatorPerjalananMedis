<template>
  <div>
    <br/>
    <h1>Budget sementara:
      <strong>Rp. {{ formatPrice(grandSummary) }},-</strong>
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PreviewTotal',
  computed: {
    ...mapGetters(['grandSummary'])
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
  }
};
</script>

