<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white q-py-md  ">
      <div class="row flex justify-between items-center q-mx-md">
        <q-btn round icon="menu" @click="toggleLeftDrawer" class=" text-subtitle1" />
              <div class="col flex ">

                  <q-img
                  src="../assets/logo_escola.png" style="max-width:300px;" class="q-ml-xl" >
                  </q-img>

              </div>

          <div class="col-12 col-sm-auto " style="">
              <q-item to="/">
                <q-toolbar-title class="flex flex-center " >
                    Caródromo Digital 2022
                </q-toolbar-title>
              </q-item>
          </div>
      </div>

    </q-header>
    <q-drawer  v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
        <div class="q-pa-xs" style="max-width: 350px">
          <q-list bordered class="rounded-borders ">
            <!-- Educação Infantil -->
            <q-expansion-item expand-separator icon="person" label="Educação Infantil">
              <q-expansion-item caption="Prof. Ana" icon="receipt" label="Mini-Maternal" to="/principal" />
              <q-expansion-item caption="Prof. Ana" icon="receipt" label="Maternal I" to="/teste" />
              <q-expansion-item caption="Prof. Isabella" icon="receipt" label="Maternal II A" to="/vue" />
              <q-expansion-item caption="Prof. Glenda" icon="receipt" label="Maternal II B" to="/teste" />
              <q-expansion-item caption="Prof. Thanlyn" icon="receipt" label="Pré I A" to="/teste" />
              <q-expansion-item caption="Prof. Camila" icon="receipt" label="Pré I B" to="/teste" />
              <q-expansion-item caption="Prof. Marcela Farias" icon="receipt" label="Pré II A" to="/teste" />
              <q-expansion-item caption="Prof. Camila" icon="receipt" label="Pré II B" to="/teste" />
              <q-expansion-item caption="Prof. Daniele"  icon="receipt" label="Pré II C" to="/teste" />
              <q-expansion-item caption="Prof. Viviana" icon="receipt" label="Turma 11" to="/teste" />
              <q-expansion-item caption="Prof. Daphini" icon="receipt" label="Turma 12" to="/teste" />
              <q-expansion-item caption="Prof. Viviana"  icon="receipt" label="Turma 13" to="/teste" />
            </q-expansion-item>
          </q-list>
            <!-- Fundamental I -->
          <q-list bordered class="rounded-borders">
            <q-expansion-item expand-separator icon="person" label="Fundamental - I" >
              <q-expansion-item caption="Prof. Ninguém"  icon="receipt" label="Turma 21" to="/teste" />
              <q-expansion-item caption="Prof. Queli"  icon="receipt" label="Turma 22" to="/teste" />
              <q-expansion-item caption="Prof. Cecilia" icon="receipt" label="Turma 31" to="/teste" />
              <q-expansion-item caption="Prof. Victória"  icon="receipt" label="Turma 32" to="/teste" />
              <q-expansion-item caption="Prof. Heloísa"  icon="receipt" label="Turma 41" to="/teste" />
              <q-expansion-item caption="Prof. Cristiane"  icon="receipt" label="Turma 42" to="/teste" />
              <q-expansion-item caption="Prof. Marcela"  icon="receipt" label="Turma 51" to="/teste" />
              <q-expansion-item caption="Prof. Denise"  icon="receipt" label="Turma 52" to="/" />
            </q-expansion-item>
          </q-list>
          <q-list bordered class="rounded-borders ">
            <!-- Fundamental II -->
            <q-expansion-item expand-separator icon="person" label="Fundamental - II">
              <q-expansion-item icon="receipt" label="Turma 61" to="/teste" />
              <q-expansion-item icon="receipt" label="Turma 71" to="/teste" />
              <q-expansion-item icon="receipt" label="Turma 81" to="/teste" />
              <q-expansion-item icon="receipt" label="Turma 82" to="/teste" />
              <q-expansion-item icon="receipt" label="Turma 91" to="/teste" />
              <q-expansion-item icon="receipt" label="Turma 92" to="/login" />
            </q-expansion-item>
          </q-list>
        </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="row">
      <q-footer reveal class="bg-primary-8 ">
          <div class="text-center text-weight-thin text-subtitle2 full-width overflow-hidden q-pa-md  ">&copy; Todos os direitos reservados à ERVSVP - Seu último acesso foi  {{new Date().toLocaleString()}}</div>
      </q-footer>
    </div>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      item: [{ title: 'maternal', to: '/' }],

      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }

    }
  }
}
</script>
<style scoped>
.teste{
  margin: 10px 15px;
}
</style>
