import { AxiosError, AxiosResponse } from 'axios';

class ApiConnectorError<AError extends AxiosError = AxiosError> extends Error {
    public isApiConnectorError = true;
    private readonly _axiosError?: AError;
    private readonly _axiosResponse?: AxiosResponse;

    constructor(
        message: string,
        { axiosError, axiosResponse }: { axiosError?: AError; axiosResponse?: AxiosResponse } = {}
    ) {
        super(message);
        this.name = 'ApiConnectorError';
        this._axiosError = axiosError;
        this._axiosResponse = axiosResponse;
    }

    public get axiosError(): AError | undefined {
        return this._axiosError;
    }

    public get axiosResponse(): AxiosResponse | undefined {
        return this._axiosResponse;
    }
}

export { ApiConnectorError };
