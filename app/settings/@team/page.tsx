import { User } from "@/src/util/types/types";

const page = async () => {
  let users;
  try {
    let data = await fetch("https://fakestoreapi.com/users");
    users = await data.json();
  } catch (error) {
    console.log("Fetch failed", error);
  }

  return (
    <div className="w-1/3">
      Team here
      {users?.map((user: User) => (
        <div key={user.id}>
          <h1>Username: {user.username}</h1>
          <h1>Emails: {user.email}</h1>
          <h1>Weight: {user.password}</h1>
        </div>
      ))}
    </div>
  );
};

export default page;
