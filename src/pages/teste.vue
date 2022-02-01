<template>

    <q-page>
      <q-separator />
      <div class="row bg-green-5 flex justify-around items-center q-px-md">
        <q-btn round icon="menu" color="green" @click="showDefault"  />
            <div class="col q-ml-xl  q-py-md">
                  <q-img
                    src="~/assets/logo_escola.png" style="max-width:350px">
                  </q-img>

            </div>
            <div class="col items-center">
                  <q-toolbar-title class="text-white text-h6 ">
                  Caródromo Digital 2022
                  </q-toolbar-title>
            </div>

      </div>
      <div class="q-ma-md">
        <div class="text-h5 text-bold q-px-md q-py-sm">UpDate Last</div>
        <div class="row  q-gutter-sm">
          <div class="col-12 col-md bg-yellow-8">
            <div class="q-pa-md">
              <q-card class="my-card">
                <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="col-12 col-md bg-yellow-10">
              <div class="q-pa-md">
              <q-card class="my-card">
                <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="col-12 col-md bg-yellow-10">
              <div class="q-pa-md">
              <q-card class="my-card">
                <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </q-page>
</template>
<script>

import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    return {
      showDefault () {
        $q.notify({
          spinner: true,
          message: 'Carregando.. Aguarde!',
          timeout: 2000
        })
      }

      // showCustom () {
      //   $q.notify({
      //     spinner: QSpinnerGears,
      //     message: 'Working...',
      //     timeout: 2000
      //   })
      // }
    }
  }
}
</script>
