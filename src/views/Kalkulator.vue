<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-5-desktop is-5-widescreen">
            <form class="box" @submit.prevent>

              <Greetings />
              <Form />
              <Summary />

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

export default {
  name: 'Kalkulator',
  components: {
    Greetings,
    Form,
    Summary
  }
};
</script>