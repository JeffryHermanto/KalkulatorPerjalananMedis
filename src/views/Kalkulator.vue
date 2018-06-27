<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-5-desktop is-5-widescreen">
            <form class="box" @submit.prevent>
              <Greetings v-if="hitungSiklusForm <= siklusForm" />
              <progress class="progress is-large is-primary show-value" :value="hitungSiklusForm" :max="siklusForm" v-if="hitungSiklusForm <= siklusForm">100%</progress>
              <div class="break"></div>
              <Form v-if="hitungSiklusForm <= siklusForm" />
              <PreviewTotal v-if="hitungSiklusForm <= siklusForm" />
              <Summary v-if="hitungSiklusForm > siklusForm" />
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
import PreviewTotal from '../components/PreviewTotal';
import Summary from '../components/Summary';
import { mapGetters } from 'vuex';

export default {
  name: 'Kalkulator',
  components: {
    Greetings,
    Form,
    PreviewTotal,
    Summary
  },
  computed: {
    ...mapGetters(['siklusForm', 'hitungSiklusForm', 'isSummary'])
  }
};
</script>

<style>
progress.show-value {
  position: relative;
}

progress.show-value:after {
  content: attr(value) ' dari ' attr(max);
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