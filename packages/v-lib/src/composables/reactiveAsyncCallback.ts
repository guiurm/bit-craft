import { noop, type TNoppNoArgs } from '@guiurm/utility-types';
import { ref, type Ref } from 'vue';

type TPromiseFunctionExtractArgsAndReturn<Fn = (...args: any[]) => Promise<any>> = Fn extends (
    ...args: infer Args
) => Promise<infer R>
    ? { args: Args; response: R }
    : never;

type TReactiveAsyncCallbackConf<C extends TPromiseFunctionExtractArgsAndReturn, E> = {
    onLoad?: TNoppNoArgs;
    onSuccess?: (data: C['response']) => void;
    onError?: (error: E) => void;
} & (
    | {
          autoCall: true;
          args: C['args'];
      }
    | { autoCall?: false }
);

/**
 * A function that wraps an async function and returns an object with reactive properties of `data`, `loading`, `error` and a `call` method.
 * The `data` property is the resolved value of the async function, the `loading` property is a boolean indicating whether the async function is currently running,
 * the `error` property is the rejected value of the async function, and the `call` method is a function that can be used to call the async function with arguments.
 *
 * @param {function} fn The async function to be wrapped.
 * @param {object} conf The configuration object that contains the following properties:
 *   - `onLoad`: A function to be called when the async function is loading.
 *   - `onSuccess`: A function to be called when the async function is successful.
 *   - `onError`: A function to be called when the async function fails.
 *   - `autoCall`: A boolean indicating whether the async function should be called automatically with the provided arguments.
 *   - `args`: The arguments to be passed to the async function if `autoCall` is true.
 * @return {object} An object with the reactive properties and the `call` method.
 *
 * @example
 * const { data, loading, error, call } = reactiveAsyncCallback(fetchData, {
 *     onSuccess: (result) => console.log('Success:', result),
 *     onError: (err) => console.error('Error:', err),
 *     autoCall: true,
 *     args: ['param1', 'param2']
 * });
 */
const reactiveAsyncCallback = <E = Error, Fn extends (...agrs: any[]) => Promise<any> = () => Promise<any>>(
    fn: Fn,
    conf: TReactiveAsyncCallbackConf<TPromiseFunctionExtractArgsAndReturn<Fn>, E>
): {
    data: Ref<
        TPromiseFunctionExtractArgsAndReturn<Fn>['response'],
        TPromiseFunctionExtractArgsAndReturn<Fn>['response']
    >;
    loading: Ref<boolean, boolean>;
    error: Ref<E | null, E | null>;
    call: (...args: TPromiseFunctionExtractArgsAndReturn<Fn>['args']) => Promise<void>;
} => {
    const { onError = noop, onLoad = noop, onSuccess = noop } = conf;

    const data = ref() as Ref<TPromiseFunctionExtractArgsAndReturn<Fn>['response']>;
    const loading = ref(false);
    const error = ref(null) as Ref<E | null>;

    const call = async (...args: TPromiseFunctionExtractArgsAndReturn<Fn>['args']): Promise<void> => {
        loading.value = true;
        try {
            const d = await fn(...args);
            onSuccess(d);
            data.value = d;
        } catch (e) {
            onError(e as E);
            error.value = e as E;
        } finally {
            onLoad();
            loading.value = false;
        }
    };

    if (conf.autoCall) {
        call(...conf.args);
    }

    return {
        data,
        loading,
        error,
        call
    };
};

class CustomError extends Error {
    public name!: string;
    public message!: string;
    public stack?: string | undefined;

    constructor(error: Error) {
        super(error.message);
        this.name = error.name;
        this.message = error.message;
        this.stack = error.stack;
        Object.assign(this, error);
        Object.getOwnPropertyNames(error).forEach(property => {
            if (!this.hasOwnProperty(property)) {
                (this as any)[property] = (error as any)[property];
            }
        });
    }
}

export default reactiveAsyncCallback;

export type { TPromiseFunctionExtractArgsAndReturn, TReactiveAsyncCallbackConf };
