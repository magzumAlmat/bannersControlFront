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
import {useDispatch} from 'react-redux';
import {addFullProfileDataAction} from '@/store/slices/authSlice';
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
import { useRef } from 'react';
import { addCompanyAction } from '@/store/slices/authSlice';
import { addBannerAction } from '@/store/slices/authSlice';
export default function AddBanner  () {
    const dispatch = useDispatch();
    const [title,setTitle]=useState('')    
    const [bannerNumber,setBannerNumber]=useState('')   
    const [bannerAddress,setBannerAddress]=useState('')   
    const [imageUrl,setImageUrl]=useState('')
    const [contactPhone,setContactPhone] = useState('');
    const [name, setName] = useState('');
    const [bin, setBin] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const inputRef = useRef(null);
    const [error, setError] = useState('');
  






    const handleChange = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'selectedFile':
                setSelectedFile(value);
                break;
            case 'bannerNumber':
                setBannerNumber(value);
                break;
            case 'bannerAddress':
                setBannerAddress(value);
                break;
            
            default:
                break;
        }
    };

    const handleSubmit = async () => { // Проверка наличия всех обязательных полей перед отправкой
        if (!selectedFile || !bannerAddress ) {
            setError('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        // Сброс ошибки и отправка данных
        setError('');

        const formData = new FormData();
        formData.append('imageUrl', selectedFile);
        formData.append('title', title);
        formData.append('bannerNumber', bannerNumber);
        formData.append('bannerAddress', bannerAddress); // Corrected the key
        
  
        await dispatch(addBannerAction(formData));
        setSuccess(true);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    };
    
    const handleClick = () => {
        
        inputRef.current.click();
        console.log("handle click start",selectedFile)
    };


    return (
        
      
      <div className='flexColumn'>
             
               
                <Row>
                    <Col className="" sm="4" xs="6"></Col>
                    <Col sm="4" xs="6">
                   
                            <Row className="card">
                                <Col>
                                    <Label>
                                        Заполните данные баннера
                                    </Label>

                                    <form action="" method='POST'>

                                    <div>
                                    <input ref={inputRef} onChange={handleFileChange} type="file" id="file" style={{"display":"none"}}/>
                                    <button className="button button-primary" onClick={handleClick}>Выберите фото</button>
                                    {selectedFile && (
                                        <><p>Выбранный файл: {selectedFile.name}</p>
                                        <img src={URL.createObjectURL(selectedFile)} alt="" width={400} height={300} /></>
                                        )}

                                    </div   >
                                        <br />
                                        <Input label="Name of company" name="title" type="text"
                                            value={title}
                                            onChange={handleChange}
                                            placeholder='Введите название'/>

                                        <Input label="номер банера" name="bannerNumber"
                                            value={bannerNumber}
                                            onChange={handleChange}
                                            placeholder='номер банера'/>    
                                        
                                        <Input label="adress" name="bannerAddress"
                                            value={bannerAddress}
                                            onChange={handleChange}
                                            placeholder='Введите адрес баннера'/>
                                     

                                            {
                                        error && <Typography color="error">
                                            {error}</Typography>
                                    }
                                        {
                                        success && <Typography color="primary">Данные успешно отправлены.</Typography>
                                    }

                                        <br />
                                        <Button variant="contained" color="primary"
                                            onClick={handleSubmit}>
                                           Сохранить
                                        </Button>
                                    </form>


                                </Col>
                            </Row>
                   

                    </Col>
                    <Col className="" sm="4"></Col>
                </Row>
            </div>
           

          
          



    );
};

 

