/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const Gateway: core.schemas.ObjectSchema<serializers.Gateway.Raw, CorrilyApi.Gateway> = core.schemas.object({
  currency: core.schemas.lazy(async () => (await import("../..")).Currency).optional(),
  amount: core.schemas.number().optional(),
  formatted: core.schemas.string().optional(),
});

export declare namespace Gateway {
  interface Raw {
    currency?: serializers.Currency.Raw | null;
    amount?: number | null;
    formatted?: string | null;
  }
}
