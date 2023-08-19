import prom from "prom-client";

// メトリクスのレジストリ
export const metricsRegistry = new prom.Registry();

// メトリクスAPIの初期化
metricsRegistry.setDefaultLabels({ app: "express" });
prom.collectDefaultMetrics({ register: metricsRegistry });

// 各APIのHTTPリクエスト数のCounterメトリクスの定義と登録
export const http_request_counter = new prom.Counter({
  name: "express_api_http_request_count",
  help: "Count of HTTP requests to express api",
  labelNames: ["method", "route", "statusCode"],
});
metricsRegistry.registerMetric(http_request_counter);
