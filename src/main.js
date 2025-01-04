import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "element-plus/dist/index.css"
import ElementPlus from 'element-plus'
import Axios from 'axios' 

const app = createApp(App)

app.use(router) 
app.use(ElementPlus)

Axios.defaults.baseURL = "http://localhost:8088"
// Axios.interceptors.response.use(
//     response => {
//         console.log("响应数据", response)
//         if (response.data.code !== 200){
//             ElMessage.error(response.data.message)
//         }
//         return response
//     }, error => {
//         if (error.response.status === 401){
//             ElMessage.error("未登录！")
//         }
//     }
// )
app.config.globalProperties.$http = Axios


app.mount('#app')
