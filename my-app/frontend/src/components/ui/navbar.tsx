"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex items-center gap-4">
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <button className="rounded bg-black px-4 py-2 text-white">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="rounded border px-4 py-2">
              Sign Up
            </button>
          </SignUpButton>
        </>
      ) : (
        <UserButton afterSignOutUrl="/" />
      )}
    </div>
  );
}