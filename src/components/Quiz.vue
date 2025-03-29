<template>
    <div>
        <h1>{{ quiz.title }}</h1>
        <Progress
            :step="step"
            :total-step="quiz.questions.length - 1"
        />
        <!-- :key permet de créer un nouveau composant -->
        <!-- Utile pour garder une logique simple de composant -->
        <Question 
            :key="question.question"
            :question="question"
            v-if="state === 'question'"
            @answer="addAnswer"
        />
        <Recap 
            :answers="userAnswers"
            :quiz="props.quiz"
            v-if="state === 'recap'"
        />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Progress from './Progress.vue';
import Question from './Question.vue';
import Recap from './Recap.vue';


const props = defineProps({
    quiz: Object
})

const state = ref('question')
const step = ref(0)
const question = computed(() => {
    return props.quiz.questions[step.value]
})
// Permet d'init un tableau avec le nombre d'éléments correspondant
// au nombre de question
const userAnswers = ref(props.quiz.questions.map(() => null))

const result = ref(props.quiz.failure_message)

const addAnswer = (answer) => {
    userAnswers.value[step.value] = answer
    if(step.value === props.quiz.questions.length - 1) {
        state.value = 'recap'
    } else {
        step.value++
    }
}

</script>