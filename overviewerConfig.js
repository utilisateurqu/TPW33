var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "TPW3 - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1664992916",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Jour",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "Jour",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "TPW3 - overworld",
            "last_rendertime": 1664821982,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -717,
                46,
                79
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -717,
                46,
                79
            ],
            "north_direction": 3
        },
        {
            "name": "Nuit",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "Nuit",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "TPW3 - overworld",
            "last_rendertime": 1664821982,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -717,
                46,
                79
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -717,
                46,
                79
            ],
            "north_direction": 0
        }
    ]
};
