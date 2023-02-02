/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../../../core";

export const UpdateChargeRequest: core.serialization.Schema<
    serializers.UpdateChargeRequest.Raw,
    CorrilyApi.UpdateChargeRequest
> = core.serialization.object({
    amount: core.serialization.number().optional(),
    created: core.serialization.number().optional(),
    currency: core.serialization.lazy(async () => (await import("../../../..")).Currency).optional(),
    status: core.serialization.lazy(async () => (await import("../../../..")).ChargeStatus).optional(),
    userId: core.serialization.property(
        "user_id",
        core.serialization.lazy(async () => (await import("../../../..")).UserId)
    ),
    metadata: core.serialization.unknown().optional(),
});

export declare namespace UpdateChargeRequest {
    interface Raw {
        amount?: number | null;
        created?: number | null;
        currency?: serializers.Currency.Raw | null;
        status?: serializers.ChargeStatus.Raw | null;
        user_id: serializers.UserId.Raw;
        metadata?: unknown | null;
    }
}
