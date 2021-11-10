import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { setAuthUser } from 'redux/actions/Auth';





const Profile = ()=>{



    const auth = useSelector(state=> state.auth);
    console.log(auth);
    const dispatch = useDispatch();
    const user = {name:"alif",email:"shifat.ahmed@email.com" , password:"dhaka1236" , tenant:"hulu"};

    const submit=()=>{

        console.log("print");
        dispatch(setAuthUser(user));



    }
    




    return(
        <div>
            <h1> Change Auth Reducer Data : </h1>
            <h2>Name: {auth.authUser.name}</h2>
            <h2>Email: {auth.authUser.email}</h2>
            <h2>Password: {auth.authUser.password}</h2>

            <button onClick={submit} >do</button>
            
        </div>

    )
}




export default  Profile ;