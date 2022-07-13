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
import { Doctorsdata } from '../redux/action/doctors.action';
import { useDispatch, useSelector } from 'react-redux';


export default function Doctors() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [Update, setUpdate] = useState();
  const [dopen, setDopen] = React.useState(false);
  const [did, setDid] = useState()

  const doctordata = useSelector(state => state.doctors)
  console.log(doctordata.isLoading);

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


  let doctors = {
    name: yup.string().required('enter name'),
    salary: yup.string().required('please enter salary'),
    degree: yup.string().required('please enter degree'),
    experience: yup.string().required('please enter experience'),
  }


  let schema = yup.object().shape(doctors);

  const formik = useFormik({
    initialValues: {
      name: '',
      salary:'',
      quantity:'',
      experience: ''
    },
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      if(Update) {
        handleupdate(value)
      } else {
        handleSubmitdata(value)
      }
      resetForm();
    }
  })

  const handleupdate = (value) => {
    let localdata = JSON.parse(localStorage.getItem("doctors"));
    
    let udata = localdata.map((l, i) => {
      if(l.id === value.id) {
          return value;
      } else {
        return l;
      }
    })
    console.log(udata);

    localStorage.setItem("doctors", JSON.stringify(udata))
    setOpen(false)
    setUpdate()
    loadData()
  }

  const handleSubmitdata = (value) => {
    let localdata = JSON.parse(localStorage.getItem("doctors"));

    console.log(localdata);
    let data = {
      id: Math.floor(Math.random() * 1000),
      ...value
    }

    if (localdata === null) {
      localStorage.setItem("doctors", JSON.stringify([data]))
    } else {
      localdata.push(data)
      localStorage.setItem("doctors", JSON.stringify(localdata))
    }

    setOpen(false);
    loadData()

  }

  const columns = [

    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'salary', headerName: ' Salary', width: 130 },
    { field: 'degree', headerName: 'Degree', width: 130 },
    { field: 'experience', headerName: 'Experience', width: 130 },
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
    let localData = JSON.parse(localStorage.getItem("doctors"))

    let filterData = localData.filter((v, i) => v.id !== did);

    localStorage.setItem("doctors", JSON.stringify(filterData));
    loadData()
    
    setDopen(false)
  }

  const loadData = () => {
    // let localData = JSON.parse(localStorage.getItem("doctors"))

    // if (localData !== null) {
    //   setData(localData)
    // }
    
    setData(doctordata.doctors)
  }

   const dispatch = useDispatch();

  useEffect(
    () => {
       dispatch(Doctorsdata())
      loadData()
    },
    [])

  return (


    <Box>
      <Container>
        <div>
          <center>
            <Button variant="outlined" onClick={() => handleClickOpen()}>
              Add Doctors
            </Button>
          </center>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={Doctors.doctors}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />

          </div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add doctors</DialogTitle>
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
                    id="salary"
                    label="salary"
                    type="salary"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.salary}
                    helperText={formik.errors.salary}
                    error={formik.errors.salary ? true : false}
                  />
                  <TextField
                    margin="dense"
                    id="degree"
                    label="degree"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.degree}
                    helperText={formik.errors.degree}
                    error={formik.errors.degree ? true : false}

                  />
                  <TextField
                    margin="dense"
                    id="experience"
                    label="experience"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.experience}
                    helperText={formik.errors.experience}
                    error={formik.errors.experience ? true : false}
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
          {"Are You Sure Delete doctors Data ...? "}
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
      </Container>
    </Box>

  )
}

// name: '',
// salary: '',
// degree: '',
// experience:''