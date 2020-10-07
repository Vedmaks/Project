import { TasksView } from "./TasksView.js"
import { CTasksWindow } from "./tasksWindow/CTasksWindow.js"
import taskModel from "./../../models/TaskModel.js"
import { CEmployee } from "./../employee/CEmployee.js"
import { Task } from "./../../models/entities/Task.js"


export class CTasks {
    constructor() {
      this.view
      this.window
    }
    
    
    init() {
        this.window = new CTasksWindow()
        this.window.onChange = () => { this.refreshTable() }
        this.window.init()
    }

    config() {
        webix.ui( new CEmployee().config() )
        webix.ui(this.window.config())
        return TasksView()
    }

    attachEvents() {
        this.view = {
            tasksDatatable: $$('tasksDatatable'),
            backlogDatatable: $$('backlogDatatable'),
            agreementDatatable: $$('agreementDatatable'),
            create: $$('createTask'),
            remove: $$('removeTask'),
            getBack1: $$("getBack1"),
            getBack2: $$("getBack2"),
            window: $$('tasksWindow'),
            tasks: $$("tasks"),
            oneTask: $$("oneTask"),
            taskStatus: $$("oneTaskStatus"),
        }

        //Добавление событий окна
        this.window.attachEvents()

        //Обновление таблицы при показе
        this.view.tasks.attachEvent("onViewShow", () => { this.refreshTable() });

        //Создание задачи
        this.view.create.attachEvent('onItemClick', () => {
            this.window.parse(new Task())
            this.view.window.show()
        })

        //Возвращение к задачам
        this.view.getBack2.attachEvent('onItemClick', () => {
            this.view.tasks.show()
            this.view.oneTask.hide()            
            this.view.getBack1.show()
            this.view.getBack2.hide()
        })

        //Переход к конкретной задаче в основной таблице
        this.view.tasksDatatable.attachEvent("onItemDblClick", (id) => {
            let item = this.view.tasksDatatable.getItem(id)
            this.view.oneTask.show()
            this.view.tasks.hide()
            this.view.getBack1.hide()
            this.view.getBack2.show()

            taskModel.getTaskById(item.id).then((task) => {
                this.statusAdapt(task.status)
                this.view.oneTask.parse(task)
            })
        })

        //Переход к конкретной задаче в бэклоге
        this.view.backlogDatatable.attachEvent("onItemDblClick", (id) => {
            let item = this.view.backlogDatatable.getItem(id)
            this.view.oneTask.show()
            this.view.tasks.hide()
            this.view.getBack1.hide()
            this.view.getBack2.show()

            taskModel.getTaskById(item.id).then((task) => {
                this.statusAdapt(task.status)
                this.view.oneTask.parse(task)                
            })
        })

        //Переход к конкретной задаче в согласовании
        this.view.agreementDatatable.attachEvent("onItemDblClick", (id) => {
            let item = this.view.agreementDatatable.getItem(id)
            this.view.oneTask.show()
            this.view.tasks.hide()
            this.view.getBack1.hide()
            this.view.getBack2.show()

            taskModel.getTaskById(item.id).then((task) => {
                this.statusAdapt(task.status)
                this.view.oneTask.parse(task)
                
            })
        })

    }

    statusAdapt(status) {

        let statuses = []

        switch (status) {

            case "Новая":
                statuses = [ "Новая", "Назначена", "В работе", "Согласование"];
            break;

            case "Бэклог":
                statuses = ["Бэклог", "Новая"];
            break;

            case "Назначена":
                statuses = ["Назначена", "В работе", "Согласование"];
            break;

            case "В работе":
                statuses = ["В работе", "Согласование"];
            break;

            case "Согласование":
                statuses = ["Согласование", "Назначена", "Завершена"];
            break;

            case "Завершена":
                statuses = ["Завершена"];
            break;

            default:
                statuses = [ "Новая", "Назначена", "В работе", "Согласование"];

        }

        this.view.taskStatus.define("options", statuses)
        this.view.taskStatus.refresh()

    }

    //Обновление таблицы
    refreshTable() {
        
        taskModel.getTasksByProjectId(currentProject.id, "tasks").then((tasks) => {
            this.view.tasksDatatable.clearAll()
            this.view.tasksDatatable.parse(tasks)
        })

        taskModel.getTasksByProjectId(currentProject.id, "backlog").then((tasks) => {
            this.view.backlogDatatable.clearAll()
            this.view.backlogDatatable.parse(tasks)
        })

        taskModel.getTasksByProjectId(currentProject.id, "agreement").then((tasks) => {
            this.view.agreementDatatable.clearAll()
            this.view.agreementDatatable.parse(tasks)
        })
        
    }
    
}
