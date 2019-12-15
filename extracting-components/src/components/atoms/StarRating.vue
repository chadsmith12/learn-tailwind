<template>
<span class="flex">
    <svg v-for="i in max" :key="i"
         :class="[...classes, currentColor(i)]"
         @click="clickStar(i)"
         :style="styles"
          class="fill-current" 
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z" fill-rule="evenodd"/>
    </svg>
</span>
</template>

<script>
export default {
    props: {
        max: {
            type: Number,
            default: 5
        },
        fillColor: {
            type: String,
            default: 'red'
        },
        size: {
            type: [Number, String],
            default: 4
        },
        color: {
            type:  String,
            default: 'text-red-400'
        },
        emptyColor: {
            type: String,
            default: 'text-gray-400'
        },
        value: {
            type: Number,
            default: 0
        },
        readonly:  {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes: function() {
            const widthClass = `w-${this.size}`;
            const heightClass  = `h-${this.size}`;
            return [widthClass, heightClass, this.fillColor];
        },
        styles: function() {
            let currentStyles = {
                cursor: 'pointer'
            };
            if(this.readonly) {
                currentStyles['pointer-events'] = 'none';
            }

            return currentStyles;
        }
    },
    methods: {
        currentColor: function(currentIndex) {
            return currentIndex <= this.value ? this.color : this.emptyColor;
        },
        clickStar(currentIndex) {
            let currentRating = currentIndex;
            // the current rating is below the min or than the max
            if(currentRating >= this.max) {
                currentRating = this.max;
            }

            this.$emit('input', currentRating);
        }
    }
}
</script>