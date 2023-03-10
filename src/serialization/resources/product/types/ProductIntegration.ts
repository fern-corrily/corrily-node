/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../../core";

export const ProductIntegration: core.serialization.Schema<
    serializers.ProductIntegration.Raw,
    CorrilyApi.ProductIntegration
> = core.serialization
    .union("type", {
        stripe: core.serialization.lazyObject(async () => (await import("../../..")).StripeIntegration),
        stripe_with_interval: core.serialization.lazyObject(
            async () => (await import("../../..")).StripeWithIntervalIntegration
        ),
        chargebee: core.serialization.lazyObject(async () => (await import("../../..")).ChargebeeIntegration),
        recurly: core.serialization.lazyObject(async () => (await import("../../..")).RecurlyIntegration),
    })
    .transform<CorrilyApi.ProductIntegration>({
        parse: (value) => {
            switch (value.type) {
                case "stripe":
                    return CorrilyApi.ProductIntegration.stripe(value);
                case "stripe_with_interval":
                    return CorrilyApi.ProductIntegration.stripeWithInterval(value);
                case "chargebee":
                    return CorrilyApi.ProductIntegration.chargebee(value);
                case "recurly":
                    return CorrilyApi.ProductIntegration.recurly(value);
                default:
                    return CorrilyApi.ProductIntegration._unknown(value);
            }
        },
        json: (value) => value as any,
    });

export declare namespace ProductIntegration {
    type Raw =
        | ProductIntegration.Stripe
        | ProductIntegration.StripeWithInterval
        | ProductIntegration.Chargebee
        | ProductIntegration.Recurly;

    interface Stripe extends serializers.StripeIntegration.Raw {
        type: "stripe";
    }

    interface StripeWithInterval extends serializers.StripeWithIntervalIntegration.Raw {
        type: "stripe_with_interval";
    }

    interface Chargebee extends serializers.ChargebeeIntegration.Raw {
        type: "chargebee";
    }

    interface Recurly extends serializers.RecurlyIntegration.Raw {
        type: "recurly";
    }
}
