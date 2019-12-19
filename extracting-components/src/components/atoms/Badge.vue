<template>
    <span :class="classes" class="inline-block text-xs px-2 rounded-full font-semibold tracking-wide">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: 'teal-200'
        },
        textColor: {
            type: String,
            default: 'teal-800'
        },
        uppercase: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes: function() {
            const backgroundColor = `bg-${this.backgroundColor}`;
            const textColor = `text-${this.textColor}`;
            const textClasses =  {
                "uppercase": this.uppercase
            }

            return [backgroundColor, textColor, textClasses];
        }
    }
}
</script>