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
import type { UserTimelineEventStateChangeSerializer } from './UserTimelineEventStateChangeSerializer';
import {
    UserTimelineEventStateChangeSerializerFromJSON,
    UserTimelineEventStateChangeSerializerFromJSONTyped,
    UserTimelineEventStateChangeSerializerToJSON,
} from './UserTimelineEventStateChangeSerializer';

/**
 * Base serializer class for all list responses, inheriting error and metadata from
 * ResponseSerializer.
 * @export
 * @interface ResponseListSerializerUserTimelineEventStateChangeSerializer
 */
export interface ResponseListSerializerUserTimelineEventStateChangeSerializer {
    /**
     * 
     * @type {Array<UserTimelineEventStateChangeSerializer>}
     * @memberof ResponseListSerializerUserTimelineEventStateChangeSerializer
     */
    data?: Array<UserTimelineEventStateChangeSerializer>;
    /**
     * 
     * @type {Error}
     * @memberof ResponseListSerializerUserTimelineEventStateChangeSerializer
     */
    error?: Error | null;
    /**
     * 
     * @type {Meta}
     * @memberof ResponseListSerializerUserTimelineEventStateChangeSerializer
     */
    meta?: Meta | null;
}

/**
 * Check if a given object implements the ResponseListSerializerUserTimelineEventStateChangeSerializer interface.
 */
export function instanceOfResponseListSerializerUserTimelineEventStateChangeSerializer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResponseListSerializerUserTimelineEventStateChangeSerializerFromJSON(json: any): ResponseListSerializerUserTimelineEventStateChangeSerializer {
    return ResponseListSerializerUserTimelineEventStateChangeSerializerFromJSONTyped(json, false);
}

export function ResponseListSerializerUserTimelineEventStateChangeSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseListSerializerUserTimelineEventStateChangeSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UserTimelineEventStateChangeSerializerFromJSON)),
        'error': !exists(json, 'error') ? undefined : json['error'],
        'meta': !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    };
}

export function ResponseListSerializerUserTimelineEventStateChangeSerializerToJSON(value?: ResponseListSerializerUserTimelineEventStateChangeSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(UserTimelineEventStateChangeSerializerToJSON)),
        'error': value.error,
        'meta': MetaToJSON(value.meta),
    };
}

