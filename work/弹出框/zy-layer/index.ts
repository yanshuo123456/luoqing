import Alert from './Controls/Alert';
import Confirm from './Controls/Confirm';
import Prompt from './Controls/Prompt';
 
document.getElementById('testAlert').onclick = () => {
    new Alert('网络请求失败！', () => {
        console.log('你点了确定！')
    }).show()
}

document.getElementById('testConfirm').onclick = () => {
    new Confirm('确定要删除吗？', () => {
        console.log('你点了确定！')
    }, () => {
        console.log('你点了取消！')
    }).show()
}

document.getElementById('testPrompt').onclick = () => {
    new Prompt('请填写你的手机号：', '手机号', function() {
        console.log('你点了确定！你输入的是：' + this.text())
    }, () => {
        console.log('你点了取消！')
    }).show()
}