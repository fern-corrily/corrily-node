/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CorrilyApi } from "@fern-api/corrily";

export type ProductIntegration =
    | CorrilyApi.ProductIntegration.Stripe
    | CorrilyApi.ProductIntegration.StripeWithInterval
    | CorrilyApi.ProductIntegration.Chargebee
    | CorrilyApi.ProductIntegration.Recurly
    | CorrilyApi.ProductIntegration._Unknown;

export declare namespace ProductIntegration {
    interface Stripe extends CorrilyApi.StripeIntegration, _Utils {
        type: "stripe";
    }

    interface StripeWithInterval extends CorrilyApi.StripeWithIntervalIntegration, _Utils {
        type: "stripe_with_interval";
    }

    interface Chargebee extends CorrilyApi.ChargebeeIntegration, _Utils {
        type: "chargebee";
    }

    interface Recurly extends CorrilyApi.RecurlyIntegration, _Utils {
        type: "recurly";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CorrilyApi.ProductIntegration._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        stripe: (value: CorrilyApi.StripeIntegration) => _Result;
        stripeWithInterval: (value: CorrilyApi.StripeWithIntervalIntegration) => _Result;
        chargebee: (value: CorrilyApi.ChargebeeIntegration) => _Result;
        recurly: (value: CorrilyApi.RecurlyIntegration) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ProductIntegration = {
    stripe: (value: CorrilyApi.StripeIntegration): CorrilyApi.ProductIntegration.Stripe => {
        return {
            ...value,
            type: "stripe",
            _visit: function <_Result>(
                this: CorrilyApi.ProductIntegration.Stripe,
                visitor: CorrilyApi.ProductIntegration._Visitor<_Result>
            ) {
                return CorrilyApi.ProductIntegration._visit(this, visitor);
            },
        };
    },

    stripeWithInterval: (
        value: CorrilyApi.StripeWithIntervalIntegration
    ): CorrilyApi.ProductIntegration.StripeWithInterval => {
        return {
            ...value,
            type: "stripe_with_interval",
            _visit: function <_Result>(
                this: CorrilyApi.ProductIntegration.StripeWithInterval,
                visitor: CorrilyApi.ProductIntegration._Visitor<_Result>
            ) {
                return CorrilyApi.ProductIntegration._visit(this, visitor);
            },
        };
    },

    chargebee: (value: CorrilyApi.ChargebeeIntegration): CorrilyApi.ProductIntegration.Chargebee => {
        return {
            ...value,
            type: "chargebee",
            _visit: function <_Result>(
                this: CorrilyApi.ProductIntegration.Chargebee,
                visitor: CorrilyApi.ProductIntegration._Visitor<_Result>
            ) {
                return CorrilyApi.ProductIntegration._visit(this, visitor);
            },
        };
    },

    recurly: (value: CorrilyApi.RecurlyIntegration): CorrilyApi.ProductIntegration.Recurly => {
        return {
            ...value,
            type: "recurly",
            _visit: function <_Result>(
                this: CorrilyApi.ProductIntegration.Recurly,
                visitor: CorrilyApi.ProductIntegration._Visitor<_Result>
            ) {
                return CorrilyApi.ProductIntegration._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): CorrilyApi.ProductIntegration._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: CorrilyApi.ProductIntegration._Unknown,
                visitor: CorrilyApi.ProductIntegration._Visitor<_Result>
            ) {
                return CorrilyApi.ProductIntegration._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CorrilyApi.ProductIntegration,
        visitor: CorrilyApi.ProductIntegration._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "stripe":
                return visitor.stripe(value);
            case "stripe_with_interval":
                return visitor.stripeWithInterval(value);
            case "chargebee":
                return visitor.chargebee(value);
            case "recurly":
                return visitor.recurly(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
