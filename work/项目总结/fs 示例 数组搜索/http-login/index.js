// 导入http模块;
const http = require('http');
const fs = require('fs');
// 查询字符串模块；负责查询字符串的解析;
const querystring = require('querystring');

// 创建一个服务器对象
const server = http.createServer();
// 监听request事件，处理请求
server.on('request', (req, res) => {
    //判断请求是否是为了获取文件

    // regex:regular expression 正则表达式
    // 以某种特殊格式书写的字符串;
    // 用来检测字符串是否符合要求;
    // 正则表达式语法: |代表或者; $代表以...结尾;

    // test():检测字符串是否符合正则验证，符合返回true，否则返回false;
    const regex = /.js|.css|.html|\/$/;
    if (regex.test(req.url)) {
        const r = fs.createReadStream('www' + (req.url == '/' ? '/index.html' : req.url));
        r.pipe(res);
    }

    console.log(req.url);
    if (req.url === '/login') {
        // 处理登录请求
        loginHandle(req, res);
    }

})
//监听端口 
server.listen(3000);


// 处理登录请求
function loginHandle(req, res) {
    // 设置响应头，说明反馈数据类型
    res.setHeader('Content-Type','application/json')
    // 怎么从post请求中获取数据？？
    // 发送数据到服务器会触发data事件，发送数据结束会触发end事件;可以通过监听事件获取数据

    // 数据量大的时候，data会被触发多次，每次只能得到一部分数据；我们需要去进行数据拼接;
    var total = '';
    req.on('data', (data) => {
        total += data;
    })
    req.on('end', () => {
        //触发end事件，说明数据接收完毕，得到了完整的数据;
        const userObj = querystring.parse(total);
        const username = userObj.username;
        const password = userObj.password;

        //与文件中数据对比;
        fs.readFile('users.json', (err, data) => {
            if (err) {
                res.end(JSON.stringify({ success: 0, message: '系统错误，请再次尝试' }));
                return;
            }
            const arr = JSON.parse(data);
            for (let i = 0; i < arr.length; i++) {
                if(username == arr[i].username){
                    if(password == arr[i].password){
                        res.end(JSON.stringify({ success: 1, message: '登录成功' }));
                        return;
                    }
                    res.end(JSON.stringify({ success: 0, message: '密码错误，登录失败' }));
                    return;
                }
            }
            res.end(JSON.stringify({ success: 0, message: '用户不存在，登录失败' }));
        })
    })
}

/**
 * 知识点：
 * 1、数组api;
 * 2、正则验证；
 * 3、ajax-post请求;
 * 4、服务端获取post数据;
 */ 