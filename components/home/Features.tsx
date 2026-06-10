"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuresData } from "@/data";

const Features = () => {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Everything You Need to Validate Your Idea
        </h2>
        <p className="text-xl text-gray-600">
          Comprehensive market research in minutes, not weeks
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map(({ id, description, icon: Icon, title }) => {
          return (
            <Card key={id}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardAction>{<Icon weight="duotone" size={24} />}</CardAction>
              </CardHeader>
              <CardContent>
                <p>TODO</p>
              </CardContent>
              <CardFooter>valid?</CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
