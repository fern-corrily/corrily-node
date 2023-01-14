/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { CorrilyApi } from "@fern-api/corrily";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.CorrilyApiEnvironment | string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async create(request: CorrilyApi.CreateChargeRequest): Promise<CorrilyApi.charge.create.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.CorrilyApiEnvironment.Production, "/charges/"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.charge.create.Request.json({
        amount: request.amount,
        amountRefunded: request.amountRefunded,
        created: request.created,
        currency: request.currency,
        country: request.country,
        origin: request.origin,
        originId: request.originId,
        product: request.product,
        status: request.status,
        userId: request.userId,
        metadata: request.metadata,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: CorrilyApi.charge.create.Error._unknown(_response.error),
    };
  }

  public async get(
    origin: CorrilyApi.Integration,
    originId: string,
    userId: string
  ): Promise<CorrilyApi.charge.get.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.CorrilyApiEnvironment.Production,
        `/charges/${userId}/${origin}/${originId}`
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.charge.get.Response.parse(_response.body as serializers.charge.get.Response.Raw),
      };
    }

    return {
      ok: false,
      error: CorrilyApi.charge.get.Error._unknown(_response.error),
    };
  }

  public async update(
    origin: CorrilyApi.Integration,
    originId: string,
    userId: string,
    request: CorrilyApi.UpdateChargeRequest
  ): Promise<CorrilyApi.charge.update.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.CorrilyApiEnvironment.Production,
        `/charges/${userId}/${origin}/${originId}`
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.charge.update.Request.json({
        amount: request.amount,
        created: request.created,
        currency: request.currency,
        status: request.status,
        userId: request.userId,
        metadata: request.metadata,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.charge.update.Response.parse(_response.body as serializers.charge.update.Response.Raw),
      };
    }

    return {
      ok: false,
      error: CorrilyApi.charge.update.Error._unknown(_response.error),
    };
  }

  public async delete(
    origin: CorrilyApi.Integration,
    originId: string,
    userId: string
  ): Promise<CorrilyApi.charge.delete.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.CorrilyApiEnvironment.Production,
        `/charges/${userId}/${origin}/${originId}`
      ),
      method: "DELETE",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: CorrilyApi.charge.delete.Error._unknown(_response.error),
    };
  }
}
