import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import Link from "@mui/joy/Link/Link";
import "../App.css";

export default function Welcome() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async () => {
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

  function handleSignup() {
    navigate("/signup");
  }

  const handleForgotPassword = () => {
    try {
      const response = fetch("http://localhost:3000/users/password/new", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ user: state }),
      });

      if (!response.ok) {
        console.log("error");
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
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
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
              Sign in to continue.
            </Typography>
          </div>
          <FormControl>
            <FormLabel sx={{ fontSize: "xl" }}>Email</FormLabel>
            <Input
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
              onChange={handleOnChange}
              value={state.password}
              name="password"
              type="password"
              placeholder="password"
              sx={{ fontSize: "xl" }}
            />
          </FormControl>
          <Typography
            endDecorator={
              <Link to="/forgot-password">I forgot my password</Link>
            }
            fontSize="xl"
            sx={{ alignSelf: "center" }}
            onClick={handleForgotPassword}
          />
          <Button sx={{ mt: 1, fontSize: "xl3" }} onClick={handleSubmitLogin}>
            Log in
          </Button>
          <Typography
            endDecorator={<Link to="/signup">Sign up</Link>}
            fontSize="xl"
            sx={{ alignSelf: "center" }}
            onClick={handleSignup}
          >
            Don't have an account?
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </div>
    // </div>
  );
}
