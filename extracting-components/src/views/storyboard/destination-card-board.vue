<template>
    <DestinationCard :destination="destination"/>
</template>

<script>
import DestinationCard from "@/components/DestinationCard.vue";

export default {
    components: {
        DestinationCard
    },
    data() {
        return {
            destination: {
                city: 'Toronto',
                averagePrice: 120,
                propertyCount: 76,
                imageUrl: '/img/toronto.jpg',
                imageAlt: 'Toronto skyline',
            }
        }
    }
}
</script>