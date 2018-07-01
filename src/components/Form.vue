<template>
  <div>
    <!-- TOTAL BIAYA -->
    <div>
      <label class="label">
        <i class="far fa-hospital"></i> &nbsp;Total Biaya
      </label>
      <div class="control field has-addons has-icons-right">
        <p v-show="!isTotalBiaya" class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p v-show="!isTotalBiaya" class="control is-expanded">
          <input class="input" type="text" placeholder="Total Biaya" v-model="totalBiaya">
        </p>
        <p v-show="isTotalBiaya" class="control is-expanded">
          <input class="input" placeholder="Breakdown Total Biaya" disabled>
        </p>
        <p class="control" @click="toggleTotalBiaya">
          <a class="button expand">
            <span v-show="!isTotalBiaya">
              <i class="fas fa-plus"></i>
            </span>
            <span v-show="isTotalBiaya">
              <i class="fas fa-minus"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
    <div class="breakDikit"></div>
    <br />

    <!-- /////////////////////////////////////////////////////////////////////////////// -->

    <div v-show="isTotalBiaya">
      <!-- BIAYA MEDIS -->
      <label class="label">
        <i class="far fa-hospital"></i> &nbsp;Biaya Medis
      </label>
      <div class="control field has-addons has-icons-right">
        <p class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Biaya Medis" v-model="biayaMedis">
        </p>
        <p class="control">
          <a class="button expand">
            <span>
              <i class="fas fa-plus"></i>
            </span>
          </a>
        </p>
      </div>
      <br />

      <!-- /////////////////////////////////////////////////////////////////////////////// -->

      <!-- BIAYA NON-MEDIS -->
      <label class="label">
        <i class="fas fa-bed"></i> &nbsp;Biaya Non-Medis
      </label>

      <p class="help">Akomodasi</p>
      <div class="field has-addons">
        <p class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Akomodasi" v-model="akomodasi">
        </p>
      </div>

      <p class="help">Makan &amp; Minum</p>
      <div class="field has-addons">
        <p class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Makan & Minum" v-model="catering">
        </p>
      </div>

      <p class="help">Lain-Lain</p>
      <div class="control field has-addons has-icons-right">
        <p class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Lain-Lain" v-model="lainLain">
        </p>
        <p class="control">
          <a class="button expand">
            <span>
              <i class="fas fa-plus"></i>
            </span>
          </a>
        </p>
      </div>

      <br/>
    </div>

    <!-- /////////////////////////////////////////////////////////////////////////////// -->

    <!-- TOMBOL BERIKUTNYA -->
    <button type="submit" class="button is-medium is-success is-fullwidth" @click="postData">
      Berikutnya&nbsp;&nbsp;
      <i class="fas fa-chevron-right"></i>
    </button>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Form',
  computed: {
    ...mapGetters(['satuanDurasi'])
  },
  data() {
    return {
      totalBiaya: null,
      biayaMedis: null,
      akomodasi: null,
      catering: null,
      lainLain: null,
      konsultasi: null,
      tindakan: null,
      obat: null,
      ruangan: null,
      tiketPesawat: null,
      transport: null,
      konseling: null,
      personalAssistant: null,
      isTotalBiaya: false
    };
  },
  watch: {
    totalBiaya: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.totalBiaya = result));
    },
    biayaMedis: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.biayaMedis = result));
    },
    akomodasi: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.akomodasi = result));
    },
    catering: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.catering = result));
    },
    lainLain: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.lainLain = result));
    }
  },
  methods: {
    postData() {
      const answer = window.confirm(
        'Apakah data Anda sudah benar?\nPeriksa kembali sebelum ke isian berikutnya.'
      );
      if (answer && this.totalBiaya) {
        this.$store.state.collections.push({
          totalBiaya: parseInt(this.removeDots(this.totalBiaya)) || 0,
          biayaMedis: 0,
          akomodasi: 0,
          catering: 0,
          lainLain: 0,
          konsultasi: 0,
          tindakan: 0,
          obat: 0,
          ruangan: 0,
          tiketPesawat: 0,
          transport: 0,
          konseling: 0,
          personalAssistant: 0
        });
        this.$store.state.hitungSiklusForm++;
      } else if (answer) {
        this.$store.state.collections.push({
          totalBiaya: parseInt(this.totalBiaya) || 0,
          biayaMedis: parseInt(this.removeDots(this.biayaMedis)) || 0,
          akomodasi: parseInt(this.removeDots(this.akomodasi)) || 0,
          catering: parseInt(this.removeDots(this.catering)) || 0,
          lainLain: parseInt(this.removeDots(this.lainLain)) || 0,
          konsultasi: parseInt(this.konsultasi) || 0,
          tindakan: parseInt(this.tindakan) || 0,
          obat: parseInt(this.obat) || 0,
          ruangan: parseInt(this.ruangan) || 0,
          tiketPesawat: parseInt(this.tiketPesawat) || 0,
          transport: parseInt(this.transport) || 0,
          konseling: parseInt(this.konseling) || 0,
          personalAssistant: parseInt(this.personalAssistant) || 0
        });
        this.$store.state.hitungSiklusForm++;
      }
    },
    removeDots(numbers) {
      return numbers.split('.').join('');
    },
    toggleTotalBiaya() {
      this.isTotalBiaya = !this.isTotalBiaya;
      this.totalBiaya = null;
    }
  }
};
</script>

<style>
.breakDikit {
  margin-bottom: 12px;
}

.rupiah {
  pointer-events: none;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.expand span {
  color: lightgrey;
}

.expand span:hover {
  cursor: pointer;
  color: blue;
}
</style>