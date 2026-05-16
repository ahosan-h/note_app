"use client";

import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { apiFetch } from "@/lib/api";

export function useSyncUser() {
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    async function syncUser() {
      if (!isSignedIn || !user) return;

      try {
        const token = await getToken();

       

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await apiFetch(
          "/user/sync",
          {
            method: "POST",
          },
          token
        );

      if (!response.ok) {
  const errorText = await response.text();

  console.error("BACKEND ERROR:", errorText);

  throw new Error(errorText);
}

        
      } catch (error) {
        console.error("Sync failed", error);
      }
    }

    syncUser();
  }, [isSignedIn, user, getToken]);
}