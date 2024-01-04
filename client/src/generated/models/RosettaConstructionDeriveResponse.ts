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
    RosettaAccountIdentifier,
    RosettaAccountIdentifierFromJSON,
    RosettaAccountIdentifierFromJSONTyped,
    RosettaAccountIdentifierToJSON,
} from './';

/**
 * ConstructionDeriveResponse is returned by the /construction/derive endpoint.
 * @export
 * @interface RosettaConstructionDeriveResponse
 */
export interface RosettaConstructionDeriveResponse {
    /**
     * [DEPRECATED by account_identifier in v1.4.4] Address in network-specific format.
     * @type {string}
     * @memberof RosettaConstructionDeriveResponse
     */
    address?: string;
    /**
     * 
     * @type {RosettaAccountIdentifier}
     * @memberof RosettaConstructionDeriveResponse
     */
    account_identifier?: RosettaAccountIdentifier;
    /**
     * 
     * @type {object}
     * @memberof RosettaConstructionDeriveResponse
     */
    metadata?: object;
}

export function RosettaConstructionDeriveResponseFromJSON(json: any): RosettaConstructionDeriveResponse {
    return RosettaConstructionDeriveResponseFromJSONTyped(json, false);
}

export function RosettaConstructionDeriveResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaConstructionDeriveResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'account_identifier': !exists(json, 'account_identifier') ? undefined : RosettaAccountIdentifierFromJSON(json['account_identifier']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RosettaConstructionDeriveResponseToJSON(value?: RosettaConstructionDeriveResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'account_identifier': RosettaAccountIdentifierToJSON(value.account_identifier),
        'metadata': value.metadata,
    };
}

