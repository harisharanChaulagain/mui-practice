import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row" margin={4}>
      <Badge badgeContent={500} color="primary">
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
