import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchMobiles } from "./redux/features/mobileSlice/mobileSlice";
import MobileCards from "./MobileCards";
import { FaPlusCircle } from "react-icons/fa";
import AddPhoneModal from "./AddPhoneModal";


function App() {
  const { data: mobiles, loading } = useSelector((state) => state.mobiles)
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)

  

  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center relative">
        <span className="loading loading-bars loading-lg absolute top-[350px]"></span>
      </div>
    )
  }


  // console.log(mobiles);

  return (
    <div>
      <h1 className="text-center my-16 text-6xl font-extrabold border-b-2 p-5 w-1/2 mx-auto">Total Mobile Phones: {mobiles.length}</h1>
      <p className="text-center text-3xl font-bold flex items-center justify-center">Add Mobile <button className="btn text-3xl btn-sm ml-2"><FaPlusCircle onClick={() => setShowModal(true)}/></button></p>
      <div className="grid grid-cols-5 gap-8 m-10">
        {
          mobiles.map(mobile => <MobileCards key={mobile._id} mobile={mobile}></MobileCards>)
        }
      </div>

      <AddPhoneModal showModal={showModal} setShowModal={setShowModal}></AddPhoneModal>
    </div>
  )
}

export default App
