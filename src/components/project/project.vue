<script setup lang="ts">
import { projects, projectData } from './project';
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui';
import router from "../../router/router"
import { ref } from 'vue';

const project = ref<projectData | null>(null);

initial();

function initial() {
    project.value = projects.find(project => project.routerKey == router.currentRoute.value.name)!
}
</script>

<template>
    <div>
        <div v-if="(router.currentRoute.value.name as string).split('-')[1]"
            style="max-width: 960px; padding: 0 24px; margin: 0 auto">
            <n-breadcrumb>
                <n-breadcrumb-item @click="router.push({ name: 'project' })"> Project
                </n-breadcrumb-item>
                <n-breadcrumb-item> {{ project.name }}
                </n-breadcrumb-item>
            </n-breadcrumb>
        </div>
        <router-view />
    </div>
</template>