module.exports = {
    "common": {
        "backface-visibility": "visible",
        "animation-name": "flipInY"
    },
    "list": {
        "0": [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)"
            },
            {
                "animation-timing-function": "ease-in"
            },
            {
                "opacity": "0"
            }
        ],
        "40": [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, -20deg)"
            },
            {
                "animation-timing-function": "ease-in"
            }
        ],
        "60": [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, 10deg)"
            },
            {
                "opacity": "1"
            }
        ],
        "80": [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, -5deg)"
            }
        ],
        "100": [
            {
                "transform": "perspective(400px)"
            }
        ]
    }
}