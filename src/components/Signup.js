import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

// import { Link } from "react-router-dom";
import "../App.css";
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate();

      function handleSignup() {
        console.log("login");
     navigate("/");
      }

  return (
    <div className="main">
      <div className="leftContainer"></div>

      <div className="rigntContainer">
        <CssVarsProvider>
          {/* <main> */}
          {/* <ModeToggle /> */}
          <Sheet
            sx={{
              width: 500,
              height: 500,
              mx: "auto", // margin left & right
              my: 4, // margin top & bottom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
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
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password confirmation</FormLabel>
              <Input
                // html input attribute
                name="password_confirmation"
                type="password_confirmation "
                placeholder="password confirmation"
              />
            </FormControl>
            <Button sx={{ mt: 1 /* margin top */ }}    >Sign up</Button>
            <Typography
              endDecorator={<Link to="/"  >Login</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
              onClick={handleSignup}
            >
              Already have an account?
            </Typography>
          </Sheet>
        </CssVarsProvider>
      </div>
    </div>
  );
}
