<template>
<div>
    <div class="py-3">
        <Alert background-color="green-600"
               text-color="gray-200"
               :shadow="shadow">
            <template v-if="showBadge" v-slot:badge>
                <Badge uppercase>New</Badge>
            </template>
            You have a new notification!
        </Alert>
    </div>
    <div>
        <span>
            <label for="showBadge">Show Badge</label>
            <input id="showBadge" class="ml-2" type="checkbox" v-model="showBadge"/>
        </span>
        <br/>
        <label>Shadow</label>
        <select v-model="shadow">
            <option value="md">md</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
            <option value="2xl">2xl</option>
            <option value="inner">inner</option>
            <option value="outline">outline</option>
            <option value="none">none</option>
        </select>
    </div>
</div>

</template>

<script>
import Alert from "@/components/Alert.vue"
import Badge from "@/components/atoms/Badge.vue"

export default {
    components: {
        Alert,
        Badge
    },
    data() {
        return {
            showBadge: true,
            shadow: 'none'
        }
    }
}
</script>