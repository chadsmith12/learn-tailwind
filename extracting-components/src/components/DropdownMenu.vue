<template>
    <div class="relative">
        <button @click="toggleDropdown" class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Avatar"/>
        </button>
        <button v-if="isOpen" tabindex="-1" @click="isOpen = false" class="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default">
        </button>
        <div v-if="isOpen" class="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl">
            <a href="#" class="block px-4 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white">Account Settings</a>
            <a href="#" class="block px-4 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
            <a href="#" class="block px-4 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white">Logout</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        }
    },
    created() {
        const handleEscape = (e) => {
            if(e.key === "Esc" || e.key === "Escape")  {
                this.isOpen = false;
            }
        }

        document.addEventListener('keydown', handleEscape);

        this.$once('hook:beforeDestroy', () =>{
            document.removeEventListener('keydown', handleEscape);
        })
    },
    destroyed() {
        
    }
}
</script>