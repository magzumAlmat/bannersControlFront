'use client' 
import UserLogin from "@/components/login"
import Header from "@/components/header"
import Profile from "@/components/profile"
import jwtDecode from 'jwt-decode'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { authorize } from '@/store/slices/authSlice'
export default function Layout(user) {
    const dispatch = useDispatch(user);
    // useEffect(()=>{
      
    //     console.log('Use effect сработал при рефреше страницы')
    //     const token=localStorage.getItem('token')
    //     // console.log('22pofile token',token)
    //     if(token){
    //         let decodedToken=jwtDecode(token)
    //         console.log('layoutPage=  decodedToken==',decodedToken)
            
    //         dispatch(authorize({token}))
            
    //     }
    //     else{
    //         localStorage.removeItem('token')
    //     }
    // },[])  
  


    return (
        <>
           <Header loggedIn={true}/>
           <br />
            <Profile />
        </>
    )
}
