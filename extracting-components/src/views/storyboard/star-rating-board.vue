<template>
    <div>
        <h2 class="text-xl text-gray-800">Star Rating Component</h2>
        <StarRating :max-number="6"/>
    </div>
</template>
<script>
import StarRating from "@/components/atoms/StarRating.vue";
export default {
    components: {
        StarRating
    }
}
</script>