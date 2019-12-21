module.exports = {
    devServer: {
        proxy: {
            '/proxy': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                // ws: true,
                pathRewrite: {
                  '^/proxy': '/'
                }
            }
        }
        
    }

}