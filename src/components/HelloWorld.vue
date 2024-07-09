<script setup lang="ts">
import { ref } from 'vue'
import {
  NFlex,
  NGrid, NGi,
  NLayout, NLayoutHeader, NLayoutContent,
  NSplit,
  NTimeline, NTimelineItem
} from 'naive-ui';

const contentRef = ref<string | null>(null);

// defineProps<{ msg: string }>()

// const count = ref(0)

initial();

function initial() {
  contentRef.value = "1";
}
</script>

<template>
  <div>
    <n-layout>
      <n-layout-header bordered style="background-color: none;">
        <n-space justify="end" size="large">
          <a href="" style="align-items: right;">Page 1</a>
          <a href="" style="align-items: right;">Page 2</a>
          <a href="" style="align-items: right;">Page 3</a>
        </n-space>
      </n-layout-header>
      <n-layout-content style="background-color: none;">
        <!-- display: flex; align-items: center; justify-content: space-between -->
        <!-- 介绍 -->
        <n-flex :align="'center'" :justify="'space-between'">
          <div :style="'font-size: 48px'">Name</div>
          <div>Slogan</div>
        </n-flex>
        <n-grid>
          <n-gi :span="8">
            <div>photo</div>
          </n-gi>
          <n-gi :span="16">
            <div>description</div>
          </n-gi>
        </n-grid>
        <!-- 第一个部分 -->
        <h1 style="font-style: italic">Part 1</h1>
        <n-grid x-gaps="32" :y-gap="16" :cols="2">
          <n-gi>
            <div class="light-green">Outcome 1</div>
          </n-gi>
          <n-gi>
            <div class="green">Outcome 2</div>
          </n-gi>
          <n-gi>
            <div class="yellow-green">Outcome 3</div>
          </n-gi>
          <n-gi>
            <div class="yellow">Outcome 4</div>
          </n-gi>
        </n-grid>
        <!-- 第二个部分 -->
        <h1 style="font-style: italic;">Part 2</h1>
        <n-split direction="horizontal" style="border: solid 1px; height: 200px; box-sizing: border-box ;height: 200px" default-size="500px">
          <template #1>
            1
          </template>
          <template #2>
            <n-split direction="vertical" style="height: 200px">
              <template #1>
                2
              </template>
              <template #2>
                <n-split direction="horizontal" style="height: 100%">
                  <template #1>
                    3
                  </template>
                  <template #2>
                    more
                  </template>
                </n-split>
              </template>
            </n-split>
          </template>
        </n-split>
        <!--第三个部分 -->
        <h1 style="font-style: italic;">Part 3</h1>
        <n-layout has-sider>
          <n-layout-sider style="border: solid ; padding-left:40px; padding-right: 40px; margin-right: 20px; font-size: 20px; font-weight: bold;" content-style="padding: 24px;">
            A
          </n-layout-sider>
          <n-layout>
            <div style="padding-bottom: 20px; margin-bottom: 10px; border:solid; padding-left: 20px;">1</div>
            <div style="padding-bottom: 20px; margin-bottom: 10px ; border:solid; padding-left: 20px;">2</div>
            <div style="padding-bottom: 20px; margin-bottom: 10px; border:solid; padding-left: 20px;">3</div>
          </n-layout>
        </n-layout>
        <n-layout has-sider>
          <n-layout-sider style="border: solid; padding-left:40px; padding-right: 40px; margin-right: 20px;font-size: 20px; font-weight: bold;" content-style="padding: 24px;">
            B
          </n-layout-sider>
          <n-layout>
            <div style="padding-bottom: 20px; margin-bottom: 10px; border:solid; padding-left: 20px;">1</div>
            <div style="padding-bottom: 20px; margin-bottom: 10px ; border:solid; padding-left: 20px;">2</div>
            <div style="padding-bottom: 20px; margin-bottom: 10px; border:solid; padding-left: 20px;">3</div>
          </n-layout>
        </n-layout>
        <h1 style="text-align: center; font-size: 40px;">Timeline</h1>
        <n-timeline style="align-items: center;">
          <n-timeline-item title="这是1" content="awdoawhdiasawd" time="1900-01-01"></n-timeline-item>
          <n-timeline-item title="这是2" content="awdoawhdiasawd" time="1910-02-03"></n-timeline-item>
          <n-timeline-item title="这是3" content="awdoawhdiasawd" time="1920-03-05"></n-timeline-item>
          <n-timeline-item title="这是4" content="awdoawhdiasawd" time="1930-04-07"></n-timeline-item>
          <n-timeline-item title="这是5" content="awdoawhdiasawd" time="1940-05-09"></n-timeline-item>
          <n-timeline-item title="这是6" content="awdoawhdiasawd" time="1950-06-11"></n-timeline-item>
          <n-timeline-item title="这是7" content="awdoawhdiasawd" time="1960-07-13"></n-timeline-item>
        </n-timeline>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<style scoped lang="less">
.light-green {
  height: 108px;
  background-color: rgba(8, 248, 32, 0.939);
}

.green {
  height: 108px;
  background-color: rgba(133, 241, 9, 0.868);
}

.yellow-green {
  height: 108px;
  background-color: rgba(135, 245, 9, 0.902);
}

.yellow {
  height: 108px;
  background-color: rgba(196, 248, 8, 0.879);
}

.n-layout-header {
  padding-top: 25px;
  padding-right: 100px;
  padding-bottom: 10px;
  padding-left: 100px;
}

.n-layout-sider {
  padding-left: 200px;
}

.n-layout-content {
  padding-bottom: 100px;
  padding-top: 0px;
  padding-right: 100px;
  padding-left: 100px;

}
</style>
