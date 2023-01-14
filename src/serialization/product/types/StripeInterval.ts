/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const StripeInterval: core.schemas.Schema<serializers.StripeInterval.Raw, CorrilyApi.StripeInterval> =
  core.schemas.enum_(["day", "week", "month", "year"]);

export declare namespace StripeInterval {
  type Raw = "day" | "week" | "month" | "year";
}
