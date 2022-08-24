// import { BASE_URL } from "../../baseUrl";
import { getDoctorsdata, deleteDoctorsdata, editDoctorsdata, postDoctorsdata } from "../../common/apis/doctors.api";
import { db } from "../../Firebase";
import * as ActionTypes from "../ActionType"
import { collection, addDoc, getDocs, deleteDoc, doc, deleteField, updateDoc } from "firebase/firestore";

export const Doctorsdata = () => async (dispatch) => {
  try {
    dispatch(loadingDoctors())

    // setTimeout(function () {
    // getDoctorsdata()
    const querySnapshot = await getDocs(collection(db, "doctors"));

    let data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
      dispatch({ type: ActionTypes.GET_DOCTORS, payload: data })
      // console.log(`${doc.id} => ${doc.data()}`);
    });
    // .then(data => dispatch({ type: ActionTypes.GET_DOCTORS, payload: data.data }))
    // .catch(error => dispatch(errorDoctors(error.message)))
    // }, 2000)

    // setTimeout(function () {
    //   fetch(BASE_URL + 'doctors')
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then(response => response.json())
    //     .then(doctors => dispatch({ type: ActionTypes.GET_DOCTORS, payload: doctors }))
    //     .catch(error => dispatch(errorDoctors(error.message)))
    // }, 2000)


  } catch (error) {
    dispatch(errorDoctors(error.message))
    // console.log(error.message);
  }
}


export const postDoctors = (data) => async (dispatch) => {
  try {

    dispatch(loadingDoctors())


    //  const docRef = await addDoc(collection(db, " doctors"),{id:docRef.id, ...data});

    const docRef = await addDoc(collection(db, "doctors"), data);
    dispatch({ type: ActionTypes.POST_DOCTORS, payload: { id: docRef.id, ...data } })
    // console.log("Document written with ID: ", docRef.id);
    // setTimeout(function () {
    //   fetch(BASE_URL + 'doctors', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then(response => response.json())
    //     .then(doctors => dispatch({ type: ActionTypes.POST_DOCRORS, payload: doctors }))
    //     .catch(error => dispatch(errorDoctors(error.message)))
    // }, 2000)
  } catch (error) {
    dispatch(errorDoctors(error.message));
    // console.error("Error adding document: ", error);
  }
}

export const deleteDoctors = (id) => async (dispatch) => {
  try {

    deleteDoctorsdata(id)
    // .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
    // .catch(error => dispatch(errorDoctors(error.message)))

    await deleteDoc(doc(db, "doctors", id));

    const doctorsRef = doc(db, 'doctors', id);

    // Remove the 'capital' field from the document
    await updateDoc(doctorsRef, {
      capital: deleteField()
    });
    dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id})

    // fetch(BASE_URL + 'doctors/' + id , {
    //   method: 'DELETE'
    // })
    // .then(response => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // },
    //   error => {
    //     var errmess = new Error(error.message);
    //     throw errmess;
    //   })
    // .then(response => response.json())
    // .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
    // .catch(error => dispatch(errorDoctors(error.message)))
  } catch (error) {
    dispatch(errorDoctors(error.message))
  }
}

export const editDotors = (data) => async (dispatch) => {
  try {

    editDoctorsdata(data)

    const doctorsRef = doc(db, "doctors", data.id);

    await updateDoc(doctorsRef, {
      degree: data.degree,
      experience: data.experience,
      name: data.name,
      salary: data.salary
    });
    dispatch({ type: ActionTypes.EDIT_DOCTORS, payload: data})

      // .then((data) => dispatch({ type: ActionTypes.EDIT_DOCTORS, payload: data.data }))
      // .catch(error => dispatch(errorDoctors(error.message)))

    // fetch(BASE_URL + 'doctors/' + data.id , {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // },
    //   error => {
    //     var errmess = new Error(error.message);
    //     throw errmess;
    //   })
    // .then(response => response.json())
    // .then(doctors => dispatch({ type: ActionTypes.EDIT_DOCTORS, payload: doctors }))
    // .catch(error => dispatch(errorDoctors(error.message)))
  } catch (error) {
    dispatch(errorDoctors(error.message))
  }
}

export const loadingDoctors = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_DOCTORS })
}

export const errorDoctors = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_DOCTORS, payload: e })
}