import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/ui/Sidebar';
import { Box, Grid2 } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import Ama from './components/ui/Ama';

export default function App() {
  return (
    <Router>
      <Box sx={{ height: "100vh", m: 0 }}>
        <Grid2 container sx={{ width: "100%", height: "100%", p: 0, m: 0 }}>
          <Grid2 item xs={3}>
            <Sidebar />
          </Grid2>
          <Grid2 item xs={9} sx={{ flexGrow: 1, backgroundColor: "#f5f5f5", padding: 2 }}>
            <AppRoutes />
          </Grid2>
        </Grid2>
        <Ama/>
      </Box>
    </Router>
  );
}
