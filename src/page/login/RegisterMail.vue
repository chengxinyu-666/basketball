<template>
    <div id="login">
        <el-form :model="ruleForm2" :rules="rules2"
         status-icon
         ref="ruleForm2" 
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page">
            <h3 class="title" style="margin-bottom: 20px;">邮箱注册</h3>
            <el-form-item prop="email">
                <el-input type="text" 
                    v-model="ruleForm2.email" 
                    auto-complete="off" 
                    placeholder="邮箱地址"                   
                ></el-input>                
            </el-form-item>
            <el-form-item prop="verification">
                <el-input type="verification" 
                    v-model="ruleForm2.verification" 
                    auto-complete="off" 
                    placeholder="验证码"
                    style="width:70%;"
                   ></el-input>
                <el-button type="primary" style="width:30%;" @click="handleSubmit" :loading="logining">点击获取</el-button>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="text" 
                    v-model="ruleForm2.password" 
                    auto-complete="off" 
                    placeholder="密码"                   
                ></el-input>                
            </el-form-item>
            <el-form-item prop="password1">
                <el-input type="text" 
                    v-model="ruleForm2.password1" 
                    auto-complete="off" 
                    placeholder="确认密码"                   
                ></el-input>                
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">注册</el-button>
            </el-form-item>
            <el-row style="text-align: center; margin-top: -10px;;">
                <el-link type="primary" @click="register_tel()">手机号注册</el-link>                  
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return {
            logining: false,
            ruleForm2: {
                email: '',
                verification: '',
                password: '',
                password1: '',
            },
            rules2: {
                email: [{required: true, message: '请输入邮箱地址！', trigger: 'blur'}],
                verification: [{required: true, message: '请输入验证码！', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码！', trigger: 'blur'}],
                password1: [{required: true, message: '请输入确认密码！', trigger: 'blur'}],
            },
        }
    },
    components:{
    },
    created(){
    },
    methods:{ 
        register_tel(){
            this.$router.push({ path:'/login/register_tel'  })
        },
        handleSubmit(){
            this.$message({
            type: "success",
            message: "还在坚强的写中，你先别着急！先3秒后给你返回首页学会篮球哈!"
          });
          setTimeout(()=>{this.$router.push({ path:'/home'  })},3000)
        }
    }
}
</script>

<style scoped>
#login{
    height: 490px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/*
.login-container {
    width: 100%;
    height: 100%;
}
*/
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
</style>