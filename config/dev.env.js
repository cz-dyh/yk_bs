'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8080"',//基础请求地址
  //BASE_API: '"http://172.22.70.59:8080"',//基础请求地址，公司后端ip，还要改index文件
})
