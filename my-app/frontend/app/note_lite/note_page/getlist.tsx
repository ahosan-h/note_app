"use client";
import { useUser, useAuth } from "@clerk/nextjs"; // Added useAuth
import { useEffect, useState } from "react";

interface NoteObj {
  _id: string;
  title: string;
  content: string;
}

export default function Notelist() {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth(); // Hook for JWT
  const [notes, setNotes] = useState<NoteObj[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: "", content: "" });

  const fetchNotes = async () => {
    if (!user) return;
    try {
      const token = await getToken();
      const res = await fetch(
        `http://localhost:2017/noteops/getallnotes/${user.id}`,
        {
          // Keep param
          headers: {
            Authorization: `Bearer ${token}`, // Still send token for Guard
          },
        },
      );
      const data = await res.json();
      setNotes(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    if (isLoaded && user) fetchNotes();
  }, [user, isLoaded]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const token = await getToken();
      await fetch(`http://localhost:2017/noteops/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes(notes.filter((n) => n._id !== id));
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

  const startEdit = (note: NoteObj) => {
    setEditingId(note._id);
    setEditForm({ title: note.title, content: note.content });
  };

  const handleUpdate = async (id: string) => {
    if (!user) return;

    try {
      const token = await getToken();
      const res = await fetch(`http://localhost:2017/noteops/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...editForm,
          owner: user.id,
          //is optional now if your backend uses req.user
        }),
      });

      if (res.ok) {
        setEditingId(null);
        fetchNotes();
      }
    } catch (err) {
      console.log("Update failed", err);
    }
  };

  if (!isLoaded) return <p className="p-4">Loading...</p>;

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {notes.length === 0 && (
        <p className="text-center text-gray-500">No notes found.</p>
      )}
      {notes.map((note) => (
        <div
          key={note._id}
          className="border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {editingId === note._id ? (
            <div className="space-y-2">
              <input
                className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={editForm.title}
                onChange={(e) =>
                  setEditForm({ ...editForm, title: e.target.value })
                }
              />
              <textarea
                className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={editForm.content}
                onChange={(e) =>
                  setEditForm({ ...editForm, content: e.target.value })
                }
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(note._id)}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="font-bold text-xl text-gray-800">{note.title}</h2>
              <p className="text-gray-600 mb-4 whitespace-pre-wrap">
                {note.content}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => startEdit(note)}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
