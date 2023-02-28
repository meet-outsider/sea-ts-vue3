import {ElMessageBox, ElMessage, MessageHandler} from 'element-plus'

const instances: MessageHandler[] = []
/**
 * 消息提示
 * @param msg 提示信息
 * @param type 消息类型
 */
const message = (msg: string, type: any) => {
    let options = {
        offset: 20,
        showClose: true,
        message: msg,
        type: type
    }
    if (instances.length <= 2) {
        instances.push(ElMessage(options))
    } else {
        instances[0].close()
        instances.shift()
        instances.push(ElMessage(options))
    }
}
/**
 * 成功提示
 * @param msg 提示信息
 */
const success = (msg: string) => {
    message(msg, 'success');
}
/**
 * 消息提示
 * @param msg 提示信息
 */
const info = (msg: string) => {
    message(msg, 'info');
}
/**
 * 错误提示
 * @param msg 提示信息
 */
const error = (msg: string) => {
    message(msg, 'error');
}

/**
 * 警告提示
 * @param msg 提示信息
 */
const warning = (msg: string) => {
    message(msg, 'warning');
}

/**
 * alert提示框
 * @param title 标题
 * @param msg 信息
 * @param ok ok函数
 * @param okText ok按钮文字
 */
// @ts-ignore
const alert = ({title, msg, ok, okText}) => {
    if (!title) {
        title = '提示';
    }
    if (!msg) {
        msg = '错误';
    }
    if (!okText) {
        okText = '确定';
    }
    ElMessageBox.alert(msg, title, {
        confirmButtonText: okText,
    }).then(ok ? ok : () => {
    });
}

/**
 * confirm 提示框
 * @param title 标题
 * @param msg 信息
 * @param ok ok函数
 * @param okText ok按钮文字
 * @param cancel 取消函数
 * @param cText cancel按钮文字
 */
// @ts-ignore
const confirm = ({title, msg, ok, okText, cancel, cText}) => {
    ElMessageBox.confirm(msg, title ? title : '提示', {
        confirmButtonText: okText ? okText : '确定',
        cancelButtonText: cText ? cText : '取消',
    }).then(ok ? ok : () => {
    }).catch(cancel ? cancel : () => {
    });
}

export default {
    success,
    info,
    error,
    warning,
    alert,
    confirm,
}
