<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card rounded bg-light mt-5 border-0">
                    <div class="card-body">
                        <h6>Login</h6>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email" v-model="data.email">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control mt-2" placeholder="Password" v-model="data.password">
                        </div>
                        <button class="btn btn-sm btn-primary mt-2 w-100" @click="login">Login</button>
                    </div>
                </div>
            </div>
            <router-link to="/register" class="text-center text-decoration-none">Register Here</router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import axios from 'axios';

const data = ref({email: '', password: ''});

const login = async () => {
    const check = await axios.post('https://reqres.in/api/login', {
        email: data.value.email,
        password: data.value.password
    },
    {
        headers:{
            'x-api-key':'reqres-free-v1'
        }
    });

    if(check.status == 200){
        alert('Register Successful !')
        localStorage.setItem('token', check.data.token)
        router.push({name: login})
    }
}
</script>