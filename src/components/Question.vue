<template>
    <div class="question">
        <h3>{{ question.question }}</h3>
        <ul>
            <li v-for="(choice, index) in randomAnswer" :key="choice">
                <Answer
                    :id="`answer${index}`"
                    :disabled="hasAnswer"
                    :value="choice"
                    v-model="answer"
                    :correctAnswer="question.correct_answer"
                />
            </li>
        </ul>
        <button :disabled="!hasAnswer" @click="emits('answer', answer)">Suivant</button>
    </div>
</template>

<script setup>
import { shuffleArray } from '@/functions/array';
import { computed, ref, watch } from 'vue';
import Answer from './Answer.vue';

const props = defineProps({
    question: Object
})

const emits = defineEmits(['answer'])
const answer = ref(null)
const hasAnswer = computed(() => answer.value !== null)

const randomAnswer = computed(() => shuffleArray(props.question.choices))
</script>

<style lang="css" scoped>
.question {
    padding: 2rem;
}

.question button{
    margin-left: auto;
    display: block;
}
</style>