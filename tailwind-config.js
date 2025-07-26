tailwind.config = {
    theme: {
        extend: {
            colors: {
                cyber: {
                    dark: '#0a0a12',
                    darker: '#050509',
                    primary: '#00f0ff',
                    secondary: '#ff00f0',
                    accent: '#00ff7b',
                    text: '#e0e0ff',
                    muted: '#8a8a9c',
                }
            },
            fontFamily: {
                'cyber': ['"Rajdhani"', 'sans-serif'],
                'tech': ['"Share Tech Mono"', 'monospace'],
                'qurova': ['"Qurova"', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'scanline': 'scanline 8s linear infinite',
                'flicker': 'flicker 0.01s ease-in-out infinite',
                'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%, 100%': { 'text-shadow': '0 0 5px #00f0ff, 0 0 10px #00f0ff' },
                    '50%': { 'text-shadow': '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff' }
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' }
                },
                flicker: {
                    '0%, 100%': { opacity: '0.98' },
                    '50%': { opacity: '0.95' }
                },
                'neon-flicker': {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' }
                }
            }
        }
    }
}