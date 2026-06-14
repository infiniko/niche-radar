"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockCountdownIcon,
  ProhibitIcon,
  TrendDownIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SeparatorPro } from "@/components/ui/seperatorpro";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const DashboardPage = () => {
  const { data: session } = useSession();
  return (
    <div className="lg:max-w-7xl lg:mx-20 md:mx-16 mx-8 space-y-6 py-6">
      {/* hero section */}
      <div>
        <h1 className="text-3xl font-bold text-heading">
          Welcome back, {session?.user?.name}!
        </h1>
        <p className="text- mt-1 text-subheading">
          Validate your niche ideas with AI-powered market research
        </p>
      </div>
      {/* Pending Payment Notice */}
      <Alert className="max-w-full border-warning-border/60 bg-warning text-warning-foreground sm:px-2 sm:py-2 lg:px-6 lg:py-4 rounded-xl">
        <ClockCountdownIcon weight="duotone" />
        <AlertTitle className="font-semibold">
          Awaiting Payment Approval
        </AlertTitle>
        <AlertDescription>
          <p className="text-warning-foreground/80">
            Your payment request is awaiting administrator approval. You will be
            automatically upgraded to Pro as soon as it is confirmed.
          </p>
          <Link
            href="/dashboard/settings"
            className="text-sm text-warning-link underline mt-2 inline-block"
          >
            View payment status →
          </Link>
        </AlertDescription>
      </Alert>
      {/* subscription */}
      <Card className="border-primary/30 shadow-sm">
        <CardContent className="md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-primary/10`}>
                <div className={`w-6 h-6 text-primary`}></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-heading">
                    Pro Plan
                  </h2>
                  <Badge className="font-medium text-xs">ACTIVE</Badge>
                </div>
                <p className="text-sm text-subheading">
                  validations used this month`
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary-light hover:bg-primary-light-hvr"
            >
              <Link href="/dashboard/settings">Upgrade to Pro</Link>
            </Button>
          </div>
          <div className="">
            <div className="py-6">
              <div className="flex items-center justify-between text-sm pb-0.5">
                <span className="text-subheading font-medium ps-1">
                  Usage Progress
                </span>
                <span className="font-semibold pe-1">percentage%</span>
              </div>
              <Progress
                indicatorClassName="bg-destructive"
                variant="slim"
                value={33}
              />
              <p className="text-xs text-subheading">No validations</p>
            </div>

            <div className="mt-3 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
              <p className="text-sm text-destructive font-medium flex items-center gap-2 py-1">
                <WarningIcon size={20} weight="duotone" />{" "}
                <span>
                  Monthly limit reached! Upgrade to Pro for unlimited
                  validations.
                </span>
              </p>
            </div>

            <div className="p-3 rounded-lg border bg-feature-content/10  border-feature-content/35">
              <div className="flex items-center gap-2 text-feature-content">
                <CheckCircleIcon
                  size={20}
                  weight="duotone"
                  className="text-feature-content"
                />
                <p className="font-medium">Unlimited access to all features</p>
              </div>
              <p className="text-sm text-feature-content ml-7">
                Enjoy unlimited niche validations with advanced AI insights
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Validation Form */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Validate New Niche
          </CardTitle>
          <CardDescription className="text-subheading">
            Enter your niche and keyword to get comprehensive market insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SeparatorPro variant="default" className="my-2 opacity-50" />
          <form className="space-y-4 md:px-8">
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg flex items-center gap-3 text-destructive font-medium">
              <ProhibitIcon size={16} weight="duotone" />
              <p>Error</p>
            </div>
            <div className="p-3 bg-success/5 border border-success/30 rounded-lg flex items-center gap-3 text-success font-medium">
              <CheckCircleIcon size={16} weight="duotone" />
              <p>Success</p>
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="niche" className="text-sm">
                  Niche Description
                </FieldLabel>
                <Input
                  id="niche"
                  type="text"
                  name="niche"
                  placeholder="e.g., AI productivity tools for writers"
                  className="h-10"
                />
                <FieldDescription className="text-xs">
                  Describe your niche in a few words
                </FieldDescription>
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="keyword" className="text-sm">
                    Primary Keyword
                  </FieldLabel>
                </div>
                <Input
                  id="keyword"
                  type="text"
                  name="keyword"
                  placeholder="e.g., AI writing assistant"
                  className="h-10"
                />
                <FieldDescription className="text-xs">
                  The main keyword people would search for
                </FieldDescription>
              </Field>
              <Field className="inline-flex items-center justify-center sm:w-fit">
                <Button type="submit" size="lg">
                  <>
                    <ClockCountdownIcon className="w-4 h-4 mr-2 animate-spin" />
                    Starting Validation...
                  </>

                  <>
                    <div className="w-4 h-4 mr-2" />
                    Validate Niche
                  </>
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      {/* Validations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Recent Validations
          </CardTitle>
          <CardDescription className="text-subheading">
            Your latest niche validation reports
          </CardDescription>
          <CardAction>
            <Button variant="secondary">
              <Link
                href="/dashboard/reports"
                className="flex gap-2 items-center"
              >
                <span>View all</span>
                <ArrowRightIcon size={32} weight="light" />
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <SeparatorPro variant="default" className="opacity-50" />
          <div className="px-6 py-4">
            <div className="animate-pulse">
              <div className="h-20 bg-secondary rounded-lg"></div>
            </div>

            <div className="text-center py-12">
              <TrendDownIcon className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-heading mb-2">
                No validations yet
              </h3>
              <p className="text-subheading mb-4">
                Start validating your first niche to see results here
              </p>
            </div>

            <Link
              href={`/dashboard/reports/id`}
              className="block p-4 border border-primary/20 rounded-lg hover:border-primary/40 hover:shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    status
                    <h4 className="font-medium text-heading">niche</h4>
                  </div>
                  <p className="text-sm text-subheading mb-2">keyword</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>createdAt</span>
                    <span>Score: overallScore/100</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-success/5 text-success">
                    viabilityRating
                  </Badge>
                </div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
      {/* stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <p className="text-sm text-muted-foreground">Total Validations</p>
            <div className="text-3xl font-bold text-heading">length</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-muted-foreground">This Month</p>
            <div className="text-3xl font-bold text-heading">used</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-muted-foreground">Completed</p>
            <div className="text-3xl font-bold text-heading">COMPLETED</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
