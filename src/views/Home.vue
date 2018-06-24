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

              <h1 class="is-size-4 has-text-centered has-text-weight-bold	">kemodijakarta.com</h1>
              <br />
              <p class="is-size-5 has-text-centered">Silahkan isi data perjalanan Anda</p>
              <hr />

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

              <div class="columns">
                <div class="column">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Datang...</option>
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
                <div class="column">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Pulang...</option>
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

              <button type="submit" class="button is-success is-fullwidth">
                <i class="fa fa-sign-in"></i> &nbsp;Masuk
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