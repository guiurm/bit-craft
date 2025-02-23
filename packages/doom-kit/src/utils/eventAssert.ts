import {
    ANIMATION_EVENTS,
    CLIPBOARD_EVENTS,
    COMPOSITION_EVENTS,
    DRAG_AND_DROP_EVENTS,
    FOCUS_EVENTS,
    FORM_EVENTS,
    KEYBOARD_EVENTS,
    MEDIA_EVENTS,
    MOUSE_EVENTS,
    POINTER_EVENTS,
    TOUCH_EVENTS,
    TRANSITION_EVENTS,
    WINDOW_EVENTS
} from '../globals/events';

const isMouseEvent = (event: Event): event is MouseEvent => {
    return MOUSE_EVENTS.includes(event.type as any);
};

const isKeyboardEvent = (event: Event): event is KeyboardEvent => {
    return KEYBOARD_EVENTS.includes(event.type as any);
};

const isFormEvent = (event: Event): event is Event => {
    return FORM_EVENTS.includes(event.type as any);
};

const isWindowEvent = (event: Event): event is Event => {
    return WINDOW_EVENTS.includes(event.type as any);
};

const isTouchEvent = (event: Event): event is TouchEvent => {
    return TOUCH_EVENTS.includes(event.type as any);
};

const isFocusEvent = (event: Event): event is FocusEvent => {
    return FOCUS_EVENTS.includes(event.type as any);
};

const isClipboardEvent = (event: Event): event is ClipboardEvent => {
    return CLIPBOARD_EVENTS.includes(event.type as any);
};

const isMediaEvent = (event: Event): event is Event => {
    return MEDIA_EVENTS.includes(event.type as any);
};

const isAnimationEvent = (event: Event): event is AnimationEvent => {
    return ANIMATION_EVENTS.includes(event.type as any);
};

const isTransitionEvent = (event: Event): event is TransitionEvent => {
    return TRANSITION_EVENTS.includes(event.type as any);
};

const isDragAndDropEvent = (event: Event): event is DragEvent => {
    return DRAG_AND_DROP_EVENTS.includes(event.type as any);
};

const isPointerEvent = (event: Event): event is PointerEvent => {
    return POINTER_EVENTS.includes(event.type as any);
};

const isCompositionEvent = (event: Event): event is CompositionEvent => {
    return COMPOSITION_EVENTS.includes(event.type as any);
};
//
export {
    isAnimationEvent,
    isClipboardEvent,
    isCompositionEvent,
    isDragAndDropEvent,
    isFocusEvent,
    isFormEvent,
    isKeyboardEvent,
    isMediaEvent,
    isMouseEvent,
    isPointerEvent,
    isTouchEvent,
    isTransitionEvent,
    isWindowEvent
};
