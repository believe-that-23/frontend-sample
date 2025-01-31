import React from 'react';
import { Paper, Grid2, Typography, Divider, Box, IconButton, Slider, Button } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import StoreIcon from '@mui/icons-material/Store';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InfoIcon from '@mui/icons-material/Info';
import AnchorIcon from '@mui/icons-material/Anchor';

export default function Sidebar() {

    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                bgcolor: "rgba(0, 0, 0, 0.87)",
                p: 2,
                width: "180px",
                height: "93vh",
                borderRadius: 0
            }}
            elevation={3}
        >
            <Typography variant="h4" sx={{ display: 'flex', justifyContent: "center", fontSize: "14px" }}>
                <IconButton sx={{ position: "relative", top: "-12px" }}>
                    <AnchorIcon sx={{ color: "#d3d3d3" }} />
                </IconButton>
                <span style={{ color: "white", marginRight: "1px", fontWeight: 650 }}>Alloy</span>
                <span style={{ color: "grey" }}>Automation</span>
            </Typography>

            <Box sx={{ position: "relative", top: "-20px" }}>
                <Divider sx={{ borderBottomWidth: 2, borderColor: "#686767", my: 2 }} />
            </Box>

            <Grid2 container direction="column" sx={{ position: "relative", top: "-16px", flexGrow: 1, justifyContent: "space-between" }}>
                <Grid2 item>
                    {[
                        { icon: <SpaceDashboardIcon sx={{ fontSize: "13px" }} />, label: "Dashboard" },
                        { icon: <StoreIcon sx={{ fontSize: "13px" }} />, label: "Marketplace" },
                        { icon: <TuneIcon sx={{ fontSize: "13px" }} />, label: "Settings" },
                    ].map((item, index) => (
                        <Box
                            key={index}
                            display="flex"
                            alignItems="center"
                            p={0}
                            sx={{
                                "&:hover": {
                                    bgcolor: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "4px",
                                }
                            }}
                        >
                            <IconButton sx={{ color: "#686767", mx: 3 }}>
                                {item.icon}
                            </IconButton>
                            <Typography variant="h6" flexGrow={1} sx={{ fontSize: "12px", color: "#686767" }}>
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Grid2>

                <Grid2 item sx={{ position: "relative", top: "14px" }}>
                    <Box p={0} m={0} border={2} display="flex" alignItems="center" sx={{ width: "95%", marginBottom: "16px", borderRadius: "6px", borderColor: "#686767" }}>
                        <Typography sx={{ marginLeft: "5px", fontSize: "12px", color: "#686767" }}>
                            Knowledge Base
                        </Typography>
                        <IconButton sx={{ color: "#686767", mx: 0, position: "relative", left: "-5px" }}>
                            <ArrowOutwardIcon sx={{ fontSize: "16px" }} />
                        </IconButton>
                    </Box>

                    <Box p={1} bgcolor="rgba(255, 255, 255, 0.1)" sx={{ mx: 0, borderRadius: "4px", height: "180px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <Typography sx={{ color: "#686767", fontSize: "10px", fontWeight: 600 }}>
                            BOKKSU
                        </Typography>

                        <Box display="flex" justifyContent="flex-start">
                            <Typography sx={{ color: "white", fontSize: "12px", fontWeight: 600 }}>
                                Silver Plan
                            </Typography>
                            <IconButton sx={{ color: "#686767", top: "-18%" }}>
                                <InfoIcon sx={{ fontSize: 14 }} />
                            </IconButton>
                        </Box>

                        <Divider sx={{ top: "-5%", borderBottomWidth: 1, borderColor: "#686767", position: "relative", marginBottom: "10px" }} />

                        <Box display="flex" justifyContent="space-between">
                            <Typography sx={{ color: "white", fontSize: "10px", fontWeight: 600 }}>
                                Active workflows
                            </Typography>
                            <Typography sx={{ color: "#686767", fontSize: "10px" }}>
                                4
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="space-between" my={0}>
                            <Box display="flex" justifyContent="flex-start">
                                <Typography sx={{ color: "white", fontSize: "10px", fontWeight: 600 }}>
                                    App actions
                                </Typography>
                                <IconButton sx={{ color: "#686767", top: "-24%" }}>
                                    <InfoIcon sx={{ fontSize: 13 }} />
                                </IconButton>
                            </Box>

                            <Typography sx={{ color: "#686767", fontSize: "10px" }}>
                                562 / 5k
                            </Typography>
                        </Box>

                        <Slider
                            sx={{
                                top: "-10%",
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#d3d3d3',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: 'green',
                                },
                                '& .MuiSlider-thumb': {
                                    display: 'none',
                                },
                            }}
                            my={0}
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            color='green'
                        />

                        <Button my={0} sx={{ top: "-10px", bgcolor: "#686767", color: "white", textAlign: "center", fontSize: "12px" }}>Change Plan</Button>

                        <Typography my={1} sx={{ color: "grey", fontSize: "9px" }}>
                            Trial ends on Mar 15, 2021
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Paper>
    );
}
