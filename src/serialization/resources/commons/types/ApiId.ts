/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../../core";

export const ApiId: core.serialization.Schema<serializers.ApiId.Raw, CorrilyApi.ApiId> = core.serialization.string();

export declare namespace ApiId {
    type Raw = string;
}
