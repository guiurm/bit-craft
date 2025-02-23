import { AxiosRequestConfig } from 'axios';

type TMinAxiosConfig = Omit<AxiosRequestConfig, 'method' | 'url' | 'data' | 'validateStatus'>;
type TResponseValidator = {
    validateStatus?: (status: number) => boolean;
    serializers?: ((data: any) => any)[];
};

export { TMinAxiosConfig, TResponseValidator };
