<template>
    <section class="container" @click="onClick()">
        {{ title }}
    </section>
</template>

<script>
export default {
    name: "my-component",
    props: {
        title: {
            type: String,
            default: "this is vue-web-components"
        }
    },
    methods: {
        onClick() {
            this.$emit("onEmit")
        }
    }
}
</script>

<style scoped lang="scss">
    .container {
        border: 1px solid red;
    }
</style>