"use client";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-heading mb-6">
          Validate Your Niche with
          <span className="block bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            AI-Powered Research
          </span>
        </h1>
        <p className="text-xl text-subheading mb-8 max-w-3xl mx-auto">
          Stop guessing. Get comprehensive market validation reports with Reddit
          analysis, Google Trends data, competition insights, and AI-generated
          strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-20">
          <Button className="px-8 py-8 items-center text-lg font-semibold">
            <Link href="/auth/register" className="flex gap-2 items-center">
              Start Validating Free
              <ArrowRightIcon size={24} />
            </Link>
          </Button>
          <Button
            className="px-8 py-8 items-center text-lg font-semibold"
            variant="outline"
          >
            <a href="#features" className="text-lg font-semibold">
              Learn More
            </a>
          </Button>
        </div>
        <p className="mt-4 text-subheading">
          3 free validations per month. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Hero;
