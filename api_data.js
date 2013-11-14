define({ api: [
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
      "name": "logged",
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
            "type": "Integer",
            "field": "teacher.person_id",
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
            "type": "Person",
            "field": "teacher.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "teacher.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "teacher.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "teacher.person.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"teacher\":\n\t{\n\t\t\"id\": 1,\n\t\t\"person\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Anne\",\n\t\t\t\"last_name\": \"Laurent\"\n\t\t}\n\t}\n}\n"
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
            "type": "Person",
            "field": "teacher.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teacher.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.person.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"teachers\":\n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"person\":\n\t\t\t{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"first_name\": \"Anne\",\n\t\t\t\t\"last_name\": \"Laurent\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"person\":\n\t\t\t{\n\t\t\t\t\"id\": 2,\n\t\t\t\t\"first_name\": \"Bernard\",\n\t\t\t\t\"last_name\": \"Fallery\"\n\t\t\t{\n\t\t}\n\t]\n}\n"
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
            "type": "Person",
            "field": "teacher.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teacher.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.person.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"teacher\":\n\t{\n\t\t\"id\": 1,\n\t\t\"person\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Anne\",\n\t\t\t\"last_name\": \"Laurent\"\n\t\t}\n\t}\n}\n"
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
            "type": "Integer",
            "field": "teacher.person_id",
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
            "type": "Person",
            "field": "teacher.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "teacher.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "teacher.person.last_name",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"teacher\":\n\t{\n\t\t\"id\": 1,\n\t\t\"person\":\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"first_name\": \"Anne\",\n\t\t\t\"last_name\": \"Laurent\"\n\t\t}\n\t}\n}\n"
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
      "name": "logged",
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
            "type": "Integer",
            "field": "user.person_id",
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
            "type": "Person",
            "field": "user.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "user.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "user.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "field": "user.person.last_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Teacher",
            "field": "user.person.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "user.person.teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Manager",
            "field": "user.person.teacher.manager",
            "optional": true,
            "description": "if module_manager"
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "user.person.teacher.manager.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "201",
            "type": "Administrator",
            "field": "user.person.teacher.administrator",
            "optional": true,
            "description": "if administrator"
          },
          {
            "group": "201",
            "type": "Integer",
            "field": "user.person.teacher.administrator.id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t\"user\": \n\t{\n\t\t\"id\": 13,\n\t\t\"username\": \"marcdumas\",\n\t\t\"person\": {\n\t\t\t\"id\": 13,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\",\n\t\t\t\"teacher\": {\n\t\t\t\t\"id\": 1\n\t\t\t}\n\t\t}\n\t}\n}\n"
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
            "type": "Person",
            "field": "user.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.last_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.person.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Manager",
            "field": "user.person.teacher.manager",
            "optional": true,
            "description": "if module_manager"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.manager.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Administrator",
            "field": "user.person.teacher.administrator",
            "optional": true,
            "description": "if administrator"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.administrator.id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"users\": \n\t[\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"username\": \"annelaurent\",\n\t\t\t\"person\": {\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"first_name\": \"Anne\",\n\t\t\t\t\"last_name\": \"Laurent\",\n\t\t\t\t\"teacher\": {\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"manager\": {\n\t\t\t\t\t\t\"id\": 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n"
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
            "type": "Person",
            "field": "user.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.last_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.person.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Manager",
            "field": "user.person.teacher.manager",
            "optional": true,
            "description": "if module_manager"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.manager.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Administrator",
            "field": "user.person.teacher.administrator",
            "optional": true,
            "description": "if administrator"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.administrator.id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"user\": \n\t{\n\t\t\"id\": 13,\n\t\t\"username\": \"marcdumas\",\n\t\t\"person\": {\n\t\t\t\"id\": 13,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\",\n\t\t\t\"teacher\": {\n\t\t\t\t\"id\": 1\n\t\t\t}\n\t\t}\n\t}\n}\n"
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
            "type": "Person",
            "field": "user.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.last_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.person.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Manager",
            "field": "user.person.teacher.manager",
            "optional": true,
            "description": "if module_manager"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.manager.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Administrator",
            "field": "user.person.teacher.administrator",
            "optional": true,
            "description": "if administrator"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.administrator.id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImFubmVsYXVyZW50MTM4NDAwNDg1NDY0MiI.vO6uOg0ehKkjCUaXhSgROw7RyQ6hFjsuzj9Cz14jWK8\",\n\t\"user\": \n\t{\n\t\t\"id\": 13,\n\t\t\"username\": \"marcdumas\",\n\t\t\"person\": {\n\t\t\t\"id\": 13,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\",\n\t\t\t\"teacher\": {\n\t\t\t\t\"id\": 1\n\t\t\t}\n\t\t}\n\t}\n}\n"
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
            "type": "Integer",
            "field": "user.person_id",
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
            "type": "Person",
            "field": "user.person",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.first_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "field": "user.person.last_name",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Teacher",
            "field": "user.person.teacher",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Manager",
            "field": "user.person.teacher.manager",
            "optional": true,
            "description": "if module_manager"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.manager.id",
            "optional": false,
            "description": ""
          },
          {
            "group": "200",
            "type": "Administrator",
            "field": "user.person.teacher.administrator",
            "optional": true,
            "description": "if administrator"
          },
          {
            "group": "200",
            "type": "Integer",
            "field": "user.person.teacher.administrator.id",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"user\": \n\t{\n\t\t\"id\": 13,\n\t\t\"username\": \"marcdumas\",\n\t\t\"person\": {\n\t\t\t\"id\": 13,\n\t\t\t\"first_name\": \"Marc\",\n\t\t\t\"last_name\": \"Dumas\",\n\t\t\t\"teacher\": {\n\t\t\t\t\"id\": 1\n\t\t\t}\n\t\t}\n\t}\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js\\user.js"
  }
] });