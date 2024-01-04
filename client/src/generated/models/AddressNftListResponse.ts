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
import {
    NftEvent,
    NftEventFromJSON,
    NftEventFromJSONTyped,
    NftEventToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressNftListResponse
 */
export interface AddressNftListResponse {
    /**
     * 
     * @type {number}
     * @memberof AddressNftListResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof AddressNftListResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof AddressNftListResponse
     */
    total: number;
    /**
     * 
     * @type {Array<NftEvent>}
     * @memberof AddressNftListResponse
     */
    nft_events: Array<NftEvent>;
}

export function AddressNftListResponseFromJSON(json: any): AddressNftListResponse {
    return AddressNftListResponseFromJSONTyped(json, false);
}

export function AddressNftListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressNftListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'offset': json['offset'],
        'total': json['total'],
        'nft_events': ((json['nft_events'] as Array<any>).map(NftEventFromJSON)),
    };
}

export function AddressNftListResponseToJSON(value?: AddressNftListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'offset': value.offset,
        'total': value.total,
        'nft_events': ((value.nft_events as Array<any>).map(NftEventToJSON)),
    };
}

