/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const CountryPrice: core.schemas.ObjectSchema<serializers.CountryPrice.Raw, CorrilyApi.CountryPrice> =
  core.schemas.object({
    country: core.schemas.lazy(async () => (await import("../..")).Country),
    localCurrency: core.schemas.property("local_currency", core.schemas.number()),
    currency: core.schemas.lazy(async () => (await import("../..")).Currency),
  });

export declare namespace CountryPrice {
  interface Raw {
    country: serializers.Country.Raw;
    local_currency: number;
    currency: serializers.Currency.Raw;
  }
}