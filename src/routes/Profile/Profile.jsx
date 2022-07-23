import { Paper, Typography } from "@mui/material";
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
    <Paper key={idx}>
      <UserCard user={user} />
    </Paper>
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
