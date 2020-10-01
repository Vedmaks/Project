import ProjectWindowView from "./ProjectWindowView.js"

export class CProjectWindow {
    constructor() {
        this.view
        this.isShow = false
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

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.window.hide()
        })

    }

    switch(type) {
        switch (this.isShow) {
            case true:
                this.hide()
                break;
            case false:
                this.show(type)
                break;
        }
    }

    show(type) {
        switch (type) {
            case "create":
                this.view.windowLabel.setHTML('Создание проекта')
                break;
            case "edit":
                this.view.windowLabel.setHTML('Редактирование проекта')
                this.view.windowConfirmBtn.setValue('Изменить')
                break;
            case "remove":
                this.view.windowLabel.setHTML('Удаление проекта')
                this.view.windowConfirmBtn.setValue('Удалить')
                break;
            default:
                console.error('Неизвестный тип отображения окна для рабоыт с сущностью проекта');
                return;
        }

        this.view.window.show()
    }

    hide() { }


        

    
}