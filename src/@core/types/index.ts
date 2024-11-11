import type { Component, VNode } from 'vue';

export type TRenderComponent = Component | (() => VNode);

/**
 * Type definition for a basic callback function.
 *
 * @template T - The type of arguments that the callback function takes (default is any[]).
 *
 * @param args - The arguments that the callback function takes.
 * @returns void
 */
export type TBasicCallBack<T extends any[] = any[]> = (...args: T) => void;

export type TWindowEventStorage = {
    [EventName in keyof WindowEventMap]: (this: Window, ev: WindowEventMap[EventName]) => void;
};
