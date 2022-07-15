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
import type { NarrativeEventType } from './NarrativeEventType';
import {
    NarrativeEventTypeFromJSON,
    NarrativeEventTypeFromJSONTyped,
    NarrativeEventTypeToJSON,
} from './NarrativeEventType';

/**
 * API representation of the EventStateChange resource.
 * @export
 * @interface EventStateChangeSerializer
 */
export interface EventStateChangeSerializer {
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    escType: string;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    narrativeEventId: string;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    timelineEventId: string;
    /**
     * 
     * @type {NarrativeEventType}
     * @memberof EventStateChangeSerializer
     */
    eventType: NarrativeEventType;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    threadId?: string;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    beatId?: string;
    /**
     * 
     * @type {number}
     * @memberof EventStateChangeSerializer
     */
    availableStepIndex: number;
    /**
     * 
     * @type {number}
     * @memberof EventStateChangeSerializer
     */
    processedStepIndex: number;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    workspaceId: string;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    projectId: string;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    timelineId: string;
    /**
     * 
     * @type {string}
     * @memberof EventStateChangeSerializer
     */
    userId: string;
    /**
     * 
     * @type {Date}
     * @memberof EventStateChangeSerializer
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the EventStateChangeSerializer interface.
 */
export function instanceOfEventStateChangeSerializer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "escType" in value;
    isInstance = isInstance && "narrativeEventId" in value;
    isInstance = isInstance && "timelineEventId" in value;
    isInstance = isInstance && "eventType" in value;
    isInstance = isInstance && "availableStepIndex" in value;
    isInstance = isInstance && "processedStepIndex" in value;
    isInstance = isInstance && "workspaceId" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "timelineId" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function EventStateChangeSerializerFromJSON(json: any): EventStateChangeSerializer {
    return EventStateChangeSerializerFromJSONTyped(json, false);
}

export function EventStateChangeSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventStateChangeSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'escType': json['esc_type'],
        'narrativeEventId': json['narrative_event_id'],
        'timelineEventId': json['timeline_event_id'],
        'eventType': NarrativeEventTypeFromJSON(json['event_type']),
        'threadId': !exists(json, 'thread_id') ? undefined : json['thread_id'],
        'beatId': !exists(json, 'beat_id') ? undefined : json['beat_id'],
        'availableStepIndex': json['available_step_index'],
        'processedStepIndex': json['processed_step_index'],
        'workspaceId': json['workspace_id'],
        'projectId': json['project_id'],
        'timelineId': json['timeline_id'],
        'userId': json['user_id'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function EventStateChangeSerializerToJSON(value?: EventStateChangeSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'esc_type': value.escType,
        'narrative_event_id': value.narrativeEventId,
        'timeline_event_id': value.timelineEventId,
        'event_type': NarrativeEventTypeToJSON(value.eventType),
        'thread_id': value.threadId,
        'beat_id': value.beatId,
        'available_step_index': value.availableStepIndex,
        'processed_step_index': value.processedStepIndex,
        'workspace_id': value.workspaceId,
        'project_id': value.projectId,
        'timeline_id': value.timelineId,
        'user_id': value.userId,
        'created_at': (value.createdAt.toISOString()),
    };
}
