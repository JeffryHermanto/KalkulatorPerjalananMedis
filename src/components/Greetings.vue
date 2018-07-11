<template>
  <div>
    <h1 class="salam">Halo
      <strong>{{ nama }}</strong>,
    </h1>
    <p class="is-size-6 instruksi">Silahkan isi data perjalanan medis Anda...</p>

    <hr/>

    <div class="columns">
      <div class="column is-4">
        <div v-if="durasi">
          <div class="tags has-addons">
            <span class="tag is-dark">Durasi</span>
            <span :class="durasi.warna">
              <strong>{{ durasi.durasi }}</strong>&nbsp;{{ durasi.satuan }}
            </span>
          </div>
        </div>
      </div>

      <div class="column is-8">
        <small>Tanggal:
          <strong>{{ formatTanggalBerangkat }}</strong> s/d
          <strong>{{ formatTanggalPulang }}</strong>
        </small>
      </div>
    </div>

    <div class="break2"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'Greetings',
  computed: {
    ...mapGetters([
      'nama',
      'tanggalBerangkat',
      'tanggalPulang',
      'durasiHari',
      'durasiMinggu',
      'durasiBulan',
      'durasiTahun'
    ]),
    formatTanggalBerangkat() {
      return moment(this.tanggalBerangkat).format('DD MMM YYYY');
    },
    formatTanggalPulang() {
      return moment(this.tanggalPulang).format('DD MMM YYYY');
    },
    durasi() {
      if (this.durasiTahun)
        return {
          durasi: this.durasiTahun,
          satuan: 'Tahun',
          warna: 'tag is-info'
        };
      if (this.durasiBulan)
        return {
          durasi: this.durasiBulan,
          satuan: 'Bulan',
          warna: 'tag is-link'
        };
      if (this.durasiMinggu && this.durasiHari > 7)
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
  }
};
</script>

<style>
.salam {
  font-size: 1.3em;
  padding-bottom: 7px;
}
.tag {
  pointer-events: none;
}
</style>