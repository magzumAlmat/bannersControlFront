import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import imageicon from '/src/app/icons/icon-profile.png';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect ,useState} from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
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
  NavbarText,
  Container
} from 'reactstrap';
import Link from 'next/link';
import { authorize } from '@/store/slices/authSlice';
import Image from "next/image";
export default function Header(user) {



  console.log('user=',user.loggedIn)
  const dispatch = useDispatch();
  useEffect(()=>{
      if (user!=null){
          console.log('user is null')
      }

      const token=localStorage.getItem('token')
      // console.log('22pofile token',token)
      if(token){
          let decodedToken=jwtDecode(token)
          dispatch(authorize({token}))
      }
      else{
          localStorage.removeItem('token')
      }
  },[])  
  

  let [LoggedIn,setLoggedIn] = useState(false)
 

  return (
    <>
    {user.loggedIn==undefined  &&
     <Navbar color="light" light expand="md">
     <NavbarBrand href="/layout">E-ZHARNAMA</NavbarBrand>
         <Container>
          
           <Nav className="ml-auto" navbar>
             <NavItem>
                   <Link href="/">Главная</Link>
               </NavItem>
               {/* <NavItem>
                   <Link href="/">Заполнить профиль</Link>
               </NavItem>
               <NavItem>
                   <Link href="/">Создать компанию</Link>
               </NavItem>
               <NavItem>
                   <Link href="/">Создать баннер</Link>
               </NavItem>
               <NavItem className="ml-auto">
                   <Link href="/">Профиль</Link>
               </NavItem> */}
           </Nav>
         </Container>
       </Navbar>
      }

{user.loggedIn===true  &&

      <Navbar color="light" light expand="md">
      <NavbarBrand href="/layout">E-ZHARNAMA</NavbarBrand>
          <Container>
           
            <Nav className="ml-auto" navbar>
              <NavItem>
                    <Link href="/layout">Главная</Link>
                </NavItem>
                <NavItem>
                    <Link href="/addcompany">Создать компанию</Link>
                </NavItem>
                <NavItem>
                    <Link href="/addbanner">Создать баннер</Link>
                </NavItem>
            </Nav>
          </Container>
        <Container className='d-flex justify-content-end'>
          <Nav navbar>
            <Link href="/customerprofile">
              <Image src={imageicon} alt="иконка профиля"/>
            </Link>
          </Nav>

        </Container>
        </Navbar>
}


{user.loggedIn=='inspector'  &&

<Navbar color="light" light expand="md">
<NavbarBrand href="/inspector">E-ZHARNAMA</NavbarBrand>
    <Container>
     
      <Nav className="ml-auto" navbar>
        <NavItem>
              <Link href="/inspector">Главная</Link>
          </NavItem>
          {/* <NavItem>
              <Link href="/addcompany">Все компании</Link>
          </NavItem>
          <NavItem>
              <Link href="/addbanner">Ченибудь еще</Link>
          </NavItem> */}
      </Nav>
    </Container>
  <Container className='d-flex justify-content-end'>
    <Nav navbar>
      <Link href="/customerprofile">
        <Image src={imageicon} alt="иконка профиля"/>
      </Link>
    </Nav>

  </Container>
  </Navbar>
}
    </>

  );
}