/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CorrilyApi } from "@fern-api/corrily";

/**
 * Explicitly specify the coupon to be applied in the pricing.
 * Coupons feature needs to be enabled for this.
 * Example `{"product_id_1": "coupon_id_1"}`.
 * Multiple coupons can be applied by a comma-delimited string, for example: `{"product_id_1": "coupon_id_1,coupon_id2"}`
 *
 */
export type Coupons = Record<CorrilyApi.ProductId, string>;
