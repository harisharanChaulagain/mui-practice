import { Stack, Link } from "@mui/material";

const MuiLinks = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
    </Stack>
  );
};

export default MuiLinks;
