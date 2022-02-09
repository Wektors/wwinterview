export default class Worker {
    /**
     * @type {Object} data
     * @param {string} data.id
     * @param {string} data.firstName
     * @param {string} data.lastName
     * @param {number} data.age
     * @param {number} data.salary
     */
    constructor(data){
        this._id = data.id;
        this._firstName = data.firstName;
        this._lastName = data.lastName;
        this._age = data.age;
        this._salary = data.salary;
    }

    /**
     *
     * @returns {string}
     */
    getId(){
        return this._id;
    }

    /**
     *
     * @returns {string}
     */
    getFirstName(){
        return this._firstName;
    }

    /**
     *
     * @returns {string}
     */
    getLastName(){
        return this._lastName;
    }

    /**
     *
     * @returns {number}
     */
    getAge(){
        return this._age;
    }

    /**
     *
     * @returns {number}
     */
    getSalary(){
        return this._salary;
    }
}