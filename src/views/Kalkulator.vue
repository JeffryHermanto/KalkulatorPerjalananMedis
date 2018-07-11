<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-5-desktop is-5-widescreen">
            <form class="box" @submit.prevent>
              <Greetings v-show="hitungSiklusForm <= siklusForm" />
              <progress class="progress is-large is-primary show-value" :aria-label="durasi" :value="hitungSiklusForm" :max="siklusForm" v-if="hitungSiklusForm <= siklusForm">100%</progress>
              <div class="break"></div>
              <Form v-show="hitungSiklusForm <= siklusForm" />
              <Summary v-show="hitungSiklusForm > siklusForm" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Greetings from '../components/Greetings';
import Form from '../components/Form';
import Summary from '../components/Summary';
import { mapGetters } from 'vuex';

export default {
  name: 'Kalkulator',
  components: {
    Greetings,
    Form,
    Summary
  },
  computed: {
    ...mapGetters([
      'siklusForm',
      'hitungSiklusForm',
      'isSummary',
      'durasiTahun',
      'durasiBulan',
      'durasiMinggu',
      'durasiHari'
    ]),
    durasi() {
      if (this.durasiTahun) return 'Tahun';
      if (this.durasiBulan) return 'Bulan';
      if (this.durasiMinggu && this.durasiHari > 7) return 'Minggu';
      if (this.durasiHari || this.durasiHari === 0) return 'Hari';
    }
  }
};
</script>

<style>
progress.show-value {
  position: relative;
}

progress.show-value:after {
  content: attr(aria-label) ' ke-' attr(value) ' dari ' attr(max);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: calc(1rem / 1.5);
  line-height: 1rem;
}

progress.show-value.is-large:after {
  font-size: calc(1.1rem / 1.5);
  line-height: 1.5rem;
}

.break {
  margin: 35px;
}
</style>