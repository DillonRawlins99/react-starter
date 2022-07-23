import { Typography } from "@mui/material";
import UserCard from "./UserCard";

const Profile = () => {
  const users = [
    "DillonRawlins99",
    "mishyjari",
    "gaearon",
    "acdlite",
    "leecow",
  ];

  const cardEls = users.map((user, idx) => (
      <UserCard key={idx} user={user} />
  ));
  return (
    <>
      <Typography textAlign="center" variant="h3">
        Profile
      </Typography>
      {cardEls}
    </>
  );
};
export default Profile;
