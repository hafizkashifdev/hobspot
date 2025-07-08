

import { Box, Typography } from "@mui/material";


export default function Home() {
  return (
   <Box>
      
      <Box sx={{ padding: { xs: "20px", sm: "40px", md: "60px" } }}>
        <Typography variant="h4" sx={{ fontFamily: "Outfit, inherit", textAlign: "center" }}>
          Welcome to FCA
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "Outfit, inherit", marginTop: "20px" }}>
          Here you will find concise visual breakdowns and structured diagrams for clear, accessible insight.
        </Typography>
      </Box>
   </Box>
  );
}
