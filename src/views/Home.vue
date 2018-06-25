<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">
            <form class="box">

              <div class="field has-text-centered">
                <img src="../assets/logo.png" width="160">
              </div>

              <h1 class="is-size-4 has-text-centered has-text-weight-bold	">kemodijakarta.com</h1><br />
              <p class="is-size-6 has-text-centered">Silahkan isi data perjalanan Anda</p><hr />

              <div class="field">
                <label class="label">Nama</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Nama Lengkap" v-model="nama" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Durasi</label>
              </div>

              <div class="columns is-mobile">
                <div class="column">
                  <div class="control has-icons-left">
                    <div class="icon is-small is-left">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="select is-fullwidth">
                      <select>
                        <option selected>Datang...</option>
                        <option>Januari</option>
                        <option>Februari</option>
                        <option>Maret</option>
                        <option>April</option>
                        <option>Mei</option>
                        <option>Juni</option>
                        <option>Juli</option>
                        <option>Agustus</option>
                        <option>September</option>
                        <option>Oktober</option>
                        <option>November</option>
                        <option>Desember</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="control has-icons-left">
                    <div class="icon is-small is-left">
                      <i class="far fa-calendar-alt"></i>
                    </div>
                    <div class="select is-fullwidth">
                      <select>
                        <option selected>Pulang...</option>
                        <option>Januari</option>
                        <option>Februari</option>
                        <option>Maret</option>
                        <option>April</option>
                        <option>Mei</option>
                        <option>Juni</option>
                        <option>Juli</option>
                        <option>Agustus</option>
                        <option>September</option>
                        <option>Oktober</option>
                        <option>November</option>
                        <option>Desember</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" class="button is-success is-fullwidth">
                <i class="fas fa-sign-in-alt"></i> &nbsp;&nbsp;Masuk
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      nama: null,
      bulanDatang: null,
      bulanPulang: null
    }
  }
};
</script>