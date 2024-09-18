export type TCarrouselCardPosition = 'left' | 'visible' | 'hidden' | 'right'
export type TCarrouselSubscriberCallback = (data: TCarrouselCardPosition) => void

export default class CarrouselSubscriber {
    private _handlers: TCarrouselSubscriberCallback[]
    constructor() {
        this._handlers = []
    }
    on(fn: TCarrouselSubscriberCallback) {
        this._handlers.push(fn)
    }
    distpach(...data: Parameters<TCarrouselSubscriberCallback>) {
        this._handlers.forEach((h) => h(...data))
    }
    clear() {
        this._handlers.length = 0
    }
}
