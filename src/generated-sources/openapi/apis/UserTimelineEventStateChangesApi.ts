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


import * as runtime from '../runtime';
import {
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    ResponseListSerializerUserTimelineEventStateChangeSerializer,
    ResponseListSerializerUserTimelineEventStateChangeSerializerFromJSON,
    ResponseListSerializerUserTimelineEventStateChangeSerializerToJSON,
} from '../models';

export interface GetUserTimelineEventStateChangesV1UserTimelineEventStateChangesGetRequest {
    contentType?: string;
}

/**
 * 
 */
export class UserTimelineEventStateChangesApi extends runtime.BaseAPI {

    /**
     * List endpoint for user timeline event state changes implicitly filtered by the authenticated user ID.
     * Lists all user timeline event state changes
     */
    async getUserTimelineEventStateChangesV1UserTimelineEventStateChangesGetRaw(requestParameters: GetUserTimelineEventStateChangesV1UserTimelineEventStateChangesGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ResponseListSerializerUserTimelineEventStateChangeSerializer>> {
        const queryParameters: any = {};

        if (requestParameters.contentType !== undefined) {
            queryParameters['content_type'] = requestParameters.contentType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Fictioneers API HTTP Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user-timeline-event-state-changes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseListSerializerUserTimelineEventStateChangeSerializerFromJSON(jsonValue));
    }

    /**
     * List endpoint for user timeline event state changes implicitly filtered by the authenticated user ID.
     * Lists all user timeline event state changes
     */
    async getUserTimelineEventStateChangesV1UserTimelineEventStateChangesGet(requestParameters: GetUserTimelineEventStateChangesV1UserTimelineEventStateChangesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ResponseListSerializerUserTimelineEventStateChangeSerializer> {
        const response = await this.getUserTimelineEventStateChangesV1UserTimelineEventStateChangesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
