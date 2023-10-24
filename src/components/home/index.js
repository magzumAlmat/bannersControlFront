import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getBannerByCompanyIdAction } from "@/store/slices/authSlice";
import jwtDecode from "jwt-decode";
export default function Home() {
    const host ='http://localhost:8000'
    const token=localStorage.getItem('token')
    let decodedToken=jwtDecode(token)
    console.log('decodec token from home',decodedToken)
    const dispatch=useDispatch()
    const banners= useSelector((state) => state.auth.bannersById);
    console.log('banners==',banners)
    const bannersArray=[]
    bannersArray.push(...banners)
    console.log('bannersArray=',bannersArray)

    useEffect(()=>{
    
    dispatch(getBannerByCompanyIdAction(decodedToken.companyId))
    
    },[dispatch])

    return(
        <div className='container'>
            
            {banners ? (
                <div className="container-fluid">
                    <h1>Баннеры</h1>
                {bannersArray.map((item)=>(
                
                    <div className="container mt-5 border mb-5">
                        
                        <div className="row p-3">
                            <div className="col-sm-2">
                                <img  style={{'width':'100%'}} src={`${host}/${item.imageUrl}`} alt="alt banner"/>
                            </div>
                            <div className="col-sm-10">
                        
                                      <h1>Banner title:{item.title}</h1>
                                        <p>Banner number: {item.bannerNumber}</p>
                                        <p>Banner address:{item.banerAddress} </p>
                                        <p>Banner unique id:{item.uniqueCode} </p>
                                       
    
                                
                         
    
                                   
                                 
    
                              
                            </div>
                        </div>
                      
                                   
                    </div>
                      ))}
    
                </div>
            ) : (
                <>
                <h1>
                    nothing
                </h1>
                </>
            )}
            

        </div>
    );
}