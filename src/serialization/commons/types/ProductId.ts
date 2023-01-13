/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export const ProductId: core.schemas.Schema<serializers.ProductId.Raw, CorrilyApi.ProductId> = core.schemas.string();

export declare namespace ProductId {
  type Raw = string;
}