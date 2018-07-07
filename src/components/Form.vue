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
        <p v-show="!isBiayaMedis" class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p v-show="!isBiayaMedis" class="control is-expanded">
          <input class="input" type="text" placeholder="Biaya Medis" v-model="biayaMedis">
        </p>
        <p v-show="isBiayaMedis" class="control is-expanded">
          <input class="input" type="text" placeholder="Biaya Medis" v-model="biayaMedis" disabled>
        </p>

        <p class="control" @click="toggleBiayaMedis">
          <a class="button expand">
            <span v-show="!isBiayaMedis">
              <i class="fas fa-plus"></i>
            </span>
            <span v-show="isBiayaMedis">
              <i class="fas fa-minus"></i>
            </span>
          </a>
        </p>
      </div>
      <!-- <br /> -->

      <!-- /////////////////////////////////////////////////////////////////////////////// -->

      <div v-show="isBiayaMedis">
        <!-- LIST BREAKDOWN BIAYA MEDIS -->
        <p class="help">Konsultasi</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Konsultasi" v-model="konsultasi">
          </p>
        </div>

        <p class="help">Tindakan</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Tindakan" v-model="tindakan">
          </p>
        </div>

        <p class="help">Obat</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Obat" v-model="obat">
          </p>
        </div>

        <p class="help">Ruangan</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Ruangan" v-model="ruangan">
          </p>
        </div>

      </div>

      <!-- /////////////////////////////////////////////////////////////////////////////// -->

      <!-- BIAYA NON-MEDIS -->
      <div class="breakDikit"></div>
      <br />
      <label class="label">
        <i class="fas fa-bed"></i> &nbsp;Biaya Non-Medis
      </label>

      <p class="help">Akomodasi</p>
      <div class="control field has-addons has-icons-right">
        <p class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Akomodasi" v-model="akomodasi">
        </p>

        <!-- TOOLTIP ADVISORY -->
        <div class="tooltip">
          <p class="control advis">
            <a class="button advisory">
              <span>
                <i class="far fa-lightbulb"></i>
              </span>
            </a>
          </p>
          <!-- TOOLTIP CONTENT -->
          <span class="tooltiptext">

            <label>
              <strong>Pilih Tipe</strong>
            </label>
            <br />
            <div class="breakDikit"></div>
            <div class="control">
              <label class="radio">
                <input type="radio" v-model="tipeAkomodasi" value="2000000"> &nbsp;Kost
              </label>
              <div class="help">Rp. 2.000.000,- / bulan</div>
              <div class="breakDikit"></div>

              <label class="radio">
                <input type="radio" v-model="tipeAkomodasi" value="10000000"> &nbsp;Apartemen
              </label>
              <div class="help">Rp. 10.000.000,- / bulan</div>
              <div class="breakDikit"></div>

              <label class="radio">
                <input type="radio" v-model="tipeAkomodasi" value="30000000"> &nbsp;Hotel Bintang 4
              </label>
              <div class="help">Rp. 30.000.000,- / bulan</div>
              <br />

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" @click="pilihTipe">Pilih</button>
                </div>
              </div>
            </div>

          </span>
        </div>

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
        <p v-show="!isLainLain" class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p v-show="!isLainLain" class="control is-expanded">
          <input class="input" type="text" placeholder="Lain-Lain" v-model="lainLain">
        </p>
        <p v-show="isLainLain" class="control is-expanded">
          <input class="input" type="text" placeholder="Lain-Lain" v-model="lainLain" disabled>
        </p>
        <p class="control" @click="toggleLainLain">
          <a class="button expand">
            <span v-show="!isLainLain">
              <i class="fas fa-plus"></i>
            </span>
            <span v-show="isLainLain">
              <i class="fas fa-minus"></i>
            </span>
          </a>
        </p>
      </div>

      <!-- /////////////////////////////////////////////////////////////////////////////// -->

      <div v-show="isLainLain">
        <!-- LIST BREAKDOWN LAIN-LAIN -->
        <!-- <p class="help">Tiket Pesawat PP</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Tiket Pesawat PP" v-model="tiketPesawatPP">
          </p>
        </div> -->

        <p class="help">Transport Lokal</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Transport Lokal" v-model="transport">
          </p>
        </div>

        <p class="help">Konseling</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Konseling" v-model="konseling">
          </p>
        </div>

        <p class="help">Personal Assistant</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Personal Assistant" v-model="personalAssistant">
          </p>
        </div>

        <div class="breakDikit"></div>
      </div>

      <!-- /////////////////////////////////////////////////////////////////////////////// -->

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
      lainLain: null,
      konsultasi: null, // 1
      tindakan: null, // 2
      obat: null, // 3
      ruangan: null, // 4
      akomodasi: null, // 5
      catering: null, // 6
      transport: null, // 7
      konseling: null, // 8
      personalAssistant: null, // 9
      isTotalBiaya: false,
      isBiayaMedis: false,
      isLainLain: false,
      tipeAkomodasi: null,
      tiketPesawatPP: null
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
    lainLain: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.lainLain = result));
    },
    konsultasi: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.konsultasi = result));
    },
    tindakan: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.tindakan = result));
    },
    obat: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.obat = result));
    },
    ruangan: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.ruangan = result));
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
    transport: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.transport = result));
    },
    konseling: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.konseling = result));
    },
    personalAssistant: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.personalAssistant = result));
    },
    tiketPesawatPP: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.tiketPesawatPP = result));
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
          lainLain: 0,
          konsultasi: 0,
          tindakan: 0,
          obat: 0,
          ruangan: 0,
          akomodasi: 0,
          catering: 0,
          transport: 0,
          konseling: 0,
          personalAssistant: 0
        });
        this.$store.state.hitungSiklusForm++;
      } else if (
        // Jika SEMUA diisi
        answer &&
        this.totalBiaya === null &&
        this.biayaMedis === null &&
        this.lainLain === null
      ) {
        this.$store.state.collections.push({
          totalBiaya: 0,
          biayaMedis: 0,
          lainLain: 0,
          konsultasi: parseInt(this.removeDots(this.konsultasi)) || 0,
          tindakan: parseInt(this.removeDots(this.tindakan)) || 0,
          obat: parseInt(this.removeDots(this.obat)) || 0,
          ruangan: parseInt(this.removeDots(this.ruangan)) || 0,
          akomodasi: parseInt(this.removeDots(this.akomodasi)) || 0,
          catering: parseInt(this.removeDots(this.catering)) || 0,
          transport: parseInt(this.removeDots(this.transport)) || 0,
          konseling: parseInt(this.removeDots(this.konseling)) || 0,
          personalAssistant:
            parseInt(this.removeDots(this.personalAssistant)) || 0
        });
        this.$store.state.hitungSiklusForm++;
      } else if (
        // Jika yang diisi BREAKDOWN BIAYA MEDIS dan BASIC BIAYA NON-MEDIS
        answer &&
        this.totalBiaya === null &&
        this.biayaMedis === null
      ) {
        this.$store.state.collections.push({
          totalBiaya: 0,
          biayaMedis: 0,
          lainLain: parseInt(this.removeDots(this.lainLain)) || 0,
          konsultasi: parseInt(this.removeDots(this.konsultasi)) || 0,
          tindakan: parseInt(this.removeDots(this.tindakan)) || 0,
          obat: parseInt(this.removeDots(this.obat)) || 0,
          ruangan: parseInt(this.removeDots(this.ruangan)) || 0,
          akomodasi: parseInt(this.removeDots(this.akomodasi)) || 0,
          catering: parseInt(this.removeDots(this.catering)) || 0,
          transport: 0,
          konseling: 0,
          personalAssistant: 0
        });
        this.$store.state.hitungSiklusForm++;
      } else if (
        // Jika yang diisi BASIC BIAYA MEDIS dan BREAKDOWN LAIN-LAIN
        answer &&
        this.totalBiaya === null &&
        this.lainLain === null
      ) {
        this.$store.state.collections.push({
          totalBiaya: 0,
          biayaMedis: parseInt(this.removeDots(this.biayaMedis)) || 0,
          lainLain: 0,
          konsultasi: 0,
          tindakan: 0,
          obat: 0,
          ruangan: 0,
          akomodasi: parseInt(this.removeDots(this.akomodasi)) || 0,
          catering: parseInt(this.removeDots(this.catering)) || 0,
          transport: parseInt(this.removeDots(this.transport)) || 0,
          konseling: parseInt(this.removeDots(this.konseling)) || 0,
          personalAssistant:
            parseInt(this.removeDots(this.personalAssistant)) || 0
        });
        this.$store.state.hitungSiklusForm++;
      } else if (answer && this.totalBiaya === null) {
        // Jika yang diisi BASIC BIAYA MEDIS dan BASIC BIAYA NON-MEDIS
        this.$store.state.collections.push({
          totalBiaya: 0,
          biayaMedis: parseInt(this.removeDots(this.biayaMedis)) || 0,
          lainLain: parseInt(this.removeDots(this.lainLain)) || 0,
          konsultasi: 0,
          tindakan: 0,
          obat: 0,
          ruangan: 0,
          akomodasi: parseInt(this.removeDots(this.akomodasi)) || 0,
          catering: parseInt(this.removeDots(this.catering)) || 0,
          transport: 0,
          konseling: 0,
          personalAssistant: 0
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
    },
    toggleBiayaMedis() {
      this.isBiayaMedis = !this.isBiayaMedis;
      this.biayaMedis = null;
    },
    toggleLainLain() {
      this.isLainLain = !this.isLainLain;
      this.lainLain = null;
    },
    pilihTipe() {
      this.akomodasi = this.tipeAkomodasi;
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

.advis .button {
  background: yellow;
}

.advis .button:hover {
  background: greenyellow;
}

.advisory span {
  color: grey;
}

.advisory span:hover {
  cursor: pointer;
  color: black;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 320px;
  background-color: #f0fafc;
  color: #1c696b;
  text-align: left;
  border-radius: 6px;
  border: 1px solid #1c696b;
  padding: 15px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -300px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>