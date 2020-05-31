module.exports = {
    "common": {
        "animation-duration": "calc(var(--animate-duration) * 2)",
        "animation-name": "hinge",
        "transform-origin": "top left"
    },
    "list": {
        "0": [
            {
                "animation-timing-function": "ease-in-out"
            }
        ],
        "20": [
            {
                "transform": "rotate3d(0, 0, 1, 80deg)"
            },
            {
                "animation-timing-function": "ease-in-out"
            }
        ],
        "40": [
            {
                "transform": "rotate3d(0, 0, 1, 60deg)"
            },
            {
                "animation-timing-function": "ease-in-out"
            },
            {
                "opacity": "1"
            }
        ],
        "60": [
            {
                "transform": "rotate3d(0, 0, 1, 80deg)"
            },
            {
                "animation-timing-function": "ease-in-out"
            }
        ],
        "80": [
            {
                "transform": "rotate3d(0, 0, 1, 60deg)"
            },
            {
                "animation-timing-function": "ease-in-out"
            },
            {
                "opacity": "1"
            }
        ],
        "100": [
            {
                "transform": "translate3d(0, 700px, 0)"
            },
            {
                "opacity": "0"
            }
        ]
    }
}