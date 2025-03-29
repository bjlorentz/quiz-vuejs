<template>
    <div>
        Etape : {{ step + 1 }} / {{ totalStep + 1 }}
        <progress :value="step" :max="totalStep"/>
    </div>
</template>

<script setup>

defineProps({
    step: Number,
    totalStep : Number
})
</script>