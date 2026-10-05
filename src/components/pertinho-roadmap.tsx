import { t } from "@/i18n/locale";
import "@/styles/pertinho-roadmap.css";

const sellerFoundation = [
  t("Seller registration"),
  t("Seller administration"),
  t("Sign in"),
  t("Change password"),
  t("Reset password"),
  t("View / edit profile"),
  t("Help"),
];
const buyerFoundation = [
  t("Shopping journey"),
  t("Search by category"),
  t("Search by keyword"),
];
const sellerOrders = [
  t("Product catalog"),
  t("Order management"),
  t("Order status"),
];
const buyerOrders = [
  t("Order through the platform"),
  t("Order tracking"),
  t("Filters and sorting"),
];
const releases = [
  {
    title: t("Connect buyers and sellers"),
    buyerGoal: t(
      "Create a simple, quick way to find small businesses to support.",
    ),
    sellerGoal: t(
      "Provide an easy place to register and promote a business, with or without digital experience.",
    ),
    seller: sellerFoundation,
    buyer: buyerFoundation,
    sellerNew: [] as string[],
    buyerNew: [] as string[],
  },
  {
    title: t("Organize the order"),
    buyerGoal: t(
      "Build confidence in orders placed through Pertinho de Casa and give buyers visibility into the process.",
    ),
    sellerGoal: t(
      "Help sellers organize incoming orders, preparation and fulfillment, aiming to improve conversion through a more dependable ordering process.",
    ),
    seller: [...sellerFoundation, ...sellerOrders],
    buyer: [...buyerFoundation, ...buyerOrders],
    sellerNew: sellerOrders,
    buyerNew: buyerOrders,
  },
  {
    title: t("Support the business"),
    buyerGoal: t(
      "Build a complete shopping platform that supports small businesses fairly and connects buyers with their neighborhood.",
    ),
    sellerGoal: t(
      "Help sellers connect with customers and organize their transition to digital commerce, with tools to overcome the crisis and grow in the future.",
    ),
    seller: [
      ...sellerFoundation,
      ...sellerOrders,
      t("Payment partnership"),
      t("Delivery management"),
      t("Route management"),
      t("Delivery partnership"),
    ],
    buyer: [
      ...buyerFoundation,
      ...buyerOrders,
      t("Buyer registration"),
      t("Buyer administration"),
      t("Order history"),
      t("Saved addresses"),
      t("Favorites"),
    ],
    sellerNew: [
      t("Payment partnership"),
      t("Delivery management"),
      t("Route management"),
      t("Delivery partnership"),
    ],
    buyerNew: [
      t("Buyer registration"),
      t("Buyer administration"),
      t("Order history"),
      t("Saved addresses"),
      t("Favorites"),
    ],
  },
];

export function PertinhoRoadmap() {
  return (
    <div
      aria-label={t("Three-release service roadmap")}
      className="pertinho-roadmap"
    >
      <p className="pertinho-roadmap__intro">
        {t(
          "Each release builds on the previous one. Capabilities marked “New” are introduced at that stage.",
        )}
      </p>
      <div className="pertinho-roadmap__releases">
        {releases.map((release, index) => (
          <article key={release.title} className="pertinho-roadmap__release">
            <header>
              <p className="ser-case__eyebrow">
                {t("Release ")}
                {index + 1}
              </p>
              <h3>{release.title}</h3>
            </header>
            <div className="pertinho-roadmap__goals">
              <div>
                <h4>{t("For buyers")}</h4>
                <p>{release.buyerGoal}</p>
              </div>
              <div>
                <h4>{t("For sellers")}</h4>
                <p>{release.sellerGoal}</p>
              </div>
            </div>
            <div className="pertinho-roadmap__capabilities">
              {(["seller", "buyer"] as const).map((side) => (
                <div
                  key={side}
                  className={`pertinho-roadmap__side pertinho-roadmap__side--${side}`}
                >
                  <h4>
                    {side === "seller"
                      ? t("Seller capabilities")
                      : t("Buyer capabilities")}
                  </h4>
                  <ul>
                    {release[side].map((capability) => (
                      <li key={capability}>
                        {capability}
                        {release[
                          side === "seller" ? "sellerNew" : "buyerNew"
                        ].includes(capability) && <span>{t("New")}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
