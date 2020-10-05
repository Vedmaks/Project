import taskModel from "./../../models/TaskModel.js"

export function TasksView() {
	return {
		"id": "tasks", hidden: true,
		"rows": [
			{
				"css": "webix_dark",
				"view": "toolbar",
				"cols": [
					{ "view": "button", id: "createTask", "label": "Создать", "height": 0 },
					{ "view": "button", id: "removeTask","label": "Удалить", "height": 0 },
					{ "view": "button", id: "setEmployees", "label": "Назначить сотрудников", "height": 0 }
				],
				"height": 45
			},
			{
				"cols": [
					{
						"columns": [
							{id: "name", header: "Название", name: "name", sort: "string", fillspace: true, width: 150},
							{id: "status", header: "Статус", name: "status", sort: "string", width: 120 },
							{id: "importance", header: "Срочность", sort: "string", name: "importance", width: 120 },
							{id: "employee", header: "Ответственный", sort: "string", name: "employee", width: 240 },
							{id: "planH", header: "План часов", sort: "int", name: "planH", width: 100 },
							{id: "factH", header: "Факт часов", sort: "int", name: "factH", width: 100 }
						],
						"view": "datatable",
						id: "tasksDatatable",
						select: true,
						scrollX: false,
						"borderless": 0,
						data: taskModel.getTasks()
					},
					{
						width: 300,
						rows: [
							{
								columns: [
									{id: "name", header: "Backlog", name: "name", sort: "string", fillspace: true, width: 150},
								],
								view: "datatable",
								id: "backlogDatatable",
								select: true,
								scrollX: false,
								borderless: 0,
								data: taskModel.getTasks()

							},
							{
								columns: [
									{id: "name", header: "Согласование", name: "name", sort: "string", fillspace: true, width: 150},
								],
								view: "datatable",
								id: "agreementDatatable",
								select: true,
								scrollX: false,
								borderless: 0,
								data: taskModel.getTasks()

							},
						]
					}
				]
			}
		]
	}
}