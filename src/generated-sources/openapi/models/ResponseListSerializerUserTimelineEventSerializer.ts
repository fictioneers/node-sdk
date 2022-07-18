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
import {
    Meta,
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './Meta';
import {
    UserTimelineEventSerializer,
    UserTimelineEventSerializerFromJSON,
    UserTimelineEventSerializerFromJSONTyped,
    UserTimelineEventSerializerToJSON,
} from './UserTimelineEventSerializer';

/**
 * Base serializer class for all list responses, inheriting error and metadata from
 * ResponseSerializer.
 * @export
 * @interface ResponseListSerializerUserTimelineEventSerializer
 */
export interface ResponseListSerializerUserTimelineEventSerializer {
    /**
     * 
     * @type {Array<UserTimelineEventSerializer>}
     * @memberof ResponseListSerializerUserTimelineEventSerializer
     */
    data?: Array<UserTimelineEventSerializer>;
    /**
     * 
     * @type {Error}
     * @memberof ResponseListSerializerUserTimelineEventSerializer
     */
    error?: Error | null;
    /**
     * 
     * @type {Meta}
     * @memberof ResponseListSerializerUserTimelineEventSerializer
     */
    meta?: Meta | null;
}

export function ResponseListSerializerUserTimelineEventSerializerFromJSON(json: any): ResponseListSerializerUserTimelineEventSerializer {
    return ResponseListSerializerUserTimelineEventSerializerFromJSONTyped(json, false);
}

export function ResponseListSerializerUserTimelineEventSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseListSerializerUserTimelineEventSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UserTimelineEventSerializerFromJSON)),
        'error': !exists(json, 'error') ? undefined : json['error'],
        'meta': !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    };
}

export function ResponseListSerializerUserTimelineEventSerializerToJSON(value?: ResponseListSerializerUserTimelineEventSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(UserTimelineEventSerializerToJSON)),
        'error': value.error,
        'meta': MetaToJSON(value.meta),
    };
}

