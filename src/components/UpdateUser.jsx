import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const loadedUser = useLoaderData();


  const handleUpdate = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedUser = {name, email}
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type':'application/json',
        },
        body:JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            alert("user updated successfully");
        }
    })
  }



  return (
    <div>
      <h3>Updated user: {loadedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser ?.name} />
        <input type="email" name="email"defaultValue={loadedUser?.email} />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default UpdateUser;
