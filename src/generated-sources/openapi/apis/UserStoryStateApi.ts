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
import type {
  HTTPValidationError,
  PatchStoryStateDeserializer,
  ProgressEventsDeserializer,
  ResponseSerializerUserStoryStateSerializer,
} from '../models';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PatchStoryStateDeserializerFromJSON,
    PatchStoryStateDeserializerToJSON,
    ProgressEventsDeserializerFromJSON,
    ProgressEventsDeserializerToJSON,
    ResponseSerializerUserStoryStateSerializerFromJSON,
    ResponseSerializerUserStoryStateSerializerToJSON,
} from '../models';

export interface PatchUserStoryStateV1UserStoryStatePatchRequest {
    patchStoryStateDeserializer: PatchStoryStateDeserializer;
}

export interface StepEventsForUserViaPostV1UserStoryStateProgressEventsPostRequest {
    progressEventsDeserializer: ProgressEventsDeserializer;
}

/**
 * 
 */
export class UserStoryStateApi extends runtime.BaseAPI {

    /**
     * Representation of authenticated users narrative story state.
     * Retrieves user narrative state
     */
    async getUserStoryStateV1UserStoryStateGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseSerializerUserStoryStateSerializer>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Fictioneers API HTTP Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user-story-state`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseSerializerUserStoryStateSerializerFromJSON(jsonValue));
    }

    /**
     * Representation of authenticated users narrative story state.
     * Retrieves user narrative state
     */
    async getUserStoryStateV1UserStoryStateGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseSerializerUserStoryStateSerializer> {
        const response = await this.getUserStoryStateV1UserStoryStateGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates the current timeline event ID for the user, adding the previous value to the history.
     * Updates the current timeline event ID for the user
     */
    async patchUserStoryStateV1UserStoryStatePatchRaw(requestParameters: PatchUserStoryStateV1UserStoryStatePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseSerializerUserStoryStateSerializer>> {
        if (requestParameters.patchStoryStateDeserializer === null || requestParameters.patchStoryStateDeserializer === undefined) {
            throw new runtime.RequiredError('patchStoryStateDeserializer','Required parameter requestParameters.patchStoryStateDeserializer was null or undefined when calling patchUserStoryStateV1UserStoryStatePatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Fictioneers API HTTP Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user-story-state`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchStoryStateDeserializerToJSON(requestParameters.patchStoryStateDeserializer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseSerializerUserStoryStateSerializerFromJSON(jsonValue));
    }

    /**
     * Updates the current timeline event ID for the user, adding the previous value to the history.
     * Updates the current timeline event ID for the user
     */
    async patchUserStoryStateV1UserStoryStatePatch(requestParameters: PatchUserStoryStateV1UserStoryStatePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseSerializerUserStoryStateSerializer> {
        const response = await this.patchUserStoryStateV1UserStoryStatePatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Progress events based on the authenticated user available transition events.
     * Progress timeline events
     */
    async stepEventsForUserViaPostV1UserStoryStateProgressEventsPostRaw(requestParameters: StepEventsForUserViaPostV1UserStoryStateProgressEventsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseSerializerUserStoryStateSerializer>> {
        if (requestParameters.progressEventsDeserializer === null || requestParameters.progressEventsDeserializer === undefined) {
            throw new runtime.RequiredError('progressEventsDeserializer','Required parameter requestParameters.progressEventsDeserializer was null or undefined when calling stepEventsForUserViaPostV1UserStoryStateProgressEventsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Fictioneers API HTTP Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user-story-state/progress-events`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProgressEventsDeserializerToJSON(requestParameters.progressEventsDeserializer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseSerializerUserStoryStateSerializerFromJSON(jsonValue));
    }

    /**
     * Progress events based on the authenticated user available transition events.
     * Progress timeline events
     */
    async stepEventsForUserViaPostV1UserStoryStateProgressEventsPost(requestParameters: StepEventsForUserViaPostV1UserStoryStateProgressEventsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseSerializerUserStoryStateSerializer> {
        const response = await this.stepEventsForUserViaPostV1UserStoryStateProgressEventsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
