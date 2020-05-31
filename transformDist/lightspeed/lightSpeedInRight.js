module.exports = {
    "common": {
        "animation-name": "lightSpeedInRight",
        "animation-timing-function": "ease-out"
    },
    "list": {
        "0": [
            {
                "transform": "translate3d(100%, 0, 0) skewX(-30deg)"
            },
            {
                "opacity": "0"
            }
        ],
        "60": [
            {
                "transform": "skewX(20deg)"
            },
            {
                "opacity": "1"
            }
        ],
        "80": [
            {
                "transform": "skewX(-5deg)"
            }
        ],
        "100": [
            {
                "transform": "translate3d(0, 0, 0)"
            }
        ]
    }
}