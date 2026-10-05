import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { getLocale, t } from "@/i18n/locale";

const data = [
  { name: t("Traditional Retail"), value: 2252983 },
  { name: t("Construction"), value: 1865625 },
  { name: t("Fashion"), value: 1853097 },
  { name: t("Food Services"), value: 1565508 },
  { name: t("Beauty"), value: 1248103 },
];

const formatNumber = (value: number) =>
  new Intl.NumberFormat(getLocale() === "pt" ? "pt-BR" : "en-US").format(value);

const formatTick = (value: number) => {
  if (value === 0) return "0";
  if (value === 2_000_000) return t("2 Million");

  return `${(value / 1_000_000).toLocaleString(
    getLocale() === "pt" ? "pt-BR" : "en-US",
    {
      maximumFractionDigits: 1,
    },
  )}M`;
};

function CustomLabel({
  x,
  y,
  width,
  height,
  value,
  index,
}: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  index?: number;
}) {
  if (
    x === undefined ||
    y === undefined ||
    width === undefined ||
    height === undefined ||
    value === undefined ||
    index === undefined
  ) {
    return null;
  }

  const item = data[index];

  return (
    <text
      dominantBaseline="middle"
      fill="white"
      fontSize={16}
      textAnchor="end"
      x={x + width - 16}
      y={y + height / 2}
    >
      <tspan fontWeight="700">{item.name}</tspan>
      <tspan fontWeight="400"> {formatNumber(value)}</tspan>
    </text>
  );
}

export function VulnerableBusinessesChart() {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-lg border border-default-200 bg-background p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          <div>
            <h2 className="text-[25px] font-light leading-tight text-foreground">
              {t("We knew that ")}
              <span>{t("small and micro businesses")}</span>
              {t(
                " were among the businesses most affected by the COVID-19 crisis.",
              )}
            </h2>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-medium text-default-500 md:text-base">
              {t(
                "Number of small businesses in the segments most vulnerable to the crisis",
              )}
            </h3>

            <div className="h-95 w-full">
              <ResponsiveContainer height="100%" width="100%">
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{ top: 0, right: 16, bottom: 8, left: 0 }}
                >
                  <CartesianGrid
                    className="text-default-200"
                    horizontal={false}
                    stroke="currentColor"
                  />
                  <XAxis
                    axisLine={false}
                    className="text-default-500"
                    domain={[0, 2_000_000]}
                    tick={{ fill: "currentColor", fontSize: 13 }}
                    tickFormatter={formatTick}
                    tickLine={false}
                    ticks={[0, 500_000, 1_000_000, 1_500_000, 2_000_000]}
                    type="number"
                  />
                  <YAxis
                    hide
                    axisLine={false}
                    dataKey="name"
                    tickLine={false}
                    type="category"
                  />
                  <Bar
                    className="text-warning"
                    dataKey="value"
                    fill="currentColor"
                    isAnimationActive={false}
                    radius={0}
                  >
                    <LabelList content={<CustomLabel />} dataKey="value" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
