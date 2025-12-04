import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData("githubInfoLoader");
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://api.github.com/users/sonu621")
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error));
//   }, []);

//   if (!data) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-3">GitHub User Info</h2>

      <img src={data.avatar_url} width={200} alt="Avatar" className="mx-auto rounded-md mb-3" />

      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Public Repos:</strong> {data.public_repos}</p>
      <p><strong>Followers:</strong> {data.followers}</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch ("https://api.github.com/users/sonu621");
    return response.json();
}