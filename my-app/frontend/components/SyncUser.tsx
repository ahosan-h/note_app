"use client";

import { useUser, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SyncUser() {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const sync = async () => {
      // Only sync if the user is logged in
      if (isLoaded && user) {
        try {
          const token = await getToken();
          
          await fetch('http://localhost:2017/user/sync', {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          console.log("User synced with backend successfully");
        } catch (error) {
          console.error("Failed to sync user:", error);
        }
      }
    };

    sync();
  }, [isLoaded, user, getToken]);

  return null; 
}