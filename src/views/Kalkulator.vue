<template>
    <section class="hero is-info is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-6-tablet is-5-desktop is-5-widescreen">
                        <form class="box">
                            <h1>Biaya Perjalanan
                                <strong>{{ nama }}</strong>
                            </h1>
                            <hr/>
                            <div class="field is-grouped is-grouped-multiline">
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag">{{ durasiBulan }}</span>
                                        <span class="tag is-info">Bulan</span>
                                    </div>
                                </div>

                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag">{{ durasiMinggu }}</span>
                                        <span class="tag is-warning">Minggu</span>
                                    </div>
                                </div>

                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag">{{ durasiHari }}</span>
                                        <span class="tag is-success">Hari</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Kalkulator',
    props: ['nama'],
    computed: mapGetters([
      'nama',
      'tanggalBerangkat',
      'tanggalPulang',
      'durasiHari',
      'durasiMinggu',
      'durasiBulan'
    ]),
}

</script>