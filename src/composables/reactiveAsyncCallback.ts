import { ref, type Ref } from 'vue';

type TFn<Fn = (...args: any[]) => Promise<any>> = Fn extends (...args: infer Args) => Promise<infer R>
    ? { args: Args; response: R }
    : never;

type TConf<C extends TFn, E> = {
    onLoad?: () => void;
    onSuccess?: (data: C['response']) => void;
    onError?: (error: E) => void;
} & (
    | {
          autoCall: true;
          args: C['args'];
      }
    | { autoCall?: false }
);

const noop = () => void 0;
const reactiveAsyncCallback = <Fn extends (...agrs: any[]) => Promise<any>, E = Error>(
    fn: Fn,
    conf: TConf<TFn<Fn>, E>
) => {
    const { onError = noop, onLoad = noop, onSuccess = noop } = conf;

    const data = ref() as Ref<TFn<Fn>['response']>;
    const loading = ref(false);
    const error = ref(null) as Ref<Error | null>;

    const call = (...args: TFn<Fn>['args']) => {
        loading.value = true;
        fn(...args)
            .then(d => {
                onSuccess(d);
                data.value = d;
            })
            .catch(e => {
                onError(e);
                error.value = e;
            })
            .finally(() => {
                onLoad();
                loading.value = false;
            });
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

export default reactiveAsyncCallback;
