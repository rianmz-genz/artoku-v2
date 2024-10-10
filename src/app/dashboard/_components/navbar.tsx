import { auth, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="bg-dark-900 border-b border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/">
          <p className="text-2xl font-bold text-yellow-500">Logoo</p>
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            {session && (
              <>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link href="/income">Income</Link>
                </li>
                <li>
                  <Link href="/expense">Expense</Link>
                </li>
              </>
            )}
          </ul>

          {session && (
            <div className="flex gap-3 items-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-200 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="text-xs text-gray-400 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button
                type="button"
                className="ring-2 ring-gray-500 bg-gray-800 rounded-full"
              >
                <Image
                  src={session.user.image || "/images/default-avatar.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          )}

          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                <FiLogOut />
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
