import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-dark-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-dark-800 text-white rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}
