module.exports = {
  devtool: 'eval-cheap-module-source-map',    // cheat: 忽略列信息，
                                              // module: 会定位ts源码非loader转移后的js源码
                                              // eval-source-map: 将source-map 以 dist url 形式打包到文件中，它的重编译速度是很快的
  devServer: {
    port: 8080
  }
}