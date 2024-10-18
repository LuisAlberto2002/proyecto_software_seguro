import * as React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { Box, Typography, Paper, Grid } from "@mui/material";
import CustomButton from "../components/Button";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigateToConstancias = () => {
    navigate("/constancias");
  };
  const handleNavigateToUsuarios = () => {
    navigate("/constancias");
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, backgroundColor: "" }}>
            <Typography variant="h6" gutterBottom>
              Gestionar Trabajadores
            </Typography>
            <Typography variant="body1" gutterBottom>
              Aquí podremos ver las constancias de los trabajadores
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <CustomButton
                text="Ver Constancias"
                variant="contained"
                color="primary"
                onClick={handleNavigateToConstancias}
                sx={{
                  borderRadius: "50px",
                  padding: "10px 20px",
                  width: "28%",
                }}
              />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Gestión de usuarios.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Consulta
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <CustomButton
                text="Revisar Consultas"
                variant="contained"
                color="primary"
                onClick={handleNavigateToUsuarios}
                sx={{
                  borderRadius: "50px",
                  padding: "10px 20px",
                  width: "28%",
                }}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
