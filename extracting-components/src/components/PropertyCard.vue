<template>
    <div>
        <div class="relative bg-red-500 pb-5/6">
            <img :src="property.imageUrl" class="absolute h-full w-full object-cover rounded-lg shadow-md" :alt="property.imageAlt">
        </div>
        <div class="relative px-4 -mt-16">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                    <Badge uppercase>New</Badge>
                    <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                        {{ property.beds }} beds &bull; {{ property.baths }} baths
                    </div>
                </div>
                <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ property.title }}</h4>
                <div class="mt-1">
                    {{ property.formattedPrice }} <span class="text-gray-600 text-sm">/ wk</span>
                </div>
                <div class="mt-2 flex items-center ml-2">
                    <StarRating :value="property.rating" readonly/>
                    <span class="text-gray-600 text-sm ml-2">{{ property.reviewCount }} reviews</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from  "@/components/atoms/StarRating.vue";
import Badge from "@/components/atoms/Badge.vue"

export default {
    components: {
        StarRating,
        Badge
    },
    props: {
        property:  {
            type: Object
        }
    }
}
</script>