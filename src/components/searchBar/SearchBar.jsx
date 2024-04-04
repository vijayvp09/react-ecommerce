import { useState } from "react"

const searchData = [
  {
      name: 'Fashion',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Shirt',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'Jacket',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
  {
      name: 'Mobile',
      image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
  },
  {
      name: 'Laptop',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Home',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'book',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
]

const SearchBar = () => {
  const [search, setSearch] = useState("")  

  const filterdList = searchData.filter((obj)=> obj.name.toLowerCase().includes(search)).slice(0,20);
  return(
        <div>
           <div className="flex justify-center">
             <input type="text" placeholder="search here" onChange={(e) => {setSearch(e.target.value)}} className="w-96 rounded-lg px-2 focus:outline-none  " />
           </div>
           <div className="flex justify-center">
            {search && <div className="bg-gray-200 my-1 px-2 absolute block w-96 lg:w-96 sm:96 rounded-md" >
                { filterdList.length > 0 ?
                    <> {filterdList.map((item, index)=>{
                        return (
                        <div key={index} className="py-2 px-2">
                            <div className="flex items-center">
                                <img src={item.image} alt="" className="w-10 mr-2"/>
                                {item.name}
                            </div>
                        </div>)})}
                    </> 
                : 
                <>
                    <div className=" text-gray-600 ">
                        Not Found 
                        <img src="https://www.flaticon.com/free-icon/cdn_10619709?term=cdn&page=1&position=28&origin=tag&related_id=10619709" alt="" />
                    </div>
                </>}
            </div>}
           </div>
        </div>
    )
}

export default SearchBar;