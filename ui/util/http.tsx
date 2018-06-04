import axios from 'axios';


export function fetchTodo(id: number): Promise<any> {
    return axios.get(`api/todos/${id}/`).then((req) => req.data);
}

export function createTodo(data: any): Promise<any> {
    return axios.post(`api/todos/`, data).then((req) => req.data).catch((err) => {
        throw err.response.data;
    });
}

export function sleep(time: number): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, time);
    });
}