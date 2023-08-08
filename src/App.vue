<template>
    <div id="app">
        <div class="header">
            <button v-on:click="toggleWorkersList()">{{ buttonName }}</button>
        </div>
        <workers-list :workers-list="workers" v-if="buttonClicked"/>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WorkersList from './components/WorkersList.vue';
import WorkerListFactory from './models/WorkerListFactory';

@Component({
    name: 'App',
    components: {WorkersList},
})
export default class App extends Vue {

    data(){
        return {
            workers: [],
            buttonName: 'Kliknij mnie',
            buttonClicked: false,
        };
    }

    toggleWorkersList(){
    this.buttonClicked = !this.buttonClicked;

        //tutaj nie jestem pewny czy od razu ma to być zmienione, zrobiłem żeby zmieniało się po kliknięciu
        if (this.buttonClicked) {
            this.buttonName = 'Ukryj listę pracowników'
        }

        else {
            this.buttonName = 'Pokaż listę pracowników'
        }
    }

    mounted(){
        this.createWorkers();
    }

    async createWorkers(){
        let factory = new WorkerListFactory();
        this.workers = await factory.getWorkers();
    }

}
</script>

<style lang="scss" scoped >
@import "./assets/global.css";

#app {
    .header {
        padding: 0.5rem;
    }
}
</style>
