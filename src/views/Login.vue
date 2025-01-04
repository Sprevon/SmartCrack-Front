<template>
    <div class="login-container">
        <div class="login-background">
        </div>
        <div class="login-form">
            <h1 class="login-title" style="text-align: center;">登录 SmarkCrack</h1>
            <form>
                <div class="input-container">
                    <label for="username"></label>
                    <el-input type="text" id="username" placeholder="请输入用户名" v-model="username" />
                </div>
                <div class="input-container">
                    <label for="password"></label>
                    <el-input type="password" id="password" placeholder="请输入密码" v-model="password" />
                </div>
                <div style="height: 30px"></div>
                <button type="button" class="login-button" @click="handleLogin">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ElMessageBox } from "element-plus"

export default {
    name: 'Login',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        handleLogin() {
            // 登录逻辑
            console.log("处理登录！")
            if(this.username === '' || this.password === ''){
                ElMessageBox.alert("请输入用户名和密码", "提示", {
                    confirmButtonText: "确定"
                })
                return
            }

            this.$http.post("/sc/login", { username: this.username, password: this.password }).then(response => {
                const code = response.data.code
                if (code === 200) {
                    const informText = "用户 " + this.username + " 登录成功！"
                    ElMessageBox.alert(informText, "提示", {
                        confirmButtonText: "进入主页"
                    })
                    this.$router.push('/home')
                } else {
                    const message =  response.data.message
                    ElMessageBox.alert(message, "提示", {
                        confirmButtonText: "确定"
                    })
                }
            })
        },
    },
};
</script>

<style>
.login-container {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    /* 保持图片的比例，并确保图片完全显示在容器内 */

}

.login-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
}


.background-image {
    height: 1000px;
    width: 100%;
    object-fit: cover;
    filter: blur(5px);
    /* Adjust the blur level as needed */
}

.login-form {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    -webkit-margin-after: 20px;
    -moz-margin-start: 800px;
}

.input-container {
    margin-bottom: 1rem;
    padding-top: 0px;
}

.input-container label:last-child {
    background-color: #707379;
}

el-input~label {
    background-color: white;
    width: 100px;
    color: #0b8ef8;
    margin: auto;
    height: 30px;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.login-button {
    width: 40%;
    margin-left: 30%;
    margin-right: 30%;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #409EFF;
    color: white;
    font-size: 1rem;
    cursor: pointer;
}

.login-button:hover {
    background-color: #367BEC;
}

.floating-controls {
    position: fixed;
    bottom: 20px;
    /* 根据需要调整位置 */
    left: 20px;
    /* 根据需要调整位置 */
    background-color: rgba(0, 0, 0, 0.5);
    /* 半透明背景 */
    padding: 10px;
    border-radius: 5px;
    display: flex;
    gap: 10px;
}
</style>