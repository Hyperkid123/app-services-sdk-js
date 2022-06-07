/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Action } from './action';

/**
 * 
 * @export
 * @interface BridgeRequest
 */
export interface BridgeRequest {
    /**
     * 
     * @type {string}
     * @memberof BridgeRequest
     */
    'name': string;
    /**
     * 
     * @type {Action}
     * @memberof BridgeRequest
     */
    'error_handler'?: Action;
}

