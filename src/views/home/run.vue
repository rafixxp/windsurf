<template>
  <Navbar title="Run" />

  <div class="container mt-5 py-4">
    <!-- MAP -->
    <div class="ratio ratio-4x3 mb-3">
      <div id="map"></div>
    </div>

    <!-- TOMBOL -->
    <button class="btn btn-primary w-100 mb-3" @click="startTracking">
      🏁 Start Run
    </button>

    <!-- INFORMASI WAKTU & JARAK -->
    <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm">
      <div>
        <i class="fas fa-clock me-2"></i>
        <strong>Waktu:</strong> {{ duration }} detik
      </div>
      <div>
        <i class="fas fa-road me-2"></i>
        <strong>Jarak:</strong> {{ distance.toFixed(2) }} m
      </div>
    </div>
  </div>

  <Panel />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Panel from '../../components/Panel.vue'
import Navbar from '../../components/Navbar.vue'

let map
const positions = ref([])
let polyline = null
let watchId = null
const startTime = ref(null)
const duration = ref(0)
const distance = ref(0)

const startTracking = () => {
  if (!navigator.geolocation) {
    alert('Geolocation tidak didukung.')
    return
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const latlng = [pos.coords.latitude, pos.coords.longitude]
      positions.value = [latlng]
      map.setView(latlng, 16)
      L.marker(latlng).addTo(map).bindPopup('Titik Awal').openPopup()
      polyline = L.polyline([latlng], { color: 'blue' }).addTo(map)

      startTime.value = Date.now()
      duration.value = 0
      distance.value = 0

      if (watchId) navigator.geolocation.clearWatch(watchId)

      watchId = navigator.geolocation.watchPosition(
        pos => {
          const newLatLng = [pos.coords.latitude, pos.coords.longitude]
          positions.value.push(newLatLng)

          polyline.setLatLngs(positions.value)
          L.circleMarker(newLatLng, { radius: 4, color: 'red' }).addTo(map)

          // Update waktu
          duration.value = Math.floor((Date.now() - startTime.value) / 1000)

          // Hitung jarak
          if (positions.value.length > 1) {
            const prev = positions.value[positions.value.length - 2]
            const curr = newLatLng
            distance.value += haversineDistance(prev, curr)
          }
        },
        err => console.error('Gagal tracking:', err),
        {
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 10000
        }
      )
    },
    err => alert('Gagal mendapatkan lokasi awal.')
  )
}

// Fungsi hitung jarak (Haversine Formula)
function haversineDistance([lat1, lon1], [lat2, lon2]) {
  const R = 6371000 // Radius bumi dalam meter
  const toRad = x => (x * Math.PI) / 180

  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

onMounted(() => {
  map = L.map('map').setView([0, 0], 2)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)
})
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
