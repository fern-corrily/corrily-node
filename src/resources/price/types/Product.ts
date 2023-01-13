/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CorrilyApi } from "@fern-api/corrily";

export interface Product {
  /**
   * A float version of your price, in case you want to do some custom formatting of the price.
   * Tip: check if `products.{id}.display.price` meets your needs before manually constructing a display price with this field.
   *
   */
  price?: number;
  /** The current value of products.{id}.price in United States dollars. */
  priceUsd?: number;
  /** The billing interval of this product. */
  interval?: CorrilyApi.Interval;
  intervalCount?: number;
  /** The price data, formatted in various ways for display to your user. */
  display?: CorrilyApi.PriceDisplay;
  integrations?: Record<CorrilyApi.Integration, CorrilyApi.Gateway>;
  coupon?: unknown;
}
