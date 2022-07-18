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
    MetaSerializer,
    MetaSerializerFromJSON,
    MetaSerializerFromJSONTyped,
    MetaSerializerToJSON,
} from './MetaSerializer';
import {
    ServiceStatus,
    ServiceStatusFromJSON,
    ServiceStatusFromJSONTyped,
    ServiceStatusToJSON,
} from './ServiceStatus';
import {
    UserTimelineEventSerializer,
    UserTimelineEventSerializerFromJSON,
    UserTimelineEventSerializerFromJSONTyped,
    UserTimelineEventSerializerToJSON,
} from './UserTimelineEventSerializer';
import {
    UserTimelineEventStateChangeSerializer,
    UserTimelineEventStateChangeSerializerFromJSON,
    UserTimelineEventStateChangeSerializerFromJSONTyped,
    UserTimelineEventStateChangeSerializerToJSON,
} from './UserTimelineEventStateChangeSerializer';

/**
 * 
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     * 
     * @type {Array<UserTimelineEventSerializer>}
     * @memberof Meta
     */
    changedTimelineEvents?: Array<UserTimelineEventSerializer>;
    /**
     * 
     * @type {Array<UserTimelineEventStateChangeSerializer>}
     * @memberof Meta
     */
    changedTimelineEventStates?: Array<UserTimelineEventStateChangeSerializer>;
    /**
     * 
     * @type {ServiceStatus}
     * @memberof Meta
     */
    serviceStatus?: ServiceStatus | null;
}

export function MetaFromJSON(json: any): Meta {
    return MetaFromJSONTyped(json, false);
}

export function MetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Meta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedTimelineEvents': !exists(json, 'changed_timeline_events') ? undefined : ((json['changed_timeline_events'] as Array<any>).map(UserTimelineEventSerializerFromJSON)),
        'changedTimelineEventStates': !exists(json, 'changed_timeline_event_states') ? undefined : ((json['changed_timeline_event_states'] as Array<any>).map(UserTimelineEventStateChangeSerializerFromJSON)),
        'serviceStatus': !exists(json, 'service_status') ? undefined : ServiceStatusFromJSON(json['service_status']),
    };
}

export function MetaToJSON(value?: Meta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changed_timeline_events': value.changedTimelineEvents === undefined ? undefined : ((value.changedTimelineEvents as Array<any>).map(UserTimelineEventSerializerToJSON)),
        'changed_timeline_event_states': value.changedTimelineEventStates === undefined ? undefined : ((value.changedTimelineEventStates as Array<any>).map(UserTimelineEventStateChangeSerializerToJSON)),
        'service_status': ServiceStatusToJSON(value.serviceStatus),
    };
}

