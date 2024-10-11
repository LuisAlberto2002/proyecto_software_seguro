import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import CustomTextFields from "../components/TextField";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      console.log("Login exitoso");
      navigate("/Dashboard");
    } else {
      setError(true);
    }
  };

  const fields = [
    {
      id: "email",
      label: "Email",
      variant: "outlined",
      onChange: (e) => setEmail(e.target.value),
      error: error && !email,
      helperText: error && !email ? "Email requerido" : "",
    },
    {
      id: "password",
      label: "password",
      variant: "outlined",
      type: "password",
      onChange: (e) => setPassword(e.target.value),
      error: error && !password,
      helperText: error && !password ? "password require" : "",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#e0e0e0",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem" }}>Login</h2>
        <div className="text" style={{ marginLeft: "-30px" }}>
          <CustomTextFields fields={fields} spacing={2} width="100%" />
        </div>
        <div style={{ marginTop: "20px", marginLeft: "-12px" }}>
          <CustomButton
            text="Login :)"
            onClick={handleLogin}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "10px",
              padding: "10px 20px",
              width: "104%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
