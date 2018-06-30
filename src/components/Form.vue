<template>
  <div>
    <!-- RUMAH SAKIT KANKER -->
    <label class="label">
      <i class="far fa-hospital"></i> &nbsp;Rumah Sakit Kanker
    </label>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Konsultasi" v-model="konsultasi">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Tindakan" v-model="tindakan">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Obat" v-model="obat">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Ruangan" v-model="ruangan">
      </p>
    </div>

    <br />

    <!-- ADVISORY BY KEMODIJAKARTA -->
    <button v-show="!isAdvis" class="button is-warning" @click="advis">Advisory by Kemodijakarta</button>
    <button v-show="isAdvis" class="button is-primary" @click="advis">Advisory by Kemodijakarta</button>
    <br /><br />

    <!-- SELF FILL -->
    <label class="label">
      <i class="fas fa-bed"></i> &nbsp;Budget Trip
    </label>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Tiket Pesawat" v-model="tiketPesawat">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Akomodasi & Kebersihan" v-model="akomodasi">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Transport" v-model="transport">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Catering" v-model="catering">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Konseling" v-model="konseling">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
        <a class="button">Rp.</a>
      </p>
      <p class="control is-expanded">
        <input class="input" type="number" placeholder="Personal Assistant" v-model="personalAssistant">
      </p>
    </div>

    <br/>

    <div class="notification is-danger" v-if="peringatan">
      <button class="delete" @click="clearWarning"></button>
      {{ pesan }}
    </div>

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
      konsultasi: null,
      tindakan: null,
      obat: null,
      ruangan: null,
      tiketPesawat: null,
      akomodasi: null,
      transport: null,
      catering: null,
      konseling: null,
      personalAssistant: null,
      peringatan: false,
      pesan: null,
      isAdvis: false
    };
  },
  methods: {
    postData() {
      if (
        (this.konsultasi === null,
        this.tindakan === null,
        this.obat === null,
        this.ruangan === null,
        this.tiketPesawat === null,
        this.akomodasi === null,
        this.transport === null,
        this.catering === null,
        this.konseling === null,
        this.personalAssistant === null)
      ) {
        this.peringatan = true;
        this.pesan = 'Input data belum lengkap.';
        return;
      }

      const answer = window.confirm(
        'Apakah data Anda sudah benar?\nPeriksa kembali sebelum ke isian berikutnya.'
      );
      if (answer) {
        this.$store.state.collections.push({
          konsultasi: parseInt(this.konsultasi) || 0,
          tindakan: parseInt(this.tindakan) || 0,
          obat: parseInt(this.obat) || 0,
          ruangan: parseInt(this.ruangan) || 0,
          tiketPesawat: parseInt(this.tiketPesawat) || 0,
          akomodasi: parseInt(this.akomodasi) || 0,
          transport: parseInt(this.transport) || 0,
          catering: parseInt(this.catering) || 0,
          konseling: parseInt(this.konseling) || 0,
          personalAssistant: parseInt(this.personalAssistant) || 0
        });

        this.$store.state.hitungSiklusForm++;

        this.konsultasi = null;
        this.tindakan = null;
        this.obat = null;
        this.ruangan = null;
        this.tiketPesawat = null;
        this.akomodasi = null;
        this.transport = null;
        this.catering = null;
        this.konseling = null;
        this.personalAssistant = null;
      }
    },
    clearWarning() {
      this.peringatan = false;
      this.pesan = null;
    },
    advis() {
      this.isAdvis = !this.isAdvis;
      if (this.isAdvis && this.satuanDurasi === 'Bulan') {
        this.tiketPesawat = 3000000;
        this.akomodasi = 4000000;
        this.transport = 500000;
        this.catering = 3000000;
        this.konseling = 500000;
        this.personalAssistant = 500000;
      } else if (this.isAdvis && this.satuanDurasi === 'Minggu') {
        this.tiketPesawat = 3000000 / 4;
        this.akomodasi = 4000000 / 4;
        this.transport = 500000 / 4;
        this.catering = 3000000 / 4;
        this.konseling = 500000 / 4;
        this.personalAssistant = 500000 / 4;
      } else if (this.isAdvis && this.satuanDurasi === 'Hari') {
        this.tiketPesawat = 100000;
        this.akomodasi = 135000;
        this.transport = 17000;
        this.catering = 100000;
        this.konseling = 17000;
        this.personalAssistant = 17000;
      } else if (this.isAdvis === false) {
        this.tiketPesawat = null;
        this.akomodasi = null;
        this.transport = null;
        this.catering = null;
        this.konseling = null;
        this.personalAssistant = null;
      }
    }
  }
};
</script>