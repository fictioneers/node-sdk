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
 * Deserializer used to update a user's current timeline event ID.
 * @export
 * @interface PatchStoryStateDeserializer
 */
export interface PatchStoryStateDeserializer {
    /**
     * The new event ID to move the user to.
     * @type {string}
     * @memberof PatchStoryStateDeserializer
     */
    currentTimelineEventId: string;
}

export function PatchStoryStateDeserializerFromJSON(json: any): PatchStoryStateDeserializer {
    return PatchStoryStateDeserializerFromJSONTyped(json, false);
}

export function PatchStoryStateDeserializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchStoryStateDeserializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentTimelineEventId': json['current_timeline_event_id'],
    };
}

export function PatchStoryStateDeserializerToJSON(value?: PatchStoryStateDeserializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_timeline_event_id': value.currentTimelineEventId,
    };
}

