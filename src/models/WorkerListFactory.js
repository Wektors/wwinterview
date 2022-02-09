import Worker from './Worker';
import axios from 'axios';

export default class WorkerListFactory {
    NATIONALITY = 'GB';
    AMOUNT_OF_RESULTS = 20;

    /**
     *
     * @returns {Array<Worker>}
     */
    async getWorkers(){
        let workers = [];
        try{
            const data = await this._fetchData();
            let worker;
            for (let i = 0; i < data.length; i++){
                worker = data[i];
                workers.push(new Worker({
                        id: worker.id.value,
                        firstName: worker.name.first,
                        lastName: worker.name.last,
                        age: worker.dob.age,
                        salary: this._getSalary(),
                    },
                ));
            }
        } catch (error){
            console.log(error.message);
        }
        return workers;
    }

    /**
     *
     * @returns {number}
     * @private
     */
    _getSalary(){
        return Math.floor(Math.random() * 11) * 500;
    }

    /**
     *
     * @returns {Promise<*>}
     * @private
     */
    async _fetchData(){
        const {data} = await axios.get(
            `https://randomuser.me/api/?nat=${this.NATIONALITY}&results=${this.AMOUNT_OF_RESULTS}`,
        );
        return data.results;
    }
}