/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as ChargeClient } from "./api/resources/charge/client/Client";
import { Client as PriceClient } from "./api/resources/price/client/Client";
import { Client as ProductClient } from "./api/resources/product/client/Client";
import { Client as SubscriptionClient } from "./api/resources/subscription/client/Client";
import { Client as UserClient } from "./api/resources/user/client/Client";

export declare namespace CorrilyApiClient {
    interface Options {
        environment?: environments.CorrilyApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class CorrilyApiClient {
    constructor(private readonly options: CorrilyApiClient.Options) {}

    #charge: ChargeClient | undefined;

    public get charge(): ChargeClient {
        return (this.#charge ??= new ChargeClient(this.options));
    }

    #price: PriceClient | undefined;

    public get price(): PriceClient {
        return (this.#price ??= new PriceClient(this.options));
    }

    #product: ProductClient | undefined;

    public get product(): ProductClient {
        return (this.#product ??= new ProductClient(this.options));
    }

    #subscription: SubscriptionClient | undefined;

    public get subscription(): SubscriptionClient {
        return (this.#subscription ??= new SubscriptionClient(this.options));
    }

    #user: UserClient | undefined;

    public get user(): UserClient {
        return (this.#user ??= new UserClient(this.options));
    }
}
