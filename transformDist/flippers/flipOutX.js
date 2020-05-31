module.exports = {
    "common": {
        "animation-duration": "calc(var(--animate-duration) * 0.75)",
        "animation-name": "flipOutX",
        "backface-visibility": "visible"
    },
    "list": {
        "0": [
            {
                "transform": "perspective(400px)"
            }
        ],
        "30": [
            {
                "transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)"
            },
            {
                "opacity": "1"
            }
        ],
        "100": [
            {
                "transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)"
            },
            {
                "opacity": "0"
            }
        ]
    }
}