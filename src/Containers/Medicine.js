// import Dialog  from './Dialog'
import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Medicine() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    // console.log(values);
    // alert(JSON.stringify(values.email));
    let localdata = JSON.parse(localStorage.getItem("users"))

    if (localdata === null) {
        localStorage.setItem("users", JSON.stringify([values]))
    } else {
      localdata.push(values)
        localStorage.setItem("users", JSON.stringify(values))
    }
}

  return (
    <>
      <Box>
        <Container>
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="name Address"
                  type="name"
                  fullWidth
                  variant="standard"
                /> 
                <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                  label="price Address"
                  type="price"
                  fullWidth
                  variant="standard"
                />
                 <TextField
                  autoFocus
                  margin="dense"
                  id="quantity"
                  label="quantity Address"
                  type="number"
                  fullWidth
                  variant="standard"
                /> 
                <TextField
                  autoFocus
                  margin="dense"
                  id="expiry"
                  // label="expiry Address"
                  type="date"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
        </Container>
      </Box>
    </>
  )
}
