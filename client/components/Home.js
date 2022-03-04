import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MealPlanForm from './MealPlanForm';
import Video from './Video';
import Modal from './Modal';

export const Home = () => {
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="home">
      {/* <div>
        <PropagateLoader color={'#F37A24'} loading={loading} size={30} />
      </div> */}

      <div>
        <h1>HOME</h1>
        <h3>Welcome, {username}</h3>
        <MealPlanForm />
        {/* <div>
          <button className="openModalBtn" onClick={() => setOpenModal(true)}>
            Open
          </button>
        </div> */}
        {/* {openModal && <Modal closeModal={setOpenModal} />} */}
      </div>
    </div>
  );
};

export default Home;
