module.exports = {
    "common": {
        "backface-visibility": "visible",
        "animation-name": "flip"
    },
    "list": {
        "0": [
            {
                "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)"
            },
            {
                "animation-timing-function": "ease-out"
            }
        ],
        "40": [
            {
                "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)"
            },
            {
                "animation-timing-function": "ease-out"
            }
        ],
        "50": [
            {
                "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)"
            },
            {
                "animation-timing-function": "ease-in"
            }
        ],
        "80": [
            {
                "transform": "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)"
            },
            {
                "animation-timing-function": "ease-in"
            }
        ],
        "100": [
            {
                "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)"
            },
            {
                "animation-timing-function": "ease-in"
            }
        ]
    }
}