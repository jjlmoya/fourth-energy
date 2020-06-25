<template>
    <header class="header header--navigation">
        <div class="header__logo">
            <img src="https://jjlmoya.github.io/fourth-energy/cuartaevolucion.png" alt="Cuarta Evolución">
        </div>
        <nav class="header__navigation">
            <div v-for="nav in navigation" :key="nav.path" class="element">
                {{ nav.name }}
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        components: {},
        data () {
            return {
                navigation: [
                    {
                        name: 'Inicio',
                        path: '/'
                    }, {
                        name: 'Servicios',
                        path: '/servicios/'
                    }, {
                        name: 'Contacto',
                        path: '/contacto'
                    }
                ]
            }
        },
        mounted () {

        }
    }
</script>
