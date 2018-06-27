import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nama: null,
    tanggalBerangkat: null,
    tanggalPulang: null,
    durasiHari: null,
    durasiMinggu: null,
    durasiBulan: null,
    siklusForm: null,
    hitungSiklusForm: 1,
    collections: [],
    grandSummary: null
  },
  getters: {
    nama: state => {
      return state.nama
    },
    tanggalBerangkat: state => {
      return state.tanggalBerangkat
    },
    tanggalPulang: state => {
      return state.tanggalPulang
    },
    durasiHari: state => {
      return state.durasiHari
    },
    durasiMinggu: state => {
      return state.durasiMinggu
    },
    durasiBulan: state => {
      return state.durasiBulan
    },
    siklusForm: state => {
      if (state.durasiBulan)
        return state.durasiBulan;
      if (state.durasiMinggu)
        return state.durasiMinggu;
      if (state.durasiHari)
        return state.durasiHari;
    },
    hitungSiklusForm: state => {
      return state.hitungSiklusForm
    },
    collections: state => {
      return state.collections
    },
    grandSummary: state => {
      return state.collections.reduce((sum, current) => {
        function jumlahkan(current) {
          let jumlah = 0;
          for (let el in current) {
            if (current.hasOwnProperty(el)) {
              jumlah += parseFloat(current[el]);
            }
          }
          return jumlah;
        }
        return sum + jumlahkan(current);
      }, 0);
    }
  },
  mutations: {

  },
  actions: {

  }
})