import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    // Validation des entrées
    if (!state.email || !state.password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users/sign_in", {
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
        });

        navigate("/Profile");
      }
    } catch (error) {
      console.error("Error during sign up: ", error);
      alert(`Error signing up: ${error.message}`);
    }
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
                onChange={handleOnChange}
                value={state.email}
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleOnChange}
                value={state.password}
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>
            <Typography
              endDecorator={
                <Link to="/forgot-password">I do not remember my password</Link>
              }
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            />
            <Button sx={{ mt: 1 }} onClick={handleLogin}>Log in</Button>
            <Typography
              endDecorator={<Link to="/signup">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don't have an account?
            </Typography>
          </Sheet>
        </CssVarsProvider>
      </div>
    </div>
  );
}
