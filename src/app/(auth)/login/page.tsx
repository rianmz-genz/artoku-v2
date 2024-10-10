import React from "react";
import FormLogin from "../_components/form-login";
import { GoogleButton } from "../_components/social-button";

export default function Register() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-white">Sign In to your account</h1>
      <FormLogin />
      <div className="my-4 flex items-center before:flex-1 before:border-t before:border-gray-600 after:flex-1 after:border-t after:border-gray-600">
        <p className="mx-4 mb-0 text-center font-semibold text-gray-400">Or</p>
      </div>
      <GoogleButton />
    </div>
  );
}
