module.exports = {
    "common": {
        "animation-duration": "calc(var(--animate-duration) * 0.75)",
        "animation-name": "bounceOut"
    },
    "list": {
        "20": [
            {
                "transform": "scale3d(0.9, 0.9, 0.9)"
            }
        ],
        "50": [
            {
                "opacity": "1"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1)"
            }
        ],
        "55": [
            {
                "opacity": "1"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1)"
            }
        ],
        "100": [
            {
                "opacity": "0"
            },
            {
                "transform": "scale3d(0.3, 0.3, 0.3)"
            }
        ]
    }
}