import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TopWrapper = styled(Container)({
  width: "70vw",
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  padding: 0,
}) as typeof Container;

export const Wrapper = styled(Container)({
  width: "100%",
  marginTop: "2rem",
  display: "flex",
  flexWrap: "wrap",
}) as typeof Container;

export const CardItem = styled(Box)({ padding: "0.5rem" }) as typeof Box;

export const FormContainer = styled(Container)({
  width: "100%",
  marginLeft: "0.5rem",
}) as typeof Container;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
