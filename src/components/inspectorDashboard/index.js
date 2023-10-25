import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBanners,
  getAllCompanies,
  getBannerByCompanyIdAction,
  getUserInfo,
} from "@/store/slices/authSlice";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { addCompanyAction } from "@/store/slices/authSlice";

export default function InspectorDashboard() {
  const host = "http://localhost:8000";
  const token = localStorage.getItem("token");
  const TOKEN = useSelector((state) => state.auth.authToken);
  const CurrentCompany = useSelector((state) => state.auth.currentCompany);
  let decodedToken = jwtDecode(token);
  console.log("1 decoded token from home", decodedToken);
  const CompanyId = decodedToken.companyId;
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.auth.allBanners);
  const companies = useSelector((state) => state.auth.allCompanies);
  const bannersArray = [...banners];
  const companiesArray = [...companies];
  const itemsPerPage = 5;

  const [bannersState, setBannersState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState(""); // New state for selected company

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllBanners());
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(bannersArray.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  }

  // Filter banners based on the selected company
  const filteredBanners = selectedCompany
    ? bannersArray.filter((banner) => banner.CompanyId == selectedCompany) // Use '==' instead of '==='
    : bannersArray;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBanners.slice(indexOfFirstItem, indexOfLastItem); // Use 'filteredBanners' here

  return (
    <div className="container">
      <h1></h1>
      
      {/* Dropdown select for filtering companies */}
      <div>
        <label>Select a Company:</label>
        <select value={selectedCompany} onChange={handleCompanyChange}>
          <option value="">All Companies</option>
          {companiesArray.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      <div className="container-fluid">
        <h1>Баннеры</h1>
        {currentItems.map((item, index) => {
          const matchingCompany = companiesArray.find(
            (company) => item.CompanyId == company.id // Use '==' instead of '==='
          );

          if (matchingCompany) {
            return (
              <div key={index} className="container mt-5 border mb-5">
                <div className="row p-3">
                  <div className="col-sm-2">
                    <img
                      style={{ width: "100%" }}
                      src={`${host}/${item.imageUrl}`}
                      alt="alt banner"
                    />
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
            return null;
          }
        })}
      </div>

      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button className="page-link" onClick={() => handlePageChange(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
