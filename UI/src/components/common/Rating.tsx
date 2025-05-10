const Rating = ({rating} :{rating:number}) => {
    return (
        <div className='flex flex-wrap'>
            {
                Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                    </span>
                ))
            }
        </div>
    );
  };

export default Rating