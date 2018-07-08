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
        <div>Kota asal:
          <strong>{{ asal }}</strong>
        </div>
        <br />
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

        <!-- VIEW SELECT -->
        <div class="tabs is-boxed">
          <ul>
            <li :class="[ selectedView === 'listView' ? 'is-active' : '']" @click="selectedView = 'listView'">
              <a>
                <span class="icon is-small ">
                  <i class="fas fa-list-ul "></i>
                </span>
                <span>List View</span>
              </a>
            </li>
            <li :class="[ selectedView === 'tableView' ? 'is-active' : '']" @click="selectedView = 'tableView'">
              <a>
                <span class=" icon is-small ">
                  <i class="fas fa-table "></i>
                </span>
                <span>Desktop View</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- SELECTED VIEW -->
        <ListView v-show="selectedView === 'listView'" />
        <TableView v-show="selectedView === 'tableView'" />

      </section>
      <footer class="modal-card-foot ">
        <button class="button is-medium is-success is-fullwidth ">Simpan PDF</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import TableView from './TableView';
import ListView from './ListView';

export default {
  name: 'Summary',
  components: {
    TableView,
    ListView
  },
  data() {
    return {
      selectedView: 'listView'
    };
  },
  computed: {
    ...mapGetters([
      'nama',
      'asal',
      'tanggalBerangkat',
      'tanggalPulang',
      'durasiHari',
      'durasiMinggu',
      'durasiBulan'
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
          durasi: this.durasiMinggu + 1,
          satuan: 'Minggu',
          warna: 'tag is-warning'
        };
      if (this.durasiHari || this.durasiHari === 0)
        return {
          durasi: this.durasiHari,
          satuan: 'Hari',
          warna: 'tag is-success'
        };
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
    }
  }
};
</script>
