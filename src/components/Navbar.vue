<script setup>
defineProps({
    title: String
})

const back = () => {
    history.back();
}
</script>
<template>
    <div class="container-fluid bg-white p-3 fixed-top">
        <div class="row">
            <div class="col-1 pt-1 text-center">
                <button class="btn btn-sm btn-default border-0 px-1 py-1 fs-7" @click="back"><span class="fas fa-arrow-left fw-bold"></span></button>
            </div>
            <div class="col pt-2">
                <h6>{{ title }}</h6>
            </div>
            <div class="col-2">
                <img src="/img/pic.png" alt="" class="img-fluid rounded-circle" width="40px">
            </div>
        </div>
    </div>
    <br>
</template>