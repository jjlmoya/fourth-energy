<template>
    <div class="l-default l-default--background">
        <div class="l-default__background"></div>
        <div class="l-default__background l-default__background--1"></div>
        <div class="l-default__background l-default__background--2"></div>
        <div class="l-default__background l-default__background--3"></div>
        <div class="l-default__background l-default__background--4"></div>
        <HeaderDefault />
        <div class="l-default__main">
            <div class="l-default__content">
                <slot />
            </div>
        </div>
        <Services />
    </div>
</template>
<style lang="scss">@import 'default.scss';
</style>
<script>
    import HeaderDefault from '@/components/Header/Default.vue'
    import Services from '@/components/Services/Default.vue'

    export default {
        name: 'DefaultLayout',
        components: {
            HeaderDefault,
            Services
        }
    }
</script>
