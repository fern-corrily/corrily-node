/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CorrilyApi } from "@fern-api/corrily";

export interface CalculatePriceResponse {
  /** Whether or not the request completed successfully. */
  success?: boolean;
  /** The user ID that you provided when you called calculate price, or the user's IP address (if you did not provide a user ID). */
  userId?: CorrilyApi.UserId;
  /** The country that the price data is associated to. If you did not specify a country when calling calculate price, the country value provided here in the response is inferred from the user's IP address. */
  country?: CorrilyApi.Country;
  /**
   * The currency that the price data is associated to.
   * Tip: check if `products`. `{id}.display.price` meets your needs before manually constructing a display price with this field.
   *
   */
  currency?: CorrilyApi.Currency;
  /**
   * The currency symbol that the price data is associated to.
   * Tip: check if `products.{id}.display.price` meets your needs before manually constructing a display price with this field.
   *
   */
  currencySymbol?: string;
  /**
   * The price data for each of the products that you specified when you called calculate price.
   * The placeholder `{id}` below represents your product ID(s).
   * See [Setup](https://docs.corrily.com/basics/setup) to learn how to create product IDs.
   *
   */
  products?: Record<string, CorrilyApi.Product>;
  /**
   * Price experimentation metadata.
   * If you are not doing price experimentation, you can ignore this object.
   *
   */
  variants?: CorrilyApi.Variants | undefined;
}
