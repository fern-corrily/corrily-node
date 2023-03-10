/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../../core";

export const ChargeStatus: core.serialization.Schema<serializers.ChargeStatus.Raw, CorrilyApi.ChargeStatus> =
    core.serialization.enum_(["pending", "succeeded", "failed"]);

export declare namespace ChargeStatus {
    type Raw = "pending" | "succeeded" | "failed";
}
