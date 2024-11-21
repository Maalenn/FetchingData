// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const App = () => {
//   const url = "https://api.github.com/users";
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       {users.map(({ id, avatar_url, html_url, login }) => {
//         return (
//           <article key={id}>
//             <img src={avatar_url} alt={login} />
//             <h3>{login}</h3>
//             <a href={html_url}>See Profile</a>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

const App = () => {
  const url = "https://api.github.com/users";
  const [users, setUser] = useState([]);
  console.log(users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {users.map(({ id, avatar_url, login, html_url }) => {
        return (
          <article key={id}>
            <img src={avatar_url} alt={login} />
            <h3>{login}</h3>
            <a href={html_url}>See Profile</a>
          </article>
        );
      })}
    </div>
  );
};

export default App;
