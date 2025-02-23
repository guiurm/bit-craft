const MOUSE_EVENTS = [
    ...([
        'click',
        'dblclick',
        'mousedown',
        'mouseup',
        'mousemove',
        'mouseenter',
        'mouseleave',
        'mouseover',
        'mouseout'
    ] as const)
];

const KEYBOARD_EVENTS = [...(['keydown', 'keypress', 'keyup'] as const)];

const FORM_EVENTS = [...(['submit', 'reset', 'focus', 'blur', 'input', 'change'] as const)];

const WINDOW_EVENTS = [...(['resize', 'scroll', 'load', 'unload', 'beforeunload'] as const)];

const TOUCH_EVENTS = [...(['touchstart', 'touchmove', 'touchend', 'touchcancel'] as const)];

const FOCUS_EVENTS = [...(['focus', 'blur'] as const)];

const CLIPBOARD_EVENTS = [...(['copy', 'cut', 'paste'] as const)];

const MEDIA_EVENTS = [...(['play', 'pause', 'ended', 'volumechange', 'timeupdate', 'seeked', 'waiting'] as const)];

const ANIMATION_EVENTS = [...(['animationstart', 'animationend', 'animationiteration'] as const)];

const TRANSITION_EVENTS = [...(['transitionstart', 'transitionend', 'transitioncancel'] as const)];

const DRAG_AND_DROP_EVENTS = [
    ...(['dragstart', 'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'drop'] as const)
];

const POINTER_EVENTS = [
    ...([
        'pointerdown',
        'pointerup',
        'pointermove',
        'pointerover',
        'pointerout',
        'pointerenter',
        'pointerleave'
    ] as const)
];

const COMPOSITION_EVENTS = [...(['compositionstart', 'compositionupdate', 'compositionend'] as const)];

export {
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
};
