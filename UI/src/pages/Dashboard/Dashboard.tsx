import BannerImg from '../../assets/img/banner_2.png';
import Categories from '../../components/Categories/Categories';
import PopularDish from '../../components/PopularDish/PopularDish';


const Dashboard = () => {
  return (
    <div className='py-4 w-[90%] md:w-full'>
      {/* Banner */}
      <div className='rounded-lg py-2 mb-8 flex items-center justify-between overflow-hidden relative'>
        <img src={BannerImg}
            alt='Discount offer'
            className='md:h-48 h-40 md:object-cover rounded-lg'
        />
        <div className='absolute p-8'>
            <div className='md:max-w-md'>
                <h2 className="text-2xl font-bold text-white mb-2">Get Discount Voucher</h2>
                <h3 className="text-xl font-bold text-white mb-4">Up To 20%</h3>
                {/* <p className="text-white text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt.</p> */}
                   <button className="mt-3 bg-white text-sm py-2 px-4 rounded-md
                    hover:bg-amber-100">Upgrade</button>
            </div>
        </div>
      </div>
      {/* Categories */}
      <Categories />
      <PopularDish />
    </div>
  )
}

export default Dashboard