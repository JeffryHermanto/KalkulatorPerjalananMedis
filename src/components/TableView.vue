<template>
  <div class="tableWrapper">
    <div class="lebarKonten">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Biaya</th>
            <th v-for="(collection, index) in collections" :key="index">
              {{ durasi.satuan }} {{ index + 1 }}
            </th>
            <th>Total</th>
          </tr>
        </thead>

        <!-- TOTAL BIAYA -->
        <tr>
          <td style="vertical-align: middle; text-align: left">
            <strong></strong>
          </td>
          <td>Total Biaya</td>
          <td class="money" v-for="(collection, index) in collections" :key="index">
            <div class="currencySymbol">Rp.&nbsp;</div>
            {{ formatPrice(collection.totalBiaya) }},-
          </td>
          <td class="money">
            <div class="currencySymbol">Rp.&nbsp;</div>
            {{ formatPrice(sumByPropsObj[0].sum) }},-
          </td>
        </tr>

        <!-- BIAYA MEDIS -->
        <tbody>
          <tr>
            <td :rowspan="rowSpanMedis" style="vertical-align: middle; text-align: left">
              <strong>Medis</strong>
            </td>
            <td>
              <span @click="toggleIsMedis" v-show="!isMedis">
                <i class="fas fa-angle-right"></i>
              </span>
              <span @click="toggleIsMedis" v-show="isMedis">
                <i class="fas fa-angle-down"></i>
              </span>
              <span @click="toggleIsMedis">&nbsp;Medis</span>
            </td>
            <td v-show="isMedis === false" class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.biayaMedis) }},-
            </td>
            <td v-show="isMedis" class="money" v-for="(collection, index) in collections" :key="index"></td>
            <td v-show="isMedis === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[1].sum) }},-
            </td>
            <td v-show="isMedis"></td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konsultasi</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.konsultasi) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[5].sum) }},-
            </td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tindakan</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.tindakan) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[6].sum) }},-
            </td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obat</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.obat) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[7].sum) }},-
            </td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ruangan</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.ruangan) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[8].sum) }},-
            </td>
          </tr>

          <!-- BIAYA NON MEDIS -->
          <tr>
            <td :rowspan="rowSpanLainLain" style="vertical-align: middle; text-align: left">
              <strong>Non-<br />Medis</strong>
            </td>
            <td>Akomodasi</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.akomodasi) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[2].sum) }},-
            </td>
          </tr>

          <tr>
            <td>Makan &amp; Minum</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.catering) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[3].sum) }},-
            </td>
          </tr>

          <tr>
            <td>
              <span @click="toggleIsLainLain" v-show="!isLainLain">
                <i class="fas fa-angle-right"></i>
              </span>
              <span @click="toggleIsLainLain" v-show="isLainLain">
                <i class="fas fa-angle-down"></i>
              </span>
              <span @click="toggleIsLainLain">&nbsp;Lain-lain</span>
            </td>
            <td v-show="isLainLain === false" class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.lainLain) }},-
            </td>
            <td v-show="isLainLain" class="money" v-for="(collection, index) in collections" :key="index"></td>
            <td v-show="isLainLain === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[4].sum + sumByPropsObj[9].sum) }},-
            </td>
            <td v-show="isLainLain"></td>
          </tr>

          <tr v-if="isLainLain">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tiket Pesawat</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.tiketPesawat) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[8].sum) }},-
            </td>
          </tr>

          <tr v-if="isLainLain">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transport</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.transport) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[9].sum) }},-
            </td>
          </tr>

          <tr v-if="isLainLain">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konseling</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.konseling) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[10].sum) }},-
            </td>
          </tr>

          <tr v-if="isLainLain">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personal Assistant</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.personalAssistant) }},-
            </td>
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[11].sum) }},-
            </td>
          </tr>

          <!-- GRAND SUMMARY -->
          <tr>
            <td></td>
            <th>Total</th>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(jumlahkan(collection)) }},-
            </td>
            <td class="money">
              <strong>
                <div class="currencySymbol">Rp.&nbsp;</div>
                {{ formatPrice(grandSummary) }}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import moment from 'moment';

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
      'grandSummary',
      'sumByPropsObj'
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
    },
    jumlahkanMedis(current) {
      let jumlah = 0;
      jumlah =
        current.konsultasi + current.tindakan + current.obat + current.ruangan;
      return jumlah;
    },
    jumlahkanLainLain(current) {
      let jumlah = 0;
      jumlah = current.konseling + current.personalAssistant;
      return jumlah;
    },
    toggleIsMedis() {
      this.isMedis = !this.isMedis;
      if (this.isMedis) {
        this.rowSpanMedis = 5;
      } else {
        this.rowSpanMedis = 1;
      }
    },
    toggleIsLainLain() {
      this.isLainLain = !this.isLainLain;
      if (this.isLainLain) {
        this.rowSpanLainLain = 7;
      } else {
        this.rowSpanLainLain = 3;
      }
    }
  },
  data() {
    return {
      isMedis: false,
      rowSpanMedis: 1,
      isLainLain: false,
      rowSpanLainLain: 3
    };
  }
};
</script>

<style>
.tableWrapper {
  overflow-x: auto;
}
.lebarKonten {
  width: max-content;
}
td.money {
  text-align: right;
}
.currencySymbol {
  float: left;
}
span:hover {
  color: blue;
  cursor: pointer;
}
</style>
