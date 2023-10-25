import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllBanners,getAllCompanies, getBannerByCompanyIdAction, getUserInfo } from "@/store/slices/authSlice";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { addCompanyAction } from "@/store/slices/authSlice";
export default function InspectorDashboard() {

    const host ='http://localhost:8000'
    const token=localStorage.getItem('token')
    const TOKEN = useSelector((state) => state.auth.authToken);
    const CurrentCompany = useSelector((state) => state.auth.currentCompany);
    let decodedToken=jwtDecode(token)
    console.log('1 decoded token from home',decodedToken)
    const CompanyId=decodedToken.companyId
    const dispatch=useDispatch()
    const banners= useSelector((state) => state.auth.allBanners);
    const companies= useSelector((state) => state.auth.allCompanies);
    // console.log('banners==',banners)
    const bannersArray=[]
    bannersArray.push(...banners)
    // console.log('1 bannersArray=',bannersArray)
    const companiesArray=[]
    companiesArray.push(...companies)
    const [bannersState, setBannersState] = useState([])
    // console.log('2 Current company from home=', CurrentCompany)
    

    // useEffect(()=>{
    
    
    // dispatch(getUserInfo);
    
    // if (CurrentCompany!=null){
    //     dispatch(getBannerByCompanyIdAction(CurrentCompany))
    // }

    // // dispatch(getBannerByCompanyIdAction(CurrentCompany))
    
    
    // setBannersState(banners)
    
    // },[CurrentCompany,banners])
    useEffect(() => {
        // dispatch(getUserInfo);
    
        dispatch(getAllCompanies());
        dispatch(getAllBanners());
       
    
        setBannersState(banners); // Moved to the effect function
    }, []); // Listen to changes in CurrentCompany and banners



    console.log(' 3 COMPANIES ARRAY=',companiesArray)

    return(
        <div className='container'>

            <h1></h1>
            
          
                <div className="container-fluid">
                    <h1>Баннеры</h1>
            
                {/* {bannersArray.map((item, index)=>(
                    // console.log('item=',item),
                    companiesArray.map((item2,index2)=>{
                        // console.log('item2=',item2)
                        if (item.CompanyId==item2.id
                            ){

                            console.log('item=',item,item2),
                            <div key={index} className="container mt-5 border mb-5">
                        
                            <div className="row p-3">
                                <div className="col-sm-2">
                                    <img  style={{'width':'100%'}} src={`${host}/${item.imageUrl}`} alt="alt banner"/>
                                </div>
                                <div className="col-sm-10">
                            
                                          <h6>Banner title:{item.title}</h6>
                                            <p>Banner number: {item.bannerNumber}</p>
                                            <p>Banner address:{item.banerAddress} </p>
                                            <p>Banner unique id:{item.uniqueCode} </p>

                                            <h6>Company name:{item2.name}</h6>
                                            <p>Company address: {item2.address}</p>
                                            <p>Company bin:{item2.bin} </p>
                                            <p>Company contactEmail:{item2.contactEmail} </p>
                                            <p>Company description:{item2.description} </p>
                                </div>
                            </div>
                          
                                       
                        </div>


                        }
                     
                    })

                    ))} */}
    
    {bannersArray.map((item, index) => {
    // Find the matching company for the current banner
    const matchingCompany = companiesArray.find(company => item.CompanyId === company.id);

    if (matchingCompany) {
        return (
            <div key={index} className="container mt-5 border mb-5">
                <div className="row p-3">
                    <div className="col-sm-2">
                        <img style={{ 'width': '100%' }} src={`${host}/${item.imageUrl}`} alt="alt banner" />
                    </div>
                    <div className="col-sm-10">
                        <h6>Banner title:{item.title}</h6>
                        <p>Banner number: {item.bannerNumber}</p>
                        <p>Banner address:{item.banerAddress} </p>
                        <p>Banner unique id:{item.uniqueCode} </p>

                        <h6>Company name:{matchingCompany.name}</h6>
                        <p>Company address: {matchingCompany.address}</p>
                        <p>Company bin:{matchingCompany.bin} </p>
                        <p>Company contactEmail:{matchingCompany.contactEmail} </p>
                        <p>Company description:{matchingCompany.description} </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return null; // Handle the case where there is no matching company
    }
})}

                </div>
        </div>
    );
}