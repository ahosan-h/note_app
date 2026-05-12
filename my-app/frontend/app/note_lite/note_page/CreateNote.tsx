"use client";

import { useUser, useAuth } from "@clerk/nextjs"; // Added useAuth
import { useState } from "react";

export default function CreateNote() {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth(); // Hook to get the session token
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setMessage("");

    try {
      // 1. Get the JWT token from Clerk
      const token = await getToken();

      const res = await fetch("http://localhost:2017/noteops/createnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 2. Attach the token to the Authorization header
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          content,
          owner:user.id
          // We don't necessarily need to send 'owner' anymore 
          // because the Backend Guard extracts it from the token!
        }),
      });

      if (res.ok) {
        setTitle("");
        setContent("");
        setMessage("✅ Note created successfully!");
      } else {
        const errorData = await res.json();
        setMessage(`❌ Error: ${errorData.message || "Failed to save"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Connection error. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md my-8 border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        />
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Syncing..." : "Create Note"}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm text-center ${message.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}