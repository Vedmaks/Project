export default function ProjectWindowView() {
    let headText = "Проект"

    return { 
        view: 'window',
        id: 'projectWindow',
        head: {
            view: 'template',
            id: 'projectWindowLabel',
            template: headText,
            css: 'webix_template'
        },
        modal: true,
        position:"center",
        body: {
            view: 'form',
            id: 'projectWindowForm',
            elements: [
                {
                    view: 'text',
                    label: 'Название',
                },
                {
                    view: 'textarea',
                    label: 'Описание',
                    height: 200,
                    width: 500
                },
                {
                    cols: [
                        {
                            view: 'button',
                            id: 'projectWindowConfirmBtn',
                            value: 'Создать',
                        },
                        {
                            view: 'button',
                            id: 'projectWindowCancelBtn',
                            value: 'Отменить',
                        },
                    ]
                },
            ]
        }
    }
}