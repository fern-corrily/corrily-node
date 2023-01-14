/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const Request: core.schemas.Schema<serializers.charge.update.Request.Raw, CorrilyApi.UpdateChargeRequest> =
  core.schemas.object({
    amount: core.schemas.number().optional(),
    created: core.schemas.number().optional(),
    currency: core.schemas.lazy(async () => (await import("../..")).Currency).optional(),
    status: core.schemas.lazy(async () => (await import("../..")).ChargeStatus).optional(),
    userId: core.schemas.property(
      "user_id",
      core.schemas.lazy(async () => (await import("../..")).UserId)
    ),
    metadata: core.schemas.unknown().optional(),
  });

export declare namespace Request {
  interface Raw {
    amount?: number | null;
    created?: number | null;
    currency?: serializers.Currency.Raw | null;
    status?: serializers.ChargeStatus.Raw | null;
    user_id: serializers.UserId.Raw;
    metadata?: unknown | null;
  }
}

export const Response: core.schemas.Schema<
  serializers.charge.update.Response.Raw,
  CorrilyApi.UpdateChargeResponse | undefined
> = core.schemas.lazy(async () => (await import("../..")).UpdateChargeResponse);

export declare namespace Response {
  type Raw = serializers.UpdateChargeResponse.Raw | undefined;
}
