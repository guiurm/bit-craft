import { ref, type Ref } from 'vue';
import type { TCarrouselItem } from './carouselConstants';

export const useCarousel = ({ items, infinite = true }: { items?: Ref<TCarrouselItem[]>; infinite?: boolean } = {}) => {
    const itemsList = items ?? ref([]);
    const currentIndex = ref(0);
    const height = ref({ height: '0px' });

    const distpachListeners = (visible: number, left: number, right: number) => {
        itemsList.value.forEach((item, index) => {
            switch (index) {
                case visible:
                    item.subscriber.distpach('visible');
                    break;
                case left:
                    item.subscriber.distpach('left');
                    break;
                case right:
                    item.subscriber.distpach('right');
                    break;
                default:
                    item.subscriber.distpach('hidden');
                    break;
            }
        });
    };

    const next = () => {
        if (!infinite && currentIndex.value === itemsList.value.length - 1) return;
        const visible = currentIndex.value + 1 >= itemsList.value.length ? 0 : currentIndex.value + 1;
        const left = currentIndex.value;
        const right = visible + 1 >= itemsList.value.length ? 0 : visible + 1;

        currentIndex.value = visible;

        distpachListeners(visible, left, right);
    };

    const prev = () => {
        if (!infinite && currentIndex.value === 0) return;

        const visible = currentIndex.value - 1 < 0 ? itemsList.value.length - 1 : currentIndex.value - 1;
        const right = currentIndex.value;
        const left = visible - 1 < 0 ? itemsList.value.length - 1 : visible - 1;

        currentIndex.value = visible;

        distpachListeners(visible, left, right);
    };

    return {
        itemsList,
        currentIndex,
        height,
        distpachListeners,
        next,
        prev
    };
};
