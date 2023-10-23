import React, {useState} from 'react';
import {
    TextField,
    Container,
    Button,
    Typography,
    Grid,
    Paper,
    Stack
} from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import {addFullProfileDataAction,useTokenInitialization} from '@/store/slices/authSlice';
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

    Form,
    Row,
    Col,
    Label,
    Input,
    FormGroup

} from 'reactstrap';
import Header from '../header';
import Link from 'next/link';

const AddProfileData = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    
    
    const CurrentUser= useSelector((state) => state.auth.someVar);

    const handleChange = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case 'password':
                setPassword(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'lastname':
                setLastName(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => { // Проверка наличия всех обязательных полей перед отправкой
        if (!password || !phone || !name || !lastname) {
            setError('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        // Сброс ошибки и отправка данных
        setError('');
        await dispatch(addFullProfileDataAction({password, phone, name, lastname}));
        setSuccess(true);
    };

  
    
    return (<>
        
        {/* {dispatch(useTokenInitialization())} */}
        {/* {console.log('CURRENT USER',CurrentUser)}
      <h1>{CurrentUser}</h1> */}
      <br />
      <div className='flexColumn'>               
                <Row>
                    <Col className="" sm="4" xs="6"></Col>
                    <Col sm="4" xs="6">
                   
                            <Row className="card">
                                <Col>
                                    <Label>
                                        Заполните свой профиль
                                    </Label>
                                    <form action="" method='POST'>
                                        <Input label="Password" name="password" type="password"
                                            value={password}
                                            onChange={handleChange}
                                            placeholder='Введите пароль'/>
                                        <Input label="Phone" name="phone"
                                            value={phone}
                                            onChange={handleChange}
                                            placeholder='Введите телефон'/>
                                        <Input label="Name" name="name"
                                            value={name}
                                            onChange={handleChange}
                                            placeholder='Введите Имя'/>
                                        <Input label="Last Name" name="lastname"
                                            value={lastname}
                                            onChange={handleChange}
                                            placeholder='Введите Фамилию'/> {
                                        error && <Typography color="error">
                                            {error}</Typography>
                                    }
                                        {
                                        success && <Typography color="primary">Данные успешно отправлены.</Typography>
                                    }

                                        <br />
                                        <Button variant="contained" color="primary"
                                            onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </form>


                                </Col>
                            </Row>
                   

                    </Col>
                    <Col className="" sm="4"></Col>
                </Row>
            </div>
           
            </>
          
          



    );
};

export default AddProfileData;

