import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getBannerByCompanyIdAction } from "@/store/slices/authSlice";
export default function Home() {
    const dispatch=useDispatch()
const banners= useSelector((state) => state.auth.bannersById);
console.log(banners)
useEffect(()=>{
    
    dispatch(getBannerByCompanyIdAction(8))
},[])

    return(
        <div>
            <h1>
                Главная
            </h1>
        </div>
    );
}