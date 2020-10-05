import { Task } from "./entities/Task.js"

class TaskModel {

    getTasks() {

        let arr = [
            new Task(1, "Задача 1", "Описание задачи 1.", "В работе", "Очень срочно", "Вася", "4", "10", "1"),
            new Task(2, "Задача 2", "Описание задачи 2.", "Согласование", "Срочно", "Петя", "8", "4", "2"),
            new Task(3, "Задача 3", "Описание задачи 3.", "Завершена", "Не срочно", "Коля", "54", "101", "3")
        ]

        return arr
    }

    getTaskById(id) {

        return this.Task(2, "Задача 2", "Описание задачи 2.", "статус", "срочность", "Петя", "8", "4")

    }

    create() {
        alert("Саздание задачи")
    }

    update(id) {
        alert("Редактирование задачи. id: " + id)
    }

    delete(id) {
        alert("Удаление задачи. id: " + id)
    }
}

const taskModel = new TaskModel()
export default taskModel