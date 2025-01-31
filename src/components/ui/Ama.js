import { HelpOutline } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

function Ama() {
    return (
        <IconButton
            sx={{
                position: "absolute",
                fontSize: "15px",
                bottom: 20,
                right: 30,
                bgcolor: "black",
                color: "white",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                '&:hover': {
                    bgcolor: "darkblue"
                }
            }}
        >
            ?
        </IconButton>
    )
}

export default Ama