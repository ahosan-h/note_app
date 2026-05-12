import CreateNote from "./CreateNote";
import Notelist from "./getlist";

export default function NotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h2 className="text-center text-2xl py-6">Your Notes</h2>
      <Notelist />
      <div>
        <CreateNote />
      </div>
    </div>
  );
}
