import axios from "axios";
import baseURL from "@/common/config";
import {ElMessage} from "element-plus";
import {router} from "@/route";
import app from "@/App";

axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true
axios.defaults.timeout = 15000

axios.interceptors.request.use(config => {
    config.headers['time'] = new Date().getTime();
    return config;
})
//响应拦截器即异常处理
axios.interceptors.response.use(
    response => {
        console.log(this.$route)
        if (401 === response.status) {
            // 重定向到登录页
            app.$route.meta = false
            app.$route.push({
                path: '/auth/login',
                query: {redirect: router.currentRoute.value.fullPath},
            })
        }
        if (response.data.success) {
            // response.data 是解决数据的获取繁琐问题
            return response.data
        } else {
            ElMessage({
                showClose: true,
                message: response.data.message,
                type: 'error',
            })
            // 如果返回的状态失败，需要抛出错误的信息
            return Promise.reject(new Error(response.data.message))
        }
    },
    error => {
        ElMessage({
            showClose: true,
                message: error.response.data,
                type: 'error',
        })
        return Promise.reject(error)
    }
)

export const ajax = {
    //封装get请求
    get(url,params) {
        return new Promise((resolve,reject) => {
            axios.get(url,{
                params:params
            }).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err);
            })
        });
    },
    //封装post请求
    post(url,data,params){
        return new Promise((resolve,reject) => {
            axios.post(url,data,params)
                .then(response => {
                    resolve(response.data);
                },err => {
                    reject(err);
                })
        });
    },
    //封装put请求
    put(url,data,params){
        return new Promise((resolve,reject) => {
            axios.put(url,data,params)
                .then(response => {
                    resolve(response.data);
                },err => {
                    reject(err);
                })
        });
    },
    //封装post请求
    delete(url,params){
        return new Promise((resolve,reject) => {
            axios.delete(url,params)
                .then(response => {
                    resolve(response.data);
                },err => {
                    reject(err);
                })
        });
    }
};
