import useGithubProfile from "./useGithubProfile";

const UserCard = ({ user }) => {
  const { html_url, avatar_url, login } = useGithubProfile(user);
  return (
    <div style={{ display: "block", margin: "1rem" }}>
      <a href={html_url} target="_blank">
        <img src={avatar_url} style={{ borderRadius: "50%", width: "8rem" }} />
      </a>
      {login}
    </div>
  );
};
export default UserCard;
