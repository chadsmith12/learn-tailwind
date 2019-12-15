<template>
    <div>
        <h2 class="text-xl text-gray-800">Star Rating Component</h2>
        <StarRating v-model="rating" :readonly="isReadOnly"/>
        <span>Current Rating: {{ rating }}</span>
        <br>
        <input type="checkbox" v-model="isReadOnly"/>
        <span class="pl-2">Read Only?</span>
    </div>
</template>
<script>
import StarRating from "@/components/atoms/StarRating.vue";

export default {
    components: {
        StarRating
    },
    data() {
        return {
            rating: 3,
            isReadOnly: false
        };
    }
}
</script>