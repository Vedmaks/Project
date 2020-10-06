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
            form: $$('tasksWindowForm'),
            formName: $$('taskName'),
            formDesc: $$('taskDesc')
        }

    }

    //Открытие окна создания задачи
    createWindow() {
        this.view.window.show()
        this.view.windowLabel.setHTML('Создание задачи')
        this.view.windowConfirmBtn.setValue('Создать')
        let event1 = this.view.windowConfirmBtn.attachEvent('onItemClick', () => {+
            taskModel.create(this.fetch()).then(() => {
                this.view.form.clear()
                this.view.window.hide()
                this.onChange()
                this.view.windowConfirmBtn.detachEvent(event1)
            })
        })
        
        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.form.clear()
            this.view.window.hide()
            this.view.windowConfirmBtn.detachEvent(event1)
        })
    }

    //Открытие окна удаления задачи
    removeWindow() {
        this.view.window.show()
        this.view.windowLabel.setHTML('Удаление задачи')
        this.view.windowConfirmBtn.setValue('Удалить')
        this.view.formName.disable()
        this.view.formDesc.disable()
        let event3 = this.view.windowConfirmBtn.attachEvent('onItemClick', () => {
            this.view.formName.enable()
            this.view.formDesc.enable()
            taskModel.delete(this.fetch()).then(() => {
                this.view.form.clear()
                this.view.window.hide()
                this.onChange()
                this.view.windowConfirmBtn.detachEvent(event3) 
            })
        })   

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.form.clear()
            this.view.window.hide()
            this.view.formName.enable()
            this.view.formDesc.enable()
            this.view.windowConfirmBtn.detachEvent(event3)
        })
    }

    fetch() {
        return this.view.form.getValues()
    }

    parse(values) {
        this.view.form.setValues(values)
    }
}