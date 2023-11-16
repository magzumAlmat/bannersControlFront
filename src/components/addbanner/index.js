import React, { useEffect, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  Select,
  MenuItem,
  Modal,
  Typography,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

  
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addFullProfileDataAction } from '@/store/slices/authSlice';
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
  FormGroup,
} from 'reactstrap';
import Header from '../header';
import Link from 'next/link';
import { useRef } from 'react';
import { addCompanyAction } from '@/store/slices/authSlice';
import { addBannerAction, getAllCompanies } from '@/store/slices/authSlice';

import { GisMap } from '../map';


export default function AddBanner() {
  const allCompaniesFromReducer= useSelector((state) => state.auth.allCompanies);
  console.log('ALL COMPANIES', allCompaniesFromReducer);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [bannerNumber, setBannerNumber] = useState('');
  const [bannerAddress, setBannerAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [name, setName] = useState('');
  const [bin, setBin] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [createdDate, setCreatedDate] = useState(''); // Added
  const [rentDays, setRentDays] = useState(''); // Added
  const [expiredDate, setExpiredDate] = useState(''); // Added
  const [success, setSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCompanyName, setSelectedCompanyName] = useState();
  const inputRef = useRef(null);
  const [error, setError] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null); // New state variable
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const data = [
    { id: 1, name: 'Company A', address: '123 Main St' },
    { id: 2, name: 'Company B', address: '456 Oak St' },
    { id: 3, name: 'Company C', address: '789 Pine St' },
    // Add more data as needed
  ];


  useEffect(() => {
    dispatch(getAllCompanies());
    console.log('all companies =====', allCompaniesFromReducer);
  },[allCompaniesFromReducer,dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      case 'createdDate': // Added
        setCreatedDate(value);
        break;
      case 'rentDays': // Added
        setRentDays(value);
        break;
      case 'expiredDate': // Added
        setExpiredDate(value);
        break;
      default:
        break;
    }
  };

  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMarkerPositionChange = (newMarkerPosition) => {
    setMarkerPosition(newMarkerPosition);
  }

  const handleSubmit = async () => {
    // Проверка наличия всех обязательных полей перед отправкой
    if ( !bannerAddress ) {
      setError('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    // Сброс ошибки и отправка данных
    setError('');

    
    const formData = new FormData();
    formData.append('imageUrl', selectedFile);
    formData.append('title', title);
    formData.append('bannerNumber', bannerNumber);
    formData.append('bannerAddress', bannerAddress);
    formData.append('createdDate', createdDate); // Added
    formData.append('expiredDate', expiredDate); // Added
    formData.append('bannerLongitude', markerPosition.lng); // Added
    formData.append('bannerLatitude', markerPosition.lat); // Added
    formData.append('companyId', selectedCompanyId); // Added
    

    await dispatch(addBannerAction(formData));
    setSuccess(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleClick = () => {
    inputRef.current.click();
    console.log('handle click start', selectedFile);
  };

  const handleCompanySelect = (companyId) => {
    setSelectedCompanyId(companyId);
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const SearchableTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
    
    const selectedCompany = (id) => {
        console.log('This is selected company Id = ', id);
        filteredData.map(item => {
          if (item.id == id) {
            setSelectedCompanyName(item.name)
          }
        })
        setSelectedCompanyId(id)
        handleModalClose();
    }
  
    const filteredData = allCompaniesFromReducer.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.bin.toLowerCase().includes(searchTerm.toLowerCase())
    );
      return (
        <div>
          <TextField
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>Действие</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Bin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell><Button onClick={()=>selectedCompany(row.id)}>выбрать</Button></TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.bin}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    };
  


  return (
    <div className='flexColumn'>
    <Row>
        <Col className='' sm='12' xs='12'><GisMap onMarkerPositionChange={handleMarkerPositionChange}/></Col>
        {console.log('PARENT COMPONENT markerPOSITION=',markerPosition)}
    </Row>
     

      <Row>
        <Col className='' sm='4' xs='6'></Col>
        <Col sm='4' xs='6'>
       
          <Row className='card'>
            <Col>
              <Label>Заполните данные баннера</Label>

              <form action='' method='POST'>
                {/* <div>
                  <input
                    ref={inputRef}
                    onChange={handleFileChange}
                    type='file'
                    id='file'
                    style={{ display: 'none' }}
                  />
                  <button className='button button-primary' onClick={handleClick}>
                    Выберите фото
                  </button>
                  {selectedFile && (
                    <>
                      <p>Выбранный файл: {selectedFile.name}</p>
                      <img src={URL.createObjectURL(selectedFile)} alt='' width={400} height={300} />
                    </>
                  )}
                </div> */}
                <br />
                {/* <label >Наименование баннера</label>
                <Input
                  label='Name of company'
                  name='title'
                  type='text'
                  value={title}
                  onChange={handleChange}
                  placeholder='Введите название'
                /> */}

<label>{selectedCompanyName ? (<>{selectedCompanyName}</>):(<>Выберите компанию</>)}</label>
                
                <Button variant='outlined' color='primary' onClick={handleModalOpen}>
                  Выбрать компанию
                </Button>

                <Modal open={modalOpen} onClose={handleModalClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ position: 'relative', width: '100vh', height: '100%' }}>
                    <Paper style={{ width: '100%', height: '100%', padding: '20px', textAlign: 'center' }}>
                      <SearchableTable/>
                    </Paper>
                    <Button onClick={handleModalClose} color='secondary' style={{ position: 'absolute', top: '10px', right: '10px' }}>
                      Закрыть
                    </Button>
                  </div>
                </Modal>
                
                <label >Номер баннера</label>
                <Input
                  label='номер баннера'
                  name='bannerNumber'
                  value={bannerNumber}
                  onChange={handleChange}
                  placeholder='номер банера'
                />
                <label >Адрес баннера</label>
                <Input
                  label='adress'
                  name='bannerAddress'
                  value={bannerAddress}
                  onChange={handleChange}
                  placeholder='Введите адрес баннера'
                />
                {/* <label >Дата начала</label>
                <Input
                     type="date"
                  label='Created Date' // Added
                  name='createdDate'
                  value={createdDate}
                  onChange={handleChange}
                  placeholder='Введите дату создания'
                />
              
                <label >Дата окончания</label>
                <Input
                  type="date"
                  label='Expired Date' // Added
                  name='expiredDate'
                  value={expiredDate}
                  onChange={handleChange}
                  placeholder='Введите дату истечения'
                /> */}
                {error && <Typography color='error'>{error}</Typography>}
                {success && <Typography color='primary'>Данные успешно отправлены.</Typography>}
                <br />
                <Button variant='contained' color='primary' onClick={handleSubmit}>
                  Сохранить
                </Button>
              </form>
            </Col>
          </Row>
        </Col>
        <Col className='' sm='4'></Col>
      </Row>
    </div>
  );
}
