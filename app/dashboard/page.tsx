"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ClockCountdownIcon } from "@phosphor-icons/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DashboardPage = () => {
  const { data: session } = useSession();
  return (
    <div className="max-w-7xl mx-24 space-y-6 py-6">
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
        <CardContent>
          <div>
            <div className="flex items-center justify-between">
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
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardPage;
