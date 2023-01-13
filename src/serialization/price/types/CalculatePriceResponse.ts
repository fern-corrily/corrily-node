/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const CalculatePriceResponse: core.schemas.ObjectSchema<
  serializers.CalculatePriceResponse.Raw,
  CorrilyApi.CalculatePriceResponse
> = core.schemas.object({
  success: core.schemas.boolean().optional(),
  userId: core.schemas.property("user_id", core.schemas.lazy(async () => (await import("../..")).UserId).optional()),
  country: core.schemas.lazy(async () => (await import("../..")).Country).optional(),
  currency: core.schemas.lazy(async () => (await import("../..")).Currency).optional(),
  currencySymbol: core.schemas.property("currency_symbol", core.schemas.string().optional()),
  products: core.schemas
    .record(
      core.schemas.string(),
      core.schemas.lazyObject(async () => (await import("../..")).Product)
    )
    .optional(),
  variants: core.schemas
    .lazyObject(async () => (await import("../..")).Variants)
    .optional()
    .optional(),
});

export declare namespace CalculatePriceResponse {
  interface Raw {
    success?: boolean | null;
    user_id?: serializers.UserId.Raw | null;
    country?: serializers.Country.Raw | null;
    currency?: serializers.Currency.Raw | null;
    currency_symbol?: string | null;
    products?: Record<string, serializers.Product.Raw> | null;
    variants?: (serializers.Variants.Raw | null | undefined) | null;
  }
}