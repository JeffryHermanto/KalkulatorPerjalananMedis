<template>
  <div>

    <div v-for="(collection, index) in newCollections" :key="index">
      <article class="media">
        <div class="media-left">

          <div class="box has-text-centered">
            <small>
              <em>{{ durasi.satuan }}</em>
            </small>
            <h1 class="is-size-4">
              <strong>{{ index + 1 }}</strong>
            </h1>
          </div>

        </div>
        <div class="media-content">
          <div class="content">

            <div v-for="(prop, key) in collection" :key="key">
              <p v-show="prop>0">{{ key }}
                <strong>Rp. {{ formatPrice(prop) }},-</strong>
              </p>
            </div>

            <div class="break1"></div>

            <blockquote>
              <p>Rp. {{ formatPrice(jumlahkan(collection)) }},-</p>
            </blockquote>
          </div>
        </div>
      </article>
      <hr/>
    </div>

    <br />

    <article class="message is-primary has-text-centered">
      <div class="message-header">
        <p>Total Budget Perjalanan Medis</p>
      </div>
      <div class="message-body">
        <p class="is-subtitle is-size-4">
          <strong>Rp. {{ formatPrice(grandSummary) }},-</strong>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import objectRenameKeys from 'object-rename-keys';

export default {
  name: 'ListView',
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
        totalBiaya: 'Total Biaya:',
        biayaMedis: 'Biaya Medis:',
        konsultasi: 'Konsultasi:',
        tindakan: 'Tindakan:',
        obat: 'Obat:',
        ruangan: 'Ruangan:',
        akomodasi: 'Akomodasi:',
        catering: 'Catering:',
        lainLain: 'Lain-Lain:',
        tiketPesawat: 'Tiket Pesawat:',
        transport: 'Transport:',
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
blockquote p {
  margin-top: -10px;
  margin-bottom: -10px;
  margin-left: -10px;
  font-size: 1.15em;
}
</style>