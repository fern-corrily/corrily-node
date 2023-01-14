/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const Request: core.schemas.Schema<serializers.product.create.Request.Raw, CorrilyApi.CreateProductRequest> =
  core.schemas.object({
    apiId: core.schemas.property(
      "api_id",
      core.schemas.lazy(async () => (await import("../..")).ApiId)
    ),
    name: core.schemas.string(),
    basePx: core.schemas.property("base_px", core.schemas.number()),
    interval: core.schemas.lazy(async () => (await import("../..")).Interval),
    intervalCount: core.schemas.property("interval_count", core.schemas.number()),
    countryPrices: core.schemas.property(
      "country_prices",
      core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).CountryPrice)).optional()
    ),
    integrations: core.schemas
      .list(core.schemas.lazy(async () => (await import("../..")).ProductIntegration))
      .optional(),
  });

export declare namespace Request {
  interface Raw {
    api_id: serializers.ApiId.Raw;
    name: string;
    base_px: number;
    interval: serializers.Interval.Raw;
    interval_count: number;
    country_prices?: serializers.CountryPrice.Raw[] | null;
    integrations?: serializers.ProductIntegration.Raw[] | null;
  }
}
