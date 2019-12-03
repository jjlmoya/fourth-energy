<template>
    <div>
        <Layout>
            <Inspirational/>
        </Layout>
    </div>
</template>
<style lang="scss">@import 'index.scss';
</style>

<script>
    import Layout from '@/layouts/Default.vue'
    import Inspirational from '@/components/Inspirational/Default.vue'

    export default {
        name: 'Home',
        components: {
            Layout,
            Inspirational
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
