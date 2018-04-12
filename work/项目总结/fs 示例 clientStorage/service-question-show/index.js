const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer();
server.on('request', (req, res) => {
    console.log(req.url);
    //文件请求
    const regex = /.js|.css|.html|\/$/;
    if (regex.test(req.url)) {
        console.log('=====');
        const urlstr = req.url.split('?')[0];
        const r = fs.createReadStream('www' + (urlstr == '/' ? '/index.html' : urlstr));
        r.pipe(res);
    }

    //提交提问数据  /ask  post  question:问题
    if (req.url === '/ask') {
        askHandle(req, res);
    }

    //获取所有提问数据  /questions get
    if (req.url === '/questions') {
        questionsHandle(req, res);
    }
});

server.listen(3000);

function errorHandle(err, res) {
    res.end(JSON.stringify({ success: 0, message: '系统错误，再次尝试' }));
}

function questionsHandle(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const r = fs.createReadStream('asks.json');
    r.pipe(res);
}

function askHandle(req, res) {
    res.setHeader('Content-Type', 'application/json');
    // 获取post请求的数据
    let total = '';
    req.on('data', (data) => {
        total += data;
    })
    req.on('end', () => {
        console.log(total);
        //数据解析
        const totalObj = querystring.parse(total);
        // 保存数据
        const question = totalObj.question;
        const date = (new Date()).toString();

        // 读JSON文件
        fs.readFile('asks.json', (err, data) => {
            if (err) return errorHandle(err, res);

            const dataArr = JSON.parse(data);
            dataArr.unshift({ question, date });
            fs.writeFile('asks.json', JSON.stringify(dataArr), (err) => {
                if (err) return errorHandle(err, res);
                res.end(JSON.stringify({ success: 1, message: '提问成功' }));
                return;
            })
        })
        //解析读到的数据，为数组;
        //添加字段到数组中，unshift;
        // 再把数组write到文件中;
    })
}