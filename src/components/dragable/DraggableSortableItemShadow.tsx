import { defineComponent } from "vue";

export default defineComponent({
    name: "DraggingItem",
    props: {
        height: {
            type: String,
            required: true,
        },
        width: {
            type: String,
            required: true,
        },
    },
    inheritAttrs: false,
    setup(props) {
        return () => (
            <div
                class="bg-gray-500 rounded-md "
                style={{
                    height: props.height,
                    width: props.width,
                }}
            />
        );
    },
});
