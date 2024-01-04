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
 * List of Non-Fungible Token history events
 * @export
 * @interface NonFungibleTokenHistoryEventList
 */
export interface NonFungibleTokenHistoryEventList {
    /**
     * The number of events to return
     * @type {number}
     * @memberof NonFungibleTokenHistoryEventList
     */
    limit: number;
    /**
     * The number to events to skip (starting at `0`)
     * @type {number}
     * @memberof NonFungibleTokenHistoryEventList
     */
    offset: number;
    /**
     * The number of events available
     * @type {number}
     * @memberof NonFungibleTokenHistoryEventList
     */
    total: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof NonFungibleTokenHistoryEventList
     */
    results: Array<object>;
}

export function NonFungibleTokenHistoryEventListFromJSON(json: any): NonFungibleTokenHistoryEventList {
    return NonFungibleTokenHistoryEventListFromJSONTyped(json, false);
}

export function NonFungibleTokenHistoryEventListFromJSONTyped(json: any, ignoreDiscriminator: boolean): NonFungibleTokenHistoryEventList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'offset': json['offset'],
        'total': json['total'],
        'results': json['results'],
    };
}

export function NonFungibleTokenHistoryEventListToJSON(value?: NonFungibleTokenHistoryEventList | null): any {
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
        'results': value.results,
    };
}

