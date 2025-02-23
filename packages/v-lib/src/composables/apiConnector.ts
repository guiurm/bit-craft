import reactiveAsyncCallback from '@/composables/reactiveAsyncCallback';
import { ApiConnectorError, defineApiConnector, type TResponseValidator } from '@guiurm/api-connector';

type TApiCallbackConfig<Fn = (...args: any[]) => Promise<any>> = Fn extends (...args: any[]) => Promise<infer Res>
    ? {
          onLoad?: () => void;
          onError?: (error: ApiConnectorError) => void;
          onSuccess?: (res: Res) => void;
      }
    : never;

const useApiConnector = (...configParameter: Parameters<typeof defineApiConnector>) => {
    const api = defineApiConnector(...configParameter);

    const get = <Response>(
        conf: TApiCallbackConfig<() => Promise<Response>> = {},
        validator: TResponseValidator = {}
    ) => {
        const {
            call: internalCall,
            data,
            error,
            loading
        } = reactiveAsyncCallback<ApiConnectorError, typeof api.get<Response>>(api.get as typeof api.get<Response>, {
            autoCall: false as true,
            onError: conf.onError,
            onLoad: conf.onLoad,
            onSuccess: conf.onSuccess,
            args: ['', validator]
        });

        const call = async (url: string) => {
            await internalCall(url, validator);
        };

        return {
            call,
            data,
            error,
            loading
        };
    };

    const post = <Response>(
        conf: TApiCallbackConfig<() => Promise<Response>> = ({} = {}),
        validator: TResponseValidator = {}
    ) => {
        const {
            call: internalCall,
            data,
            error,
            loading
        } = reactiveAsyncCallback<ApiConnectorError, typeof api.post<Response>>(api.post as typeof api.post<Response>, {
            autoCall: false as true,
            onError: conf.onError,
            onLoad: conf.onLoad,
            onSuccess: conf.onSuccess,
            args: ['', validator]
        });

        const call = async (url: string, data: any = {}) => {
            await internalCall(url, data, validator);
        };

        return {
            call,
            data,
            error,
            loading
        };
    };

    const del = <Response>(
        conf: TApiCallbackConfig<() => Promise<Response>> = ({} = {}),
        validator: TResponseValidator = {}
    ) => {
        const {
            call: internalCall,
            data,
            error,
            loading
        } = reactiveAsyncCallback<ApiConnectorError, typeof api.del<Response>>(api.del as typeof api.del<Response>, {
            autoCall: false as true,
            onError: conf.onError,
            onLoad: conf.onLoad,
            onSuccess: conf.onSuccess,
            args: ['', validator]
        });

        const call = async (url: string) => {
            await internalCall(url, validator);
        };

        return {
            call,
            data,
            error,
            loading
        };
    };

    const patch = <Response>(
        conf: TApiCallbackConfig<() => Promise<Response>> = ({} = {}),
        validator: TResponseValidator = {}
    ) => {
        const {
            call: internalCall,
            data,
            error,
            loading
        } = reactiveAsyncCallback<ApiConnectorError, typeof api.patch<Response>>(
            api.patch as typeof api.patch<Response>,
            {
                autoCall: false as true,
                onError: conf.onError,
                onLoad: conf.onLoad,
                onSuccess: conf.onSuccess,
                args: ['', validator]
            }
        );

        const call = async (url: string, data: any = {}) => {
            await internalCall(url, data, validator);
        };

        return {
            call,
            data,
            error,
            loading
        };
    };

    const put = <Response>(
        conf: TApiCallbackConfig<() => Promise<Response>> = ({} = {}),
        validator: TResponseValidator = {}
    ) => {
        const {
            call: internalCall,
            data,
            error,
            loading
        } = reactiveAsyncCallback<ApiConnectorError, typeof api.put<Response>>(api.put as typeof api.put<Response>, {
            autoCall: false as true,
            onError: conf.onError,
            onLoad: conf.onLoad,
            onSuccess: conf.onSuccess,
            args: ['', validator]
        });

        const call = async (url: string, data: any = {}) => {
            await internalCall(url, data, validator);
        };

        return {
            call,
            data,
            error,
            loading
        };
    };

    const request = <Response>(conf: TApiCallbackConfig<() => Promise<Response>> = ({} = {})) => {
        return reactiveAsyncCallback<ApiConnectorError, typeof api.request<Response>>(
            api.request as typeof api.request<Response>,
            {
                autoCall: false,
                onError: conf.onError,
                onLoad: conf.onLoad,
                onSuccess: conf.onSuccess
            }
        );
    };

    return {
        get,
        post,
        del,
        patch,
        put,
        request,
        axiosInstance: api.axiosInstance
    };
};

export { useApiConnector };
