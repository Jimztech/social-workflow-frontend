"use client";

import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthShell, GoogleButton, OrDivider } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  const { signUp } = useSignUp();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!signUp) return;

  //   if (password !== confirm) {
  //     setError("Passwords don't match.");
  //     return;
  //   }

  //   setLoading(true);
  //   setError(null);

  //   try {
  //     await signUp.create({
  //       emailAddress: email,
  //       password,
  //     });

  //     if (signUp.status === "complete") {
  //       router.push("/dashboard");
  //     } else {
  //       // Email verification required
  //       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
  //       router.push("/verify-email");
  //     }
  //   } catch (err: any) {
  //     setError(err?.errors?.[0]?.message ?? "Sign up failed. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!signUp) return;

  //   if (password !== confirm) {
  //     setError("Passwords don't match.");
  //     return;
  //   }

  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const { error } = await signUp.create({
  //       emailAddress: email,
  //       password,
  //     });

  //     if (error) {
  //       setError(error.longMessage ?? "Sign up failed. Please try again.");
  //       return;
  //     }

  //     if (signUp.status === "complete") {
  //       await signUp.finalize();
  //       router.push("/dashboard");
  //     } else {
  //       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
  //       router.push("/verify-email");
  //     }
  //   } catch (err: any) {
  //     setError(err?.errors?.[0]?.message ?? "Sign up failed. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUp) return;

    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await signUp.password({
        emailAddress: email,
        password,
      });

      if (error) {
        setError(error.longMessage ?? "Sign up failed. Please try again.");
        return;
      }

      if (signUp.status === "complete") {
        await signUp.finalize();
        router.push("/dashboard");
      } else {
        await signUp.verifications.sendEmailCode();
        router.push("/verify-email");
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message ?? "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    if (!signUp) return;
    await signUp.sso({
      strategy: "oauth_google",
      redirectUrl: `${window.location.origin}/sso-callback`,
      redirectCallbackUrl: "/dashboard",
    });
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Start posting consistently across Instagram, X, and LinkedIn."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/sign-in" className="font-medium text-foreground hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <GoogleButton label="Continue with Google" onClick={handleGoogle} />
      <OrDivider />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Confirm password</Label>
          <Input
            id="confirm"
            type="password"
            placeholder="Re-enter your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            minLength={6}
            className="h-11"
          />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)] font-medium"
        >
          {loading ? "Creating account..." : "Create account"}
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          By signing up you agree to our Terms and Privacy Policy.
        </p>
      </form>
    </AuthShell>
  );
}
