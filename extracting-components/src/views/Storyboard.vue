<template>
    <div>
        <Navbar/>
        <div class="antialiased text-gray-900 bg-gray-200 min-h-screen p-8 flex items-center justify-center">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
    components: {
        Navbar
    }
}
</script>