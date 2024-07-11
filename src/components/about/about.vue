<script setup lang="ts">
import { ref } from 'vue'
import {
    NFlex,
    NGrid, NGi,
    NLayout, NLayoutHeader, NLayoutContent, NLayoutSider,
    NSplit,
    NTimeline, NTimelineItem, NGradientText, NEllipsis, NDivider, NCarousel
}
</script>

<template>
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
                <n-timeline style="align-items: center;">
                    <n-timeline-item title="这是1" content="awdoawhdiasawd" time="1900-01-01"></n-timeline-item>
                    <n-timeline-item title="这是2" content="awdoawhdiasawd" time="1910-02-03"></n-timeline-item>
                    <n-timeline-item title="这是3" content="awdoawhdiasawd" time="1920-03-05"></n-timeline-item>
                    <n-timeline-item title="这是4" content="awdoawhdiasawd" time="1930-04-07"></n-timeline-item>
                    <n-timeline-item title="这是5" content="awdoawhdiasawd" time="1940-05-09"></n-timeline-item>
                    <n-timeline-item title="这是6" content="awdoawhdiasawd" time="1950-06-11"></n-timeline-item>
                    <n-timeline-item title="这是7" content="awdoawhdiasawd" time="1960-07-13"></n-timeline-item>
                </n-timeline>
            </div>
        </n-layout-content>
        <n-layout-footer>
            <n-space>
                <h2>High School Progress</h2>
                <n-progress type="dashboard" gap-position="bottom" :percentage="50" />
                <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">早上中午晚上好</n-gradient-text>
                <n-spin></n-spin>
            </n-space>
        </n-layout-footer>
    </n-layout>
</template>