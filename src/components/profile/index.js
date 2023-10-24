import Link from 'next/link';
import {useRouter} from 'next/navigation';

import AddProfileData from '../addprofiledata/index';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'

import Header from '../header';
import { authorize } from '@/store/slices/authSlice';
import jwtDecode from 'jwt-decode'
import axios from 'axios';
import { getUserInfo } from '@/store/slices/authSlice';
const Home = () => {
    return (
        <div>
            <h1>Главная</h1>
            {/* Добавьте содержимое для Главной страницы */} </div>
    );
};


export default function ProfileComponent(user) {
    const dispatch=useDispatch()
    
    const {pathname} = useRouter();
    const CurrentUser= useSelector((state) => state.auth.currentUser);
    const isAuth= useSelector((state) => state.auth.isAuth);
    const TOKEN=useSelector((state) => state.auth.authToken);

    console.log('CURRENT USER FROM PROFILE isAuth=',isAuth)
    console.log('12CURRENT USER FROM PROFILE TOKEN=',TOKEN)
    console.log('123CURRENT USER FROM PROFILE CurrentUser=',CurrentUser)

    const [tokenState,setTokenState]=useState(CurrentUser)

    const token=localStorage.getItem('token')

    console.log('Initialize tokenState=',tokenState)
    console.log('1 edited current USER',CurrentUser)



    useEffect(()=>{
        console.log('Я отработался')
        dispatch(authorize(token))
        if (user!=null){
            console.log('user is null')
        }
        // console.log('1User from parent',user)
        
        // localStorage.setItem('token',)
       dispatch(getUserInfo)
       console.log('2 edited current USER',CurrentUser)

        if(token){
            
            setTokenState(CurrentUser)
            
            localStorage.setItem('email',    tokenState.email);
            localStorage.setItem('name',     tokenState.name);
            localStorage.setItem('lastname', tokenState.lastname);
            localStorage.setItem('phone',    tokenState.phone);
            
          
            // localStorage.setItem('token',tokenState)
            // dispatch(authorize({tokenState}))

        }
        // else{
        //     localStorage.removeItem('token')
        // }
    },[dispatch])  

    console.log('2 edited current user', CurrentUser)
    console.log('TOOoOOOOOOken', token)
    const storedEmail = localStorage.getItem('email');
    const storedToken = localStorage.getItem('name');

    return (
        
        <div className='flexColumn'>
            
            
            <div>email:{storedEmail}</div>
            <div>name:{storedToken}</div>
             {/* <div>lastName:{tokenState && CurrentUser.lastname}</div>
             <div> phone:{tokenState && CurrentUser.phone}</div> */}
            
            <Home/>

        </div>
    );
}