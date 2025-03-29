<template>
    <div>
        <h2>Recapitulatif</h2>
        <h3>Score : {{ score }} / {{ quiz.questions.length }}</h3>
        <h4>{{ hasWon ? quiz.success_message : quiz.failure_message }}</h4>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    quiz: Object,
    answers: Array
})

const score = computed(() => {
    return props.quiz.questions.reduce((acc, question, k) => {
        if(question.correct_answer === props.answers[k]) {
            return acc + 1
        }
        return acc
    }, 0)
})

const hasWon = computed(() => score.value >= props.quiz.minimum_score)

</script>