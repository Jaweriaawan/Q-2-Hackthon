"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn === false) {
      router.replace("/login"); // User not signed in, redirect to login
    } else if (isSignedIn === true) {
      router.replace("/checkout"); // User signed in, redirect to checkout
    } else {
      setIsLoading(false);
    }
  }, [isSignedIn, router]);

  if (isLoading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AuthGuard;
