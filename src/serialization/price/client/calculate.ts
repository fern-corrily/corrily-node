/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const Request: core.schemas.Schema<serializers.price.calculate.Request.Raw, CorrilyApi.CalculatePriceRequest> =
  core.schemas.object({
    userId: core.schemas.property("user_id", core.schemas.lazy(async () => (await import("../..")).UserId).optional()),
    products: core.schemas.list(core.schemas.lazy(async () => (await import("../..")).ProductId)).optional(),
    ip: core.schemas.string().optional(),
    getIpFromRequest: core.schemas.property("get_ip_from_request", core.schemas.boolean().optional()),
    country: core.schemas.lazy(async () => (await import("../..")).Country).optional(),
    features: core.schemas.lazy(async () => (await import("../..")).PriceFeatures).optional(),
    integrations: core.schemas.list(core.schemas.lazy(async () => (await import("../..")).Integration)).optional(),
    currency: core.schemas.lazy(async () => (await import("../..")).Currency).optional(),
    override: core.schemas.boolean().optional(),
    overrideCurrency: core.schemas.property("override_currency", core.schemas.boolean().optional()),
    runExperiment: core.schemas.property("run_experiment", core.schemas.boolean().optional()),
    coupons: core.schemas.lazy(async () => (await import("../..")).Coupons).optional(),
  });

export declare namespace Request {
  interface Raw {
    user_id?: serializers.UserId.Raw | null;
    products?: serializers.ProductId.Raw[] | null;
    ip?: string | null;
    get_ip_from_request?: boolean | null;
    country?: serializers.Country.Raw | null;
    features?: serializers.PriceFeatures.Raw | null;
    integrations?: serializers.Integration.Raw[] | null;
    currency?: serializers.Currency.Raw | null;
    override?: boolean | null;
    override_currency?: boolean | null;
    run_experiment?: boolean | null;
    coupons?: serializers.Coupons.Raw | null;
  }
}

export const Response: core.schemas.Schema<
  serializers.price.calculate.Response.Raw,
  CorrilyApi.CalculatePriceResponse
> = core.schemas.lazyObject(async () => (await import("../..")).CalculatePriceResponse);

export declare namespace Response {
  type Raw = serializers.CalculatePriceResponse.Raw;
}
