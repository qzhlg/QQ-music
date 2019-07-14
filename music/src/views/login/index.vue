<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" block>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>    
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
</template>
<script>
    import axios from 'axios'
    import {SAVE_TOKEN} from '../../store/type'
    export default {
        data () {
            return {
                formInline: {
                    username: 'qinjunjie',
                    password: '123456'
                },
                ruleInline: {
                    username: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        axios.post('/api/login',{
                            username:this.formInline.username,
                            password:this.formInline.password
                        }).then(res =>{
                            console.log(res.data.token.time)
                            if(res.data.code){
                                this.$store.commit("SAVE_TOKEN",{token:res.data.token.time})
                                sessionStorage.setItem("token",res.data.token.time)
                                this.$router.history.push("/home");
                                this.$Message.success('Success!');
                            }
                        }).catch(error =>{
                            this.$Message.error("服务器拒绝了你的请求")
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
<style>

</style>
