/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * GET request to get contract source
 * @export
 * @interface ReadOnlyFunctionSuccessResponse
 */
export interface ReadOnlyFunctionSuccessResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ReadOnlyFunctionSuccessResponse
     */
    okay: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReadOnlyFunctionSuccessResponse
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof ReadOnlyFunctionSuccessResponse
     */
    cause?: string;
}

export function ReadOnlyFunctionSuccessResponseFromJSON(json: any): ReadOnlyFunctionSuccessResponse {
    return ReadOnlyFunctionSuccessResponseFromJSONTyped(json, false);
}

export function ReadOnlyFunctionSuccessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadOnlyFunctionSuccessResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'okay': json['okay'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'cause': !exists(json, 'cause') ? undefined : json['cause'],
    };
}

export function ReadOnlyFunctionSuccessResponseToJSON(value?: ReadOnlyFunctionSuccessResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'okay': value.okay,
        'result': value.result,
        'cause': value.cause,
    };
}

