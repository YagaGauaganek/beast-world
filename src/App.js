import "./reset.css";
import './App.css';
import data from "../src/data.json";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast.js";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [beastData, setBeastData] = useState(data);

  function openModal(beast){
    setShowModal(!showModal);
    setModalContent(beast);
  }
  function closeModal(beast){
    setShowModal(!showModal);
    setModalContent(beast);
  }

  function handleBeasts(event){
    let beastNum = parseInt(event.target.value);
    // console.log(typef beastNum)
    const filteredBeasts = data.filter(beast => beast.horns === beastNum);
    event.target.value === "" ? setBeastData(data) : setBeastData(filteredBeasts);
    // console.log(filteredBeasts)
  }

  return (
    <div className="App">
        <Header />
        <form>
        <label className='horns-label' htmlFor='hornsInput'>Select Beast by horns</label>
        <select name='selectedHorns' id="hornsInput" onChange={handleBeasts}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
        <Header handleBeasts={handleBeasts}/>
        <Main beastData={beastData} openModal={openModal} modalContent={modalContent}/>
        <Footer />
        {showModal && <SelectedBeast modalContent={modalContent} closeModal={closeModal} />}
    </div>
  );
}
// }

export default App;
