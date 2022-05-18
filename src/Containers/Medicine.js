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
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';


export default function Medicine() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (value) => {
    // console.log(values);
    // alert(JSON.stringify(values.email));
    let localdata = JSON.parse(localStorage.getItem("users"))

    if (localdata === null) {
      localStorage.setItem("users", JSON.stringify([value]))
    } else {
      localdata.push(value)
      localStorage.setItem("users", JSON.stringify(value))
    }
  }

  let schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number(),
    quantity: yup.number(),
    expiry: yup.number(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      quantity: '',
      expiry: ''
    },
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {

      resetForm();
    }
  })

  return (
    
      <Formik value={formik}>
        <Form onSubmit={formik.handleSubmit}>
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
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="price Address"
                    type="price"
                    fullWidth
                    variant="standard"
                    value={formik.values.price}
                    onBlur={formik.handleBlur}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="quantity"
                    label="quantity Address"
                    fullWidth
                    variant="standard"
                    value={formik.values.quantity}
                    onBlur={formik.handleBlur}

                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="expiry"
                    label="expiry Address"
                    fullWidth
                    variant="standard"
                    value={formik.values.expiry}
                    onBlur={formik.handleBlur}
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
      </Form>
    </Formik>
    
  )
}
