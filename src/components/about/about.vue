<script setup lang="ts">
import { ref, computed, onUnmounted, onMounted } from 'vue'
import {
    NLayout, NLayoutHeader, NLayoutContent,
    NTimeline, NTimelineItem, NGradientText, NEllipsis,
    NSpin, NProgress
} from 'naive-ui';

const highSchoolStart = new Date('2022-08-08');
const highSchoolEnd = new Date('2026-06-19');


const currentDate = new Date();

const totalDuration = highSchoolEnd.getTime() - highSchoolStart.getTime();
const elapsedTime = currentDate.getTime() - highSchoolStart.getTime();


const highSchoolProgress = computed(() => {
    return (Math.min(Math.max((elapsedTime / totalDuration) * 100, 0), 100)).toFixed(2);
});

let days = ref(0);
let hours = ref(0);
let minutes = ref(0);
let seconds = ref(0);

function updateTimer() {
  const timeDiff = highSchoolEnd.getTime() - currentDate.getTime();
  
  if (timeDiff > 0) {
    days.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((timeDiff % (1000 * 60)) / 1000);

  }
}

const timer = setInterval(() => {
  currentDate.value = new Date();
  updateTimer();
}, 1000);


onMounted(() => {
  updateTimer();
});

// Cleanup interval on component unmount
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
    <div style="overflow: hidden;">
        <n-layout>
            <n-layout-header>
                <h1>Introduction</h1>
                <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
                    你说得对
                </n-ellipsis>
            </n-layout-header>
            <n-layout-content>
                <div>
                    <h1 style="text-align: center; font-size: 40px; font-weight: bold;">Timeline</h1>
                    <div style="overflow: auto; max-height: 100vh;">
                        <n-timeline style="align-items: center;">
                            <div style="overflow: hidden; max-height: 100vh;">
                                <n-timeline-item title="这是1" content="awdoawhdiasawd"
                                    time="1900-01-01"></n-timeline-item>
                                <n-timeline-item title="这是2" content="awdoawhdiasawd"
                                    time="1910-02-03"></n-timeline-item>
                                <n-timeline-item title="这是3" content="awdoawhdiasawd"
                                    time="1920-03-05"></n-timeline-item>
                                <n-timeline-item title="这是4" content="awdoawhdiasawd"
                                    time="1930-04-07"></n-timeline-item>
                                <n-timeline-item title="这是5" content="awdoawhdiasawd"
                                    time="1940-05-09"></n-timeline-item>
                                <n-timeline-item title="这是6" content="awdoawhdiasawd"
                                    time="1950-06-11"></n-timeline-item>
                                <n-timeline-item title="这是7" content="awdoawhdiasawd"
                                    time="1960-07-13"></n-timeline-item>
                            </div>
                        </n-timeline>
                    </div>
                </div>
            </n-layout-content>
            <n-layout-footer style="text-align: center;">
                <n-space>
                    <h2 style="text-align: center;">High School Progress</h2>
                    <div><n-progress type="dashboard" gap-position="bottom" :percentage="Number(highSchoolProgress)" />
                    </div>
                    <div><n-typography variant="h2">
                            <span>{{ days }}</span> days
                            <span>{{ hours }}</span> hours
                            <span>{{ minutes }}</span> minutes
                            <span>{{ seconds }}</span> seconds
                        </n-typography></div>
                    <div style="padding: 50px;"><n-gradient-text
                            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">早上中午晚上好</n-gradient-text>
                    </div>
                </n-space>
            </n-layout-footer>
        </n-layout>
    </div>
</template>

<style scoped lang="less">
.n-layout {
    padding: 200px;
}
</style>