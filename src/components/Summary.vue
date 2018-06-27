<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Rangkuman</p>
        <button class="button is-small is-rounded is-danger is-inverted" @click="ulangi">
          <i class="fas fa-power-off"></i> &nbsp;&nbsp;Ulangi
        </button>
      </header>
      <section class="modal-card-body">

        <div class="box">
          <h1 class="is-title is-size-4 has-text-centered">
            <strong>{{ nama }}</strong>
          </h1>
        </div>

        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Durasi Perjalanan</span>
              <span :class="durasi.warna">
                <strong>{{ durasi.durasi }}</strong>&nbsp;{{ durasi.satuan }}</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Berangkat</span>
              <span class="tag is-light">{{ formatTanggalBerangkat }}</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Kembali</span>
              <span class="tag is-light">{{ formatTanggalPulang }}</span>
            </div>
          </div>
        </div>

        <br/>

        <!-- DATA -->
        <div v-for="(collection, index) in newCollections" :key="index">
          <article class="media">
            <div class="media-left">
              <h1 class="is-size-4">
                <strong>{{ index + 1 }}</strong>
              </h1>
            </div>
            <div class="media-content">
              <div class="content">
                <div v-for="(prop, index) in collection" :key="index">
                  <p>{{ index }}
                    <strong>Rp. {{ formatPrice(prop) }},-</strong>
                  </p>
                </div>
                <div class="break1"></div>
                <blockquote>
                  <p class="is-size-5">Rp. {{ formatPrice(jumlahkan(collection)) }},-</p>
                </blockquote>
              </div>
            </div>
          </article>
          <hr/>
        </div>
        <!-- END OF DATA -->

        <br />

        <article class="message is-primary">
          <div class="message-header">
            <p>Total Budget Perjalanan Medis</p>
          </div>
          <div class="message-body">
            <p class="is-subtitle is-size-4">
              <strong>Rp. {{ formatPrice(grandSummary) }},-</strong>
            </p>
          </div>
        </article>

      </section>
      <footer class="modal-card-foot">
        <button class="button is-success is-fullwidth">Simpan PDF</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import objectRenameKeys from 'object-rename-keys';

export default {
  name: 'Summary',
  computed: {
    ...mapGetters([
      'nama',
      'tanggalBerangkat',
      'tanggalPulang',
      'durasiHari',
      'durasiMinggu',
      'durasiBulan',
      'collections',
      'grandSummary'
    ]),
    formatTanggalBerangkat() {
      return moment(this.tanggalBerangkat).format('DD MMM YYYY');
    },
    formatTanggalPulang() {
      return moment(this.tanggalPulang).format('DD MMM YYYY');
    },
    durasi() {
      if (this.durasiBulan)
        return {
          durasi: this.durasiBulan,
          satuan: 'Bulan',
          warna: 'tag is-link'
        };
      if (this.durasiMinggu)
        return {
          durasi: this.durasiMinggu,
          satuan: 'Minggu',
          warna: 'tag is-warning'
        };
      if (this.durasiHari || this.durasiHari === 0)
        return {
          durasi: this.durasiHari,
          satuan: 'Hari',
          warna: 'tag is-success'
        };
    },
    newCollections() {
      let changes = {
        konsultasi: 'Konsultasi:',
        tindakan: 'Tindakan:',
        obat: 'Obat:',
        ruangan: 'Ruangan:',
        tiketPesawat: 'Tiket Pesawat:',
        akomodasi: 'Akomodasi:',
        transport: 'Transport:',
        catering: 'Catering:',
        konseling: 'Konseling:',
        personalAssistant: 'Personal Assistant:'
      };

      let result = objectRenameKeys(this.collections, changes);
      return result;
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    ulangi() {
      const answer = window.confirm(
        'Yakin mau ulangi dari awal? Simpan PDF Anda terlebih dahulu.'
      );
      if (answer) {
        this.$store.state.nama = null;
        this.$store.state.tanggalBerangkat = null;
        this.$store.state.tanggalPulang = null;
        this.$store.state.durasiHari = null;
        this.$store.state.durasiMinggu = null;
        this.$store.state.durasiBulan = null;
        this.$store.state.siklusForm = null;
        this.$store.state.hitungSiklusForm = 1;
        this.$store.state.collections = [];
        this.$store.state.grandSummary = null;
        return this.$router.push({ name: 'home' });
      }
    },
    jumlahkan(current) {
      let jumlah = 0;
      for (let el in current) {
        if (current.hasOwnProperty(el)) {
          jumlah += parseFloat(current[el]);
        }
      }
      return jumlah;
    }
  }
};
</script>

<style>
.break1 {
  margin-bottom: -10px;
}
</style>