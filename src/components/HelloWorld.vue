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
      <n-layout-header bordered>Header</n-layout-header>
      <n-layout-content>
        <!-- display: flex; align-items: center; justify-content: space-between -->
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
        <n-grid x-gaps="12" :cols="4">
          <n-gi>
            <div class="green">Outcome 1</div>
          </n-gi>
          <n-gi>
            <div class="light-green">Outcome 2</div>
          </n-gi>
          <n-gi>
            <div class="medium-green">Outcome 3</div>
          </n-gi>
          <n-gi>
            <div class="">Outcome 4</div>
          </n-gi>
        </n-grid>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<style scoped lang="less">
.light-green {
  height: 108px;
  background-color: rgba(8, 248, 8, 0.879);
}

.green {
  height: 108px;
  background-color: rgba(4, 93, 4, 0.24);
}

.medium-green{
  height: 108px;
  background-color: rgba(9, 134, 9, 0.76)
}
</style>
