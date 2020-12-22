<template>
    <section>
        <div class="home">home</div>
        <hello-world></hello-world>
        <my-component :title="title" @onEmit="callback()"></my-component>
    </section>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            title: "vue-web-components"
        }
    },
    created() {
        this.$testPlugin("for test")
    },
    methods: {
        callback() {
            console.log("callback")
        }
    }
};
</script>
