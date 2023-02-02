/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../../core";

export const CalculatePriceResponse: core.serialization.ObjectSchema<
    serializers.CalculatePriceResponse.Raw,
    CorrilyApi.CalculatePriceResponse
> = core.serialization.object({
    success: core.serialization.boolean().optional(),
    userId: core.serialization.property(
        "user_id",
        core.serialization.lazy(async () => (await import("../../..")).UserId).optional()
    ),
    country: core.serialization.lazy(async () => (await import("../../..")).Country).optional(),
    currency: core.serialization.lazy(async () => (await import("../../..")).Currency).optional(),
    currencySymbol: core.serialization.property("currency_symbol", core.serialization.string().optional()),
    products: core.serialization
        .record(
            core.serialization.string(),
            core.serialization.lazyObject(async () => (await import("../../..")).Product)
        )
        .optional(),
    variants: core.serialization
        .lazyObject(async () => (await import("../../..")).Variants)
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
