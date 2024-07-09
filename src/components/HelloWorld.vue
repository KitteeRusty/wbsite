<script setup lang="ts">
import { ref } from 'vue'
import {
  NFlex,
  NGrid, NGi,
  NLayout, NLayoutHeader, NLayoutContent
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
      <n-layout-header bordered>
        <n-space justify="end">
          <a href="">Page 1</a>
          <a href="">Page 2</a>
          <a href="">Page 3</a>
        </n-space>
      </n-layout-header>
      <n-layout-content>
        <!-- display: flex; align-items: ce nter; justify-content: space-between -->
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
        <h3>Part 1</h3>
        <n-grid x-gaps="32" :y-gap="16" :cols="2">
          <n-gi>
            <div class="green">Outcome 1</div>
          </n-gi>
          <n-gi>
            <div class="light-green">Outcome 2</div>
          </n-gi>
          <n-gi>
            <div class="yellow-green">Outcome 3</div>
          </n-gi>
          <n-gi>
            <div class="yellow">Outcome 4</div>
          </n-gi>
        </n-grid>
        <!-- 第二个部分 -->
        <h3>Part 2</h3>
        <n-split direction="horizontal" style="height: 200px">
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
        <h3>Part 3</h3>
        <n-space vertical size="large">
          <n-layout has-sider>
            <n-layout-sider content-style="padding: 24px;">
              Section 1
            </n-layout-sider>
            <n-layout>
              <n-layout-header>Outcome 1</n-layout-header>
              <n-layout-content content-style="padding: 24px;">Outcome 2</n-layout-content>
              <n-layout-footer>Outcome 3</n-layout-footer>
            </n-layout>
          </n-layout>
          <n-layout has-sider>
            <n-layout-sider content-style="padding: 24px;">
              Section 2
            </n-layout-sider>
            <n-layout>
              <n-layout-header>Outcome 1</n-layout-header>
              <n-layout-content content-style="padding: 24px">Outcome 2</n-layout-content>
              <n-layout-footer>Outcome 3</n-layout-footer>
            </n-layout>
          </n-layout>
        </n-space>
        <h3>Timeline</h3>
        <n-timeline>
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
  background-color: rgba(159, 245, 9, 0.902);
}

.yellow {
  height: 108px;
  background-color: rgba(248, 244, 8, 0.879);
}
</style>
