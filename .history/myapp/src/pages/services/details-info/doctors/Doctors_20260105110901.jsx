
export default function Doctors() {
  const alphabetList = [
    "*","A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  ];

  return (
    <div className="pt-[72px] flex flex-col gap-14 w-full min-h-screen">

      {/* Header */}
      <div className="mt-6 bg-gray-200">
        <div className="
          mx-auto
          flex
          items-center
          h-[180px]
          max-w-[900px]
          xl:max-w-[1200px]
          2xl:max-w-[1250px]
          px-6
        ">
          <p className="font-bold text-4xl">Doctors</p>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-col gap-5 w-full h-screen">


        
        <div className="
        mx-auto
          w-full
          max-w-[900px]
         xl:max-w-[1200px] 
          2xl:max-w-[1250px]
          px-6
        ">

          <div className="flex items-center">

            {/* Department Filter */}
            <div className="lg:w-[23%] xl:w-[21%]  2xl:w-[23%] ">
              <select className="border border-gray-500 w-full h-[55px] px-4">
                <option>All</option>
                <option>Pharmacy</option>
                <option>Laboratory</option>
              </select>
            </div>

            {/* Alphabet Sorting */}
            <div className="
              flex
              lg:w-[77%]
              xl:w-[79%]
              2xl:w-[77%]
              lg:flex-wrap
              lg:justify-center
              lg:pt-[56px]
              xl:pt-0
              xl:flex-nowrap
              xl:justify-start                
              ml-6
            ">
              {alphabetList.map((item) => (
                <div
                  key={item}
                  className="border border-gray-500/40 px-[10px] py-4 "
                >
                  <a className="text-[#00bcd5] font-medium">
                    {item}
                  </a>
                </div>
              ))}
            </div>



          
          
          </div>

        </div>

        <div className="doctor-Container  flex">

          <div className="w-[60%] mx-auto">
            <img className="w-[500px] h-[500px]" src="/images/doctors/doctor1.jpg" alt="" />
          </div>

          <div className="bg-red-700 w-[50%]">
            d
          </div>
        </div>



      </div>

    </div>
  );
}
