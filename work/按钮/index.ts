import Alert from './Controls/Alert'
import Alerts from './Controls/Alerts'
import Alerte from './Controls/Alerte'

document.getElementById('testAlert').onclick = function () {
    new Alert('网络请求失败!', function () {
        console.log('确定')
    }).show()
}


document.getElementById('testConfirm').onclick = function () {
    new Alerts('第二页!', function () {
        console.log('第二页')
    }).show()
}


document.getElementById('testPrompt').onclick = function () {
    new Alerte('第三页!', function () {
        console.log('第三页')
    }).show()
}