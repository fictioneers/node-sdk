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
import type { Meta } from './Meta';
import {
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './Meta';
import type { UserSerializer } from './UserSerializer';
import {
    UserSerializerFromJSON,
    UserSerializerFromJSONTyped,
    UserSerializerToJSON,
} from './UserSerializer';

/**
 * Base serializer class for all responses.
 * @export
 * @interface ResponseSerializerUserSerializer
 */
export interface ResponseSerializerUserSerializer {
    /**
     * 
     * @type {UserSerializer}
     * @memberof ResponseSerializerUserSerializer
     */
    data?: UserSerializer;
    /**
     * 
     * @type {Error}
     * @memberof ResponseSerializerUserSerializer
     */
    error?: Error | null;
    /**
     * 
     * @type {Meta}
     * @memberof ResponseSerializerUserSerializer
     */
    meta?: Meta | null;
}

/**
 * Check if a given object implements the ResponseSerializerUserSerializer interface.
 */
export function instanceOfResponseSerializerUserSerializer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResponseSerializerUserSerializerFromJSON(json: any): ResponseSerializerUserSerializer {
    return ResponseSerializerUserSerializerFromJSONTyped(json, false);
}

export function ResponseSerializerUserSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseSerializerUserSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : UserSerializerFromJSON(json['data']),
        'error': !exists(json, 'error') ? undefined : json['error'],
        'meta': !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    };
}

export function ResponseSerializerUserSerializerToJSON(value?: ResponseSerializerUserSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UserSerializerToJSON(value.data),
        'error': value.error,
        'meta': MetaToJSON(value.meta),
    };
}

