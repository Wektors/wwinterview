<template>
	<div class="workers-list">
		<table>
			<tr>
				<th>Imię i nazwisko</th>
				<th>Wiek</th>
				<th>Pensja</th>
			</tr>
			<tr v-for="item in this.workersList">
			    <td>
                    {{ item["_firstName"] }} 
                    {{ " "}}
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
	</div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({ name: "WorkersList" })
export default class WorkersList extends Vue {
	@Prop({ type: Array, required: false, default: () => [] }) workersList;
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
