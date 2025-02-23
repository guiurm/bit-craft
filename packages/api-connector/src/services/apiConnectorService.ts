import { TMandatoryObject } from '@guiurm/utility-types';
import Axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { ApiConnectorError } from '../models/ApiConnectorError';
import { TMinAxiosConfig, TResponseValidator } from '../types';
import { validResponseValidator } from '../utils/responseValidators';

/**
 * Creates a new API connector instance.
 *
 * This function creates a new instance of the Axios client, and then returns a new object with five methods: `request`, `get`, `post`, `put`, `patch`, and `del`. All methods are asynchronous and return a Promise of the response data.
 *
 * @param args Parameters passed to `axios.create()`. The defaults are used if not provided.
 * @returns A new object with five methods: `request`, `get`, `post`, `put`, `patch`, and `del`.
 * @see https://github.com/axios/axios#axioscreateconfig
 * @example
 * const myApiConnector = defineApiConnector({
 *   baseURL: 'https://my-api.com/',
 *   timeout: 5000
 * });
 *
 * myApiConnector.get('users/me').then((response) => {
 *   console.log(response.data);
 * });
 */
const defineApiConnector = (...args: Parameters<typeof Axios.create>) => {
    const axiosInstance = Axios.create(...args);

    /**
     * Sends an HTTP request using the specified method and returns the response data.
     *
     * @template Response - The expected response data type.
     * @template AxiosConfig - Configuration options for the Axios request.
     * @param {Method} method - The HTTP method to be used for the request (e.g., 'get', 'post').
     * @param {string} url - The URL to which the request should be sent.
     * @param {any} data - The data to be sent as the request body (if applicable).
     * @param {TResponseValidator} responseValidator - Optional validators for response status and data serialization.
     * @param {AxiosConfig} config - Optional Axios request configuration.
     * @returns {Promise<Response>} A promise that resolves with the response data.
     * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
     */
    const request = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
        method: Method,
        url: string,
        data: any,
        responseValidator: TResponseValidator = {},
        config: AxiosConfig = {} as AxiosConfig
    ): Promise<Response> => {
        const { serializers, validateStatus = validResponseValidator } = responseValidator;

        let response = {} as AxiosResponse<Response>;
        try {
            response = await axiosInstance.request<Response, AxiosResponse<Response>, AxiosConfig>({
                method,
                url,
                data,
                ...config
            });
        } catch (error) {
            throw new ApiConnectorError((error as Error).message, { axiosError: error as AxiosError });
        }

        if (!validateStatus(response.status)) {
            throw new ApiConnectorError(`Invalid status code: ${response.status}`);
        }

        let serializedData = response.data;

        try {
            serializedData = manageSerializers(response.data, serializers);
        } catch (error) {
            throw new ApiConnectorError(`Error serializing data: ${(error as Error).message}`);
        }

        return serializedData;
    };

    /**
     * Perform a GET request and return the response data.
     * @param {string} url - The URL to request.
     * @param {TResponseValidator} responseValidator - Optional response validator.
     * @param {AxiosConfig} config - Optional Axios request configuration.
     * @returns {Promise<Response>} A promise that resolves with the response data.
     * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
     */
    const get = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
        url: string,
        responseValidator: TResponseValidator = {},
        config: AxiosConfig = {} as AxiosConfig
    ): Promise<Response> => request('get', url, null, responseValidator, config);

    /**
     * Perform a POST request and return the response data.
     *
     * @param {string} url - The URL to which the request should be sent.
     * @param {any} data - The data to be sent as the request body.
     * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
     * @param {AxiosConfig} config - Optional Axios request configuration.
     * @returns {Promise<Response>} A promise that resolves with the response data.
     * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
     */
    const post = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
        url: string,
        data: any,
        responseValidator: TResponseValidator = {},
        config: AxiosConfig = {} as AxiosConfig
    ): Promise<Response> => request('post', url, data, responseValidator, config);

    /**
     * Perform a PUT request and return the response data.
     *
     * @param {string} url - The URL to which the request should be sent.
     * @param {any} data - The data to be sent as the request body.
     * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
     * @param {AxiosConfig} config - Optional Axios request configuration.
     * @returns {Promise<Response>} A promise that resolves with the response data.
     * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
     */
    const put = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
        url: string,
        data: any,
        responseValidator: TResponseValidator = {},
        config: AxiosConfig = {} as AxiosConfig
    ): Promise<Response> => request('put', url, data, responseValidator, config);

    /**
     * Perform a PATCH request and return the response data.
     *
     * @param {string} url - The URL to which the request should be sent.
     * @param {any} data - The data to be sent as the request body.
     * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
     * @param {AxiosConfig} config - Optional Axios request configuration.
     * @returns {Promise<Response>} A promise that resolves with the response data.
     * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
     */
    const patch = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
        url: string,
        data: any,
        responseValidator: TResponseValidator = {},
        config: AxiosConfig = {} as AxiosConfig
    ): Promise<Response> => request('patch', url, data, responseValidator, config);

    /**
     * Perform a DELETE request and return the response data.
     *
     * @param {string} url - The URL to which the request should be sent.
     * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
     * @param {AxiosConfig} config - Optional Axios request configuration.
     * @returns {Promise<Response>} A promise that resolves with the response data.
     * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
     */
    const del = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
        url: string,
        responseValidator: TResponseValidator = {},
        config: AxiosConfig = {} as AxiosConfig
    ): Promise<Response> => request('delete', url, null, responseValidator, config);

    return {
        request,
        get,
        post,
        put,
        patch,
        del,
        axiosInstance
    };
};

const manageSerializers = (data: any, serializers: TMandatoryObject<TResponseValidator>['serializers'] = []) => {
    let serializedData = data;
    for (const element of serializers) {
        serializedData = element(serializedData);
    }

    return serializedData;
};

export { defineApiConnector };
