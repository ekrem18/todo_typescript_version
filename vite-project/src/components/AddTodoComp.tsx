import { Box, Button, Container, TextField } from '@mui/material'
import SaveIcon from "@mui/icons-material/Save";
import React from 'react'

const AddTodoComp = () => {
  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}>
        <TextField
          id="outlined-basic"
          label="New Todo"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          variant="outlined"
          inputProps={{maxLength:40}}
        />
        <Button
          variant="contained"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          endIcon={<SaveIcon />}>
          Save Todo
        </Button>
      </Box>
    </Container>
  );
}

export default AddTodoComp