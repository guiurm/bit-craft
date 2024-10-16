import type { App, ObjectPlugin } from 'vue';
import CarouselCard from './components/carousel/CarouselCard.vue';
import CarouselContainer from './components/carousel/CarouselContainer.vue';
import CDatatable from './components/datatable/CDatatable.vue';
import CDatatableCell from './components/datatable/CDatatableCell.vue';
import CDatatableCellHeader from './components/datatable/CDatatableCellHeader.vue';
import CDatatableHeader from './components/datatable/CDatatableHeader.vue';
import CDatatableRow from './components/datatable/CDatatableRow.vue';
import DragableSortable from './components/dragable/DragableSortable.vue';
import DropdownComponent from './components/dropdown/DropdownComponent.vue';
import BaseModal from './components/modal/BaseModal.vue';
import StyledModal from './components/modal/StyledModal.vue';
import TabMenu from './components/tabs/TabMenu.vue';
import TabSlide from './components/tabs/TabSlide.vue';
import ToastContainer from './components/toast/ToastContainer.vue';
import ToastItem from './components/toast/ToastItem.vue';
import { onClickOutside } from './composables/onClickOutside';
import { noop, type TNopp } from './globals';

class BitCraft implements ObjectPlugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    install(app: App, ..._options: any[]) {
        // toast
        app.component('toast-container', ToastContainer);
        app.component('toast-item', ToastItem);

        // carousel
        app.component('carousel-container', CarouselContainer);
        app.component('carousel-card', CarouselCard);

        // datatable
        app.component('c-datatable-', CDatatable);
        app.component('c-datatable-header', CDatatableHeader);
        app.component('c-datatable-row', CDatatableRow);
        app.component('c-datatable-cell-header', CDatatableCellHeader);
        app.component('c-datatable-cell', CDatatableCell);

        // dragable
        app.component('dragable-sortable', DragableSortable);

        // dropdown
        app.component('dropdown-component', DropdownComponent);

        // modal
        app.component('base-modal', BaseModal);
        app.component('styled-modal', StyledModal);

        // tabs
        app.component('tab-menu', TabMenu);
        app.component('tab-slide', TabSlide);

        const outClickList = new Map<HTMLElement, TNopp>();
        app.directive('outside-click', {
            beforeMount(el, binding) {
                const clear = outClickList.get(el) ?? noop;
                clear();
                outClickList.set(binding as unknown as HTMLElement, onClickOutside(el, binding.value));
            },
            beforeUnmount(el) {
                const clear = outClickList.get(el) ?? noop;
                clear();
            }
        });
    }
}

const useBitCraft = () => {
    return new BitCraft().install;
};

export default useBitCraft;

// carousel
export * from '@/components/carousel/carouselComposable';
export * from '@/components/carousel/carouselConstants';
export { default as CarouselSubscriber } from '@/components/carousel/CarouselSubscriber';

// datatable
export * from '@/components/datatable/datatableBuilders';
export * from '@/components/datatable/datatableTypes';

// tabs
export * from '@/components/tabs/TabGlobals';

// composables
export * from '@/composables/cssClassTranslator';
export * from '@/composables/cssGenerator';
export { default as useCSSGenerator } from '@/composables/cssGenerator';
export * from '@/composables/domNativeEventManager';
export * from '@/composables/dragAndDrop';
export * from '@/composables/onClickOutside';
export { default as reactiveAsyncCallback } from '@/composables/reactiveAsyncCallback';
export * from '@/composables/toastGenerator';
