const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 阻止代码过渡追求规范
  lintOnSave:false,
  // 解决跨域
  devServer:{
    "proxy":{
      "/api":{
        target:"http://127.0.0.1:3000",
        changeOrigin:true,
        pathRewrite:{
          '/api':""
        }
      }
    }
  }
});
