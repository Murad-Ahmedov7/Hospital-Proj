import React, { useEffect, useState } from "react";
import baseApi from "../api/baseApi"; // 💡 baseApi faylını import et

export default function JsServer() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  // 🔹 GET users
  const fetchUsers = async () => {
    try {
      const res = await baseApi.get("/users");
      setData(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 POST user
  const addUser = async () => {
    if (!name.trim()) return alert("Name daxil et!");
    try {
      await baseApi.post("/users", { name });
      setName("");
      fetchUsers();
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  // 🔹 DELETE user
  const deleteUser = async (id) => {
    try {
      await baseApi.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // 🔹 UPDATE user
  const updateUser = async (id) => {
    const newName = prompt("Yeni ad daxil et:");
    if (!newName?.trim()) return;
    try {
      await baseApi.patch(`/users/${id}`, { name: newName });
      fetchUsers();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center absolute top-40 left-40 gap-4">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={addUser}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Add User
        </button>
      </div>

      <div className="mt-4 w-[250px]">
        {data.length > 0 ? (
          data.map((d) => (
            <div
              key={d.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <p>ID: {d.id}</p>
                <p>Name: {d.name}</p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => updateUser(d.id)}
                  className="bg-blue-500 text-white px-2 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(d.id)}
                  className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}
