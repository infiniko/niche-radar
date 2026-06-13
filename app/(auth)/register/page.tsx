"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { SubmitEvent, useState } from "react";
import { Loader } from "@/components/ui/loader";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const entries = Object.fromEntries(formData);

    const { name, email, password, confirmPassword } = entries;

    if (password !== confirmPassword) {
      toast("Passwords don't match");
      return;
    }

    if ((password as string).length < 6) {
      toast("Must be at least 6 characters long.");
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        router.push("/signin?registered=true");
      }
    } catch (err: unknown) {
      const error = err as AxiosError;
      if (error.response?.data) {
        toast(error.message);
      }
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground"></div>
          NICHE RADAR
        </a>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Create your account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                    />
                  </Field>
                  <Field>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader variant="magnetic-dots" /> Creating account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                    <FieldDescription className="text-center">
                      Already have an account?{" "}
                      <Link href="/signin">Sign in</Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
