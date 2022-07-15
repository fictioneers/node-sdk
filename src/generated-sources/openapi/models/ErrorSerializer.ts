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
 * Base serializer class for any errors which can be included in a response. This is
 * used by the ResponseSerializer class.
 * 
 * If an error is returned, there should be no data in the response (although we are
 * working on the presumption that metadata may still come back). This is
 * handled in the ResponseSerializer validator.
 * @export
 * @interface ErrorSerializer
 */
export interface ErrorSerializer {
    /**
     * 
     * @type {string}
     * @memberof ErrorSerializer
     */
    detail?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ErrorSerializer
     */
    content?: Array<object>;
}

/**
 * Check if a given object implements the ErrorSerializer interface.
 */
export function instanceOfErrorSerializer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorSerializerFromJSON(json: any): ErrorSerializer {
    return ErrorSerializerFromJSONTyped(json, false);
}

export function ErrorSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'content': !exists(json, 'content') ? undefined : json['content'],
    };
}

export function ErrorSerializerToJSON(value?: ErrorSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': value.detail,
        'content': value.content,
    };
}

