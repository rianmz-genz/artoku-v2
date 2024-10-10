"use client";
import { signUpCredentials } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import { RegisterButton } from "./button";

export default function FormRegister() {
  const [state, formAction] = useFormState(signUpCredentials, null);
  return (
    <form className="space-y-6" action={formAction}>
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}
      
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg w-full p-2.5 focus:border-blue-500 focus:ring-blue-500"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.name}
          </span>
        </div>
      </div>
      
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg w-full p-2.5 focus:border-blue-500 focus:ring-blue-500"
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
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="**********"
          className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg w-full p-2.5 focus:border-blue-500 focus:ring-blue-500"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>
      
      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="**********"
          className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg w-full p-2.5 focus:border-blue-500 focus:ring-blue-500"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.confirmPassword}
          </span>
        </div>
      </div>

      <RegisterButton />

      <p className="text-sm font-light text-gray-400">
        Already have an account?
        <Link href="/login">
          {" "}
          <span className="font-medium pl-1 text-blue-500 hover:text-blue-600">
            Sign In
          </span>
        </Link>
      </p>
    </form>
  );
}
