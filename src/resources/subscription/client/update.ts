/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CorrilyApi } from "@fern-api/corrily";
import * as core from "../../../core";

export type Response = core.APIResponse<
  CorrilyApi.UpdateSubscriptionResponse | undefined,
  CorrilyApi.subscription.update.Error
>;
export type Error = CorrilyApi.subscription.update.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: CorrilyApi.subscription.update.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): CorrilyApi.subscription.update.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<CorrilyApi.subscription.update.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: CorrilyApi.subscription.update.Error._Unknown, visitor: CorrilyApi.subscription.update.Error._Visitor<_Result>) {
      return CorrilyApi.subscription.update.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: CorrilyApi.subscription.update.Error,
    visitor: CorrilyApi.subscription.update.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;
