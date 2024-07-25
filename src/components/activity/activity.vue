<script lang="ts" setup>
import { ref, computed } from 'vue'
import {
    NButton, NFlex, NEllipsis, NImage, NRow, NCol
} from 'naive-ui';
</script>

<template>
    <div class="body">
        <div style="font-weight: bold; font-size: 32px;">Extra-curriculum activities</div>
        <div style="padding-left: 10px;">
            <div class="subheading">AppliedCS club</div>
            <div class="time">Started from 2024-01-09</div>
            <n-row style="align-items: center;">
                <n-col span="14">
                    <div style="line-height: 24px;">The AppliedCS Club is dedicated to exploring the real-life
                        applications of Computer Science across a wide range of disciplines. In the first semester, our
                        discussions span Philosophy, Mathematics, Sociology, Music, and more, focusing on how computing
                        principles and technologies intersect with and enhance these fields. In our meetings, we dive
                        into real-world examples to understand the impact of Computer Science. From analyzing the
                        influence of algorithms on social media in Sociology to exploring the role of AI in composing
                        music, our discussions are engaging and insightful. We look at how philosophical questions about
                        consciousness and ethics are challenged and expanded by developments in artificial intelligence.
                        In Mathematics, we explore computational methods for solving complex problems and their
                        implications for theoretical advancements. We brainstorm new ideas and innovative solutions,
                        fostering a collaborative environment where creativity and critical thinking thrive. Each
                        meeting encourages members to contribute their unique perspectives, leading to a rich exchange
                        of ideas. Through these activities, we aim to not only understand the current state of Computer
                        Science applications but also envision future possibilities and their societal impacts.</div>
                </n-col>
                <n-col span="6">
                    <n-image width="300" height="300" src="/wordcloud.png" />
                </n-col>
            </n-row>
            <div class="subheading">Student Council</div>
            <div class="time">Started from Grade 8</div>
            
        </div>
    </div>
</template>

<style>
.body {
    padding-left: 7rem;
    padding-right: 7rem;
    padding-top: 3rem;
    padding-bottom: 3rem;

}

.subheading {
    font-size: 24px;
    font-weight: bold;
}

.time {
    color: rgb(136, 135, 135);
    font: 8px;
}
</style>