
import { useLoaderData } from 'react-router-dom';
import Banner from '../layout/Banner';
import Card from '../layout/Card';

const Homepage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            {
                data.map(item=><Card key={item.id} item={item}></Card>)
            }
        </div>
    );
};

export default Homepage;