const path = require('path')
const pathResolve = (pathUrl) => {
    return path.join(__dirname, pathUrl)
}

module.exports = {
    webpack: {
        alias: {
            '@': pathResolve('src')
        }
    },
    babel: {
        plugins: [
            // antd 的按需加载
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: 'css'
                }
            ]
        ]
    }
}