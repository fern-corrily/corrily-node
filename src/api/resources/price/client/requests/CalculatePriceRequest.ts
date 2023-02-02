/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CorrilyApi } from "@fern-api/corrily";

export interface CalculatePriceRequest {
    userId?: CorrilyApi.UserId;
    products: CorrilyApi.ProductId[];
    ip?: string;
    getIpFromRequest?: boolean;
    country?: CorrilyApi.Country;
    features?: CorrilyApi.PriceFeatures;
    integrations?: CorrilyApi.Integration[];
    currency?: CorrilyApi.Currency;
    override?: boolean;
    overrideCurrency?: boolean;
    runExperiment?: boolean;
    coupons?: CorrilyApi.Coupons;
}
