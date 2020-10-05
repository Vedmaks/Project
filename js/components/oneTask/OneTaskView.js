export function OneTaskView() {
	return {
		id: "oneTask", hidden: true,
    
        "autoheight": false,
        "view": "form",
        "cols": [
            {
                "rows": [
                    { id: "oneTaskName", view: "text", label: "Задача:", labelPosition: "top", name: "name", height: 50 },
                    { id: "oneTaskDesc", view: "textarea", label: "Описание:", labelPosition: "top", name: "desc", height: 500 }
                ]
            },
            {
                "rows": [
                    { id: "oneTaskId", view: "text", label: "id:", name: "id", height: 50, hidden: true},
                    { id: "oneTaskStatus", view: "select", label: "Статус:", labelWidth: 120, name: "status", height: 50,
                    options:[ "Новая", "Назначена", "В работе", "Согласование", "Завершена" ] 
                    },
                    { id: "oneTaskImportance", view: "select", value: 1, label: "Срочность:", labelWidth: 120, name: "importance", height: 50,
                    options:[ "Очень срочно", "Срочно", "Не особо срочно", "Не срочно" ]
                    },   
                    { id: "oneTaskEmployee", view: "text", label: "Ответственный:", labelWidth: 120, name: "employee", height: 50 },
                    { id: "oneTaskPlanH", view: "text", label: "План часы:", labelWidth: 120, name: "planH", height: 50 },
                    { id: "oneTaskFactH", view: "text", label: "Факт часы:", labelWidth: 120, name: "factH", height: 50 },
                    { id: "oneTaskConfirm",view: "button", css: "webix_primary", label: "Сохранить изменения", height: 50 },
                    { id: "oneTaskCancel",view: "button", css: "webix_primary", label: "Отмена", height: 50 }
                ]
            }
        ]

	}
}