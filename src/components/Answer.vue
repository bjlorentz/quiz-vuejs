<template>
    <label :for="id" :class="classes">
                    <input 
                        :id="id" 
                        type="radio" 
                        name="answer" 
                        v-model="model"
                        :disabled="disabled"
                        :value="value"
                        @change="onChange">
                    {{ value }}
                </label>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    id: String, 
    disabled: Boolean,
    value: String,
    correctAnswer: String
})

const model = defineModel({})

const emits = defineEmits(['change'])

const classes = computed(() => ({
    disabled: props.disabled,
    right: props.disabled && props.correctAnswer === props.value,
    wrong: props.disabled && props.correctAnswer !== props.value && model.value === props.value
}))

const onChange = (event) => {
    emits('change', event)
}
</script>

<style scoped>
.disabled {
    opacity: .5;
}
.right {
    opacity: 1;
    color: green
}
.wrong {
    opacity: 1;
    color: red
}
</style>