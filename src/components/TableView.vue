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

        <tbody>

          <!-- BIAYA MEDIS -->
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
              {{ formatPrice(collection.biayaMedis + collection.konsultasi + collection.tindakan + collection.obat + collection.ruangan) }},-
            </td>
            <td v-show="isMedis" class="money" v-for="(collection, index) in collections" :key="index">
              <div v-show="collection.konsultasi === 0">
                <div class="currencySymbol">Rp.&nbsp;</div>
                {{ formatPrice(collection.biayaMedis + collection.konsultasi + collection.tindakan + collection.obat + collection.ruangan) }},-
              </div>
            </td>
            <!-- TOTAL SAMPING -->
            <td v-show="isMedis === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[0].sum + sumByPropsObj[1].sum + sumByPropsObj[2].sum + sumByPropsObj[3].sum + sumByPropsObj[4].sum) }},-
            </td>
            <td v-show="isMedis" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[0].sum) }},-
            </td>
          </tr>

          <!-- EXPAND BIAYA MEDIS -->
          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konsultasi</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.konsultasi) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[1].sum) }},-
            </td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tindakan</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.tindakan) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[2].sum) }},-
            </td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obat</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.obat) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[3].sum) }},-
            </td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ruangan</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.ruangan) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[4].sum) }},-
            </td>
          </tr>

          <!-- ///////////////////////////////////////////////////////////////////////////// -->

          <!-- BIAYA NON-MEDIS  -->
          <tr>
            <td :rowspan="rowSpanNonMedis" style="vertical-align: middle; text-align: left">
              <strong>Non-Medis</strong>
            </td>
            <td>
              <span @click="toggleIsNonMedis" v-show="!isNonMedis">
                <i class="fas fa-angle-right"></i>
              </span>
              <span @click="toggleIsNonMedis" v-show="isNonMedis">
                <i class="fas fa-angle-down"></i>
              </span>
              <span @click="toggleIsNonMedis">&nbsp;Non-Medis</span>
            </td>
            <td v-show="isNonMedis === false" class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.biayaNonMedis + collection.akomodasi + collection.catering + collection.lainLain + collection.transport + collection.konseling + collection.personalAssistant) }},-
            </td>
            <td v-show="isNonMedis" class="money" v-for="(collection, index) in collections" :key="index">
              <div v-show="collection.akomodasi === 0">
                <div class="currencySymbol">Rp.&nbsp;</div>
                {{ formatPrice(collection.biayaNonMedis + collection.akomodasi + collection.catering + collection.lainLain + collection.transport + collection.konseling + collection.personalAssistant) }},-
              </div>
            </td>
            <!-- TOTAL SAMPING -->
            <td v-show="isNonMedis === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[5].sum + sumByPropsObj[6].sum + sumByPropsObj[7].sum + sumByPropsObj[8].sum + sumByPropsObj[9].sum + sumByPropsObj[10].sum + sumByPropsObj[11].sum) }},-
            </td>
            <td v-show="isNonMedis" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[5].sum) }},-
            </td>
          </tr>

          <!-- EXPAND BIAYA NON-MEDIS -->
          <tr v-if="isNonMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Akomodasi</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.akomodasi) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[6].sum) }},-
            </td>
          </tr>

          <tr v-if="isNonMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Makan &amp; Minum</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.catering) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[7].sum) }},-
            </td>
          </tr>

          <!-- LAIN-LAIN -->
          <tr v-if="isNonMedis">
            <td>
              <span @click="toggleIsLainLain" v-show="!isLainLain">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fas fa-angle-right"></i>
              </span>
              <span @click="toggleIsLainLain" v-show="isLainLain">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fas fa-angle-down"></i>
              </span>
              <span @click="toggleIsLainLain">&nbsp;Lain-lain</span>
            </td>
            <td v-show="isLainLain === false" class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.lainLain + collection.transport + collection.konseling + collection.personalAssistant) }},-
            </td>
            <td v-show="isLainLain" class="money" v-for="(collection, index) in collections" :key="index">
              <div v-show="collection.transport === 0">
                <div class="currencySymbol">Rp.&nbsp;</div>
                {{ formatPrice(collection.lainLain + collection.transport + collection.konseling + collection.personalAssistant) }},-
              </div>
            </td>
            <!-- TOTAL SAMPING -->
            <td v-show="isLainLain === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[8].sum + sumByPropsObj[9].sum + sumByPropsObj[10].sum + sumByPropsObj[11].sum) }},-
            </td>
            <td v-show="isLainLain" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[8].sum) }},-
            </td>
          </tr>

          <!-- EXPAND LAIN-LAIN -->
          <tr v-if="isLainLain">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transport Lokal</td>
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
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konseling</td>
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
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personal Assistant</td>
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
                {{ formatPrice(grandSummary) }},-
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
      'durasiTahun',
      'collections',
      'grandSummary',
      'sumByPropsObj'
    ]),
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
    toggleIsNonMedis() {
      this.isNonMedis = !this.isNonMedis;
      this.isLainLain = false;
      if (this.isNonMedis) {
        this.rowSpanNonMedis = 4;
      } else {
        this.rowSpanNonMedis = 1;
      }
    },
    toggleIsLainLain() {
      this.isLainLain = !this.isLainLain;
      if (this.isLainLain) {
        this.rowSpanNonMedis = 7;
      } else {
        this.rowSpanNonMedis = 4;
      }
    },
    cekIsiMedis(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].biayaMedis) return true;
      }
      return false;
    },
    cekIsiKonsultasi(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].konsultasi) return true;
      }
      return false;
    },
    cekIsiNonMedisAkomodasi(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].akomodasi) return true;
      }
      return false;
    },
    cekIsiLainLain(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].lainLain) return true;
      }
      return false;
    }
  },
  data() {
    return {
      isMedis: false,
      rowSpanMedis: 1,
      isNonMedis: false,
      rowSpanNonMedis: 1,
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
