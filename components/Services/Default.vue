<template>
    <footer class="footer-default">
        <div class="title">
            Servicios
        </div>
        <nav class="navigation">
            <div v-for="service in services" :key="service.name" class="navigation__element">
                <div> {{ service.title }}</div>
                <!--
                <router-link :to="{ path: `/servicios/${service.path}` }">
                    {{ service.title }}
                </router-link>
                -->
            </div>
        </nav>
    </footer>
</template>

<style lang="scss">@import 'services.scss';
</style>

<script>
    import Services from '@/data/services.data.js'

    export default {
        components: {},
        data () {
            return {
                services: Services
            }
        },
        mounted () {

        }
    }
</script>
