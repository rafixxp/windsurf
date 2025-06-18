<template>
    <div class="container-fluid fixed-bottom bg-white shadow pb-1 pt-2">
        <div class="row">
            <div class="col text-center p-0">
                <router-link to="/" class="text-decoration-none text-dark">
                    <i class="fas fa-home"></i><br>
                    <span class="fs-21">Home</span>
                </router-link>
            </div>
            
            <div class="col text-center p-0">
                <router-link to="/run" class="text-decoration-none text-dark">
                    <i class="fas fa-person-running fs-4"></i><br>
                    <span class="fs-21">Run</span>
                </router-link>
            </div>
            
            <div class="col text-center p-0">
                <router-link to="/" class="text-decoration-none text-dark">
                    <i class="fas fa-user"></i><br>
                    <span class="fs-21">Profile</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fs-21{
    font-size: 12px;
}
</style>