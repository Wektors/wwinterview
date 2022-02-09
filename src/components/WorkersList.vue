<template>
    <div class="workers-list">
        Docelowa lista pracowników
    </div>
</template>

<script>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({name: 'WorkersList'})
export default class WorkersList extends Vue {
    @Prop({type: Array, required: false, default: () => []}) workersList;
}
</script>

<style lang="scss" scoped>
.workers-list {
    padding: 0.5rem;
}
</style>
