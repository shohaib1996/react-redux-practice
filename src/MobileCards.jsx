/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deletePhone } from "./redux/features/mobileSlice/mobileSlice";



const MobileCards = ({ mobile }) => {
    const { img, brand, name, _id } = mobile
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        console.log(id);
        dispatch(deletePhone(id))
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className="w-full h-80" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>{name}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-red-500 border-none hover:bg-red-700">Delete</button>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default MobileCards;