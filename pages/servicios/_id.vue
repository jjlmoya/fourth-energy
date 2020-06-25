<template>
    <div class="p-service">
        <Layout
            :title="service.title"
            :image="service.image"
            :path="service.path"
            :content="service.content"
        />
    </div>
</template>

<style lang="scss">
  @import 'services.scss';
</style>

<script>
    import Layout from '@/layouts/Content.vue'
    import Services from '@/data/services.data.js'
    export default {
        name: 'Home',
        components: {
            Layout
        },
        data () {
            return {
                service: this.getPageData()
            }
        },
        methods: {
            getPageData () {
                return Services.find(serv => serv.path === this.$route.params.id)
            }
        },
        head () {
            return {
                title: 'Comunicaciones Cuarta Evolución',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Comunicaciones Cuarta Evolución'
                    }
                ]
            }
        }
    }
</script>
