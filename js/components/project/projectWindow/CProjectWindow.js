import ProjectWindowView from "./ProjectWindowView.js"
import projectModel from "./../../../models/ProjectModel.js"

export class CProjectWindow {
    constructor() {
        this.view
    }

    init() { }

    config() {
        return ProjectWindowView()
    }

    attachEvents() {

        this.view = {
            window: $$('projectWindow'),
            windowLabel: $$('projectWindowLabel'),
            windowConfirmBtn: $$('projectWindowConfirmBtn'),
            windowCancelBtn: $$('projectWindowCancelBtn'),
            form: $$('projectWindowForm')
        }
    }

    createWindow() {
        this.view.window.show()
        this.view.windowLabel.setHTML('Создание проекта')
        this.view.windowConfirmBtn.setValue('Создать')
        let event1 = this.view.windowConfirmBtn.attachEvent('onItemClick', () => {
            projectModel.create()
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

    editWindow(id) {
        this.view.window.show()
        this.view.windowLabel.setHTML('Редактирование проекта')
        this.view.windowConfirmBtn.setValue('Изменить')
        let event2 = this.view.windowConfirmBtn.attachEvent('onItemClick', () => {
            projectModel.edit(id)
            this.view.form.clear()
            this.view.window.hide()
            this.view.windowConfirmBtn.detachEvent(event2)
        })

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.form.clear()
            this.view.window.hide()
            this.view.windowConfirmBtn.detachEvent(event2)
        })
    }

    removeWindow(id) {
        this.view.window.show()
        this.view.windowLabel.setHTML('Удаление проекта')
        this.view.windowConfirmBtn.setValue('Удалить')
        let event3 = this.view.windowConfirmBtn.attachEvent('onItemClick', () => {
            projectModel.remove(id)
            this.view.form.clear()
            this.view.window.hide()
            $$('projectName').enable()
            $$('projectDesc').enable()
            this.view.windowConfirmBtn.detachEvent(event3)
        }) 

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.form.clear()
            this.view.window.hide()
            $$('projectName').enable()
            $$('projectDesc').enable()
            this.view.windowConfirmBtn.detachEvent(event3)
        })
    }
}