import { useEffect, useState } from "react";

function useGithubProfile(user) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [user]);

  return {
    avatar_url: data.avatar_url,
    html_url: data.html_url,
    login: data.login,
  };
}
export default useGithubProfile;
