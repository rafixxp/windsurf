<style scoped>
.fs-21{
    font-size: 12px;
}
</style>

<template>
    <Navbar title="Input Transaksi"/>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card bg-white border-0 rounded shadow-sm">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="fs-21">Tanggal Transaksi</label>
                            <input type="date" class="form-control mt-1">
                        </div>
                        <div class="form-group mt-1">
                            <label class="fs-21">Nomor Pesanan</label>
                            <input type="number" class="form-control mt-1" value="20250618144789">
                        </div>
                        <div class="form-group mt-1">
                            <label class="fs-21">Nomor Pesanan</label>
                            <select name="" id="" class="form-select">
                                <option value="">Pilih Pelanggan</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-2">
                <div class="card bg-white border-0 rounded mt-1 shadow-sm">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="fs-21">Cari Barang</label>
                            <input type="text" class="form-control" placeholder="Masukkan Kata Kunci">
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label class="fs-21">Kuantitas</label>
                                <input type="number" class="form-control text-center" value="1">
                            </div>
                            <div class="col">
                                <label class="fs-21">Total</label>
                                <input type="text" class="form-control text-end" value="Rp.0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-2">
                <div class="card bg-white border-0 rounded mt-1 shadow-sm">
                    <div class="card-body">
                        <table class="table table-borderless text-dark-50 fs-21">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th class="text-end">Qty</th>
                                    <th class="text-end">Total</th>
                                    <th class="text-center">Opsi</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Panel/>
</template>

<script setup>
import Navbar from '../../components/Navbar.vue';
import Panel from '../../components/Panel.vue';
</script>