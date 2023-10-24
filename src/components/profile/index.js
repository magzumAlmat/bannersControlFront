
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
    NavbarText, Row, Col, Label, Input
} from 'reactstrap';
import React, { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'

import Header from '../header';
import { authorize } from '@/store/slices/authSlice';
import jwtDecode from 'jwt-decode'
import Link from "next/link";
import {Button, Typography} from "@mui/material";


export default function ProfileComponent(user) {
    const dispatch = useDispatch()

    const CurrentUser = useSelector((state) => state.auth.currentUser);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const TOKEN = useSelector((state) => state.auth.authToken);

    console.log('CURRENT USER FROM PROFILE isAuth=', isAuth)
    console.log('CURRENT USER FROM PROFILE TOKEN=', TOKEN)
    console.log('CURRENT USER FROM PROFILE CurrentUser=', CurrentUser)

    const [tokenState, setTokenState] = useState(TOKEN)

    const token = localStorage.getItem('token')

    console.log('Initialize tokenState=', tokenState)


    useEffect(() => {
        if (user != null) {
            console.log('user is null')
        }


        console.log('1User from parent', user)
        if (token) {
            let decodedToken = jwtDecode(token)
            setTokenState(CurrentUser)

            // localStorage.setItem('token',tokenState)
            // dispatch(authorize({tokenState}))

        } else {
            localStorage.removeItem('token')
        }
    }, [TOKEN])


    return (

    //     <div className='flexColumn' style={{'width': '30%'}}>
    //         <div className="container">
    //             <div className='row bg-light d-flex justify-content-center'>
    //                 <div className='col-sm-4'><p>Email</p></div>
    //                 <div className='col-sm-8'><p>{tokenState && tokenState.email}</p></div>
    //             </div>
    //             <div className='row bg-light'>
    //                 <div className='col-sm-4'><p>Имя</p></div>
    //                 <div className='col-sm-8'><p>{tokenState && tokenState.name}</p></div>
    //             </div>
    //             <div className='row bg-light'>
    //                 <div className='col-sm-4'><p>Фамилия</p></div>
    //                 <div className='col-sm-8'><p>{tokenState && tokenState.lastname}</p></div>
    //             </div>
    //             <div className='row bg-light'>
    //                 <div className='col-sm-4'><p>Телефон</p></div>
    //                 <div className='col-sm-8'><p>{tokenState && tokenState.phone}</p></div>
    //             </div>
    //             <div className='row mt-3'>
    //                 <div className='col-sm-4'>
    //
    //                 </div>
    //             </div>
    //         </div>
    //
    //     </div>
    // {/* {dispatch(useTokenInitialization())} */
    // }
    // {/* {console.log('CURRENT USER',CurrentUser)}
    //   <h1>{CurrentUser}</h1> */
    // }
    <div className='flexColumn'>
        <Row>
            <Col className="" sm="4" xs="6"></Col>
            <Col sm="4" xs="6">
                <Col>
                    <div><p>Email: {tokenState && tokenState.email}</p></div>
                    <div><p>Имя: {tokenState && tokenState.name}</p></div>
                    <div><p>Фамилия: {tokenState && tokenState.lastname}</p></div>
                    <div><p>Телефон: {tokenState && tokenState.phone}</p></div>
                </Col>
                <Link href='/addprofiledatapage'>
                    <button className='btn btn-primary'>
                     Изменить
                    </button>
                </Link>




            </Col>
            <Col className="" sm="4">
            </Col>
        </Row>
    </div>

);
}
