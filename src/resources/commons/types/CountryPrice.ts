/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CorrilyApi } from "@fern-api/corrily";

export interface CountryPrice {
  country: CorrilyApi.Country;
  localCurrency: number;
  currency: CorrilyApi.Currency;
}