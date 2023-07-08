import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import Link from "@mui/joy/Link";

export default function Welcome() {
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("signup");
    navigate('/signup');
  };


  return (
    <div className="main">
      <div className="leftContainer"></div>

      <div className="rightContainer">
        <CssVarsProvider>
          <Sheet
            sx={{
              width: 500,
              height: 500,
              mx: "auto",
              my: 4,
              py: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>

            <Button sx={{ mt: 1 }} >Log in</Button>
            <Typography
              endDecorator={<RouterLink to="/signup"  >Sign up</RouterLink>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
              onClick={handleSignup}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
        </CssVarsProvider>
      </div>
    </div>
  );
}
