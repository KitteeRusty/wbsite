<script setup lang="ts">
import { projects, projectData } from '../project';
import router from '../../../router/router';
import { ref } from 'vue';

const project = ref<projectData | null>(null);

initial();

function initial() {
    project.value = projects.find(project => project.routerKey == router.currentRoute.value.name)!
}
</script>

<template>
    <div v-if="project" class="projectDetailPage">
        <div style="font-size: 48px">
            <b>{{ project.name }}</b>
        </div>
    </div>
</template>

<style lang="less" scoped>
.projectDetailPage {
    width: 960px;
    padding: 24px;
    margin: 0 auto;
}
</style>