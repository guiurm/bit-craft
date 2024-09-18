import type CarrouselSubscriber from './CarrouselSubscriber'

export const CARROUSEL_ACTIONS = 'carrousel.actions'

export type TCarrouselCardInjection = { addCard: (data: { id: string; subscriber: CarrouselSubscriber }) => void; setContainerHeight: (v: number) => void }
export type TCarrouselProvideCard = TCarrouselCardInjection
export type TCarrouselItems = { id: string }[]
