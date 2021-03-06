module.exports = {
    "common": {
        "animation-duration": "calc(var(--animate-duration) * 0.75)",
        "backface-visibility": "visible",
        "animation-name": "flipOutY"
    },
    "list": {
        "0": [
            {
                "transform": "perspective(400px)"
            }
        ],
        "30": [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, -15deg)"
            },
            {
                "opacity": "1"
            }
        ],
        "100": [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)"
            },
            {
                "opacity": "0"
            }
        ]
    }
}