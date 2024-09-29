import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "sign-in",
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex flex-col md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 hidden md:right-8 md:top-8",
        )}
      >
        Login
      </Link>
      <div className="relative h-full flex-col bg-muted text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900">
          <img
            src="https://utfs.io/f/s6TeD6xLYcJuE6m6Idna8DLGxqlJdUQ6mBnikPAc70OfKFps"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-0 flex flex-col justify-center items-center p-10 text-center">
          <img
            src="https://utfs.io/f/s6TeD6xLYcJuzKyKWeFBoqIQ2K1gOX9Vi7px8lTcC3kSAw0a"
            alt="Logo"
            className="mb-4"
          />
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
