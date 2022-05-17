var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc_level-1_starbucks",
      "name": "ERC_Level 1_Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.151626955167508,
        "pitch": 0.037888363117172474,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.6136817620808408,
          "pitch": -0.07537567204071038,
          "rotation": 0,
          "target": "1-erc_level-1_nearescalator_photo_1512"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7167014119424167,
          "pitch": 0.09238981068755336,
          "title": "Open study area",
          "text": "It's 24-7!"
        }
      ]
    },
    {
      "id": "1-erc_level-1_nearescalator_photo_1512",
      "name": "ERC_Level 1_NearEscalator_PHOTO_1512",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.055483990091476,
          "pitch": 0.03693260571855994,
          "rotation": 0,
          "target": "0-erc_level-1_starbucks"
        },
        {
          "yaw": -2.3025227350684006,
          "pitch": 0.06788380635085645,
          "rotation": 0,
          "target": "2-erc_level-1_tembusu-tree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8777241002613607,
          "pitch": -0.009101852186571335,
          "title": "This way to Mac common",
          "text": "open to NUS students"
        }
      ]
    },
    {
      "id": "2-erc_level-1_tembusu-tree",
      "name": "ERC_Level 1_Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.719344829887323,
          "pitch": 0.10440172974913509,
          "rotation": 0,
          "target": "1-erc_level-1_nearescalator_photo_1512"
        },
        {
          "yaw": 2.5698725973339265,
          "pitch": 0.08997087873468601,
          "rotation": 0,
          "target": "0-erc_level-1_starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.108132856193847,
          "pitch": 0.33329547192096953,
          "title": "Tembusu",
          "text": "Meet utown cat Ashy around!"
        }
      ]
    }
  ],
  "name": "ERC Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
