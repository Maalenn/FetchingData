import useFetchData from "./useFetchData";

const App = () => {
  const url = "https://api.github.com/users";
  const { isLoading, isError, users } = useFetchData(url);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="container">
      {users.map(({ id, avatar_url, login, html_url }) => (
        <article key={id}>
          <img src={avatar_url} alt={login} />
          <h3>{login}</h3>
          <a href={html_url}>See Profile</a>
        </article>
      ))}
    </div>
  );
};

export default App;
