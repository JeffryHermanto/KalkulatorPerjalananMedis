<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-5-desktop is-5-widescreen">
            <form class="box" @submit.prevent>
              <h1 class="salam">Halo,
                <strong>{{ nama }}</strong>
              </h1>
              <p class="is-size-6 instruksi">Silahkan isi data perjalanan Anda...</p>

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

              <!-- RUMAH SAKIT KANKER -->
              <label class="label">
                <i class="far fa-hospital"></i> &nbsp;Rumah Sakit Kanker
              </label>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Konsultasi">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Tindakan">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Obat">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Ruangan">
                </p>
              </div>

              <br />

              <!-- ADVISORY BY KEMODIJAKARTA -->
              <label class="label">
                <i class="fas fa-bed"></i> &nbsp;Advisory by Kemodijakarta
              </label>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Tiket Pesawat">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Akomodasi & Kebersihan">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Transport">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Catering">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Konseling">
                </p>
              </div>
              <div class="field has-addons">
                <p class="control">
                  <a class="button">
                    Rp.
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="Personal Assistant">
                </p>
              </div>

              <br/>

              <button type="submit" class="button is-medium is-success is-fullwidth">
                Berikutnya&nbsp;&nbsp;
                <i class="fas fa-chevron-right"></i>
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'Kalkulator',
  computed: {
    ...mapGetters([
      'nama',
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
  }
};
</script>

<style>
.salam {
  font-size: 1.3em;
  padding-bottom: 7px;
}
</style>