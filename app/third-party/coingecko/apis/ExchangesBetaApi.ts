// tslint:disable
/**
 * CoinGecko API V3
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import {
  BaseAPI,
  RequiredError,
  HttpHeaders,
  HttpQuery,
  COLLECTION_FORMATS,
} from '../runtime';

export interface ExchangesIdGetRequest {
  id: string;
}

export interface ExchangesIdStatusUpdatesGetRequest {
  id: string;
  perPage?: number;
  page?: number;
}

export interface ExchangesIdTickersGetRequest {
  id: string;
  coinIds?: string;
  page?: number;
}

/**
 * no description
 */
export class ExchangesBetaApi extends BaseAPI {
  /**
   * List all exchanges
   * List all exchanges
   */
  exchangesGet(): Observable<void> {
    const queryParameters: HttpQuery = {};

    const headerParameters: HttpHeaders = {};

    return this.request<void>({
      path: `/exchanges`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });
  }

  /**
   * Get exchange volume in BTC and tickers<br><br>**IMPORTANT**: Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers` Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while. Ticker `is_anomaly` is true if ticker\'s price is outliered by our system. You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   * Get exchange volume in BTC and top 100 tickers only
   */
  exchangesIdGet(requestParameters: ExchangesIdGetRequest): Observable<void> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling exchangesIdGet.',
      );
    }

    const queryParameters: HttpQuery = {};

    const headerParameters: HttpHeaders = {};

    return this.request<void>({
      path: `/exchanges/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });
  }

  /**
   * Get status updates for a given exchange
   * Get status updates for a given exchange (beta)
   */
  exchangesIdStatusUpdatesGet(
    requestParameters: ExchangesIdStatusUpdatesGetRequest,
  ): Observable<void> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling exchangesIdStatusUpdatesGet.',
      );
    }

    const queryParameters: HttpQuery = {};

    if (
      requestParameters.perPage !== undefined &&
      requestParameters.perPage !== null
    ) {
      queryParameters['per_page'] = requestParameters.perPage;
    }

    if (
      requestParameters.page !== undefined &&
      requestParameters.page !== null
    ) {
      queryParameters['page'] = requestParameters.page;
    }

    const headerParameters: HttpHeaders = {};

    return this.request<void>({
      path: `/exchanges/{id}/status_updates`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });
  }

  /**
   * Get exchange tickers (paginated)<br><br>**IMPORTANT**: Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while. Ticker `is_anomaly` is true if ticker\'s price is outliered by our system. You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   * Get exchange tickers (paginated)
   */
  exchangesIdTickersGet(
    requestParameters: ExchangesIdTickersGetRequest,
  ): Observable<void> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling exchangesIdTickersGet.',
      );
    }

    const queryParameters: HttpQuery = {};

    if (
      requestParameters.coinIds !== undefined &&
      requestParameters.coinIds !== null
    ) {
      queryParameters['coin_ids'] = requestParameters.coinIds;
    }

    if (
      requestParameters.page !== undefined &&
      requestParameters.page !== null
    ) {
      queryParameters['page'] = requestParameters.page;
    }

    const headerParameters: HttpHeaders = {};

    return this.request<void>({
      path: `/exchanges/{id}/tickers`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id)),
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });
  }

  /**
   * Use this to obtain all the markets\' id in order to make API calls
   * List all supported markets id and name (no pagination required)
   */
  exchangesListGet(): Observable<void> {
    const queryParameters: HttpQuery = {};

    const headerParameters: HttpHeaders = {};

    return this.request<void>({
      path: `/exchanges/list`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });
  }
}
