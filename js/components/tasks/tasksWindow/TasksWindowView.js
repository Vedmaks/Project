export default function TasksWindowView() {
    let headText = "Задача"

    return { 
        view: 'window',
        id: 'tasksWindow',
        head: {
            view: 'template',
            id: 'tasksWindowLabel',
            template: headText,
            css: 'webix_template'
        },
        modal: true,
        position:"center",
        body: {
            view: 'form',
            id: 'tasksWindowForm',
            elements: [
                {
                    id: "taskName",
                    view: 'text',
                    label: 'Название',
                    name: "name",
                },
                {
                    id: "taskDesc",
                    view: 'textarea',
                    label: 'Описание',
                    name: "desc",
                    height: 200,
                    width: 500
                },
                {
                    cols: [
                        {
                            view: 'button',
                            id: 'tasksWindowConfirmBtn',
                            value: 'Создать',
                        },
                        {
                            view: 'button',
                            id: 'tasksWindowCancelBtn',
                            value: 'Отменить',
                        },
                    ]
                },
            ]
        }
    }
}