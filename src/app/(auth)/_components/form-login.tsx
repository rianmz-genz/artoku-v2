"use client";
import { signInCredentials } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import { LoginButton } from "./button";

export default function FormLogin() {
  const [state, formAction] = useFormState(signInCredentials, null);
  return (
    <form className="space-y-6" action={formAction}>
      {state?.message ? (
        <div className="p-4 mb-4 text-sm text-red-500 bg-red-900 rounded-lg" role="alert">
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-400"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="john.doe@example.com"
          className="bg-dark-700 border border-gray-600 text-white rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.email}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-400"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="**********"
          className="bg-dark-700 border border-gray-600 text-white rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>

      <LoginButton />

      <p className="text-sm font-light text-gray-400">
        Don&apos;t have an account yet?
        <Link href="/register">
          {" "}
          <span className="font-medium pl-1 text-yellow-500 hover:text-yellow-400">
            Sign Up
          </span>
        </Link>
      </p>
    </form>
  );
}
