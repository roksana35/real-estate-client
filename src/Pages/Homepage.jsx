
import { useLoaderData } from 'react-router-dom';
import Banner from '../layout/Banner';
import Card from '../layout/Card';

const Homepage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='lg:min-w-[1024px] mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3 gap-4 lg:min-w-[1024px] mx-auto xl:min-w-[1280px]'>
            {
                data.map(item=><Card key={item.id} item={item}></Card>)
            }

            </div>
            
        </div>
    );
};

export default Homepage;