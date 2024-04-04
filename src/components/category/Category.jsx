const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
]

const Category = () => {
   
    return (
        <div className="flex lg:justify-around py-4  overflow-auto scrollbar-hide ">
            {category.map((item, index) => {
                return(
                    <div key={index} className="">
                        <div className=" duration-200 hover:scale-110 mx-2">
                            <div className="bg-blue-200 rounded-full w-16 lg:w-24 shadow-md">
                                <img src={item.image} alt="" />
                            </div>
                            <h2 className="font-bold flex justify-center capitalize">{item.name}</h2>
                        </div> 
                    </div>
                )
            })}
        </div>
    )
}

export default Category;