/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../../core";

export const Variants: core.serialization.ObjectSchema<serializers.Variants.Raw, CorrilyApi.Variants> =
    core.serialization.object({
        experimentedOn: core.serialization.property("experimented_on", core.serialization.boolean().optional()),
        experimentId: core.serialization.property("experiment_id", core.serialization.number().optional()),
        experimentType: core.serialization.property(
            "experiment_type",
            core.serialization.lazy(async () => (await import("../../..")).ExperimentType).optional()
        ),
        productsToSelect: core.serialization.property(
            "products_to_select",
            core.serialization.list(core.serialization.string()).optional()
        ),
        treatmentGroup: core.serialization.property(
            "treatment_group",
            core.serialization.lazy(async () => (await import("../../..")).TreatmentGroup).optional()
        ),
    });

export declare namespace Variants {
    interface Raw {
        experimented_on?: boolean | null;
        experiment_id?: number | null;
        experiment_type?: serializers.ExperimentType.Raw | null;
        products_to_select?: string[] | null;
        treatment_group?: serializers.TreatmentGroup.Raw | null;
    }
}