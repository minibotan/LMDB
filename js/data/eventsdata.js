eventsdata = {
    "1" : {
      "id": 1,
      "location": 39,
      "name": "первый ивент",
      "adminname": "первый ивент",
      "periodmin": 100,
      "periodmax": 100,
      "daybinding": "",
      "length": 10,
      "type": "buff",
      "params": 115,
      "reqs": [
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        {
          "param": "nikogdanepokazyvati",
          "type": "=",
          "value": "1"
        }
      ],
      "endreqs": "",
      "descr": [
        "Няшка!\n",
        "item:305"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "2" : {
      "id": 2,
      "location": 29,
      "name": "Взрыв газа у зарослей",
      "adminname": "Взрыв газа БОЛОТА 11 ДЖОНОТАНЫ",
      "periodmin": 100,
      "periodmax": 120,
      "daybinding": "",
      "length": 120,
      "type": "buff",
      "params": 115,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "5"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Помимо агрессивной флоры и фауны, на болотах вас подстерегает еще одна опасность - спонтанные выбросы болотного газа, отравляющие всех, кто имел неосторожность оказаться поблизости.\n \nКаждый застигнутый на локации персонаж получает эффект «Отравление болотным газом»:",
        "buff:115"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "3" : {
      "id": 3,
      "location": 28,
      "name": "Взрыв газа у гнезда",
      "adminname": "Взрыв газа у гнезда",
      "periodmin": 90,
      "periodmax": 130,
      "daybinding": "",
      "length": 120,
      "type": "buff",
      "params": 115,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "5"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Помимо агрессивной флоры и фауны, на болотах вас подстерегает еще одна опасность - спонтанные выбросы болотного газа, отравляющие всех, кто имел неосторожность оказаться поблизости.\n \nКаждый застигнутый на локации персонаж получает эффект «Отравление болотным газом»:",
        "buff:115"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "4" : {
      "id": 4,
      "location": 94,
      "name": "Биологическая опасность",
      "adminname": "Биологическая опасность",
      "periodmin": 90,
      "periodmax": 125,
      "daybinding": "",
      "length": 120,
      "type": "attackmob",
      "params": {
        "74x1": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "8"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Под толстым слоем снега и льда скрывается огромное количество таинственных пещер, штолен, гротов и прочих катакомб. Неудивительно, что из некоторых нор лезут такие малоприятные «подснежники», как Разносчики заразы.\n\nСоблюдайте гигиену и обязательно мойте руки после каждого боя, иначе, вы рискуете заболеть:",
        "buff:116"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "5" : {
      "id": 5,
      "location": 36,
      "name": "Щедрый Мунэхиса",
      "adminname": "Вендор_Болота_Щедрый Мунэхиса",
      "periodmin": 240,
      "periodmax": 240,
      "daybinding": "",
      "length": 300,
      "type": "vendor",
      "params": 695,
      "reqs": [
        [
          {
            "param": "level",
            "type": "<",
            "value": "10"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Великий торговец Мунэхиса Хомма случайно оказался на болотах.\n\nУ него с собой есть партия настоев, которую он с удовольствием распродаст путешественникам, случайно заставшим его у Проклятого Дерева.\n\n Ассортимент: \n",
        "item:64",
        "item:68",
        "item:107",
        "item:108",
        "item:280"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "6" : {
      "id": 6,
      "location": 88,
      "name": "Кеды наголо!",
      "adminname": "Нападение Енотов",
      "periodmin": 50,
      "periodmax": 70,
      "daybinding": "",
      "length": 120,
      "type": "attackmob",
      "params": {
        "77x2": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          },
          {
            "param": "questknown",
            "type": "=",
            "value": "60"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Побитые, облезлые и бесхвостые Ено перекрасили челки, нацепили кеды и вышли на тропу войны! Не упустите шанс добыть уникальную обувь.\n",
        "item:301"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "7" : {
      "id": 7,
      "location": 26,
      "name": "Свидание с Сестрами",
      "adminname": "Свидание с Сестрами_дорога на болота",
      "periodmin": 180,
      "periodmax": 200,
      "daybinding": "",
      "length": 60,
      "type": "attackmob",
      "params": {
        "69x1,79x1,80x1": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "5"
          },
          {
            "param": "questknown",
            "type": "=",
            "value": "64"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Дороги в наше время небезопасны. Особенно болотистый отрезок между Чилтоном и Торфяными Топями, где орудует банда «Бритых сестер». Впрочем, у старательных блюстителей спокойствия на дорогах есть шанс отобрать у разбойниц одно из столь любимых ими украшений.\n",
        "item:323"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "8" : {
      "id": 8,
      "location": 95,
      "name": "Щедрый Хашогги",
      "adminname": "Вендор_Горы_Щедрый Хашогги",
      "periodmin": 240,
      "periodmax": 240,
      "daybinding": "",
      "length": 300,
      "type": "vendor",
      "params": 696,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "9"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Мудрец Хашогги смог раздобыть партию контрабандных настоев, которую он предлагает всем желающим за весьма разумные деньги.\n\n Ассортимент: \n",
        "item:66",
        "item:237",
        "item:236",
        "item:69",
        "item:280"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "9" : {
      "id": 9,
      "location": 8,
      "name": "Замогильный нерест",
      "adminname": "Замогильный нерест",
      "periodmin": 30,
      "periodmax": 30,
      "daybinding": "",
      "length": 60,
      "type": "attackmob",
      "params": {
        "90x1": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "85"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "85"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Огромные залежи песчаника в окрестностях Города свидетельствует о том, что вся эта местность была когда-то дном доисторического моря.\n\nВ качестве наглядного доказательства данной теории могут служить окаменелые трупы древних рыб, периодически нападающих на мирных посетителей кладбища.\n",
        "item:367"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "10" : {
      "id": 10,
      "location": 226,
      "name": "Кровавый Спорт. Раунд 1",
      "adminname": "Кровавый Спорт. Раунд 1",
      "periodmin": 1440,
      "periodmax": 1440,
      "daybinding": [
        {
          "min": 64800,
          "max": 64800
        }
      ],
      "length": 60,
      "type": "chaotic",
      "params": "",
      "reqs": "",
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Ежедневно, ровно в 18.00 по местному времени (случайно совпадающему с земным московским) Тайлер приглашает вас посетить Бойцовский Клуб и принять участие в первом раунде массовых боев в номинации «стенка на стенку»."
      ],
      "inform": 0,
      "informmsg": "Через 10 минут в Бойцовском Клубе начнется очередной раунд <a href=\"/library/events/fightclub/\" target=\"_blank\">Кровавых боев</a>. Приглашаются все желающие!",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "11" : {
      "id": 11,
      "location": 226,
      "name": "Кровавый Спорт. Раунд 2",
      "adminname": "Кровавый Спорт. Раунд 2",
      "periodmin": 1440,
      "periodmax": 1440,
      "daybinding": [
        {
          "min": 75600,
          "max": 75600
        }
      ],
      "length": 60,
      "type": "chaotic",
      "params": "",
      "reqs": "",
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Ежедневно, ровно в 21.00 по местному времени (случайно совпадающему с земным московским) Тайлер приглашает вас посетить Бойцовский Клуб и принять участие во втором раунде массовых боев в номинации «стенка на стенку»."
      ],
      "inform": 0,
      "informmsg": "Через 10 минут в Бойцовском Клубе начнется очередной раунд <a href=\"/library/events/fightclub/\" target=\"_blank\">Кровавых боев</a>. Приглашаются все желающие!",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "12" : {
      "id": 12,
      "location": 226,
      "name": "Кровавый Спорт. Раунд 3",
      "adminname": "Кровавый Спорт. Раунд 3",
      "periodmin": 1440,
      "periodmax": 1440,
      "daybinding": [
        {
          "min": 0,
          "max": 0
        }
      ],
      "length": 60,
      "type": "chaotic",
      "params": "",
      "reqs": "",
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Ежедневно, ровно в 24.00 по местному времени (случайно совпадающему с земным московским) Тайлер приглашает вас посетить Бойцовский Клуб и принять участие в третьем раунде массовых боев в номинации «стенка на стенку»."
      ],
      "inform": 0,
      "informmsg": "Через 10 минут в Бойцовском Клубе начнется очередной раунд <a href=\"/library/events/fightclub/\" target=\"_blank\">Кровавых боев</a>. Приглашаются все желающие!",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "13" : {
      "id": 13,
      "location": 2,
      "name": "Милтонфест",
      "adminname": "Милтонфест - МЯСО в фулдаке",
      "periodmin": 180,
      "periodmax": 180,
      "daybinding": [
        {
          "min": 5400,
          "max": 5430
        },
        {
          "min": 16200,
          "max": 16230
        },
        {
          "min": 27000,
          "max": 27030
        },
        {
          "min": 37800,
          "max": 37830
        },
        {
          "min": 48600,
          "max": 48630
        },
        {
          "min": 59400,
          "max": 59430
        },
        {
          "min": 70200,
          "max": 70230
        },
        {
          "min": 81000,
          "max": 81030
        }
      ],
      "length": 60,
      "type": "meat",
      "params": 4,
      "reqs": "",
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "В баре «Full Duck» есть древняя традиция. Каждые 3 часа все посетители бара выходят во двор и бьют друг другу лица. Ничего личного, просто традиция. Драки проходят каждая в своей весовой категории и ведутся до последнего выжившего. Драка начинается при минимум 5 участниках. Победитель получает 5 Очков Арены!"
      ],
      "inform": 1,
      "informmsg": "Через 10 минут в баре «Full Duck» начнется очередной <a href=\"/library/events/miltonfest/\" target=\"_blank\">Милтонфест</a>. Приглашаются все желающие!",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "14" : {
      "id": 14,
      "location": 143,
      "name": "Осада Бастиона. Первая волна",
      "adminname": "Осада Бастиона. Первая волна",
      "periodmin": 60,
      "periodmax": 60,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "113x3": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "13"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "101"
          },
          {
            "param": "palwave",
            "type": "=",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "13"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "101"
          },
          {
            "param": "palwave",
            "type": "=",
            "value": "0"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Монстры, заколдованные Орденом, осаждают Бастион Братства и хотят помешать собранию Совета. Первая волна нападения."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 0,
      "startanother": 15,
      "startwhen": 15,
      "invisible": 0
    },
    "15" : {
      "id": 15,
      "location": 143,
      "name": "Осада Бастиона. Вторая волна",
      "adminname": "Осада Бастиона. Вторая волна",
      "periodmin": 60,
      "periodmax": 60,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "113x3,115x1": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "13"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "101"
          },
          {
            "param": "palwave",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "13"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "101"
          },
          {
            "param": "palwave",
            "type": "=",
            "value": "1"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Монстры, заколдованные Орденом, осаждают Бастион Братства и хотят помешать собранию Совета. Вторая волна нападения."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 1,
      "startanother": 16,
      "startwhen": 15,
      "invisible": 0
    },
    "16" : {
      "id": 16,
      "location": 143,
      "name": "Осада Бастиона. Третья волна",
      "adminname": "Осада Бастиона. Третья волна",
      "periodmin": 60,
      "periodmax": 60,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "113x3,115x2": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "13"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "101"
          },
          {
            "param": "palwave",
            "type": "=",
            "value": "2"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "13"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "101"
          },
          {
            "param": "palwave",
            "type": "=",
            "value": "2"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Монстры, заколдованные Орденом, осаждают Бастион Братства и хотят помешать собранию Совета. Третья волна нападения."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "17" : {
      "id": 17,
      "location": 6,
      "name": "Оживший памятник",
      "adminname": "Оживший памятник - тихоходка",
      "periodmin": 220,
      "periodmax": 260,
      "daybinding": "",
      "length": 600,
      "type": "createmob",
      "params": "",
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "80"
          },
          {
            "param": "level",
            "type": "<=",
            "value": "100"
          }
        ],
        [
          {
            "param": "queststart",
            "type": "=",
            "value": "106"
          }
        ],
        [
          {
            "param": "queststart",
            "type": "=",
            "value": "107"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        {
          "param": "place_holder_param",
          "type": "=",
          "value": "999"
        }
      ],
      "endreqs": [
        {
          "param": "guard6",
          "type": "=",
          "value": "2"
        }
      ],
      "descr": [
        "Феноменальное событие происходит с символом Слоувиля - памятником Тихоходке. Сотни лет назад он был возведен как символ непоколебимости духа горожан и способности выживать в любых условиях. Однако, с недавних пор жители Слоувиля заметили, что памятник необычайным образом оживает и ходит кругами по площади, а затем снова встает на постамент и замирает в прежней позе как ни в чем не бывало. \n",
        "buff:198"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "18" : {
      "id": 18,
      "location": 144,
      "name": "Портал в Храм Солнца",
      "adminname": "Пустыни_Портал в Храм Солнца",
      "periodmin": 360,
      "periodmax": 360,
      "daybinding": "",
      "length": 180,
      "type": "vendor",
      "params": "",
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "14"
          },
          {
            "param": "factionpercent",
            "type": ">=",
            "value": "65"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "14"
          },
          {
            "param": "faction",
            "type": ">",
            "value": "0"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "При определенном расположении звезд в секторе «Рифт» открывается магический портал в Храм Солнца. Попасть в портал смогут только храбрые и доблестные воины, владеющие энергией Зоны 50. Действовать надо быстро, ведь портал открывается всего на 3 минуты."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "19" : {
      "id": 19,
      "location": 87,
      "name": "Явление Азазеля",
      "adminname": "Пустыни_Явление Азазеля",
      "periodmin": 240,
      "periodmax": 240,
      "daybinding": "",
      "length": 600,
      "type": "createmob",
      "params": 123,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "14"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": [
        {
          "param": "guard159",
          "type": "=",
          "value": "2"
        }
      ],
      "descr": [
        "О существовании Храма Солнца Бедуины слагают легенды, но увидеть воочию явление хранителя древнего Храма Солнца Азазеля - несбыточная мечта. Многие исследователи пустынь пытались разгадать секрет Азазеля, но пали под натиском его Ярости. Будьте осторожны и Бог Солнца вознаградит вас!"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 0,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "20" : {
      "id": 20,
      "location": 168,
      "name": "Прозрение",
      "adminname": "Прозрение в сумеречной долине",
      "periodmin": 100,
      "periodmax": 120,
      "daybinding": "",
      "length": 30,
      "type": "buff",
      "params": 238,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "16"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "141"
          }
        ],
        [
          {
            "param": "level",
            "type": ">=",
            "value": "16"
          },
          {
            "param": "questknown",
            "type": "=",
            "value": "146"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "16"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "141"
          }
        ],
        [
          {
            "param": "level",
            "type": ">=",
            "value": "16"
          },
          {
            "param": "questknown",
            "type": "=",
            "value": "146"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Жители сумеречной долины много лет поклоняются идолам в поисках прозрения. Достигнув прозрения можно общаться с Богами, заключенными внутрь идолов. Ищите и обрящете.",
        "buff:238"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "21" : {
      "id": 21,
      "location": 39,
      "name": "Лепрекон",
      "adminname": "Лепрекон",
      "periodmin": 5,
      "periodmax": 7,
      "daybinding": "",
      "length": 180,
      "type": "vendor",
      "params": 1033,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "1"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        {
          "param": "nikogdanepokazyvati",
          "type": "=",
          "value": "1"
        }
      ],
      "endreqs": "",
      "descr": [
        "Только одну неделю в году Лепрекон готов показаться на глаза обитателям мира Утраченной Магии.\n\nОн страстно любит разнообразные драгоценные камни и готов предложить уникальную сделку по обмену ваших Лаббитов на передаваемые, полновесные аналоги.\n\n",
        "item:247"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "22" : {
      "id": 22,
      "location": 231,
      "name": "Kill All Humans!",
      "adminname": "Атака прототипов ПП в Сумерках",
      "periodmin": 110,
      "periodmax": 130,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "200x1": 100
      },
      "reqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "167"
          },
          {
            "param": "params:location:domination",
            "type": "=",
            "value": "faction"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "167"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Роботы в Сумеречном Городе слетают с катушек от обилия энергии. Они нападают на каждого, кто пытается пройти мимо бара Full Duck к центру Города. Их корпус выполнен из ценных металлических сплавов, а ученые Ордена и Братства дорого заплатят за возможность исследовать их маккумуляторы.\n",
        "item:973"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "23" : {
      "id": 23,
      "location": 231,
      "name": "Тропа на Улицу Элм",
      "adminname": "Тропа на Улицу Элм",
      "periodmin": 300,
      "periodmax": 420,
      "daybinding": [
        {
          "min": 1,
          "max": 600
        },
        {
          "min": 52200,
          "max": 52800
        },
        {
          "min": 70200,
          "max": 70800
        }
      ],
      "length": 1500,
      "type": "vendor",
      "params": "",
      "reqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "168"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "168"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Тропа ведет в мрачное логово душегуба Фредди. Правда, самого Фредди увидеть не так просто. Не менее 10 душ требует он, чтобы оказать честь встретиться с вами и вашей фракцией. Успейте победить в максимальном количестве боев за отведенное время. Тропа открывается на 25 минут."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 24,
      "startwhen": 30,
      "invisible": 0
    },
    "24" : {
      "id": 24,
      "location": 234,
      "name": "В гости к Фредди",
      "adminname": "Проход к Фредди - В гости к Фредди",
      "periodmin": 180,
      "periodmax": 180,
      "daybinding": "",
      "length": 600,
      "type": "vendor",
      "params": "",
      "reqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "168"
          },
          {
            "param": "locationgroup",
            "type": "=",
            "value": "33"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Двери к Фредди открываются только для одной фракции, одержавшей большее количество побед в боях на улице Элм. Фредди сильно расстроится, если будет ничья или суммарно фракции не наберут и десяти побед."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "25" : {
      "id": 25,
      "location": 241,
      "name": "Явление Душегуба",
      "adminname": "ВЫРУБЛЕНО",
      "periodmin": 220,
      "periodmax": 260,
      "daybinding": "",
      "length": 60,
      "type": "createmob",
      "params": "",
      "reqs": [
        [
          {
            "param": "params:global:souleaterkilled",
            "type": "=",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        {
          "param": "nikogdanepokazyvati",
          "type": "=",
          "value": "1"
        }
      ],
      "endreqs": [
        {
          "param": "guard241",
          "type": "=",
          "value": "2"
        }
      ],
      "descr": [
        "Феноменальное событие происходит с символом Слоувиля - памятником Тихоходке. Сотни лет назад он был возведен как символ непоколебимости духа горожан и способности выживать в любых условиях. Однако, с недавних пор жители Слоувиля заметили, что памятник необычайным образом оживает и ходит кругами по площади, а затем снова встает на постамент и замирает в прежней позе как ни в чем не бывало. \n",
        "buff:198"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "26" : {
      "id": 26,
      "location": 232,
      "name": "Ключ от подвала",
      "adminname": "Ключ от подвала",
      "periodmin": 11,
      "periodmax": 11,
      "daybinding": [
        {
          "min": 3001,
          "max": 3600
        },
        {
          "min": 55200,
          "max": 55800
        },
        {
          "min": 73200,
          "max": 73800
        }
      ],
      "length": 1500,
      "type": "vendor",
      "params": "",
      "reqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "169"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "169"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Дверь в подвал Михаила открыта! Возможность встретиться с самим изобретателем будет дана лишь тем, кто докажет свою силу уничтожая врагов на территории Сумеречного Города. Дверь открывается на 25 минут."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 27,
      "startwhen": 30,
      "invisible": 0
    },
    "27" : {
      "id": 27,
      "location": 236,
      "name": "Старый друг",
      "adminname": "Проход к Михаилу - Старый друг",
      "periodmin": 180,
      "periodmax": 180,
      "daybinding": "",
      "length": 300,
      "type": "vendor",
      "params": "",
      "reqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "169"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Дверь в подвал Михаила открыта. Возможность встретиться с самим изобретателем будет дана лишь тем, кто докажет свою силу уничтожая врагов на территории Сумеречного Города."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "28" : {
      "id": 28,
      "location": 228,
      "name": "Атака Братства",
      "adminname": "Атака Братства на границу",
      "periodmin": 30,
      "periodmax": 60,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "206x3": 10,
        "206x2": 60,
        "206x1": 30
      },
      "reqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "175"
          },
          {
            "param": "params:location:domination",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "175"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Каратели Братства предприняли отчаянную вылазку и напали на Сумеречную Границу! Отразите их атаку уничтожив как можно больше нападающих.\n"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "29" : {
      "id": 29,
      "location": 237,
      "name": "Атака Ордена",
      "adminname": "Атака Ордена на каньон",
      "periodmin": 30,
      "periodmax": 60,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "207x3": 10,
        "207x2": 60,
        "207x1": 30
      },
      "reqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "176"
          },
          {
            "param": "params:location:domination",
            "type": "=",
            "value": "2"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "questknown",
            "type": "=",
            "value": "176"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Охотники Ордена организовали нападение на Сумеречный Каньон! Отразите их атаку уничтожив как можно больше нападающих.\n"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "30" : {
      "id": 30,
      "location": 39,
      "name": "Благословение совы",
      "adminname": "Благословение совы",
      "periodmin": 1440,
      "periodmax": 1440,
      "daybinding": "",
      "length": 30,
      "type": "buff",
      "params": 379,
      "reqs": [
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        {
          "param": "nikogdanepokazyvati",
          "type": "=",
          "value": "1"
        }
      ],
      "endreqs": "",
      "descr": [
        "Доброй охоты тем, кто не спит. ",
        "buff:379"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "31" : {
      "id": 31,
      "location": 248,
      "name": "Изнурение",
      "adminname": "Изнурение",
      "periodmin": 10,
      "periodmax": 10,
      "daybinding": "",
      "length": 30,
      "type": "buff",
      "params": 349,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "16"
          }
        ]
      ],
      "showreqs": [
        {
          "param": "nikogdanepokazyvati",
          "type": "=",
          "value": "1"
        }
      ],
      "endreqs": "",
      "descr": [
        "Гнетущая атмосфера на Сумеречной Арене мешает отдыху. Эффекты изнурения не исчезают с течением времени. ",
        "buff:349"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "32" : {
      "id": 32,
      "location": 25,
      "name": "Конец Света!",
      "adminname": "Конец Света!",
      "periodmin": 11,
      "periodmax": 12,
      "daybinding": "",
      "length": 30,
      "type": "buff",
      "params": 455,
      "reqs": [
        [
          {
            "param": "equippeditem",
            "type": ">",
            "value": "0",
            "id": "1186"
          },
          {
            "param": "endofday",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "endofday",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "В современном мире, полном научного скептицизма, мало кому удается сохранить чистую веру в предсказания, тем более астрологи сами постоянно путаются и противоречат друг другу. Но есть небесные явления, значение которых астрологи толкуют единогласно. Например: \"Огромная комета, пылающая в верхних слоях атмосферы, предвещает мало хорошего...\". Главное - в момент Конца Света оказаться в Бункере Терпимости с надетым бумажным пакетом на голову."
      ],
      "inform": 1,
      "informmsg": "Через 10 минут настанет Конец Света! Надевайте бумажные пакеты и поспешите в бункер!",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "33" : {
      "id": 33,
      "location": 39,
      "name": "Новогодние скидки! Не пропустите!",
      "adminname": "Новогодние скидки! Не пропустите!",
      "periodmin": 11,
      "periodmax": 12,
      "daybinding": [
        {
          "min": 0,
          "max": 1
        }
      ],
      "length": 180,
      "type": "buff",
      "params": 455,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "2"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "nikogdanepokazivat",
            "type": ">",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Каждую полночь по Москве вас ожидает 50% скидка на три случайных предмета экипировки из Магазина! Новый день - новые скидки. Эта уникальная возможность купить желаемый предмет вдвое дешевле предоставляется всего на 30 минут!"
      ],
      "inform": 0,
      "informmsg": "Через 10 минут начнется очередная новгодняя распродажа! Скидки на экипировку от 50% в Магазине! Не пропустите, распродажа длится всего полчаса.",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "34" : {
      "id": 34,
      "location": 39,
      "name": "Не обед",
      "adminname": "Не обед",
      "periodmin": 5,
      "periodmax": 10,
      "daybinding": "",
      "length": 180,
      "type": "vendor",
      "params": "",
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Почтовые гномы принялись за работу!"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "35" : {
      "id": 35,
      "location": 254,
      "name": "Присутствие призраков",
      "adminname": "Присутствие призраков",
      "periodmin": 2,
      "periodmax": 2,
      "daybinding": "",
      "length": 120,
      "type": "buff",
      "params": 349,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Вокруг кружат раздраженные вторжением на свою территорию духи. Они держаться на почтительном расстоянии не обращая внимания на пришельцев, но их постоянное присутствие действует изнуряюще."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "36" : {
      "id": 36,
      "location": 39,
      "name": "Радость Админов",
      "adminname": "Радость Админов!",
      "periodmin": 2,
      "periodmax": 2,
      "daybinding": "",
      "length": 120,
      "type": "buff",
      "params": 349,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Админы радуются и получают изнурение! Радуйтесь, админы!"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "37" : {
      "id": 37,
      "location": 226,
      "name": "Конфликт Фракций!",
      "adminname": "Конфликт Фракций!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Фракции начали открытые военные действия в Зоне 50!"
      ],
      "inform": 1,
      "informmsg": "Конфликт Фракций в Зоне 50 набирает обороты! Осада Бастиона и Станции начнется через 10 минут!",
      "changed": 1,
      "norestart": 1,
      "startanother": 38,
      "startwhen": 0,
      "invisible": 0
    },
    "38" : {
      "id": 38,
      "location": 141,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Зона военных действий! Получив контроль над этой территорией Орден получит возможность атаковать Бастион."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 39,
      "startwhen": 0,
      "invisible": 0
    },
    "39" : {
      "id": 39,
      "location": 140,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Зона военных действий! Получив контроль над этой территорией Братство получит возможность атаковать Станцию."
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 40,
      "startwhen": 0,
      "invisible": 0
    },
    "40" : {
      "id": 40,
      "location": 143,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Бастион под атакой!"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 41,
      "startwhen": 0,
      "invisible": 0
    },
    "41" : {
      "id": 41,
      "location": 142,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Станция атакована!"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 42,
      "startwhen": 0,
      "invisible": 0
    },
    "42" : {
      "id": 42,
      "location": 260,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": "",
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 43,
      "startwhen": 0,
      "invisible": 1
    },
    "43" : {
      "id": 43,
      "location": 259,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": "",
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 46,
      "startwhen": 0,
      "invisible": 1
    },
    "44" : {
      "id": 44,
      "location": 100,
      "name": "Завершение осады",
      "adminname": "Завершение осады",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 60,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": "",
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 1440,
      "invisible": 1
    },
    "45" : {
      "id": 45,
      "location": 100,
      "name": "Завершение баффа",
      "adminname": "Завершение баффа",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 60,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": "",
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "46" : {
      "id": 46,
      "location": 152,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": "",
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 47,
      "startwhen": 0,
      "invisible": 0
    },
    "47" : {
      "id": 47,
      "location": 148,
      "name": "Осада!",
      "adminname": "Осада!",
      "periodmin": 1000,
      "periodmax": 1000,
      "daybinding": "",
      "length": 3600,
      "type": "vendor",
      "params": 0,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": "",
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 44,
      "startwhen": 60,
      "invisible": 0
    },
    "48" : {
      "id": 48,
      "location": 87,
      "name": "Покровительство",
      "adminname": "Покровительство",
      "periodmin": 1440,
      "periodmax": 1440,
      "daybinding": "",
      "length": 60,
      "type": "buff",
      "params": 595,
      "reqs": "",
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Злые силы покровительствуют обладателям талисмана Черного Кота. Каждую полночь, на городском кладбище, вы можете получить бонус к характеристикам.\n",
        "item:1513"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "49" : {
      "id": 49,
      "location": 44,
      "name": "Нападение зомби!",
      "adminname": "Нападение зомби!",
      "periodmin": 60,
      "periodmax": 60,
      "daybinding": "",
      "length": 60,
      "type": "attackmob",
      "params": {
        "281x1": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "264"
          },
          {
            "param": "albertzapknown",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          },
          {
            "param": "queststart",
            "type": "=",
            "value": "264"
          },
          {
            "param": "albertzapknown",
            "type": "=",
            "value": "1"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Нападающие скелеты явно злее, сильнее и быстрее своих собратьев с Кладбища.\n"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "50" : {
      "id": 50,
      "location": 273,
      "name": "Миросплетение",
      "adminname": "Миросплетение",
      "periodmin": 45,
      "periodmax": 60,
      "daybinding": "",
      "length": 120,
      "type": "buff",
      "params": 597,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "20"
          },
          {
            "param": "questknown",
            "type": "=",
            "value": "265"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "20"
          },
          {
            "param": "questknown",
            "type": "=",
            "value": "265"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Чаролесье - мистическое место, где мир духов сплетается с миром людей. Выбрав правильное время, можно перейти из одного мира в другой",
        "buff:597"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "51" : {
      "id": 51,
      "location": 87,
      "name": "Ярмарка - Влепи снежок",
      "adminname": "Ярмарка - Влепи снежок",
      "periodmin": 30,
      "periodmax": 30,
      "daybinding": "",
      "length": 200,
      "type": "createmob",
      "params": "",
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "2"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "2"
          }
        ]
      ],
      "endreqs": [
        {
          "param": "params:location:fatguard",
          "type": "=",
          "value": 2
        }
      ],
      "descr": [
        "Весело и задорно закидываем Дедулю снежками! Каждые полчаса Дедуля появляется на Окраине на расстрельном месте. \n",
        "buff:614"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "52" : {
      "id": 52,
      "location": 100,
      "name": "Вторжение из Лимба",
      "adminname": "Вторжение из Лимба",
      "periodmin": 120,
      "periodmax": 120,
      "daybinding": "",
      "length": 300,
      "type": "buff",
      "params": 116,
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "6"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "6"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Коварные монстры Лимба хотят прорваться в наш мир через порталы на болотах. Помешайте им сделать это!"
      ],
      "inform": 1,
      "informmsg": "Очередное вторжение из Лимба через 10 минут!",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "53" : {
      "id": 53,
      "location": 39,
      "name": "Йотуноборство",
      "adminname": "Йотуноборство",
      "periodmin": 1,
      "periodmax": 1,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "77x2": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Побитые, облезлые и бесхвостые Ено перекрасили челки, нацепили кеды и вышли на тропу войны! Не упустите шанс добыть уникальную обувь.\n",
        "item:301"
      ],
      "inform": 0,
      "informmsg": "Йотун1111Йотун1111",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "54" : {
      "id": 54,
      "location": 39,
      "name": "Замогильный нерест",
      "adminname": "Замогильный нерест",
      "periodmin": 1,
      "periodmax": 1,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "90x1": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Огромные залежи песчаника в окрестностях Города свидетельствует о том, что вся эта местность была когда-то дном доисторического моря.\n\nВ качестве наглядного доказательства данной теории могут служить окаменелые трупы древних рыб, периодически нападающих на мирных посетителей кладбища.\n",
        "item:367"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "55" : {
      "id": 55,
      "location": 222,
      "name": "Йотун на ЦП",
      "adminname": "Йотун на ЦП",
      "periodmin": 2,
      "periodmax": 3,
      "daybinding": "",
      "length": 30,
      "type": "attackmob",
      "params": {
        "327x1": 100
      },
      "reqs": [
        [
          {
            "param": "havenbb",
            "type": "=",
            "value": "247"
          }
        ]
      ],
      "showreqs": [
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "endreqs": "",
      "descr": [
        "Древнее Зло пробудилось, почуяв запах наживы.\n"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "56" : {
      "id": 56,
      "location": 222,
      "name": "Кеды наголо!",
      "adminname": "Нападение Енотов",
      "periodmin": 2,
      "periodmax": 5,
      "daybinding": "",
      "length": 120,
      "type": "attackmob",
      "params": {
        "77x2": 100
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          },
          {
            "param": "questknown",
            "type": "=",
            "value": "60"
          }
        ],
        [
          {
            "param": "isadmin",
            "type": ">",
            "value": "0"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Побитые, облезлые и бесхвостые Ено перекрасили челки, нацепили кеды и вышли на тропу войны! Не упустите шанс добыть уникальную обувь.\n",
        "item:301"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "57" : {
      "id": 57,
      "location": 3,
      "name": "Атака Древнего Зла",
      "adminname": "Атака Древнего Зла",
      "periodmin": 15,
      "periodmax": 20,
      "daybinding": "",
      "length": 60,
      "type": "attackmob",
      "params": {
        "327x1": 100
      },
      "reqs": [
        [
          {
            "param": "havenbb",
            "type": "=",
            "value": "247"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Древнее Зло пробудилось, почуяв запах наживы.\n"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "58" : {
      "id": 58,
      "location": 3,
      "name": "Агрессия из Сумрака Тест",
      "adminname": "Агрессия из Сумрака Тест",
      "periodmin": 55,
      "periodmax": 60,
      "daybinding": "",
      "length": 60,
      "type": "attackmob",
      "params": {
        "345x2": 20,
        "346x2": 20,
        "345x1,346x1": 20
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "3"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Агрессоры из Сумрака - это не только ценные фрагменты, но и сильные акционные тотемы!\n",
        "item:2310"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    },
    "59" : {
      "id": 59,
      "location": 7,
      "name": "Агрессия из Сумрака",
      "adminname": "Агрессия из Сумрака",
      "periodmin": 25,
      "periodmax": 30,
      "daybinding": "",
      "length": 60,
      "type": "attackmob",
      "params": {
        "345x2": 20,
        "346x2": 20,
        "345x1,346x1": 20,
        "345x2,346x2": 5
      },
      "reqs": [
        [
          {
            "param": "level",
            "type": ">",
            "value": "5"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Агрессоры из Сумрака - это не только ценные фрагменты, но и сильные акционные тотемы!\n",
        "item:2310"
      ],
      "inform": 0,
      "informmsg": "",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "60" : {
      "id": 60,
      "location": 10,
      "name": "Кровавый Спорт.",
      "adminname": "Кровавый Спорт.",
      "periodmin": 120,
      "periodmax": 180,
      "daybinding": "",
      "length": 60,
      "type": "chaotic",
      "params": "",
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "4"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Пока не будут выключены из-за бага - в подвале возобновляются и регулярно проходят бои в формате «стенка на стенку»."
      ],
      "inform": 0,
      "informmsg": "Через 10 минут в Бойцовском Клубе начнется очередной раунд <a href=\"/library/events/fightclub/\" target=\"_blank\">Кровавых боев</a>. Приглашаются все желающие!",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "61" : {
      "id": 61,
      "location": 6,
      "name": "Тихоходка в Слоувилле",
      "adminname": "Тихоходка в Слоувилле",
      "periodmin": 600,
      "periodmax": 800,
      "daybinding": "",
      "length": 60,
      "type": "createmob",
      "params": "",
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "3"
          },
          {
            "param": "level",
            "type": "<=",
            "value": "100"
          }
        ],
        [
          {
            "param": "queststart",
            "type": "=",
            "value": "106"
          }
        ],
        [
          {
            "param": "queststart",
            "type": "=",
            "value": "107"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Феноменальное событие происходит с символом Слоувиля - памятником Тихоходке. Сотни лет назад он был возведен как символ непоколебимости духа горожан и способности выживать в любых условиях. Однако, с недавних пор жители Слоувиля заметили, что памятник необычайным образом оживает и отправляется прямо в подвал, а затем снова встает на постамент и замирает в прежней позе как ни в чем не бывало.\n",
        "buff:198"
      ],
      "inform": 1,
      "informmsg": "Тихоходка ожила! Встречайте ее через 10 минут.",
      "changed": 1,
      "norestart": 0,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 1
    },
    "62" : {
      "id": 62,
      "location": 226,
      "name": "Фестиваль болельщиков",
      "adminname": "Фестиваль болельщиков",
      "periodmin": 60,
      "periodmax": 70,
      "daybinding": "",
      "length": 60,
      "type": "chaotic",
      "params": "",
      "reqs": [
        [
          {
            "param": "level",
            "type": ">=",
            "value": "4"
          }
        ]
      ],
      "showreqs": "",
      "endreqs": "",
      "descr": [
        "Фанаты всех стран объединяйтесь, только осторожно!"
      ],
      "inform": 0,
      "informmsg": "Через 10 минут на ЦП начнется дружеская фанатская вечеринка!",
      "changed": 1,
      "norestart": 1,
      "startanother": 0,
      "startwhen": 0,
      "invisible": 0
    }
};