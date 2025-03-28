<template>
    <h3>{{ question.label }}</h3>
    <br/>
    <div v-for="choices in question.choices">
        <div>
            <input 
                type="checkbox" 
                :key="choices">
            {{ choices }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const question = ref({
    label: 'Lorem Ipsum',
    choices: ['A', 'B', 'C', 'D'],
    correct_answer: 'A'
})

</script>