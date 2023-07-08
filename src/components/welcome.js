import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import "../App.css";
import Divider from "@mui/material/Divider";

export default function Welcome() {
  return (
    <div className="main">
      <div className="leftContainer">
       
      </div>


      <div className="rigntContainer">

        <CssVarsProvider>
          {/* <main> */}
            {/* <ModeToggle /> */}
            <Sheet
              sx={{
                  width: 450,
                mx: "auto", // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "sm",
                boxShadow: "md",
              }}
              variant="outlined"
            >
                <Divider orientation="vertical" variant="middle" flexItem />
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

              <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
              <Typography
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: "center" }}
              >
                Don&apos;t have an account?
              </Typography>
            </Sheet>
          {/* </main> */}
        </CssVarsProvider>
      </div>
    </div>
  );
}
