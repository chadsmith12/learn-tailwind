<template functional>
<div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img class="h-32 w-32 flex-shrink-0" :src="props.destination.imageUrl" :alt="props.destination.imageAlt">
    <div class="px-6 py-4">
        <h3 class="text-lg font-semibold text-gray-800">{{ props.destination.city }}</h3>
        <p class="text-gray-600">${{ props.destination.averagePrice }} / night average</p>
        <div class="mt-4">
            <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                Explore {{  props.destination.propertyCount }} properties
            </a>
        </div>
    </div>
</div>
</template>
    
<script>
export default {
    props: {
        destination: Object
    }
}
</script>