import React, { useState } from 'react';
import { ExpandMore, KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, Typography } from '@mui/material';

const options = ['Account', 'Team', 'Credentials', 'Billing', 'Recently Deleted'];
const members = [
    {
        name: "Tesia Reis",
        email: "tesia@bokksu.com",
        status: "Active",
        active: false
    },
    {
        name: "John Vincent",
        email: "john@bokksu.com",
        status: "Active",
        active: false
    },
    {
        name: "Oliver Neeb",
        email: "oliver@bokksu.com",
        status: "Active",
        active: false
    },
    {
        name: "Pending",
        email: "errick@bokksu.com",
        status: "Inactive",
        active: "true"
    }
];

export default function Settings() {
    const [selectedButton, setSelectedButton] = useState(-1);

    const handleSelect = (id) => {
        setSelectedButton(id);
    };

    return (
        <Box px={2} py={1} display="flex" flexDirection="column" sx={{ width: "100%" }}>
            <Typography variant="h5" mb={0} sx={{ fontWeight: 600, position: "relative", top: "10px" }}>Settings</Typography>

            <Grid container spacing={2} mt="4px">
                <Grid item xs={10}>
                    {options.map((item, index) => (
                        <Button
                            key={index}
                            variant="text"
                            onClick={() => handleSelect(index)}
                            sx={{
                                borderRadius: 0,
                                fontWeight: selectedButton === index ? 700 : 650,
                                textTransform: "none",
                                fontSize: "10px",
                                color: selectedButton === index ? "black" : "#b4b4b4",
                                '&:hover': { boxShadow: "0px 4px 0px rgba(135, 206, 250, 0.2)" },
                                boxShadow: selectedButton === index ? "0px 4px 0px rgba(19, 148, 227, 0.9)" : "none"
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="outlined"
                        sx={{
                            position: "relative",
                            top: "-5px",
                            fontSize: "12px",
                            px: 3,
                            color: "black",
                            borderColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                        }}
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>

            <Box>
                <Divider sx={{ position: 'relative', left: "6px", top: "-15px", borderColor: "#b4b4b4", my: 2, width: "93%" }} />
            </Box>

            <Box display="flex" alignItems="center" marginTop="0px" sx={{ position: "relative", top: "-10px" }}>
                <Typography sx={{ fontWeight: 700, marginRight: "8px", }}>Bokksu</Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: 'white',
                        borderRadius: "30%",
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                    }}
                />
            </Box>

            <Box mb={2}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={4} display="flex">
                        <Typography fontSize="12px" fontWeight={600}>Members</Typography>
                        <Box
                            sx={{
                                fontSize: "7px",
                                color: "black",
                                position: "relative",
                                top: "2px",
                                px: "5px",
                                height: "9px",
                                py: "0px",
                                mx: "5px",
                                fontWeight: 600,
                                backgroundColor: '#b4b4b4',
                                borderRadius: "40%",
                                border: '1px solid rgba(0, 0, 0, 0.12)'
                            }}
                        >3</Box>
                    </Grid>
                    <Grid item xs={4} textAlign="center"></Grid>
                    <Grid item xs={4} textAlign="right">
                        <Button variant="contained" sx={{ textTransform: "none", left: "-65px", position: 'relative', top: "-4px", py: "3px", px: "2", fontSize: "12px" }}>Invite</Button>
                    </Grid>
                </Grid>
            </Box>

            <Grid container px={1} sx={{ position: "relative", top: "-15px", fontSize: "10px", fontWeight: 600 }}>
                <Grid item xs={4} >Name</Grid>
                <Grid item xs={4} sx={{ position: "relative", left: "20px" }}>Email</Grid>
                <Grid item xs={4} sx={{ position: "relative", left: "35px" }}>Status</Grid>
            </Grid>

            {members.map((member, index) => (
                <Accordion
                    disabled={member.active}
                    key={index}
                    sx={{
                        width: "94%",
                        position: "relative",
                        top: "-14px",
                        border: "1px solid #b4b4b4",
                        borderRadius: 2,
                        my: 0.5,
                        py: 0,
                        boxShadow: "none",
                        bgcolor: !member.active ? "#f5f5f5" : ""
                    }}
                >
                    <AccordionSummary py={0} expandIcon={<ExpandMore sx={{ fontSize: "20px", color: index == 0 ? "#f5f5f5" : "black" }} />}>
                        <Grid py={0} bgcolor={!member.active ? "#f5f5f5" : ""} container justifyContent="space-between" alignItems="center">
                            <Grid item py={0} xs={4} display="flex" alignItems="center" fontSize="9px">
                                <Box
                                    sx={{
                                        bgcolor: "#4943431a",
                                        padding: "4px",
                                        borderRadius: "50%",
                                        textAlign: "center",
                                        mr: 1,
                                        width: "14px",
                                        height: "14px",
                                        fontWeight: 600,
                                        position: "relative",
                                        left: "-5px"
                                    }}
                                >
                                    {member.name.charAt(0)}
                                </Box>
                                <Typography py={0} fontSize="9px" sx={{ position: index === 0 ? "relative" : "", top: index === 0 ? "-5px" : 0 }}>{member.name} {index === 0 ? <span style={{ color: "#b4b4b4" }}>(You)</span> : ""}</Typography>
                                {index === 0 ? <Typography py={0} fontSize="9px" sx={{ position: "relative", top: "8px", left: "-66px", color: "#b4b4b4" }}>Admin</Typography> : ""}
                            </Grid>
                            <Grid item xs={4}>
                                <Typography py={0} fontSize="9px" sx={{ position: "relative", left: "6px" }}>{member.email}</Typography>
                            </Grid>

                            <Grid item py={0} xs={3} display="flex" alignItems="center" sx={{
                                position: "relative",
                                left: "16px",
                            }}>
                                <Box
                                    py={0}
                                    sx={{

                                        height: '6px',
                                        width: '6px',
                                        borderRadius: '50%',
                                        backgroundColor: !member.active ? 'green' : "grey",
                                        marginRight: '4px',
                                    }}
                                />
                                <Typography py={0} fontSize="9px">{member.status}</Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                </Accordion>

            ))}


        </Box >
    );
}
