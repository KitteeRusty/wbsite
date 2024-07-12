<script setup lang="ts">
import { projects, projectData } from '../project';
import router from '../../../router/router';
import { defineComponent, ref, computed } from 'vue';
import {
    NFlex,
    NGrid, NGi,
    NIcon, NInputNumber, NSlider
} from 'naive-ui';

const sliderValue = ref(0);

const project = ref<projectData | null>(null);

const grid = ref<number[][]>([
    [0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 1, 0],
    [0, 2, 0, 0, 1, 2, 0],
    [0, 0, 2, 2, 2, 0, 2],
    [0, 0, 0, 0, 0, 0, 0]
]);

const rows = computed(() => {
    return grid.value.length;
})

const cols = computed(() => {
    return grid.value[0].length;
})

const player = ref<number[]>([0, 0]);

const fires = ref<number[][]>([]);

const fireEmoji = "🔥";

const playerEmoji = "🧍‍♂️";

const blockStyle = (x: number, y: number) => {
    return {
        borderTop: '1px solid #000',
        borderRight: x == cols.value - 1 ? '1px solid #000' : null,
        borderBottom: y == rows.value - 1 ? '1px solid #000' : null,
        borderLeft: '1px solid #000',
        aspectRatio: "1/1"
    }
}

const UpdateGrid = (time: number) => {

}

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
        <div class="GridContainer">
            <n-grid v-for="(row, y) in rows" :key="y" :cols="cols">
                <n-gi class="block" v-for="(col, x) in cols" :key="x" :style="blockStyle(x, y)">
                    <n-flex style="height: 100%" :align="'center'" :justify="'center'">
                        <div v-if="grid[y][x] === 2">
                            <n-icon style="margin-top: 7px" :size="48">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                        <path d="M4 8h16"></path>
                                        <path d="M20 12H4"></path>
                                        <path d="M4 16h16"></path>
                                        <path d="M9 4v4"></path>
                                        <path d="M14 8v4"></path>
                                        <path d="M8 12v4"></path>
                                        <path d="M16 12v4"></path>
                                        <path d="M11 16v4"></path>
                                    </g>
                                </svg>
                            </n-icon>
                        </div>
                        <div v-if="player[0] === x && player[1] === y" style="font-size: 36px">{{ playerEmoji }}</div>
                        <div v-if="grid[y][x] === 1" style="font-size: 36px">{{ fireEmoji }}</div>
                    </n-flex>
                </n-gi>
            </n-grid>
        </div>
        <div style="padding: 20px;">
            <n-slider v-model:value="sliderValue" :min="0" :max="20" @update:value="UpdateGrid" />
            <div style="padding: 20px;"><n-input-number v-model:value="sliderValue" size="small" :min = "0" :max="20" /></div>
        </div>
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

    .GridContainer {
        width: 540px;
        margin: 0 auto;

        .block {
            // width: 24
        }
    }
}
</style>exportsdefineComponentSetNGridNGridNGiNGiNFlexNFlexNIconNIconNSliderNSliderNInputNumber
