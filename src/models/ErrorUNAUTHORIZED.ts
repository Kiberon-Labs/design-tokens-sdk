/* tslint:disable */
/* eslint-disable */
/**
 * Kiberon Labs Design Tokens API
 * OpenAPI compliant REST API built using tRPC
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { ErrorBADREQUESTIssuesInner } from './ErrorBADREQUESTIssuesInner.js';
import {
    ErrorBADREQUESTIssuesInnerFromJSON,
    ErrorBADREQUESTIssuesInnerFromJSONTyped,
    ErrorBADREQUESTIssuesInnerToJSON,
    ErrorBADREQUESTIssuesInnerToJSONTyped,
} from './ErrorBADREQUESTIssuesInner.js';

/**
 * The error information
 * @export
 * @interface ErrorUNAUTHORIZED
 */
export interface ErrorUNAUTHORIZED {
    /**
     * The error message
     * @type {string}
     * @memberof ErrorUNAUTHORIZED
     */
    message: string;
    /**
     * The error code
     * @type {string}
     * @memberof ErrorUNAUTHORIZED
     */
    code: string;
    /**
     * An array of issues that were responsible for the error
     * @type {Array<ErrorBADREQUESTIssuesInner>}
     * @memberof ErrorUNAUTHORIZED
     */
    issues?: Array<ErrorBADREQUESTIssuesInner>;
}

/**
 * Check if a given object implements the ErrorUNAUTHORIZED interface.
 */
export function instanceOfErrorUNAUTHORIZED(value: object): value is ErrorUNAUTHORIZED {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function ErrorUNAUTHORIZEDFromJSON(json: any): ErrorUNAUTHORIZED {
    return ErrorUNAUTHORIZEDFromJSONTyped(json, false);
}

export function ErrorUNAUTHORIZEDFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorUNAUTHORIZED {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'code': json['code'],
        'issues': json['issues'] == null ? undefined : ((json['issues'] as Array<any>).map(ErrorBADREQUESTIssuesInnerFromJSON)),
    };
}

export function ErrorUNAUTHORIZEDToJSON(json: any): ErrorUNAUTHORIZED {
    return ErrorUNAUTHORIZEDToJSONTyped(json, false);
}

export function ErrorUNAUTHORIZEDToJSONTyped(value?: ErrorUNAUTHORIZED | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'code': value['code'],
        'issues': value['issues'] == null ? undefined : ((value['issues'] as Array<any>).map(ErrorBADREQUESTIssuesInnerToJSON)),
    };
}

