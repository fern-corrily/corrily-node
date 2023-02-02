/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { CorrilyApi } from "@fern-api/corrily";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.CorrilyApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Calculate a localized or optimized price for your service or product based on the customer's location and other characteristics.
     *
     * *Usage*
     * The first time that you call this endpoint for a given IP address and user ID,
     * Corrily calculates the price. On subsequent calls (with the same IP address and user ID), Corrily returns the original calculated price.
     * See [Calculate price API examples](https://docs.corrily.com/pricing/calculate-price-api-examples)
     * for examples of how this endpoint is commonly used.
     *
     * *Price localization*
     * If you're only using Corrily for price localization (i.e. you are not doing price optimization),
     * this is the endpoint that you call in order to get localized prices.
     *
     * *Price optimization*
     * If you're also doing price optimization, this is the endpoint you call to get optimized prices.
     * As explained in [Price optimization overview](https://docs.corrily.com/pricing/price-optimization-overview),
     * Corrily either returns an experimental price or a control price which will be used to benchmark the experimental prices.
     *
     * Experimental prices are affected by the following factors:
     *   - The (potential) customer's location, which is inferred from their IP address
     *   - Any user features that you have provided
     *   - The outcomes of previous price experiments
     *   - The upper and lower bounds that you defined in the Corrily Dashboard
     *
     */
    public async calculate(request: CorrilyApi.CalculatePriceRequest): Promise<CorrilyApi.CalculatePriceResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CorrilyApiEnvironment.Production, "/prices"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CalculatePriceRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.CalculatePriceResponse.parse(
                _response.body as serializers.CalculatePriceResponse.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CorrilyApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CorrilyApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CorrilyApiTimeoutError();
            case "unknown":
                throw new errors.CorrilyApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
