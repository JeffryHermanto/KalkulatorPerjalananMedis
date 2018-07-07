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
        <tr v-show="cekIsiMedis(collections)">
          <td style="vertical-align: middle; text-align: left"></td>
          <td>Total Biaya</td>
          <td class="money" v-for="(collection, index) in collections" :key="index">
            <div v-show="collection.totalBiaya > 0" class="currencySymbol">Rp.&nbsp;</div>
            <span v-show="collection.totalBiaya > 0">{{ formatPrice(collection.totalBiaya) }},-</span>
          </td>

          <!-- TOTAL SAMPING -->
          <td v-show="sumByPropsObj[0].sum > 0" class="money">
            <div class="currencySymbol">Rp.&nbsp;</div>
            {{ formatPrice(sumByPropsObj[0].sum) }},-
          </td>
          <td v-show="!sumByPropsObj[0].sum > 0"></td>
        </tr>

        <!-- BIAYA MEDIS -->
        <tbody>
          <tr v-show="cekIsiMedis(collections)">
            <td :rowspan="rowSpanMedis" style="vertical-align: middle; text-align: left">
              <strong>Medis</strong>
            </td>
            <td>Medis</td>
            <td v-show="isMedis === false" class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.biayaMedis + collection.konsultasi + collection.tindakan + collection.obat + collection.ruangan) }},-
            </td>
            <td v-show="isMedis" class="money" v-for="(collection, index) in collections" :key="index"></td>
            <!-- TOTAL SAMPING -->
            <td v-show="isMedis === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[1].sum + sumByPropsObj[3].sum + sumByPropsObj[4].sum + sumByPropsObj[5].sum + sumByPropsObj[6].sum) }},-
            </td>
            <td v-show="isMedis"></td>
          </tr>

          <tr v-show="collections[0].konsultasi">
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
            <td v-show="isMedis" class="money" v-for="(collection, index) in collections" :key="index"></td>
            <!-- TOTAL SAMPING -->
            <td v-show="isMedis === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[1].sum + sumByPropsObj[3].sum + sumByPropsObj[4].sum + sumByPropsObj[5].sum + sumByPropsObj[6].sum) }},-
            </td>
            <td v-show="isMedis"></td>
          </tr>

          <tr v-if="isMedis">
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konsultasi</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.konsultasi) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[3].sum) }},-
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
              {{ formatPrice(sumByPropsObj[4].sum) }},-
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
              {{ formatPrice(sumByPropsObj[5].sum) }},-
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
              {{ formatPrice(sumByPropsObj[6].sum) }},-
            </td>
          </tr>

          <!-- BIAYA NON MEDIS -->
          <tr v-show="cekIsiNonMedisAkomodasi(collections)">
            <td :rowspan="rowSpanLainLain" style="vertical-align: middle; text-align: left">
              <strong>Non-<br />Medis</strong>
            </td>
            <td>Akomodasi</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.akomodasi) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[7].sum) }},-
            </td>
          </tr>

          <tr v-show="cekIsiNonMedisAkomodasi(collections)">
            <td>Makan &amp; Minum</td>
            <td class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.catering) }},-
            </td>
            <!-- TOTAL SAMPING -->
            <td class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[8].sum) }},-
            </td>
          </tr>

          <!-- LAIN-LAIN -->
          <tr v-show="cekIsiLainLain(collections)">
            <td>Lain-lain</td>
            <td v-show="isLainLain === false" class="money" v-for="(collection, index) in collections" :key="index">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(collection.lainLain + collection.tiketPesawat + collection.transport + collection.konseling + collection.personalAssistant) }},-
            </td>
            <td v-show="isLainLain" class="money" v-for="(collection, index) in collections" :key="index"></td>
            <!-- TOTAL SAMPING -->
            <td v-show="isLainLain === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[2].sum + sumByPropsObj[9].sum + sumByPropsObj[10].sum + sumByPropsObj[11].sum + sumByPropsObj[12].sum) }},-
            </td>
            <td v-show="isLainLain"></td>
          </tr>

          <tr v-show="collections[0].tiketPesawat">
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
              {{ formatPrice(collection.lainLain + collection.tiketPesawat + collection.transport + collection.konseling + collection.personalAssistant) }},-
            </td>
            <td v-show="isLainLain" class="money" v-for="(collection, index) in collections" :key="index"></td>
            <!-- TOTAL SAMPING -->
            <td v-show="isLainLain === false" class="money">
              <div class="currencySymbol">Rp.&nbsp;</div>
              {{ formatPrice(sumByPropsObj[2].sum + sumByPropsObj[9].sum + sumByPropsObj[10].sum + sumByPropsObj[11].sum + sumByPropsObj[12].sum) }},-
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
              {{ formatPrice(sumByPropsObj[9].sum) }},-
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
              {{ formatPrice(sumByPropsObj[10].sum) }},-
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
              {{ formatPrice(sumByPropsObj[11].sum) }},-
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
              {{ formatPrice(sumByPropsObj[12].sum) }},-
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
