import { Task } from "./entities/Task.js"

class TaskModel {

    constructor() {
        this.data = new Map();
        this.data.set(1, new Task(1, "Задача 1", "Описание задачи 1.", "В работе", "Очень срочно", "Вася", "4", "10", "1"));
        this.data.set(2, new Task(2, "Задача 2", "Описание задачи 2.", "Согласование", "Срочно", "Петя", "8", "4", "2"));
        this.data.set(3, new Task(3, "Задача 3", "Описание задачи 3.", "Завершена", "Не срочно", "Коля", "54", "101", "3"));
        this.data.set(4, new Task(4, "Задача 4", "Описание задачи 4.", "Согласование", "Срочно", "Петя", "8", "4", "1"));
        this.data.set(5, new Task(5, "Задача 5", "Описание задачи 5.", "Завершена", "Не срочно", "Коля", "54", "101", "1"));
    }

    getTasksByProjectId(projectId) {

        return new Promise((resolve, reject) => {
            let tasks = []
            

            for (let task of this.data.values()) {

                if (task.projectId == projectId) {
                  tasks.push(task)  
                }
            }

            resolve(tasks)
        })
    }

    getTaskById(id) {

        return new Promise((resolve, reject) => {
            resolve(this.data.get(id))
        })

    }

    create(task) {
        return new Promise((resolve, reject) => {
            let id

            for (let key of this.data.keys()) {
                id = key
            }
            id++

            task.id = id
            task.status = "Новая"
            task.projectId = currentProject.id
            this.data.set(id, task)
            resolve(this.data.get(task.id))
        })
    }

    update(task) {
        return new Promise((resolve, reject) => {
            this.data.set(task.id, task)
            resolve(this.data.get(task.id))
        })
    }

    delete(task) {
        return new Promise((resolve, reject) => {
            this.data.delete(task.id)
            resolve()
        })
    }
}

const taskModel = new TaskModel()
export default taskModel