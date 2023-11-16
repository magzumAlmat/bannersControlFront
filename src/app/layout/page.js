'use client' 
import UserLogin from "@/components/login"
import Header from "@/components/header"
import Home from "@/components/home"
import Profile from "@/components/profile"
import jwtDecode from 'jwt-decode'

import { authorize } from '@/store/slices/authSlice'
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getBannerByCompanyIdAction, getUserInfo } from "@/store/slices/authSlice";

export default function Layout(user) {
    const host ='http://localhost:8000'
    const token=localStorage.getItem('token')
    const TOKEN = useSelector((state) => state.auth.authToken);
    const CurrentCompany = useSelector((state) => state.auth.currentCompany);
    const CurrentUSER = useSelector((state) => state.auth.currentUser);
    let decodedToken=jwtDecode(token)
    console.log('decodec token from home',decodedToken)
    const CompanyId=decodedToken.companyId
  
    const banners= useSelector((state) => state.auth.bannersById);
    console.log('banners==',banners)
    const bannersArray=[]
    bannersArray.push(...banners)
    console.log('1 bannersArray=',bannersArray)
    const [bannersState, setBannersState] = useState([])
    console.log('2 Current company from home=', CurrentCompany)
    console.log('3 Current USER=-----', CurrentUSER)
    const dispatch = useDispatch(user);
    
    const [markerData, setMarkerData]  = useState(bannersArray);
    const [map, setMap] = useState(null);
   
    
    console.log('markerPositions=======',markerData)
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
  
    useEffect(() => {
        var DG = require('2gis-maps');
        var map = null;
    
        const initializeMap = () => {
          if (!map) {
            map = DG.map('map', {
              center: [43.238566, 76.899828],
              zoom: 14,
            });
    
            setMap(map);
          }
        };
    
        initializeMap();
    
        return () => {
          if (map) {
            map.remove();
          }
        };
      }, []);
    
      useEffect(() => {
        if (map) { // Check if the map is available
          var markersLayer = DG.featureGroup().addTo(map);
    
          // Clear existing markers
          markersLayer.clearLayers();
    
          // Add markers for each marker data object
          bannersArray.forEach((data) => {
            console.log('data=', data);
            const { bannerLatitude, bannerLongitude, title } = data;
            const position = [parseFloat(bannerLatitude), parseFloat(bannerLongitude)];
    
            var marker = DG.marker(position, {
              icon: DG.icon({
                iconUrl: '/banner-icon.png',
                iconSize: [40, 40],
              }),
            }).addTo(markersLayer);
            marker.bindPopup('Баннер');
          });
        }
      }, [bannersArray, map]);

    
    return (

        <>
           <Header loggedIn={true}/>
           <br />
           <div id="map" style={{ width: '100%', height: '400px' }}>
            {/* The map will be rendered here */}
            </div>
          
            <Home/>
        </>
    )
}
