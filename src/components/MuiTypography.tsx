import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        facilis quidem tenetur. Assumenda sed fugiat provident error molestias.
        Fugit accusantium enim obcaecati nam necessitatibus autem debitis
        voluptas! Veniam, numquam accusamus?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, ipsam
        distinctio nemo facere nobis totam omnis. Aperiam nobis ipsa cumque
        perspiciatis consequuntur veniam alias. Iure dolorem provident
        reiciendis in sed.
      </Typography>
    </div>
  );
};

export default MuiTypography;
