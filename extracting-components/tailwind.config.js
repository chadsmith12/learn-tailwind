module.exports = {
    theme: {
        extend: {
            colors: {
                'brand-blue': {
                    100: '#1992d4',
                    200: '#1578ad'
                },
            },
            spacing: {
                '72': '18rem',
            }
        }
    },
    variants: {
        backgroundColor:  ['responsive', 'hover', 'focus' ,'active']
    },
    plugins: []
}