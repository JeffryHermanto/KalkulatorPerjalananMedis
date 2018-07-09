<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-5-desktop is-5-widescreen">
            <form class="box" @submit.prevent>

              <div class="field has-text-centered">
                <img src="../assets/logo.png" width="100">
              </div>

              <h1 class="is-size-5 has-text-centered has-text-weight-bold">kemodijakarta.com</h1><br />
              <p class="is-size-5 has-text-centered instruksi">Kalkulator Perjalanan Medis</p>
              <hr />

              <div class="field">
                <label class="label">Nama Lengkap</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Nama Lengkap" oninvalid="this.setCustomValidity('Silahkan isi nama Anda terlebih dahulu.')" oninput="setCustomValidity('')" v-model="nama" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Asal</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Asal" oninvalid="this.setCustomValidity('Silahkan isi kota asal Anda terlebih dahulu.')" oninput="setCustomValidity('')" v-model="asal" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
              </div>

              <div class="break1"></div>

              <div class="columns">
                <div class="column is-half">
                  <label class="label">
                    <i class="fas fa-calendar-alt"></i> &nbsp;Berangkat</label>
                  <div class="control">
                    <input class="input" type="date" oninvalid="this.setCustomValidity('Silahkan isi tanggal berangkat Anda terlebih dahulu.')" oninput="setCustomValidity('')" v-model="tanggalBerangkat" :min="tanggalSekarang" required>
                  </div>
                </div>

                <div class="column is-half">
                  <label class="label">
                    <i class="far fa-calendar-alt"></i> &nbsp;Pulang</label>
                  <div class="control">
                    <input class="input" type="date" oninvalid="this.setCustomValidity('Silahkan isi tanggal pulang Anda terlebih dahulu.')" oninput="setCustomValidity('')" v-model="tanggalPulang" :min="tanggalSekarang" required>
                  </div>
                </div>
              </div>

              <!-- SAFARI USER -->
              <div class="help">
                <i class="far fa-lightbulb"></i> &nbsp;Di
                <em>browser Safari</em>, ketik tanggal dengan format YYYY/MM/DD
              </div>
              <br />

              <div class="notification is-danger" v-if="peringatan">
                <button class="delete" @click="clearWarning"></button>
                {{ pesan }}
              </div>

              <button type="submit" class="button is-medium is-success is-fullwidth" @click="masuk">
                <i class="fas fa-sign-in-alt"></i> &nbsp;&nbsp;Mulai
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'home',
  data() {
    return {
      nama: null,
      asal: null,
      tanggalSekarang: moment(Date.now()).format('YYYY-MM-DD'),
      tanggalBerangkat: null,
      tanggalPulang: null,
      pesan: null,
      peringatan: false
    };
  },
  methods: {
    masuk() {
      this.$store.state.nama = this.nama;
      this.$store.state.asal = this.asal;
      this.$store.state.tanggalBerangkat = this.tanggalBerangkat;
      this.$store.state.tanggalPulang = this.tanggalPulang;

      let tglBerangkat = moment(this.tanggalBerangkat);
      let tglPulang = moment(this.tanggalPulang);
      this.$store.state.durasiHari = tglPulang.diff(tglBerangkat, 'days');
      this.$store.state.durasiMinggu = tglPulang.diff(tglBerangkat, 'weeks');
      this.$store.state.durasiBulan = tglPulang.diff(tglBerangkat, 'months');

      if (
        this.$store.state.durasiHari < 0 ||
        this.tanggalSekarang > this.tanggalBerangkat
      ) {
        this.pesan =
          'Input tanggal tidak valid. Pastikan tanggal berangkat setelah tanggal kemarin dan tanggal pulang setelah tanggal berangkat.';
        this.peringatan = true;
      } else {
        this.$router.push({
          name: 'kalkulator',
          params: {
            nama: this.nama,
            tanggalBerangkat: this.tanggalBerangkat,
            tanggalPulang: this.tanggalPulang
          }
        });
      }
    },
    clearWarning() {
      this.peringatan = false;
      this.pesan = null;
    }
  }
};
</script>

<style>
.break1 {
  margin: 25px;
}
.break2 {
  margin: 18px;
}
.instruksi {
  margin-top: -3px;
  margin-bottom: -15px;
}
</style>