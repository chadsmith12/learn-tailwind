<template>
    <div>
        <Badge uppercase 
            background-color="teal-200"
            text-color="teal-800"
            class="mx-2">
            New
        </Badge>
        <Badge background-color="red-500" text-color="gray-200">
            1
        </Badge>
    </div>
</template>

<script>
import Badge from "@/components/atoms/Badge.vue"

export default {
    components:  {
        Badge
    }
}
</script>