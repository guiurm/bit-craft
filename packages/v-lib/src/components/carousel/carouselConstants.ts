import type CarrouselSubscriber from './CarouselSubscriber';

export const CARROUSEL_ACTIONS = 'carrousel.actions';

export type TCarrouselCardInjection = {
    addCard: (data: { id: string; subscriber: CarrouselSubscriber }) => void;
    setContainerHeight: (v: number) => void;
};
export type TCarrouselProvideCard = TCarrouselCardInjection;
export type TCarrouselItem = { id: string; subscriber: CarrouselSubscriber };
