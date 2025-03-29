<template>
  <div class="container">
    <div v-if="state === 'error'">
      <h3><i>Error at loading</i></h3>
    </div>
    <div :aria-busy="state === 'loading'">
      <Quiz :quiz="quizData" v-if="quizData" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Quiz from './components/Quiz.vue';

const quizData = ref(null)
const state = ref('loading')

onMounted(() => {
  fetch('/quiz.json')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Echec du chargement du json')
    })
    .then(data => {
      quizData.value = data
      state.value = 'idle'
    })
    .catch(e => {
      console.error(e)
      state.value = 'error'
    })

})

</script>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>
