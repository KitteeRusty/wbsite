<script setup lang="ts">
import {
    NFlex,
    NGrid, NGi,
    NIcon, NInputNumber, NSlider
} from 'naive-ui';
import { calcTime } from '../../bfs/bfs.functions';
import { computed, ref, watch } from 'vue';

const props = defineProps({
    rows: Number,
    cols: Number,
    figurePosition: Number
})

const sliderValue = ref(0);

const grid = ref<number[][]>([]);

const player = ref<number[]>([0, 0]);

const waitingMark = ref<number>(10);

const escapedMark = ref<number>(20);

const marks = ref({
    0: '0 min',
    [waitingMark.value]: `${waitingMark.value} min`,
    [escapedMark.value]: `${escapedMark.value} min`,
})

const fires = ref<number[][]>([]);

const fireEmoji = "🔥";

const playerEmoji = "🧍";

const safeEmoji = "🏠";

const blockStyle = (x: number, y: number) => {
    return {
        borderTop: '1px solid #000',
        borderRight: x == props.cols! - 1 ? '1px solid #000' : null,
        borderBottom: y == props.rows! - 1 ? '1px solid #000' : null,
        borderLeft: '1px solid #000',
        aspectRatio: "1/1"
    }
}

const UpdateGrid = (time: number) => {

};


initial();

watch(sliderValue, (newVal, oldVal) => {
    if (newVal > oldVal) {
        grid.value.map((gi, m: number) => {
            for (let n = 0; n < fires.value[m].length; n++) {
                if (fires.value[m][n] <= newVal && gi[n] != 2) {
                    gi[n] = 1;
                }
            };
            return gi;
        })
    } else {
        console.log(newVal)
        grid.value.map((gi, m: number) => {
            for (let n = 0; n < fires.value[m].length; n++) {
                if (fires.value[m][n] > newVal && gi[n] != 2) {
                    gi[n] = 0;
                }
            };
            return gi;
        })
    }
})

function initial() {
    grid.value = Array(props.rows).fill(0).map(() => Array(props.cols).fill(0));
    handleFigurePosition(0);
    const firePlayerBuffer = calcTime(grid.value);
    fires.value = firePlayerBuffer.Firemap;
}

function handleFigurePosition(p: number) {
    switch (p) {
        case 0:
            grid.value = [
                [0, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 1, 0],
                [0, 2, 0, 0, 1, 2, 0],
                [0, 0, 2, 2, 2, 0, 2],
                [0, 0, 0, 0, 0, 0, 0]
            ];
            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        default:
            break;
    }
}
</script>

<template>
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
                    <div v-if="player[0] === x && player[1] === y && !grid[y][x]" style="font-size: 36px">
                        {{ playerEmoji }}
                    </div>
                    <div v-if="grid[y][x] === 1" style="font-size: 36px">{{ fireEmoji }}</div>
                    <div v-if="y === rows! - 1 && x === cols! - 1 && !grid[y][x]" style="font-size: 36px">
                        {{ safeEmoji }}
                    </div>
                </n-flex>
            </n-gi>
        </n-grid>
        <div class="sliderContainer">
            <n-slider v-model:value="sliderValue" :marks="marks" :min="0" :max="20" @update:value="UpdateGrid" />
        </div>
    </div>
</template>

<style lang="less" scoped>
.GridContainer {
    width: 540px;
    margin: 0 auto;

    .sliderContainer {
        margin: 24px 0;
    }
}
</style>