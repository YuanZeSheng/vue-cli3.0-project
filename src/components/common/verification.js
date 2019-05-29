/**
 * *@2019-05-29
 * *@author mikeYuan 
 * *@element 表单校验 配置文件
 */

// 自定义方法
var isChina = (rule, value, callback) => {
  if (value) {
    if (!/^[\u4e00-\u9fa5]+$/.test(value)) {
      callback(new Error('请输入中文名字'));
    } else {
      callback()
    }
  } else {
    callback()
  }
};
var isEnglish = (rule, value, callback) => {
  if (value) {
    if (!/^[a-zA-Z]+$/.test(value)) {
      callback(new Error('请输入英文名字'));
    } else {
      callback()
    }
  } else {
    callback()
  }
};
var isNumber = (rule, value, callback) => {
  if (value) {
    if (isNaN(value) || !/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(value)) {
      callback(new Error('请输入正确手机号码'));
    } else {
      callback()
    }
  } else {
    callback()
  }
};

export default {
  studentChinaName: [
    { required: true, message: '请输入学员中文姓名', trigger: 'blur' },
    { validator: isChina, trigger: 'blur' }
  ],
  studentEnglishName: [
    { required: true, message: '请输入学员英文姓名', trigger: 'blur' },
    { validator: isEnglish, trigger: 'blur' }
  ],
  studentPhone: [
    { required: true, message: '请输入学员电话', trigger: 'blur' },
    { validator: isNumber, trigger: 'blur' }
  ]
}