/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../../core";

export const ExperimentType: core.serialization.Schema<serializers.ExperimentType.Raw, CorrilyApi.ExperimentType> =
    core.serialization.enum_(["price", "packaging", "null"]);

export declare namespace ExperimentType {
    type Raw = "price" | "packaging" | "null";
}