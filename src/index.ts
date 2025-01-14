import type { App, ObjectPlugin } from 'vue';
import { onClickOutside } from './composables/onClickOutside';
import { noop, type TNopp } from './globals';

class BitCraft implements ObjectPlugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    install(app: App, ..._options: any[]) {
        // toast
        //app.component('toast-container', ToastContainer);
        //app.component('toast-item', ToastItem);

        // carousel
        //app.component('carousel-container', CarouselContainer);
        //app.component('carousel-card', CarouselCard);

        // datatable
        //app.component('c-datatable-', CDatatable);
        //app.component('c-datatable-header', CDatatableHeader);
        //app.component('c-datatable-row', CDatatableRow);
        //app.component('c-datatable-cell-header', CDatatableCellHeader);
        //app.component('c-datatable-cell', CDatatableCell);

        // dragable
        //app.component('dragable-sortable', DragableSortable);

        // dropdown
        //app.component('dropdown-component', DropdownComponent);

        // modal
        //app.component('base-modal', BaseModal);
        //app.component('styled-modal', StyledModal);

        // tabs
        //app.component('tab-menu', TabMenu);
        //app.component('tab-slide', TabSlide);

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

export { useBitCraft };

// carousel
export * from './components/carousel/carouselComposable';
export * from './components/carousel/carouselConstants';
export { default as CarouselSubscriber } from './components/carousel/CarouselSubscriber';

// datatable
export * from './components/datatable/datatableBuilders';
export * from './components/datatable/datatableTypes';

// tabs
export * from './components/tabs/TabGlobals';

// composables
export * from './composables/cssClassTranslator';
export * from './composables/cssGenerator';
export { default as useCSSGenerator } from './composables/cssGenerator';
export * from './composables/domNativeEventManager';
export * from './composables/dragAndDrop';
export * from './composables/onClickOutside';
export { default as reactiveAsyncCallback } from './composables/reactiveAsyncCallback';
export * from './composables/toastGenerator';

export type * from './composables/cssClassTranslator';
export type * from './composables/cssGenerator';
export type * from './composables/domNativeEventManager';
export type * from './composables/dragAndDrop';
export type * from './composables/onClickOutside';
export type * from './composables/toastGenerator';

// com

export { default as AccordionComponent } from './components/accordion/AccordionComponent.vue';
export { default as CarouselCard } from './components/carousel/CarouselCard.vue';
export { default as CarouselContainer } from './components/carousel/CarouselContainer.vue';
export { default as CollapseComponent } from './components/collape/CollapseComponent.vue';
export { default as CDatatable } from './components/datatable/CDatatable.vue';
export { default as CDatatableCell } from './components/datatable/CDatatableCell.vue';
export { default as CDatatableCellHeader } from './components/datatable/CDatatableCellHeader.vue';
export { default as CDatatableHeader } from './components/datatable/CDatatableHeader.vue';
export { default as CDatatableRow } from './components/datatable/CDatatableRow.vue';
export { default as DraggableSortableContainer } from './components/dragable/DraggableSortableContainer.vue';
export { default as DraggableSortableItem } from './components/dragable/DraggableSortableItem.vue';
export { default as DraggableSortableItemShadow } from './components/dragable/DraggableSortableItemShadow';
export { default as DraggableSortable } from './components/dragable/DraggableSortableOld.vue';
export { default as DropdownComponent } from './components/dropdown/DropdownComponent.vue';
export { default as BaseModal } from './components/modal/BaseModal.vue';
export { default as StyledModal } from './components/modal/StyledModal.vue';
export { default as TabMenu } from './components/tabs/TabMenu.vue';
export { default as TabSlide } from './components/tabs/TabSlide.vue';
export { default as ToastContainer } from './components/toast/ToastContainer.vue';
export { default as ToastItem } from './components/toast/ToastItem.vue';
