<template>
    <div class="antialiased text-gray-900 bg-white border rounded-lg overflow-hidden">
        <!-- the following div can be used instead of the image tag if you had to suuport ie-11 -->
        <!-- <div class="h-48 bg-cover bg-center"
             :style="{backgroundImage: `url('${property.imageUrl}')`}">
        </div> -->
        <img :src="property.imageUrl" class="h-48 w-full object-cover" :alt="property.imageAlt">
        <div class="p-6">
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