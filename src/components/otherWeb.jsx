
const OtherWebSites = () => {
    return ( 
    <div className="container m-auto  " style={{"height":"100vh"}}>
        <h1 className="text-center font-semibold mt-7 text-4xl text-green-400">مواقع اخري</h1>



        <div className="flex flex-col flex-wrap gap-10 mt-10 justify-center items-center">


    <a href="https://khair-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative group bg-white  h-80 drop-shadow-xl">
      <div className="bg-white w-full h-full  rounded-lg  overflow-hidden ">
        <img  className="object-cover w-full  transition duration-300 ease-in-out transform hover:z-10  hover:scale-105" src="../assets/Screenshot 2023-06-18 165049.png" alt="Website Screenshot" />
      </div>
      <div className="bg-green-400 w-56 h-16 flex justify-center items-center absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out ">
        <p className="text-white font-bold">اضغط للزيارة</p>
      </div>
      
      <div className="p-4 text-right bg-white drop-shadow-lg">
          <p className="text-gray-800 text-lg font-semibold mb-2">موقع خير</p>
          <p className="text-gray-600 ">مرحبًا بك في موقعنا المميز الذي يجمع بين القرآن الكريم والأدوات الإسلامية</p>
        </div>
    </a>

    </div>

    



    </div> );
}
 
export default OtherWebSites;