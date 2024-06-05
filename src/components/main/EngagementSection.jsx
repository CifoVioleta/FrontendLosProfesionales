import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function EngagementSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        p: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body1" paragraph>
        Encuentra rápidamente los servicios que necesitas en DevOps, Frontend y Backend, con habilidades verificadas y experiencias probadas.
      </Typography>
      <Typography variant="body1" paragraph>
        Simplifica tu búsqueda de talento, ahorra tiempo y dinero.
      </Typography>
      <Typography variant="body1" paragraph>
        ¿Eres un profesional en busca de oportunidades?
       </Typography>
       <Typography variant="body1" paragraph>
        Regístrate y ofrece tus servicios ahora!
       </Typography>
      
    </Box>
  );
}

export default EngagementSection;