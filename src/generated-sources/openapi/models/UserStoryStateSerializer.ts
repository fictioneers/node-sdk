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
import type { CurrentBeat } from './CurrentBeat';
import {
    CurrentBeatFromJSON,
    CurrentBeatFromJSONTyped,
    CurrentBeatToJSON,
} from './CurrentBeat';
import type { NewBeatAvailable } from './NewBeatAvailable';
import {
    NewBeatAvailableFromJSON,
    NewBeatAvailableFromJSONTyped,
    NewBeatAvailableToJSON,
} from './NewBeatAvailable';

/**
 * Contains information an integrating client can leverage to elegantly represent and
 * progress the user narrative.
 * @export
 * @interface UserStoryStateSerializer
 */
export interface UserStoryStateSerializer {
    /**
     * Current step index for user in event delivery sequence
     * @type {number}
     * @memberof UserStoryStateSerializer
     */
    currentStep?: number;
    /**
     * 
     * @type {CurrentBeat}
     * @memberof UserStoryStateSerializer
     */
    currentBeat?: CurrentBeat | null;
    /**
     * 
     * @type {NewBeatAvailable}
     * @memberof UserStoryStateSerializer
     */
    newBeatAvailable?: NewBeatAvailable | null;
    /**
     * Condition currently blocking further progression
     * @type {string}
     * @memberof UserStoryStateSerializer
     */
    waitingForConditionId?: string;
    /**
     * Denotes if all progression conditions have been satisfied. Note this does not mean that all delivery conditions (on threads for example) have been satisfied.
     * @type {boolean}
     * @memberof UserStoryStateSerializer
     */
    endOfTimelineReached: boolean;
    /**
     * Contains the ID of the current timeline event if the user position is being stored by patching the user-story-state endpoint.
     * @type {string}
     * @memberof UserStoryStateSerializer
     */
    currentTimelineEventId?: string;
    /**
     * History of all the `current_timeline_event_id` values, limited to the most recent 200 event IDs.
     * @type {Array<string>}
     * @memberof UserStoryStateSerializer
     */
    timelineEventIdHistory?: Array<string>;
    /**
     * Testing feature which skips any time guards if enabled.
     * @type {boolean}
     * @memberof UserStoryStateSerializer
     */
    datetimeGuardsDisabled: boolean;
    /**
     * Should progression execution pause at beats.
     * @type {boolean}
     * @memberof UserStoryStateSerializer
     */
    pauseAtBeats: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserStoryStateSerializer
     */
    activeTimelineId: string;
}

/**
 * Check if a given object implements the UserStoryStateSerializer interface.
 */
export function instanceOfUserStoryStateSerializer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "endOfTimelineReached" in value;
    isInstance = isInstance && "datetimeGuardsDisabled" in value;
    isInstance = isInstance && "pauseAtBeats" in value;
    isInstance = isInstance && "activeTimelineId" in value;

    return isInstance;
}

export function UserStoryStateSerializerFromJSON(json: any): UserStoryStateSerializer {
    return UserStoryStateSerializerFromJSONTyped(json, false);
}

export function UserStoryStateSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserStoryStateSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentStep': !exists(json, 'current_step') ? undefined : json['current_step'],
        'currentBeat': !exists(json, 'current_beat') ? undefined : CurrentBeatFromJSON(json['current_beat']),
        'newBeatAvailable': !exists(json, 'new_beat_available') ? undefined : NewBeatAvailableFromJSON(json['new_beat_available']),
        'waitingForConditionId': !exists(json, 'waiting_for_condition_id') ? undefined : json['waiting_for_condition_id'],
        'endOfTimelineReached': json['end_of_timeline_reached'],
        'currentTimelineEventId': !exists(json, 'current_timeline_event_id') ? undefined : json['current_timeline_event_id'],
        'timelineEventIdHistory': !exists(json, 'timeline_event_id_history') ? undefined : json['timeline_event_id_history'],
        'datetimeGuardsDisabled': json['datetime_guards_disabled'],
        'pauseAtBeats': json['pause_at_beats'],
        'activeTimelineId': json['active_timeline_id'],
    };
}

export function UserStoryStateSerializerToJSON(value?: UserStoryStateSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_step': value.currentStep,
        'current_beat': CurrentBeatToJSON(value.currentBeat),
        'new_beat_available': NewBeatAvailableToJSON(value.newBeatAvailable),
        'waiting_for_condition_id': value.waitingForConditionId,
        'end_of_timeline_reached': value.endOfTimelineReached,
        'current_timeline_event_id': value.currentTimelineEventId,
        'timeline_event_id_history': value.timelineEventIdHistory,
        'datetime_guards_disabled': value.datetimeGuardsDisabled,
        'pause_at_beats': value.pauseAtBeats,
        'active_timeline_id': value.activeTimelineId,
    };
}

