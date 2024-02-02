/* eslint-disable react/prop-types */


import { useDispatch } from "react-redux";
import { addNewPhone } from "./redux/features/mobileSlice/mobileSlice";


const AddPhoneModal = ({ showModal, setShowModal }) => {

    const dispatch = useDispatch()

   

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const img = form.photo.value
        const brand = form.brand.value
        const newPhone = {name, img, brand}
        console.log(newPhone);
        dispatch(addNewPhone(newPhone))
        setShowModal(false)

    }
    return (
        <>
            {
                showModal &&
                <dialog id="my_modal_3" className="modal" open>
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Add Phone!</h3>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Mobile Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input name="brand" type="text" placeholder="Brand" className="input input-bordered" required />
                             
                            </div>
                            <input className="btn btn-primary" type="submit" value="Add Phone" />
                        </form>
                    </div>
                </dialog>


            }
        </>
    );
};

export default AddPhoneModal;