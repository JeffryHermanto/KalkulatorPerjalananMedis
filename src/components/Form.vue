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
    <label class="label">
      <i class="fas fa-bed"></i> &nbsp;Advisory by Kemodijakarta
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
export default {
  name: 'Form',
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
      pesan: null
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
    }
  }
};
</script>