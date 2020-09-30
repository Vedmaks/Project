webix.ui({
    "id": 1601297163485,
	"rows": [
		{
			"css": "webix_dark",
			"view": "toolbar",
			"height": 45,
			"cols": [
				{ "view": "label", "label": "ЗАДАЧИ" },
				{ "view": "template", "role": "placeholder", "width": 459, "borderless": 1 },
				{ "view": "template", "template": "Сотрудник Сотрудникович", "role": "placeholder", "width": 168, "borderless": 1 },
				{ "view": "button", "label": "Выйти", "autowidth": true, "width": 1 }
			]
		},
		{
			"css": "webix_dark",
			"view": "toolbar",
			"cols": [
				{ "view": "button", "label": "Создать задачу", "height": 0 },
				{ "label": "Назначить сотрудников", "view": "button", "height": 0 }
			],
			"height": 45
		},
		{
			"cols": [
				{
					"url": "demo->5f71db08cfe82b001a1ac631",
					"columns": [
						{
							"id": "title",
							"header": "Название",
							"fillspace": false,
							"sort": "string",
							"hidden": false,
							"width": 150,
							"height": 150
						},
						{ "header": "Статус", "sort": "string", "fillspace": false, "hidden": false, "width": 70 },
						{ "header": "Срочность", "fillspace": false, "hidden": false, "width": 90 },
						{ "header": "Ответственный", "fillspace": false, "hidden": false, "width": 180 },
						{ "header": "План часов", "fillspace": false, "hidden": false, "width": 100 },
						{ "header": "Факт часов", "fillspace": false, "hidden": false, "width": 100 }
					],
					"view": "datatable",
					"borderless": 0,
					"width": 0
				},
				{
					"width": 166,
					"rows": [
						{ "view": "template", "template": "Backlog", "role": "placeholder" },
						{ "view": "template", "template": "You can place any widget here..", "role": "placeholder", "width": 0, "height": 184 },
						{ "view": "template", "template": "Согласовано", "role": "placeholder", "height": 42 },
						{ "view": "template", "template": "You can place any widget here..", "role": "placeholder", "height": 207 }
					]
				}
			]
		}
	]
})