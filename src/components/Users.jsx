import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log("delete", _id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.deletedCount > 0){
            alert("user deleted successfully");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Users: {users.length}</h2>

      <div className="mt-4 ml-20 space-y-4">
        {users.map((user) => (
          <div key={user._id} className="border border-amber-700">
            <p>{user.name}</p>
            <p>{user.email}</p>

            <button
              onClick={() => handleDelete(user._id)}
              className="text-red-500 btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;