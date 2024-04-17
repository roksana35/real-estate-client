import { Link } from "react-router-dom";


const Card = ({item}) => {
    console.log(item)
    const {image,id,description,location,area,price,estate_title,facilities,status,segment_name}=item;
    return (
        <div className="card lg:w-[500px] xl:w-[610px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl lg:h-[350px]" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-2xl font-bold ">{estate_title}</h2>
    <div className="flex justify-around">
      <p>Area:  {area}</p>
      <p >Price:  {price}</p>
    </div>
    <div className="flex justify-around">
      <p>segment_name:   {segment_name}</p>
      <p >status:  {status}</p>
    </div>
    <div>
      <p  className="text-black font-medium"><span className="text-black font-bold">Facilities:</span>       {facilities[1]}  </p>
    </div>
    <div>
      <p  className="text-black font-medium"><span className="text-black font-bold">Location:</span>    {location}</p>
    </div>
    {
      description.length>200?
      <p>{description.slice(0,200)}</p>
      :
      <p>{description}</p>

    }
    {/* <p className=" font-medium">{description.slice(0,300)}....<span className="text-blue-800 font-medium ">see more</span></p> */}
    <div className="card-actions">
      <Link to={`/item/${id}`}>
      <button className="btn btn-primary">View Property</button>

      </Link>
      
    </div>
  </div>
</div>
    );
};

export default Card;