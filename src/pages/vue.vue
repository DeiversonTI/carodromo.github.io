<template>
    <q-page padding>
      <div class="row flex flex-center">
        <div class="col-md-6 text-center text-h4 flex shadow-5 ">
            <div class="bg-grey-2 q-py-xs full-width row q-ma-xl text-center flex items-center flex-center q-gutter-x-md  col-xs-4 col-sm-3 col-md-2 col-lg-1 col-xl-2">
                    <span>Turma 22 <br><p class="text-h6"> Prof: Viviana</p></span>

                    <q-img class="rounded-borders shadow-5"
                        src="~/assets/fotos/turma22/VIVIANA-BARBOSA-DE-OLIVEIRA-TEIXEIRA.jpg" alt="" style="max-width:110px; margin-top:4px">
                    </q-img>
            </div>
            <div  class=" flex justify-center q-gutter-sm content-center q-mb-lg" >
                <div v-for="(aluno, index) in alunos" :key="index"
                    class="bg-grey-3 rounded-borders shadow-5" style="max-width:120px">
                      <q-img
                        :src="aluno.link" style="max-width:120px">
                      </q-img>
                      <div class="letter">
                        <span class="fonts">{{aluno.nome}}</span>
                      </div>
                </div>
            </div>
        </div>
      </div>
    </q-page>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      alunos: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/posts')
      // .get('https://ersvp.g12.br/fecult/teste.json')
      .then(resp => (this.alunos = resp.data))
  }
}
</script>
<style scoped>
.letter{

    padding:8px 5px;
    text-transform: uppercase;
    font-family: sans-serif;
    word-break:normal;
    line-height: 0.3em;

}
.upcase{
  text-transform: capitalize;
}

.fonts{
  font-family: sans-serif;
  font-size: 0.4em;
}
</style>
