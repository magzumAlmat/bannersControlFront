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
    console.log('CURRENT USER FROM PROFILE TOKEN=',TOKEN)
    console.log('CURRENT USER FROM PROFILE CurrentUser=',CurrentUser)

    const [tokenState,setTokenState]=useState(TOKEN)

    const token=localStorage.getItem('token')

    console.log('Initialize tokenState=',tokenState)
     
    useEffect(()=>{
        if (user!=null){
            console.log('user is null')
        }
        

        console.log('1User from parent',user)
        if(token){
            let decodedToken=jwtDecode(token)
            setTokenState(CurrentUser)
            
            // localStorage.setItem('token',tokenState)
            // dispatch(authorize({tokenState}))

        }
        else{
            localStorage.removeItem('token')
        }
    },[TOKEN])  

    return (
        
        <div className='flexColumn'>
        

            
            
            <div>Email: {tokenState.email} </div>
             <div>name:{tokenState.name} </div>
             <div>lastName:{tokenState.lastname}</div>
             <div> phone:{tokenState.phone}</div>
            
            <Home/>

        </div>
    );
}

