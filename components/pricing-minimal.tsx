"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@phosphor-icons/react";

interface PricingTier {
  name: string;
  price: number;
  period: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  isCustom?: boolean;
}

interface PricingMinimalProps {
  title?: string;
  subtitle?: string;
  description?: string;
  tiers?: PricingTier[];
  className?: string;
}

const defaultTiers: PricingTier[] = [
  {
    name: "Free",
    price: 0,
    period: "month",
    features: [
      "3 niche validations per month",
      "Basic Reddit analysis (top 50 posts)",
      "Google Trends overview",
      "AI summary (500 words)",
      "View public reports",
    ],
    buttonText: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 29,
    period: "month",
    features: [
      "Unlimited validations",
      "Deep Reddit analysis (500+ posts)",
      "Advanced Trends data",
      "Full AI reports (2000+ words)",
      "Export to PDF/Markdown",
      "Save unlimited reports",
      "Email alerts for trending niches",
    ],
    buttonText: "Start Pro",
    popular: true,
  },
];

export default function PricingMinimal({
  title = "Choose your Pricing Plan",
  subtitle = "Pricing",
  description = "Pick a plan that suits your needs and get started instantly.",
  tiers = defaultTiers,
  className,
}: PricingMinimalProps) {
  return (
    <section className={cn("relative w-full overflow-hidden py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm text-primary font-medium">{subtitle}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-heading font-bold">
            {title}
          </h2>

          <p className="text-lg text-subheading max-w-md">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className="min-w-0">
              <Card
                className={cn(
                  "relative h-full rounded-3xl overflow-hidden min-w-0",
                  tier.popular
                    ? "border-2 border-primary"
                    : "border-zinc-200 dark:border-zinc-800",
                )}
              >
                {tier.popular && (
                  <div className="absolute top-6 right-4 sm:right-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                <CardHeader className="px-4 sm:px-6 pt-6">
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {tier.name}
                  </CardTitle>

                  {tier.isCustom ? (
                    <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                      Contact Us
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white">
                        ${tier.price}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-500">
                        /{tier.period}
                      </span>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="px-4 sm:px-6 flex flex-col gap-6">
                  <Button
                    className={cn(
                      "w-full rounded-xl font-semibold h-12 cursor-pointer",
                    )}
                    variant={tier.popular ? "default" : "dark"}
                  >
                    {tier.buttonText}
                  </Button>

                  <div className="flex flex-col gap-4">
                    {tier.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <CheckCircleIcon
                          size={32}
                          weight="duotone"
                          className="w-5 h-5 text-success shrink-0 mt-0.5"
                        />
                        <span className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
