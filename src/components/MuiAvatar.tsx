import { Stack, Avatar } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4} margin={2} direction="row">
      <Avatar sx={{ bgcolor: "primary.light" }}>H</Avatar>
      <Avatar
        src="https://randomuser.me/api/portraits/men/34.jpg"
        alt="jan doe"
      />
    </Stack>
  );
};

export default MuiAvatar;
