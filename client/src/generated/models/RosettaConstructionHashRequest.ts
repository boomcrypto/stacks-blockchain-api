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
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierFromJSONTyped,
    NetworkIdentifierToJSON,
} from './';

/**
 * TransactionHash returns the network-specific transaction hash for a signed transaction.
 * @export
 * @interface RosettaConstructionHashRequest
 */
export interface RosettaConstructionHashRequest {
    /**
     * 
     * @type {NetworkIdentifier}
     * @memberof RosettaConstructionHashRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * Signed transaction
     * @type {string}
     * @memberof RosettaConstructionHashRequest
     */
    signed_transaction: string;
}

export function RosettaConstructionHashRequestFromJSON(json: any): RosettaConstructionHashRequest {
    return RosettaConstructionHashRequestFromJSONTyped(json, false);
}

export function RosettaConstructionHashRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaConstructionHashRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network_identifier': NetworkIdentifierFromJSON(json['network_identifier']),
        'signed_transaction': json['signed_transaction'],
    };
}

export function RosettaConstructionHashRequestToJSON(value?: RosettaConstructionHashRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network_identifier': NetworkIdentifierToJSON(value.network_identifier),
        'signed_transaction': value.signed_transaction,
    };
}

