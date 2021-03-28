// hero.service.js
import Task from "../model/task";
import adapter from 'axios/lib/adapters/http';
const axios = require('axios');

class TaskService {

    constructor(baseUrl, port) {
        this.baseUrl = baseUrl;
        this.port = port;
    }

    createTask(task) {
        return new Promise((resolve, reject) => {

            let response = axios.request({
                method: 'POST',
                url: `/v1/todo/create`,
                baseURL: `${this.baseUrl}:${this.port}`,
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                data: task
            }, adapter);
            if (response !== undefined)
                resolve(response)
            else
                reject()

        })
    };

    getAll() {
        return new Promise((resolve, reject) => {

            let response = axios.request({
                method: 'GET',
                url: `/v1/todo/get-all`,
                baseURL: `${this.baseUrl}:${this.port}`,
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                },
            }, adapter);
            if (response !== undefined)
                resolve(response)
            else
                reject()
                    ;
        })


    }

}

export default TaskService;