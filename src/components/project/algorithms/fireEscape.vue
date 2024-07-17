<script setup lang="ts">
import { projects, projectData } from '../project';
import router from '../../../router/router';
import { ref } from 'vue';
import gridDisplayVue from './gridDisplay/gridDisplay.vue';
import { NCode, NImage } from 'naive-ui';

const project = ref<projectData | null>(null);

initial();

function initial() {
    project.value = projects.find(project => project.routerKey == router.currentRoute.value.name)!
}
</script>

<template>
    <div v-if="project" class="projectDetailPage">
        <div style="font-size: 48px; padding-bottom: 30px;">
            <b>{{ project.name }}</b>
        </div>
        <grid-display-vue :rows="5" :cols="7" :figurePosition="0"></grid-display-vue>
        <div style="padding: 20px; font-size: 24px; "><b>Question Briefing</b></div>
        <div>

        </div>
        <div style="padding: 20px; font-size: 24px; "><b>Solution</b></div>

    </div>
</template>

<style lang="less" scoped>
.projectDetailPage {
    width: 960px;
    padding: 24px;
    margin: 0 auto;
}
</style>
