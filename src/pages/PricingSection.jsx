import { useTranslation } from "react-i18next";
import { CheckIcon } from "@heroicons/react/20/solid/index.js";

const tiers = [
  {
    name: "pricing-tier-special-tickets-name",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "pricing-tier-special-tickets-price",
    description: "pricing-tier-special-tickets-description",
    features: [
      "pricing-tier-special-tickets-feature-1",
      "pricing-tier-special-tickets-feature-2",
      "pricing-tier-special-tickets-feature-3",
    ],
    mostPopular: false,
  },
  {
    name: "pricing-tier-congress-tickets-name",
    id: "tier-startup",
    href: "#",
    priceMonthly: "pricing-tier-congress-tickets-price",
    description: "pricing-tier-congress-tickets-description",
    features: [
      "pricing-tier-congress-tickets-feature-1",
      "pricing-tier-congress-tickets-feature-2",
      "pricing-tier-congress-tickets-feature-3",
      "pricing-tier-congress-tickets-feature-4",
    ],
    mostPopular: true,
  },
  {
    name: "pricing-tier-coffee-name",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "pricing-tier-coffee-price",
    description: "pricing-tier-coffee-description",
    features: [
      "pricing-tier-coffee-feature-1",
      "pricing-tier-coffee-feature-2",
      "pricing-tier-coffee-feature-3",
      "pricing-tier-coffee-feature-4",
      "pricing-tier-coffee-feature-5",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const pricingKey = {
  title: "pricing-key-section-title",
  description: "pricing-key-section-description",
  popular: "pricing-key-section-popular",
  buy: "pricing-key-section-buy",
};

const PricingSection = () => {
  const { t } = useTranslation();
  return (
    <div className="py-24 sm:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {t(pricingKey.title)}
          </p>
          <p className="mt-6 text-lg/8 text-pretty text-gray-600">
            {t(pricingKey.description)}
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10",
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                      "text-lg/8 font-semibold",
                    )}
                  >
                    {t(tier.name)}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                      {t(pricingKey.popular)}
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm/6 text-gray-600">
                  {t(tier.description)}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {t(tier.priceMonthly)}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-xs hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                )}
              >
                {t(pricingKey.buy)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
