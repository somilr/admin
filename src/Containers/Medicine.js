import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { deleteMedicine, editMedicine, Medicinedata, postMedicine } from '../redux/action/medicine.action';
import { useDispatch, useSelector } from 'react-redux';



export default function Medicine() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [Update, setUpdate] = useState();
  const [dopen, setDopen] = React.useState(false);
  const [did, setDid] = useState();
  
  const medicines = useSelector(state => state.medicine)
  // console.log(medicines);
  // console.log('delete',medicines.medicine);

  const handleClickDopen = (id) => {
    setDopen(true);
    setDid(id);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setUpdate()

  };

  const handleClose = () => {
    setOpen(false);
    setUpdate()
    setDopen()
    formik.resetForm();
  };


  let medicine = {
    name: yup.string().required('enter name'),
    price: yup.string().required('please enter price'),
    quantity: yup.string().required('please enter quantity'),
    expiry: yup.string().required('please enter expiry'),
  }


  let schema = yup.object().shape(medicine);

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      quantity: '',
      expiry: ''
    },
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      if (Update) {
        handleupdate(value)
      } else {
        handleSubmitdata(value)
      }
      resetForm();
    }
  })

  const handleupdate = (value) => {
    // let localdata = JSON.parse(localStorage.getItem("medicine"));

    // let udata = localdata.map((l, i) => {
    //   if (l.id === value.id) {
    //     return value;
    //   } else {
    //     return l;
    //   }
    // })
    // console.log(udata);

    // localStorage.setItem("medicine", JSON.stringify(udata))

    dispatch(editMedicine(value)) 

    setOpen(false)
    setUpdate()
    loadData()
  }

  const handleSubmitdata = (value) => {
    // let localdata = JSON.parse(localStorage.getItem("medicine"));

    // console.log(localdata);
    let data = {
      id: Math.floor(Math.random() * 1000),
      ...value
    }

    // if (localdata === null) {
    //   localStorage.setItem("medicine", JSON.stringify([data]))
    // } else {
    //   localdata.push(data)
    //   localStorage.setItem("medicine", JSON.stringify(localdata))
    // }

    dispatch(postMedicine(data));

    setOpen(false);
    loadData()

  }

  const columns = [

    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: ' Price', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    { field: 'expiry', headerName: 'Expiry', width: 130 },
    {
      field: 'delete', headerName: 'Delete', width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <CreateIcon />
          </IconButton>
        </>
      )
    }
  ];



  const handleEdit = (data) => {
    setOpen(true);
    setUpdate(data);
    formik.setValues(data);
    // console.log(data);
  }

  const handleDelete = () => {
    // let localData = JSON.parse(localStorage.getItem("medicine"))

    // let filterData = localData.filter((v, i) => v.id !== did);

    // localStorage.setItem("medicine", JSON.stringify(filterData));

    dispatch(deleteMedicine(did))
    
    setDopen(false)
    // loadData()
  }

  const loadData = () => {
    // let localData = JSON.parse(localStorage.getItem("medicine"))

    // if (localData !== null) {
    //   setData(localData)
    // }
      setData(medicines.medicine)
  }

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(Medicinedata())
      loadData()
    },
    [])

  return (

    <>
      <Box>
        <Container>

          {
            medicines.isLoading ?
              <p>Loading....</p>
              :
              (medicines.error !== '' ?
                <p>{medicines.error}</p>
                :

                <div>
                  <center>
                    <Button variant="outlined" onClick={() => handleClickOpen()}>
                      Add Medicine
                    </Button>
                  </center>
                  {/* <div className='form-group mt-3 col-lg-12'>
                      <TextField
                      type="text"
                      id="search"
                      label="search"
                      variant='standard'
                      onChange={(e) => handleSearch(e.target.value)}
                      />
                  </div> */}
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={medicines.medicine}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                    />

                  </div>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicine</DialogTitle>
                    <Formik value={formik}>
                      <Form onSubmit={formik.handleSubmit}>
                        <DialogContent>

                          <TextField
                            margin="dense"
                            id="name"
                            label="name"
                            type="name"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                            defaultValue={formik.values.name}
                            helperText={formik.errors.name}
                            error={formik.errors.name ? true : false}

                          />

                          <TextField
                            margin="dense"
                            id="price"
                            label="price"
                            type="price"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                            defaultValue={formik.values.price}
                            helperText={formik.errors.price}
                            error={formik.errors.price ? true : false}
                          />
                          <TextField
                            margin="dense"
                            id="quantity"
                            label="quantity"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                            defaultValue={formik.values.quantity}
                            helperText={formik.errors.quantity}
                            error={formik.errors.quantity ? true : false}

                          />
                          <TextField
                            margin="dense"
                            id="expiry"
                            label="expiry"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                            defaultValue={formik.values.expiry}
                            helperText={formik.errors.expiry}
                            error={formik.errors.expiry ? true : false}
                          />
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            {
                              Update ?
                                <Button type="submit">Update</Button>
                                :
                                <Button type="submit">Submit</Button>
                            }
                          </DialogActions>
                        </DialogContent>
                      </Form>
                    </Formik>
                  </Dialog>
                  <div>
                    <Dialog
                      open={dopen}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are You Sure Delete Medicine Data ...? "}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">

                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => handleDelete()} autofocus>yes</Button>
                        <Button onClick={handleClose}>No</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>

              )
          }
        </Container>
      </Box>
    </>
  )
}