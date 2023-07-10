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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  
  function handleSignup() {
    console.log("login");
    navigate("/");
  }


  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async () => {
    // Validation des entrées
    if (!state.email || !state.password || !state.password_confirmation) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (state.password !== state.password_confirmation) {
      alert(
        "Le mot de passe et la confirmation du mot de passe ne correspondent pas."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: state }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // obtenir plus d'informations sur l'erreur
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      } else {
        setState({
          email: "",
          password: "",
          password_confirmation: "",
        });

        navigate("/Profile");
      }
    } catch (error) {
      console.error("Error during sign up: ", error);
      alert(`Error signing up: ${error.message}`);
    }
  };

  return (
    <div className="main">
      {/* <div className="leftContainer"></div> */}

      {/* <div className="rightContainer"> */}
        <CssVarsProvider>
          <Sheet
            sx={{
              width: 800,
              height: 800,
              mx: "auto", // margin left & right
              my: 4, // margin top & bottom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 10,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h1" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography sx={{ fontSize: "xl" }}>
                Sign up to create your account.
              </Typography>
            </div>
            <FormControl>
              <FormLabel sx={{ fontSize: "xl" }}>Email</FormLabel>
              <Input
                // html input attribute
                onChange={handleOnChange}
                value={state.email}
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                sx={{ fontSize: "xl" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ fontSize: "xl" }}>Password</FormLabel>
              <Input
                // html input attribute
                onChange={handleOnChange}
                value={state.password}
                name="password"
                type="password"
                placeholder="password"
                sx={{ fontSize: "xl" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ fontSize: "xl" }}>
                Password confirmation
              </FormLabel>
              <Input
                // html input attribute
                onChange={handleOnChange}
                value={state.password_confirmation}
                name="password_confirmation"
                type="password"
                placeholder="password confirmation"
                sx={{ fontSize: "xl" }}
              />
            </FormControl>
            <Button
              sx={{ mt: 1, fontSize: "xl3" }}
              onClick={handleSignupSubmit}
            >
              Sign up
            </Button>
            <Typography
              endDecorator={<Link to="/">Login</Link>}
              fontSize="xl"
              sx={{ alignSelf: "center" }}
              onClick={handleSignup}
            >
              Already have an account?
            </Typography>
          </Sheet>
        </CssVarsProvider>
      </div>
    // </div>
  );
}
