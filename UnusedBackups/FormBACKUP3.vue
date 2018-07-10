<template>
  <div>
    <div>
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

      <!-- EXPAND BIAYA MEDIS -->
      <div v-show="isBiayaMedis">
        <p class="help">
          <i class="fas fa-user-md"></i> &nbsp;Konsultasi</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Konsultasi" v-model="konsultasi">
          </p>
        </div>

        <p class="help">
          <i class="fas fa-medkit"></i> &nbsp;Tindakan</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Tindakan" v-model="tindakan">
          </p>
        </div>

        <p class="help">
          <i class="fas fa-pills"></i> &nbsp;Obat</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Obat" v-model="obat">
          </p>
        </div>

        <p class="help">
          <i class="fas fa-hospital"></i> &nbsp;Ruangan</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Ruangan" v-model="ruangan">
          </p>
        </div>

      </div>

      <div class="breakDikit"></div>
      <br />

      <!-- /////////////////////////////////////////////////////////////////////////////// -->

      <!-- BIAYA NON MEDIS -->
      <label class="label">
        <i class="fas fa-suitcase"></i> &nbsp;Biaya Non-Medis
      </label>
      <div class="control field has-addons has-icons-right">
        <p v-show="!isBiayaNonMedis" class="control">
          <a class="button rupiah">Rp.</a>
        </p>
        <p v-show="!isBiayaNonMedis" class="control is-expanded">
          <input class="input" type="text" placeholder="Biaya Non-Medis" v-model="biayaNonMedis">
        </p>
        <p v-show="isBiayaNonMedis" class="control is-expanded">
          <input class="input" type="text" placeholder="Biaya Non-Medis" v-model="biayaNonMedis" disabled>
        </p>

        <p class="control" @click="toggleBiayaNonMedis">
          <a class="button expand">
            <span v-show="!isBiayaNonMedis">
              <i class="fas fa-plus"></i>
            </span>
            <span v-show="isBiayaNonMedis">
              <i class="fas fa-minus"></i>
            </span>
          </a>
        </p>
      </div>

      <!-- EXPAND BIAYA NON-MEDIS -->
      <div v-show="isBiayaNonMedis">

        <p class="help">
          <i class="fas fa-bed"></i> &nbsp;Akomodasi</p>
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

        <p class="help">
          <i class="fas fa-utensils"></i> &nbsp;Makan &amp; Minum</p>
        <div class="field has-addons">
          <p class="control">
            <a class="button rupiah">Rp.</a>
          </p>
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Makan & Minum" v-model="catering">
          </p>
        </div>

        <!-- LAIN-LAIN -->
        <p class="help">
          <i class="fas fa-list-ul"></i> &nbsp;Lain-Lain</p>
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

        <!-- EXPAND LAIN-LAIN -->
        <div v-show="isLainLain">
          <p class="help">
            <i class="fas fa-bus"></i> &nbsp;Transport Lokal</p>
          <div class="field has-addons">
            <p class="control">
              <a class="button rupiah">Rp.</a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Transport Lokal" v-model="transport">
            </p>
          </div>

          <p class="help">
            <i class="fas fa-comments"></i> &nbsp;Konseling</p>
          <div class="field has-addons">
            <p class="control">
              <a class="button rupiah">Rp.</a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Konseling" v-model="konseling">
            </p>
          </div>

          <p class="help">
            <i class="fas fa-user-circle"></i> &nbsp;Personal Assistant</p>
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
      </div>
    </div>

    <br/>

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
      // To Push
      biayaMedis: null,
      konsultasi: null,
      tindakan: null,
      obat: null,
      ruangan: null,
      biayaNonMedis: null,
      akomodasi: null,
      catering: null,
      lainLain: null,
      transport: null,
      konseling: null,
      personalAssistant: null,
      // View Logic
      isTotalBiaya: false,
      isBiayaMedis: false,
      isBiayaNonMedis: false,
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
    biayaNonMedis: function(newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.$nextTick(() => (this.biayaNonMedis = result));
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
        'Klik OK jika isian data Anda sudah LENGKAP dan BENAR.\nKlik Cancel untuk memeriksa kembali isian data Anda.'
      );

      if (answer) {
        this.$store.state.collections.push({
          // MEDIS
          biayaMedis: parseInt(this.removeDots(this.biayaMedis)), // 0
          konsultasi: parseInt(this.removeDots(this.konsultasi)), // 1
          tindakan: parseInt(this.removeDots(this.tindakan)), // 2
          obat: parseInt(this.removeDots(this.obat)), // 3
          ruangan: parseInt(this.removeDots(this.ruangan)), // 4
          // NON-MEDIS
          biayaNonMedis: parseInt(this.removeDots(this.biayaNonMedis)), // 5
          akomodasi: parseInt(this.removeDots(this.akomodasi)), // 6
          catering: parseInt(this.removeDots(this.catering)), // 7
          // LAIN-LAIN
          lainLain: parseInt(this.removeDots(this.lainLain)), // 8
          transport: parseInt(this.removeDots(this.transport)), // 9
          konseling: parseInt(this.removeDots(this.konseling)), // 10
          personalAssistant: parseInt(this.removeDots(this.personalAssistant)) // 11
        });

        this.$store.state.hitungSiklusForm++;
      }
    },
    removeDots(numbers) {
      if (numbers) {
        return numbers.split('.').join('');
      } else return 0;
    },
    toggleTotalBiaya() {
      this.isTotalBiaya = !this.isTotalBiaya;
      this.totalBiaya = null;
    },
    toggleBiayaMedis() {
      this.isBiayaMedis = !this.isBiayaMedis;
      this.biayaMedis = null;
    },
    toggleBiayaNonMedis() {
      this.isBiayaNonMedis = !this.isBiayaNonMedis;
      this.biayaNonMedis = null;
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

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 320px;
  background-color: #f0fafc;
  color: #1c696b;
  text-align: left;
  padding: 5px 0;
  border-radius: 6px;
  border: 1px solid #1c696b;
  padding: 15px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -300px;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

/* Bottom Arrow */
.tooltip .tooltiptext::after {
  content: ' ';
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 10px;
  border-style: solid;
  border-color: #1c696b transparent transparent transparent;
}
</style>