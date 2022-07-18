/* tslint:disable */
/* eslint-disable */
/**
 * Fictioneers - Audience APIs.
 * JSON APIs used to integrate with the Fictioneers platform served from https://api.fictioneers.co.uk
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *     
 * @export
 * @interface TokenDeserializer
 */
export interface TokenDeserializer {
    /**
     * User ID scoped to the Access Token being generated.
     * @type {string}
     * @memberof TokenDeserializer
     */
    userId: string;
}

export function TokenDeserializerFromJSON(json: any): TokenDeserializer {
    return TokenDeserializerFromJSONTyped(json, false);
}

export function TokenDeserializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenDeserializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
    };
}

export function TokenDeserializerToJSON(value?: TokenDeserializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.userId,
    };
}

