"use client";

import { useSignUp } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export default function VerifyEmailPage() {
  const { signUp, isLoaded } = useSignUp();
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const email = signUp?.emailAddress ?? "";

  useEffect(() => {
    // If there's no pending sign-up, redirect back to sign-up
    if (isLoaded && !signUp?.emailAddress) {
      router.push("/sign-up");
    }
  }, [isLoaded, signUp, router]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    if (otp.length !== 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await signUp.attemptEmailAddressVerification({ code: otp });

      if (result.status === "complete") {
        setSuccess(true);
        setTimeout(() => router.push("/dashboard"), 1200);
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message ?? "Invalid code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!isLoaded) return;
    setResending(true);
    setError(null);
    setOtp("");

    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    } catch (err: any) {
      setError(err?.errors?.[0]?.message ?? "Failed to resend code. Try again.");
    } finally {
      setResending(false);
    }
  };

  if (!isLoaded || !email) return null;

  return (
    <AuthShell
      title="Verify your email"
      subtitle={`Enter the 6-digit code we sent to ${email}`}
      footer={
        <>
          Wrong email?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-foreground hover:underline"
          >
            Start over
          </Link>
        </>
      }
    >
      <form onSubmit={handleVerify} className="space-y-6">
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {error && (
          <p className="text-sm text-destructive text-center">{error}</p>
        )}
        {success && (
          <p className="text-sm text-green-600 text-center font-medium">
            Email verified successfully! Redirecting…
          </p>
        )}

        <Button
          type="submit"
          disabled={otp.length !== 6 || success || loading}
          className="w-full h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)] font-medium"
        >
          {loading ? "Verifying..." : "Verify email"}
        </Button>

        <p className="text-center text-sm text-foreground/70">
          Didn&apos;t receive a code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="font-medium text-foreground hover:underline bg-transparent border-none p-0 cursor-pointer"
          >
            {resending ? "Resending..." : "Resend"}
          </button>
        </p>
      </form>
    </AuthShell>
  );
}