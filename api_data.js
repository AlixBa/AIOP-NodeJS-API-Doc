define({ api: [
  {
    "type": "post",
    "url": "/buildings",
    "title": "Create",
    "name": "BuildingCreate",
    "group": "Building",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Building",
            "field": "building",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "building.label",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Building found with missing params<br/>Building not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Building",
            "field": "building",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"building\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Polytech\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\building.js"
  },
  {
    "type": "delete",
    "url": "/buildings/:id",
    "title": "Delete",
    "name": "BuildingDelete",
    "group": "Building",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Building not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\building.js"
  },
  {
    "type": "get",
    "url": "/buildings",
    "title": "List",
    "name": "BuildingList",
    "group": "Building",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "buildings",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Building",
            "field": "building_from_buildings",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"buildings\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Polytech\"\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\building.js"
  },
  {
    "type": "get",
    "url": "/buildings/:id",
    "title": "Show",
    "name": "BuildingShow",
    "group": "Building",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Building not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Building",
            "field": "building",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"building\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Polytech\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\building.js"
  },
  {
    "type": "put",
    "url": "/buildings/:id",
    "title": "Update",
    "name": "BuildingUpdate",
    "group": "Building",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Building",
            "field": "building",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "building.label",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Building found with missing params<br/>Building not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Building not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Building",
            "field": "building",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"building\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Polytech\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\building.js"
  },
  {
    "type": "post",
    "url": "/groups",
    "title": "Create",
    "name": "GroupCreate",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Group",
            "field": "group",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "group.parent_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Group found with missing params<br/>Group not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Group",
            "field": "group",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "group.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "group.parent_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"group\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"IG4\",\n\t\t\"parent_id\": 1\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\group.js"
  },
  {
    "type": "delete",
    "url": "/groups/:id",
    "title": "Delete",
    "name": "GroupDelete",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Group not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\group.js"
  },
  {
    "type": "get",
    "url": "/groups",
    "title": "List",
    "name": "GroupList",
    "group": "Group",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "groups",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Group",
            "field": "group_from_groups",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "group.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "group.parent_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"groups\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"IG4\",\n\t\t\t\"parent_id\": 1\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\group.js"
  },
  {
    "type": "get",
    "url": "/groups/:id",
    "title": "Show",
    "name": "GroupShow",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Group not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Group",
            "field": "group",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "group.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "group.parent_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"group\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"IG4\",\n\t\t\"parent_id\": 1\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\group.js"
  },
  {
    "type": "get",
    "url": "/groups/:id",
    "title": "Teachings",
    "name": "GroupTeachings",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Group not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "teachings",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teaching",
            "field": "teaching_from_teachings",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teaching.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Group",
            "field": "teaching.group",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teaching.group.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teaching.group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teaching.group.parent_id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "teaching.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teaching.teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teaching.teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teaching.teacher.last_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Subject",
            "field": "teaching.subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teaching.subject.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teaching.subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teaching.subject.module_id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "LessonType",
            "field": "teaching.lesson_type",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teaching.lesson_type.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teaching.lesson_type.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"teachings\":\n\t[\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"group\":\n\t\t\t{\n\t\t\t\t\"id\": 4,\n\t\t\t\t\"label\": \"IG4 G1 ANG\",\n\t\t\t\t\"parent_id\": 1\n\t\t\t},\n\t\t\t\"teacher\":\n\t\t\t{\n\t\t\t\t\"id\": 12,\n\t\t\t\t\"first_name\": \"Michel\",\n\t\t\t\t\"last_name\": \"Sala\"\n\t\t\t},\n\t\t\t\"subject\":\n\t\t\t{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"label\": \"Conception par Objet\",\n\t\t\t\t\"module_id\": 1\n\t\t\t},\n\t\t\t\"lesson_type\":\n\t\t\t{\n\t\t\t\t\"id\": 2,\n\t\t\t\t\"label\": \"TD\"\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\group.js"
  },
  {
    "type": "put",
    "url": "/groups/:id",
    "title": "Update",
    "name": "GroupUpdate",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Group",
            "field": "group",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "group.parent_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Group found with missing params<br/>Group not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Group not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Group",
            "field": "group",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "group.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "group.parent_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"group\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"IG4\",\n\t\t\"parent_id\": 1\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\group.js"
  },
  {
    "type": "post",
    "url": "/lesson_types",
    "title": "Create",
    "name": "LessonTypeCreate",
    "group": "LessonType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LessonType",
            "field": "lesson_type",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "lesson_type.label",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Lesson_type found with missing params<br/>Lesson_type not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "LessonType",
            "field": "lesson_type",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "lesson_type.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "lesson_type.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"lesson_type\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"TP\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\lesson_type.js"
  },
  {
    "type": "delete",
    "url": "/lesson_types/:id",
    "title": "Delete",
    "name": "LessonTypeDelete",
    "group": "LessonType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Lesson_type not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\lesson_type.js"
  },
  {
    "type": "get",
    "url": "/lesson_types",
    "title": "List",
    "name": "LessonTypeList",
    "group": "LessonType",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "lesson_types",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "LessonType",
            "field": "lesson_type_from_lesson_types",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "lesson_type.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "lesson_type.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"lesson_types\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"TP\"\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\lesson_type.js"
  },
  {
    "type": "get",
    "url": "/lesson_types/:id",
    "title": "Show",
    "name": "LessonTypeShow",
    "group": "LessonType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Lesson_type not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "LessonType",
            "field": "lesson_type",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "lesson_type.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "lesson_type.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"lesson_type\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"TP\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\lesson_type.js"
  },
  {
    "type": "put",
    "url": "/lesson_types/:id",
    "title": "Update",
    "name": "LessonTypeUpdate",
    "group": "LessonType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "LessonType",
            "field": "lesson_type",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "lesson_type.label",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Lesson_type found with missing params<br/>Lesson_type not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Lesson_type not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "LessonType",
            "field": "lesson_type",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "lesson_type.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "lesson_type.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"lesson_type\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"TP\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\lesson_type.js"
  },
  {
    "type": "post",
    "url": "/modules",
    "title": "Create",
    "name": "ModuleCreate",
    "group": "Module",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Module",
            "field": "module",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "module.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Module found with missing params<br/>Module not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Module",
            "field": "module",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "module.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"module\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\"teacher_id\": 1\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\module.js"
  },
  {
    "type": "delete",
    "url": "/modules/:id",
    "title": "Delete",
    "name": "ModuleDelete",
    "group": "Module",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Module not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\module.js"
  },
  {
    "type": "get",
    "url": "/modules",
    "title": "List",
    "name": "ModuleList",
    "group": "Module",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "modules",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Module",
            "field": "module_from_modules",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "module.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"modules\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\t\"teacher_id\": 1\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\module.js"
  },
  {
    "type": "get",
    "url": "/modules/:id",
    "title": "Show",
    "name": "ModuleShow",
    "group": "Module",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Module not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Module",
            "field": "module",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "module.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"module\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\"teacher_id\": 1\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\module.js"
  },
  {
    "type": "put",
    "url": "/modules/:id",
    "title": "Update",
    "name": "ModuleUpdate",
    "group": "Module",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Module",
            "field": "module",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "module.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Module found with missing params<br/>Module not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Module not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Module",
            "field": "module",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "module.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"module\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\"teacher_id\": 1\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\module.js"
  },
  {
    "type": "post",
    "url": "/rooms",
    "title": "Create",
    "name": "RoomCreate",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Room",
            "field": "room",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "room.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "room.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "room.building_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Room found with missing params<br/>Room not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Room",
            "field": "room",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "room.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "room.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "room.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Building",
            "field": "room.building",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "room.building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "room.building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"room\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Amphithéâtre\",\n\t\t\"capacity\": 200,\n\t\t\"building\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Polytech\"\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\room.js"
  },
  {
    "type": "delete",
    "url": "/rooms/:id",
    "title": "Delete",
    "name": "RoomDelete",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Room not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\room.js"
  },
  {
    "type": "get",
    "url": "/rooms",
    "title": "List",
    "name": "RoomList",
    "group": "Room",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "rooms",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Room",
            "field": "room_from_rooms",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "room.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Building",
            "field": "room.building",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "room.building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"rooms\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Amphithéâtre\",\n\t\t\t\"capacity\": 200,\n\t\t\t\"building\":\n\t\t\t{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"label\": \"Polytech\"\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\room.js"
  },
  {
    "type": "get",
    "url": "/rooms/:id",
    "title": "Show",
    "name": "RoomShow",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Room not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Room",
            "field": "room",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "room.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Building",
            "field": "room.building",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "room.building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"room\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Amphithéâtre\",\n\t\t\"capacity\": 200,\n\t\t\"building\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Polytech\"\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\room.js"
  },
  {
    "type": "put",
    "url": "/rooms/:id",
    "title": "Update",
    "name": "RoomUpdate",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Room",
            "field": "room",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "room.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "room.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "room.building_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Room found with missing params<br/>Room not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Room not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Room",
            "field": "room",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "room.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Building",
            "field": "room.building",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "room.building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "room.building.label",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"room\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Amphithéâtre\",\n\t\t\"capacity\": 200,\n\t\t\"building\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Polytech\"\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\room.js"
  },
  {
    "type": "post",
    "url": "/subjects",
    "title": "Create",
    "name": "SubjectCreate",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Subject",
            "field": "subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "subject.module_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Subject found with missing params<br/>Subject not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Subject",
            "field": "subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "subject.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Module",
            "field": "subject.module",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "subject.module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "subject.module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "subject.module.module_manager_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"subject\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Conception par Objet\",\n\t\t\"module\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\t\"module_manager_id\": 1\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\subject.js"
  },
  {
    "type": "delete",
    "url": "/subjects/:id",
    "title": "Delete",
    "name": "SubjectDelete",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Subject not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\subject.js"
  },
  {
    "type": "get",
    "url": "/subjects",
    "title": "List",
    "name": "SubjectList",
    "group": "Subject",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "subjects",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Subject",
            "field": "subject_from_subjects",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Module",
            "field": "subject.module",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "subject.module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.module.module_manager_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"subjects\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Conception par Objet\",\n\t\t\t\"module\":\n\t\t\t{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\t\t\"module_manager_id\": 1\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\subject.js"
  },
  {
    "type": "get",
    "url": "/subjects/:id",
    "title": "Show",
    "name": "SubjectShow",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Subject not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Subject",
            "field": "subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Module",
            "field": "subject.module",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "subject.module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.module.module_manager_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"subject\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Conception par Objet\",\n\t\t\"module\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\t\"module_manager_id\": 1\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\subject.js"
  },
  {
    "type": "put",
    "url": "/subjects/:id",
    "title": "Update",
    "name": "SubjectUpdate",
    "group": "Subject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Subject",
            "field": "subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "subject.module_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Subject found with missing params<br/>Subject not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Subject not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Subject",
            "field": "subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Module",
            "field": "subject.module",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.module.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "subject.module.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "subject.module.module_manager_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"subject\":\n\t{\n\t\t\"id\": 1,\n\t\t\"label\": \"Conception par Objet\",\n\t\t\"module\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"label\": \"Conception de Bases de Données\",\n\t\t\t\"module_manager_id\": 1\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\subject.js"
  },
  {
    "type": "post",
    "url": "/teachers",
    "title": "Create",
    "name": "TeacherCreate",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Teacher",
            "field": "teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Teacher found with missing params<br/>Teacher not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Teacher",
            "field": "teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"teacher\":\n\t{\n\t\t\"id\": 1,\n\t\t\"first_name\": \"Anne\",\n\t\t\"last_name\": \"Laurent\"\t\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\teacher.js"
  },
  {
    "type": "delete",
    "url": "/teachers/:id",
    "title": "Delete",
    "name": "TeacherDelete",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Teacher not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\teacher.js"
  },
  {
    "type": "get",
    "url": "/teachers",
    "title": "List",
    "name": "TeacherList",
    "group": "Teacher",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "teachers",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "teacher_from_teachers",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"teachers\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Anne\",\n\t\t\t\"last_name\": \"Laurent\"\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"first_name\": \"Bernard\",\n\t\t\t\"last_name\": \"Fallery\"\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\teacher.js"
  },
  {
    "type": "get",
    "url": "/teachers/:id/reservations",
    "title": "Reservations",
    "name": "TeacherReservations",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Teacher not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "reservations",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Reservation",
            "field": "reservation_from_reservations",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.date",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "TimeSlot",
            "field": "reservation.time_slot",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.time_slot.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.time_slot.start",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.time_slot.end",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Room",
            "field": "reservation.room",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.room.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.room.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.room.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Building",
            "field": "reservation.room.building",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.room.building.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.room.building.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teaching",
            "field": "reservation.teaching",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.teaching.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Group",
            "field": "reservation.teaching.group",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.teaching.group.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.teaching.group.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.teaching.group.parent_id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "reservation.teaching.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.teaching.teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.teaching.teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.teaching.teacher.last_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Subject",
            "field": "reservation.teaching.subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.teaching.subject.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.teaching.subject.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.teaching.subject.module_id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "LessonType",
            "field": "reservation.teaching.lesson_type",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.teaching.lesson_type.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.teaching.lesson_type.label",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "ReservationRequest",
            "field": "reservation.reservation_request",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.reservation_request.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "reservation.reservation_request.date",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.reservation_request.capacity",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.reservation_request.time_slot_id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "reservation.reservation_request.teaching_id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"reservations\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"date\": \"2013-11-17T00:00:00.000Z\",\n\t\t\t\"time_slot\":\n\t\t\t{\n\t\t\t\t\"id\": 4,\n\t\t\t\t\"start\": \"14:00:00\",\n\t\t\t\t\"end\": \"15:30:00\"\n\t\t\t},\n\t\t\t\"room\":\n\t\t\t{\n\t\t\t\t\"id\": 11,\n\t\t\t\t\"label\": \"SC101\",\n\t\t\t\t\"capacity\": 50,\n\t\t\t\t\"building\":\n\t\t\t\t{\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"label\": \"Polytech\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"teaching\":\n\t\t\t{\n\t\t\t\t\"id\": 13,\n\t\t\t\t\"group\":\n\t\t\t\t{\n\t\t\t\t\t\"id\": 4,\n\t\t\t\t\t\"label\": \"IG4 G1 ANG\",\n\t\t\t\t\t\"parent_id\": 1\n\t\t\t\t},\n\t\t\t\t\"teacher\":\n\t\t\t\t{\n\t\t\t\t\t\"id\": 7,\n\t\t\t\t\t\"first_name\": \"Thomas\",\n\t\t\t\t\t\"last_name\": \"Izard\"\n\t\t\t\t},\n\t\t\t\t\"subject\":\n\t\t\t\t{\n\t\t\t\t\t\"id\": 5,\n\t\t\t\t\t\"label\": \"Simulation d'Entreprise\",\n\t\t\t\t\t\"module_id\": 3\n\t\t\t\t},\n\t\t\t\t\"lesson_type\":\n\t\t\t\t{\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"label\": \"CM\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"reservation_request\":\n\t\t\t{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"date\": \"2013-11-22T14:00:00.000Z\",\n\t\t\t\t\"capacity\": 50,\n\t\t\t\t\"time_slot_id\": 4,\n\t\t\t\t\"teaching_id\": 13\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\teacher.js"
  },
  {
    "type": "get",
    "url": "/teachers/:id",
    "title": "Show",
    "name": "TeacherShow",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Teacher not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Teacher",
            "field": "teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"teacher\":\n\t{\n\t\t\"id\": 1,\n\t\t\"first_name\": \"Anne\",\n\t\t\"last_name\": \"Laurent\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\teacher.js"
  },
  {
    "type": "put",
    "url": "/teachers/:id",
    "title": "Update",
    "name": "TeacherUpdate",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Teacher",
            "field": "teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Teacher found with missing params<br/>Teacher not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Teacher not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Teacher",
            "field": "teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"teacher\":\n\t{\n\t\t\"id\": 1,\n\t\t\"first_name\": \"Anne\",\n\t\t\"last_name\": \"Laurent\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\teacher.js"
  },
  {
    "type": "post",
    "url": "/time_slots",
    "title": "Create",
    "name": "TimeSlotCreate",
    "group": "TimeSlot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "TimeSlot",
            "field": "time_slot",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "time_slot.start",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "time_slot.end",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Time_slot found with missing params<br/>Time_slot not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "TimeSlot",
            "field": "time_slot",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "time_slot.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "time_slot.start",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "time_slot.end",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"time_slot\":\n\t{\n\t\t\"id\": 1,\n\t\t\"start\": \"08:00:00\",\n\t\t\"end\": \"09:30:00\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\time_slot.js"
  },
  {
    "type": "delete",
    "url": "/time_slots/:id",
    "title": "Delete",
    "name": "TimeSlotDelete",
    "group": "TimeSlot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Time_slot not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\time_slot.js"
  },
  {
    "type": "get",
    "url": "/time_slots",
    "title": "List",
    "name": "TimeSlotList",
    "group": "TimeSlot",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "time_slots",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "TimeSlot",
            "field": "time_slot_from_time_slots",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "time_slot.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "time_slot.start",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "time_slot.end",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"time_slots\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"start\": \"08:00:00\",\n\t\t\t\"end\": \"09:30:00\"\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"start\": \"09:45:00\",\n\t\t\t\"end\": \"11:15:00\"\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\time_slot.js"
  },
  {
    "type": "get",
    "url": "/time_slots/:id",
    "title": "Show",
    "name": "TimeSlotShow",
    "group": "TimeSlot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Time_slot not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "TimeSlot",
            "field": "time_slot",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "time_slot.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "time_slot.start",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "time_slot.end",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"time_slot\":\n\t{\n\t\t\"id\": 1,\n\t\t\"start\": \"08:00:00\",\n\t\t\"end\": \"09:30:00\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\time_slot.js"
  },
  {
    "type": "put",
    "url": "/time_slots/:id",
    "title": "Update",
    "name": "TimeSlotUpdate",
    "group": "TimeSlot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "TimeSlot",
            "field": "time_slot",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "time_slot.start",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "time_slot.end",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "Time_slot found with missing params<br/>Time_slot not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "Time_slot not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "TimeSlot",
            "field": "time_slot",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "time_slot.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "time_slot.start",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "time_slot.end",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"time_slot\":\n\t{\n\t\t\"id\": 1,\n\t\t\"start\": \"08:00:00\",\n\t\t\"end\": \"09:30:00\"\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\time_slot.js"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create",
    "name": "UserCreate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "field": "user",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user.username",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user.password",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "user.administrator",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "user.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "User found with missing params<br/>User not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "User",
            "field": "user",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "user.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "user.username",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Boolean",
            "field": "user.administrator",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Teacher",
            "field": "user.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "user.teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "user.teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"user\": \n\t{\n\t\t\"id\": 1,\n\t\t\"username\": \"marcdumas\",\n\t\t\"administrator\": false,\n\t\t\"teacher\": \n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\"\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\user.js"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete",
    "name": "UserDelete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "administrator",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "User not found"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\user.js"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List",
    "name": "UserList",
    "group": "User",
    "permission": {
      "name": "logged",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "field": "users",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "User",
            "field": "user_from_users",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.username",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "field": "user.administrator",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"users\": \n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"username\": \"annelaurent\",\n\t\t\t\"administrator\": \"false\",\n\t\t\t\"teacher\": \n\t\t\t{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"first_name\": \"Anne\",\n\t\t\t\t\"last_name\": \"Laurent\"\n\t\t\t}\n\t\t}\n\t]\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\user.js"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Show",
    "name": "UserShow",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "me",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "User not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "User",
            "field": "user",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.username",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "field": "user.administrator",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"user\": \n\t{\n\t\t\"id\": 1,\n\t\t\"username\": \"marcdumas\",\n\t\t\"administrator\": false,\n\t\t\"teacher\": \n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\"\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\user.js"
  },
  {
    "type": "post",
    "url": "/signin",
    "title": "Sign in",
    "name": "UserSignIn",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "username",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "field": "access_token",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "User",
            "field": "user",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.username",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "field": "user.administrator",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImFubmVsYXVyZW50MTM4NDAwNDg1NDY0MiI.vO6uOg0ehKkjCUaXhSgROw7RyQ6hFjsuzj9Cz14jWK8\",\n\t\"user\": \n\t{\n\t\t\"id\": 1,\n\t\t\"username\": \"marcdumas\",\n\t\t\"administrator\": false,\n\t\t\"teacher\": \n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\"\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\user.js"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update",
    "name": "UserUpdate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "User",
            "field": "user",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user.username",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user.password",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "user.administrator",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "user.teacher_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "permission": {
      "name": "me",
      "title": "",
      "description": ""
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "field": "SQLException",
            "optional": false,
            "description": "Exception sent by the database"
          },
          {
            "group": "400",
            "field": "message",
            "optional": false,
            "description": "User found with missing params<br/>User not found in body"
          }
        ],
        "401": [
          {
            "group": "401",
            "field": "Unauthorized",
            "optional": false,
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "field": "message",
            "optional": false,
            "description": "User not found"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "User",
            "field": "user",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.username",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "field": "user.administrator",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.teacher.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t{\n\t\t\"id\": 1,\n\t\t\"username\": \"marcdumas\",\n\t\t\"administrator\": true,\n\t\t\"teacher\": \n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\"\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\user.js"
  }
] });