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
    // console.log(user)
    const {pathname} = useRouter();
    const CurrentUser= useSelector((state) => state.auth.currentUser);
    const isAuth= useSelector((state) => state.auth.isAuth);
    const TOKEN=useSelector((state) => state.auth.authToken);

    console.log('CURRENT USER FROM PROFILE isAuth=',isAuth)
    console.log('CURRENT USER FROM PROFILE TOKEN=',TOKEN)
    console.log('CURRENT USER FROM PROFILE CurrentUser=',CurrentUser)

    const [tokenState,setTokenState]=useState()
    const token=localStorage.getItem('token')

     
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
    },[CurrentUser])  

    return (
        
        <div className='flexColumn'>
        {/* <Nav>
                <NavItem>
                    <Link href="/layout">Главная</Link>
                </NavItem>
                <NavItem>
                    <Link href="/addprofiledatapage">Заполнить профиль</Link>
                </NavItem>
                <NavItem>
                    <Link href="/addcompany">Создать компанию</Link>
                </NavItem>
                <NavItem>
                    <Link href="/addbanner">Создать баннер</Link>
                </NavItem>
                <NavItem>
                    <Link href="/customerprofile">Профиль</Link>
                </NavItem>

                 

                </Nav> */}

            
            {/* <Header loggedIn={true}/> */}

            {tokenState&& <p>Name: {tokenState.name}</p>}
            <Home/>

        </div>
    );
}

