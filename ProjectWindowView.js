webix.ui({
	"id": 1601297163485,
	"rows": [
		{
			"css": "webix_dark",
			"view": "toolbar",
			"height": 45,
			"cols": [
				{ "view": "label", "label": "ПРОЕКТЫ" },
				{ "view": "template", "role": "placeholder", "width": 459, "borderless": 1 },
				{ "view": "template", "template": "Сотрудник Сотрудникович", "role": "placeholder", "width": 168, "borderless": 1 },
				{ "view": "button", "label": "Выйти", "autowidth": true, "width": 1 }
			]
		},
		{
			"css": "webix_dark",
			"view": "toolbar",
			"cols": [
				{ "view": "button", "label": "Создать", "height": 0 },
				{ "label": "Редактировать", "view": "button", "height": 0 },
				{ "label": "Удалить", "view": "button", "height": 0 }
			],
			"height": 45
		},
		{
			"columns": [
				{
					"id": "name",
					"name": "name",
					"header": "Название",
					"fillspace": false,
					"sort": "string",
					"hidden": false,
					"adjust": "data"
				},
				{ "id": "desc", "name": "desc", "header": "Описание", "sort": "string", "fillspace": true, "hidden": false }
			],
			"view": "datatable",
			"borderless": 0, data: [
					
			]
		}
	]
})
