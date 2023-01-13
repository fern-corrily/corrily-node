/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const PriceDisplay: core.schemas.ObjectSchema<serializers.PriceDisplay.Raw, CorrilyApi.PriceDisplay> =
  core.schemas.object({
    price: core.schemas.string().optional(),
    referenceIntervalPrice: core.schemas.property("reference_interval_price", core.schemas.string().optional()),
    priceWithBaselineStrike: core.schemas.property("price_with_baseline_strike", core.schemas.string().optional()),
    discountToBaseline: core.schemas.property("discount_to_baseline", core.schemas.number().optional()),
  });

export declare namespace PriceDisplay {
  interface Raw {
    price?: string | null;
    reference_interval_price?: string | null;
    price_with_baseline_strike?: string | null;
    discount_to_baseline?: number | null;
  }
}