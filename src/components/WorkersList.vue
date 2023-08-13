<template>
	<div class="workers-list">
		<table>
			<tr>
				<th>Imię i nazwisko</th>
				<th>Wiek</th>
				<th>Pensja</th>
			</tr>
			<tr v-for="item in this.workersList" 
			:style="{backgroundColor: changeColor(item, getMinAge(workersList), getMaxAge(workersList))}">
				<td>
					{{ item["_firstName"] }}
					{{ " " }}
					{{ item["_lastName"] }}
				</td>
				<td>
					{{ item["_age"] }}
				</td>
				<td>
					{{ item["_salary"] }}
				</td>
			</tr>
		</table>
        <hr>
        <h2>Śr. pensja: {{ getAverageSalary(workersList) }}</h2>
			<h2>min wiek: {{ getMinAge(workersList) }} </h2>
			<h2>maks wiek: {{ getMaxAge(workersList) }}</h2>
	</div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({ name: "WorkersList" })
export default class WorkersList extends Vue {
	@Prop({ type: Array, required: false, default: () => [] }) workersList;

    //methods
	getAverageSalary() {
		return (
			this.workersList.reduce((a, b) => a + b["_salary"], 0) /
			this.workersList.length
		);
	}

    getMinAge() {
        return Math.min(...this.workersList.map(item => item["_age"]));
    }

    getMaxAge() {
        return Math.max(...this.workersList.map(item => item["_age"]));
    }

	changeColor(worker, minAge, maxAge) {
		if (worker["_age"] == minAge) {
			return "green"
		}
		if (worker["_age"] == maxAge) {
			return "yellow"
		}
		
	};
}
</script>

<style lang="scss" scoped>
.workers-list {
	padding: 0.5rem;
	
}
td {
	padding-left: 1rem;
	padding-right: 1rem;
}
</style>
