"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";
import { useState, useEffect } from "react";

import { signInWithGoogle, auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  let [email, setEmail] = useState("");
  let banks = ["chasebanks", "alliant", "citizenbank"];
  let splitAtEmail = email.split("@");
  let splitEmail = splitAtEmail[1] ? splitAtEmail[1].split(".") : "";

  const router = useRouter()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/admin");
      }
    });
  }, []);

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      action={
        splitEmail[0] && banks.includes(splitEmail[0])
          ? "/admin"
          : "/dashboard"
      }
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@banksocial.io"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" className="w-full">
          <a href="/dashboard">
            Login
          </a>
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button onClick={signInWithGoogle} variant="outline" className="w-full">
          Login with SAML SSO
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/dashboard" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}