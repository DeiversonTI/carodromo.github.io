<template>
        <q-page padding class="bg-grey-2 flex justify-center items-center full-height full-width " >
            <div class="row bg-blue-1 q-pa-lg flex justify-center shadow-12 rounded-borders" >
                <div class="col col-xl-12">
                    <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-lg"
                    >
                    <q-space />
                        <div class="full-width text-center ">
                            <div>
                                 <img src="~/assets/logo-2.png" style="max-width:250px;"  />
                            </div>
                            <div>
                                <span class="text-h5 text-weight-light">login</span>
                            </div>
                        </div>
                        <q-input clearable outlined bottom-slots v-model="Email" label="Email" class="text-white">
                            <template v-slot:prepend>
                                <q-icon  name="email" />
                            </template>
                        </q-input>
                        <q-space />
                        <q-input v-model="password"  label="Senha" outlined :type="isPwd ? 'password' : 'text'">
                            <template v-slot:prepend>
                                <q-icon  name="vpn_key"/>
                            </template>
                            <template v-slot:append>
                                <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                        <div>
                            <q-btn label="Entrar" type="submit" color="primary"/>
                            <q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm"/>
                        </div>
                        <q-space />
                    </q-form>

                </div>
            </div>
        </q-page>
</template>
<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
export default {
  name: 'login',

  setup () {
    const $q = useQuasar()
    const Email = ref(null)
    const password = ref(null)
    const isPwd = ref(true)

    return {
      Email,
      password,
      isPwd,

      onSubmit () {
        // eslint-disable-next-line space-before-blocks
        if (Email.value !== true){
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Existe alguma coisa ainda sem preencher'

          })
        } else {
          $q.notify({
            textColor: 'white',
            color: 'green-4',
            icon: 'cloud_done',
            message: 'Enviado com Sucesso!'

          })
        }
      },
      onReset () {
        Email.value = ''
        password.value = ''
      }

    }
  }
}
</script>
