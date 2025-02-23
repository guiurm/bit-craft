import { TValidUrl } from '@guiurm/utility-types';
import { TMinAxiosConfig, TResponseValidator } from '../types';
import { defineApiConnector } from './apiConnectorService';

/**
 * Perform a POST request and return the response data.
 *
 * @param {TValidUrl} url - The URL to which the request should be sent.
 * @param {any} data - The data to be sent as the request body.
 * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
 * @param {AxiosConfig} config - Optional Axios request configuration.
 * @returns {Promise<Response>} A promise that resolves with the response data.
 * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
 */
const post = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
    url: TValidUrl,
    data: any,
    responseValidator: TResponseValidator = {},
    config: AxiosConfig = {} as AxiosConfig
): Promise<Response> => {
    return defineApiConnector().request('post', url, data, responseValidator, config);
};

/**
 * Perform a GET request and return the response data.
 *
 * @param {TValidUrl} url - The URL to which the request should be sent.
 * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
 * @param {AxiosConfig} config - Optional Axios request configuration.
 * @returns {Promise<Response>} A promise that resolves with the response data.
 * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
 */
const get = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
    url: TValidUrl,
    responseValidator: TResponseValidator = {},
    config: AxiosConfig = {} as AxiosConfig
): Promise<Response> => {
    return defineApiConnector().request('get', url, null, responseValidator, config);
};

/**
 * Perform a PUT request and return the response data.
 *
 * @param {TValidUrl} url - The URL to which the request should be sent.
 * @param {any} data - The data to be sent as the request body.
 * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
 * @param {AxiosConfig} config - Optional Axios request configuration.
 * @returns {Promise<Response>} A promise that resolves with the response data.
 * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
 */
const put = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
    url: TValidUrl,
    data: any,
    responseValidator: TResponseValidator = {},
    config: AxiosConfig = {} as AxiosConfig
): Promise<Response> => {
    return defineApiConnector().request('put', url, data, responseValidator, config);
};

/**
 * Perform a PATCH request and return the response data.
 *
 * @param {TValidUrl} url - The URL to which the request should be sent.
 * @param {any} data - The data to be sent as the request body.
 * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
 * @param {AxiosConfig} config - Optional Axios request configuration.
 * @returns {Promise<Response>} A promise that resolves with the response data.
 * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
 */
const patch = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
    url: TValidUrl,
    data: any,
    responseValidator: TResponseValidator = {},
    config: AxiosConfig = {} as AxiosConfig
): Promise<Response> => {
    return defineApiConnector().request('patch', url, data, responseValidator, config);
};

/**
 * Perform a DELETE request and return the response data.
 *
 * @param {TValidUrl} url - The URL to which the request should be sent.
 * @param {TResponseValidator} responseValidator - Optional response validator for status and data serialization.
 * @param {AxiosConfig} config - Optional Axios request configuration.
 * @returns {Promise<Response>} A promise that resolves with the response data.
 * @throws {ApiConnectorError} If the request fails or returns an invalid status code.
 */
const del = async <Response = any, AxiosConfig extends TMinAxiosConfig = TMinAxiosConfig>(
    url: TValidUrl,
    responseValidator: TResponseValidator = {},
    config: AxiosConfig = {} as AxiosConfig
): Promise<Response> => {
    return defineApiConnector().request('delete', url, null, responseValidator, config);
};

export { del, get, patch, post, put };
