import TasksWindowView from "./TasksWindowView.js"
import taskModel from "./../../../models/TaskModel.js"

export class CTasksWindow {
    constructor() {
        this.view
    }

    init() { }

    config() {
        return TasksWindowView()
    }

    attachEvents() {

        this.view = {
            window: $$('tasksWindow'),
            windowLabel: $$('tasksWindowLabel'),
            windowConfirmBtn: $$('tasksWindowConfirmBtn'),
            windowCancelBtn: $$('tasksWindowCancelBtn'),
            form: $$('tasksWindowForm')
        }

    }

    createWindow() {
        this.view.window.show()
        this.view.windowLabel.setHTML('Создание задачи')
        this.view.windowConfirmBtn.setValue('Создать')
        let event1 = this.view.windowConfirmBtn.attachEvent('onItemClick', () => {
            taskModel.create()
            this.view.form.clear()
            this.view.window.hide()
            this.view.windowConfirmBtn.detachEvent(event1)
        })

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.form.clear()
            this.view.window.hide()
            this.view.windowConfirmBtn.detachEvent(event1)
        })
    }

    removeWindow(id) {
        this.view.window.show()
        this.view.windowLabel.setHTML('Удаление задачи')
        this.view.windowConfirmBtn.setValue('Удалить')
        let event3 = this.view.windowConfirmBtn.attachEvent('onItemClick', () => {
            taskModel.delete(id)
            $$('taskName').enable()
            $$('taskDesc').enable()
            this.view.form.clear()
            this.view.window.hide()
            this.view.windowConfirmBtn.detachEvent(event3)
        })    

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.form.clear()
            this.view.window.hide()
            $$('taskName').enable()
            $$('taskDesc').enable()
            this.view.windowConfirmBtn.detachEvent(event3)
        })
    }
}