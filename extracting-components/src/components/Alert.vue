<template>
    <div v-if="isOpen" :class="classes" class="p-2 items-center sh leading-none flex lg:inline-flex" role="alert">
        <span class="flex mr-3">
            <slot name="badge"></slot>
        </span>
        <span class="font-semibold mr-2 text-left flex-auto">
            <slot></slot>
        </span>
        <svg @click="toggle" class="fill-current opacity-75 h-4 w-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: 'indigo-800'
        },
        textColor: {
            type: String,
            default: 'indigo-100'
        },
        shadow: {
            type: [Boolean, String],
            default: false
        },
        rounded: {
            type: [Boolean, String],
            default: 'full'
        },
        value: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        isOpen: function() {
            return this.value;
        },
        classes: function() {
            const bgColor = `bg-${this.backgroundColor}`;
            const textColor =  `text-${this.textColor}`;

            return [bgColor, textColor, this.shadowClass, this.roundedClass];
        },
        shadowClass: function() {
            const currentType = typeof this.shadow;

            if(!this.shadow) {
                return '';
            }

            if(currentType === 'boolean' && this.shadow)  {
                return 'shadow';
            }
            else {
                if(!this.isValidShadow(this.shadow))  {
                    return 'shadow';
                }
                else {
                    return `shadow-${this.shadow}`;
                }
            }
        },
        roundedClass: function() {
            const currentType = typeof this.rounded;

            if(!this.rounded) {
                return "";
            }

            if(currentType === 'boolean' && this.rounded) {
                return 'rounded';
            }
            else {
                if(!this.isValidRounded(this.rounded)) {
                    return 'rounded';
                }
                else {
                    return `rounded-${this.rounded}`
                }
            }
        }
    },
    methods: {
        isValidShadow(val) {
            switch(val) {
                case "md":
                case "lg":
                case "xl":
                case "2xl":
                case "inner":
                case "outline":
                case "none":
                    return true;
                default: return false;
            }
        },
        isValidRounded(val) {
            switch(val) {
                case "none":
                case "sm":
                case "lg":
                case "full":
                    return true;
                default: return false;
            }
        },
        toggle() {
            this.$emit('input', !this.value);
        }
    }
}
</script>