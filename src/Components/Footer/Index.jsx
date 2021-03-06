import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledGrid = styled(Grid)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: "center",
  marginBottom: theme.spacing(3),
}));

const Footer = () => {
  return (
    <StyledGrid>
      <Typography>
        Developed by{" "}
        <Link href="mailto:sajjad.n18@outlook.com">Sajjad Noori</Link>
      </Typography>
    </StyledGrid>
  );
};

export default Footer;
