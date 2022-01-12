git 拉取代码时出现问题
1.有可能是网络问题   多试几次
2.git push 要输入用户名 和 密码  注：用户名输入的是注册gitHub是的邮箱账号 密码是git的令牌 秘钥 
3.git 有一个上传限制  也有可能上传不成功 git config --global http.postBuffer 524288000 可以试试
  如果不成功的话 试试 下载git LFS