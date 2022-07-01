/* tslint:disable */
/* eslint-disable */
/**
 * Service Registry Management API
 * Service Registry Management API is a REST API for managing Service Registry instances. Service Registry is a datastore for event schemas and API designs, which is based on the open source Apicurio Registry project.
 *
 * The version of the OpenAPI document: 0.0.6
 * Contact: rhosak-eval-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorList } from '../model';
/**
 * ErrorsApi - axios parameter creator
 * @export
 */
export const ErrorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get information about a specific error type
         * @param {number} id A unique identifier for an error type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getError: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getError', 'id', id)
            const localVarPath = `/api/serviceregistry_mgmt/v1/errors/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the list of all errors
         * @param {number} [page] Page index.
         * @param {number} [size] Number of items in each page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getErrors: async (page?: number, size?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/serviceregistry_mgmt/v1/errors`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ErrorsApi - functional programming interface
 * @export
 */
export const ErrorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ErrorsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get information about a specific error type
         * @param {number} id A unique identifier for an error type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getError(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getError(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the list of all errors
         * @param {number} [page] Page index.
         * @param {number} [size] Number of items in each page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getErrors(page?: number, size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ErrorList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getErrors(page, size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ErrorsApi - factory interface
 * @export
 */
export const ErrorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ErrorsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get information about a specific error type
         * @param {number} id A unique identifier for an error type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getError(id: number, options?: any): AxiosPromise<Error> {
            return localVarFp.getError(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the list of all errors
         * @param {number} [page] Page index.
         * @param {number} [size] Number of items in each page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getErrors(page?: number, size?: number, options?: any): AxiosPromise<ErrorList> {
            return localVarFp.getErrors(page, size, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ErrorsApi - interface
 * @export
 * @interface ErrorsApi
 */
export interface ErrorsApiInterface {
    /**
     * 
     * @summary Get information about a specific error type
     * @param {number} id A unique identifier for an error type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApiInterface
     */
    getError(id: number, options?: AxiosRequestConfig): AxiosPromise<Error>;

    /**
     * 
     * @summary Get the list of all errors
     * @param {number} [page] Page index.
     * @param {number} [size] Number of items in each page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApiInterface
     */
    getErrors(page?: number, size?: number, options?: AxiosRequestConfig): AxiosPromise<ErrorList>;

}

/**
 * ErrorsApi - object-oriented interface
 * @export
 * @class ErrorsApi
 * @extends {BaseAPI}
 */
export class ErrorsApi extends BaseAPI implements ErrorsApiInterface {
    /**
     * 
     * @summary Get information about a specific error type
     * @param {number} id A unique identifier for an error type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApi
     */
    public getError(id: number, options?: AxiosRequestConfig) {
        return ErrorsApiFp(this.configuration).getError(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the list of all errors
     * @param {number} [page] Page index.
     * @param {number} [size] Number of items in each page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApi
     */
    public getErrors(page?: number, size?: number, options?: AxiosRequestConfig) {
        return ErrorsApiFp(this.configuration).getErrors(page, size, options).then((request) => request(this.axios, this.basePath));
    }
}
