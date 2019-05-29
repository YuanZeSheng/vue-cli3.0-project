import axios from 'axios'

// axios 配置
axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; //让ajax携带cookie
// axios 其他配置

// uni axios
export function fetch(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}
export function Get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}

// default
export default {
    makeFormData1 (obj) {

        var form_data = new FormData()
        var data = [];
        if (obj instanceof File) {
            data.push({key: "", value: obj});
        } else if (obj instanceof Array) {
            for (var j = 0, len = obj.length; j < len; j++) {
                var arr = this.makeFormData1(obj[j]);
                for (var k = 0, l = arr.length; k < l; k++) {
                    var key = !!form_data ? j + arr[k].key : "[" + j + "]" + arr[k].key;
                    data.push({key: key, value: arr[k].value})
                }
            }
        } else if (typeof obj == 'object') {
            for (var j in obj) {
                var arr = this.makeFormData1(obj[j]);
                for (var k = 0, l = arr.length; k < l; k++) {
                    var key = !!form_data ? j + arr[k].key : "[" + j + "]" + arr[k].key;
                    data.push({key: key, value: arr[k].value})
                }
            }
        } else {
            data.push({key: "", value: obj});
        }
        if (!!form_data) {
            // 封装
            for (var i = 0, len = data.length; i < len; i++) {
                form_data.append(data[i].key, data[i].value)
            }
        } else {
            return data;
        }
    },
    // 示例
    handleGetApiTest(param) {
      return Get('/***/***/', this.makeFormData1(param))
    },
}

