<template>
    <div class="l-content">
        <Header />
        <div class="l-content__entry">
            <div class="l-content__image">
                <div class="l-content__image-background"></div>
                <img class="l-content__image-image" :src="image" :alt="title">
                <h1 class="l-content__image-title">
                    <div>{{ title }}</div>
                </h1>
            </div>
            <div v-for="entry in content" :key="entry.title" class="l-content__body">
                <img v-if="entry.image" class="entry__image" :src="entry.image" :alt="entry.title">
                <h2 class="entry__title">
                    {{ entry.title }}
                </h2>
                <div class="entry__content" v-html="entry.content">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">@import 'content.scss';
</style>
<script>

    import Header from '@/components/Header/Navigation.vue'
    export default {
        name: 'ContentLayout',
        components: {
            Header
        },
        props: {
            image: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            path: {
                type: String,
                default: ''
            },
            content: {
                type: Array,
                default: () => []
            }
        }
    }
</script>
