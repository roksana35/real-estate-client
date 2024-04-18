import { Helmet } from "react-helmet-async";
import {  useLoaderData, useParams } from "react-router-dom";


const Deatils = () => {
    const data=useLoaderData()
    const {id}=useParams();
    const card =data.find(item=>item.id === parseInt(id));

    console.log(card)
    return (
      <div>
        <Helmet>
          <title>Property Details Page</title>
        </Helmet>

<div className="card mx-auto lg:w-full xl:w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={card.image} alt="Shoes" className="rounded-xl lg:w-full" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-2xl font-bold ">{card.estate_title}</h2>
    <div className="flex justify-around">
      <p>Area:  {card.area}</p>
      <p >Price:  {card.price}</p>
    </div>
    <div className="flex justify-around">
      <p>segment_name:   {card.segment_name}</p>
      <p >status:  {card.status}</p>
    </div>
    <div>
      <p  className="text-black font-medium"><span className="text-black font-bold">Facilities:</span>       {card.facilities[1]}  </p>
    </div>
    <div>
      <p  className="text-black font-medium"><span className="text-black font-bold">Location:</span>    {card.location}</p>
    </div>
    <p>{card.description}</p>
    {/* <p className=" font-medium">{description.slice(0,300)}....<span className="text-blue-800 font-medium ">see more</span></p> */}
    <div className="card-actions">
      
      
    </div>
  </div>
</div>



      </div>
        
    );
};

export default Deatils;