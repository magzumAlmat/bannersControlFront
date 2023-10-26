
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
import { authorize, getAllCompanies, getUserInfo } from '@/store/slices/authSlice';
import jwtDecode from 'jwt-decode'
import Link from "next/link";
import {Button, Typography} from "@mui/material";
import { logout } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';


export default function ProfileComponent(user) {
    const dispatch = useDispatch()
    const router=useRouter()
    const CurrentUser = useSelector((state) => state.auth.currentUser);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const TOKEN = useSelector((state) => state.auth.authToken);
    const allCompanies = useSelector((state) => state.auth.allCompanies);
    console.log('1 CURRENT USER=', CurrentUser)
    console.log('1.1 TOKEN=', TOKEN)
    let arrayOfCurrentUser = []
    arrayOfCurrentUser.push(CurrentUser)
    console.log('1.2 Array of Current User', arrayOfCurrentUser)
    const [tokenState, setTokenState] = useState(TOKEN)

    const token = localStorage.getItem('token')
    let thisCompany = []
    const allCompany = []
    allCompany.push(...allCompanies)
    
    console.log('2 token', token)
    allCompany.map(item => {
        if (item.id == CurrentUser.companyId) {
            thisCompany = item;
        }
    })
    console.log('thi company', thisCompany)
    

    useEffect(() => {
        console.log('3 UseEffect запустился')
        if (user != null) {
            console.log('user is null')
        }


        
        if (token) {
            let decodedToken = jwtDecode(token)
            setTokenState(CurrentUser)
            dispatch(getUserInfo);
            dispatch(getAllCompanies());
            
            // localStorage.setItem('token',tokenState)
            // dispatch(authorize({tokenState}))

        } else {
            localStorage.removeItem('token')
        }
    }, [TOKEN])

    const handleClick = () => {
        
        dispatch(logout())
        router.push('/')
    }

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
        <div className='card p-3'>
            <Row>
                <Col>
                    <Col>
                        <div><p>Email: {CurrentUser && CurrentUser.email}</p></div>
                        <div><p>Имя: {CurrentUser && CurrentUser.name}</p></div>
                        <div><p>Фамилия: {CurrentUser && CurrentUser.lastname}</p></div>
                        <div><p>Телефон: {CurrentUser && CurrentUser.phone}</p></div>
                    </Col>
                    <Link href='/addprofiledatapage'>
                        <button className='btn btn-primary'>
                            Изменить
                        </button>
                    </Link>
                </Col>
            </Row>
        </div>
            <div className='card p-3 mt-5'>
            <Row>
                <Col>
                    <Col>
                        <h3></h3>
                        <div><p>Название компании: {thisCompany && thisCompany.name}</p></div>
                        <div><p>БИН компании: {thisCompany && thisCompany.bin}</p></div>
                        <div><p>Описание компании: {thisCompany && thisCompany.description}</p></div>
                        <div><p>Адрес компании: {thisCompany && thisCompany.address}</p></div>
                        <div><p>Телефон компании: {thisCompany && thisCompany.contactPhone}</p></div>
                        <div><p>Email компании: {thisCompany && thisCompany.contactEmail}</p></div>
                    </Col>
                    <Link href='/addcompany'>
                        <button className='btn btn-primary'>
                            Изменить
                        </button>
                    </Link>
                </Col>
            </Row>
        </div>
        
    
        
        <div className='d-flex justify-content-center mt-5'>
            <button onClick={() => {handleClick()}} className='btn btn-primary'>logout</button>
        </div>
    </div>

);
}