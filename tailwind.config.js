/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,jsx,js}"],
    theme: {
        extend: {
            keyframes: {
                'trans-down': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-10px)'
                    }, '100%': {
                        opacity: 0,
                        transform: 'translateY(0)'
                    }
                }
            },
            animation: {
                'trans-down': 'trans-down 0.2s linear'
            }
        },
    },
    plugins: [
        function ({addUtilities}) {
            const newUtilities = {
                '.no-scrollbar::-webkit-scrollbar': {
                    'display': 'none',
                },
                '.no-scrollbar': {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none"
                },
                '.fill-available': {
                    "width": '-webkit-fill-available',
                },
                '.h-chat-form': {
                    "height": 'calc(100% - 56px)'
                },
                '.w-user-chat': {
                    "max-width": 'calc(100% - 64px)'
                },
                '.h-chat-message': {
                    "height": 'calc(100vh - 140px)',
                    "margin-bottom": "93px"
                }
            };
            addUtilities(newUtilities)
        }
    ],
}
