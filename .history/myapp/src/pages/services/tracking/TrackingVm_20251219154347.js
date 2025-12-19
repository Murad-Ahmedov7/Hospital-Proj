import React, { useEffect } from 'react'

export default function TrackingVm() {

  const [onClose, setOnClose] = useState(true);
  const [allConsult, setAllconsult] = useState([
    {
      id: 0,
      name: "",
      email: "",
      phone: 0,
      service: "",
      staff: "",
      date: "",
      message: "",
    },
  ]);
  
const [filterNames, setFilterNames] = useState([
  { value: "", name: "All" },              // heç bir filter
  { value: "name-asc", name: "Name (A→Z)" },
  { value: "name-desc", name: "Name (Z→A)" },
  { value: "email-asc", name: "Email (A→Z)" },
  { value: "email-desc", name: "Email (Z→A)" },
  { value: "staff-asc", name: "Staff (A→Z)" },
  { value: "staff-desc", name: "Staff (Z→A)" },
  { value: "service-asc", name: "Service (A→Z)" },
  { value: "service-desc", name: "Service (Z→A)" }
]);

const [selectedType,setSelectedType]=useState('')


const [sortedData, setSortedData] = useState([]);

const[searchOnClose,setSearchOnClose]=useState(false)

const[searchText,setSearchText]=useState('')

const handleCloseBtn = () => {
    setOnClose((prev) => !prev);
  };

const handleToggleSearch=()=>{
  setSearchOnClose(true)
}


  useEffect(() => {
    const resultdata = async () => {
      const res = await baseApi.get("/consult");
      console.log(res.data);
      setAllconsult(res.data);
    };
    resultdata();
  }, []);


  console.log(selectedType)





useEffect(()=>{

// const sortData=(type,data)=>{
//   if(!type) return data;
//   const [field,order]=type.split('-') // "name-asc" → ["name", "asc"]

//  return [...data].sort((a, b) => {
//     const valA = a[field]?.toString() || "";

//     const valB = b[field]?.toString() || "";

//   //   return order === "asc"
//   //     ? valA.localeCompare(valB, undefined, { sensitivity: "base" })
//   //     : valB.localeCompare(valA, undefined, { sensitivity: "base" });
//   // });
//       return order === "asc"
//       ? valA.localeCompare(valB)
//       : valB.localeCompare(valA);
//   });
// }


const sortData = (type, data) => {
  if (!type) return data;
  const [field, order] = type.split("-");

  return [...data].sort((a, b) => (
    order === "asc"
      ? (a[field]?.toString() || "").localeCompare(b[field]?.toString() || "")
      : (b[field]?.toString() || "").localeCompare(a[field]?.toString() || "")
  ));
};

 const sorted=sortData(selectedType,allConsult)
setSortedData(sorted);
},[selectedType,allConsult])

console.log(searchText)


// const searchData=()=>{
//   allConsult.filter(item=>item.name.toLowerCase().includes(searchText.toLowerCase()))
//   allConsult.filter(item=>item.email.toLowerCase().includes(searchText.toLowerCase()))
//   allConsult.filter(item=>item.phone.toLowerCase().includes(searchText.toLowerCase()))
//   allConsult.filter(item=>item.staff.toLowerCase().includes(searchText.toLowerCase()))
//   allConsult.filter(item=>item.message.toLowerCase().includes(searchText.toLowerCase()))
//   allConsult.filter(item=>item.service.toLowerCase().includes(searchText.toLowerCase()))




//   // allConsult.filter(item=>item.date.toLowerCase().includes(searchText.toLowerCase())) ????? filter de qaldi date ucun ve filter ile search bir yazmaq


// // https://chatgpt.com/c/690d96cc-56fc-832e-ab57-83d7418c6d78 yarimciq qaldi serach ona bax


// }


const filteredData = allConsult.filter((item) => {
  const lowerSearch = searchText.toLowerCase();
  return (
    item.name.toLowerCase().includes(lowerSearch) ||
    item.email.toLowerCase().includes(lowerSearch) ||
    item.phone.toString().toLowerCase().includes(lowerSearch) ||
    item.staff.toLowerCase().includes(lowerSearch) ||
    item.message.toLowerCase().includes(lowerSearch) ||
    item.service.toLowerCase().includes(lowerSearch) 
    // istəsən date də əlavə edə bilərsən: || item.date.toLowerCase().includes(lowerSearch)
  );
});


 return {
    onClose,
    handleCloseBtn,
    allConsult,
    sortedData,
    filterNames,
    selectedType,
    setSelectedType,
    searchText,
    setSearchText,
    searchOnClose,
    handleToggleSearch,
  };


}
