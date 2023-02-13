import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const chestOptions = {
    method: "GET",
    url: "/chest",
  };

  const backOptions = {
    method: "GET",
    url: "/back",
  };

  const shouldersOptions = {
    method: "GET",
    url: "/shoulders",
  };

  const legs1Options = {
    method: "GET",
    url: "/legs1",
  };

  const legs2Options = {
    method: "GET",
    url: "/legs2",
  };

  const getWorkoutData = () => {
    axios
      .request(chestOptions)
      .then((response) => {
        console.log(response.data);
        setChest(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .request(backOptions)
      .then((response) => {
        console.log(response.data);
        setBack(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .request(shouldersOptions)
      .then((response) => {
        console.log(response.data);
        setShoulders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .request(legs1Options)
      .then((response) => {
        console.log(response.data);
        setLegs1(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .request(legs2Options)
      .then((response) => {
        console.log(response.data);
        setLegs2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [chest, setChest] = useState([]);
  const [back, setBack] = useState([]);
  const [shoulders, setShoulders] = useState([]);
  const [legs1, setLegs1] = useState([]);
  const [legs2, setLegs2] = useState([]);

  const randomChest = Math.floor(Math.random() * chest.length);
  const randomBack = Math.floor(Math.random() * back.length);
  const randomShoulders = Math.floor(Math.random() * shoulders.length);
  const randomLegs1 = Math.floor(Math.random() * legs1.length);
  const randomLegs2 = Math.floor(Math.random() * legs2.length);

  const randomChestVal = chest[randomChest];
  const randomBackVal = back[randomBack];
  const randomShouldersVal = shoulders[randomShoulders];
  const randomLegs1Val = legs1[randomLegs1];
  const randomLegs2Val = legs2[randomLegs2];

  const chestBtn = document.getElementById("chestInstructions");
  const toggleChest = () => {
    chestBtn.classList.toggle("hidden");
  };

  const backBtn = document.getElementById("backInstructions");
  const toggleBack = () => {
    backBtn.classList.toggle("hidden");
  };

  const shouldersBtn = document.getElementById("shouldersInstructions");
  const toggleShoulders = () => {
    shouldersBtn.classList.toggle("hidden");
  };

  const legs1Btn = document.getElementById("legs1Instructions");
  const toggleLegs1 = () => {
    legs1Btn.classList.toggle("hidden");
  };

  const legs2Btn = document.getElementById("legs2Instructions");
  const toggleLegs2 = () => {
    legs2Btn.classList.toggle("hidden");
  };

  return (
    <div className="App bg-gray-200 my-10 mx-10 pt-16 pb-6 px-4 rounded-lg shadow-xl md:mx-20 lg:mx-36">
      <h1 className="font-bold font-sea text-gray-800 text-6xl mx-4 my-6 pb-2 border-b-gray-800 border-2 md:mx-20 lg:mx-32 xl:mx-48">
        Full Body Workout of the Day
      </h1>
      <button
        onClick={getWorkoutData}
        className="p-2 bg-gray-400 font-bold cursor-pointer rounded-lg hover:bg-gray-500 hover:text-white"
      >
        Get a New Workout
      </button>
      <div className="m-6 font-kanit text-gray-800 rounded-md space-y-2">
        <div className="text-2xl font-bold">{randomChestVal?.name}</div>
        <div className="text-xl font-bai">Traget Muscles: Chest</div>
        <div className="text-xl font-bai">
          Required Equipment: {randomChestVal?.equipment}
        </div>
        <button
          onClick={toggleChest}
          className="bg-gray-300 rounded-xl py-1 px-3"
        >
          <div className="text-xl">Instructions +</div>
        </button>
        <div id="chestInstructions" className="hidden text-l font-bai">
          {randomChestVal?.instructions}
        </div>
      </div>
      <div className="m-6 font-kanit text-gray-800 rounded-md space-y-2">
        <div className="text-2xl font-bold">{randomBackVal?.name}</div>
        <div className="text-xl font-bai">Traget Muscles: Lats</div>
        <div className="text-xl font-bai">
          Required Equipment: {randomBackVal?.equipment}
        </div>
        <button
          onClick={toggleBack}
          className="bg-gray-300 rounded-xl py-1 px-3"
        >
          <div className="text-xl">Instructions +</div>
        </button>
        <div id="backInstructions" className="hidden text-l font-bai">
          {randomBackVal?.instructions}
        </div>
      </div>
      <div className="m-6 font-kanit text-gray-800 rounded-md space-y-2">
        <div className="text-2xl font-bold">{randomShouldersVal?.name}</div>
        <div className="text-xl font-bai">Traget Muscles: Shoulders</div>
        <div className="text-xl font-bai">
          Required Equipment: {randomShouldersVal?.equipment}
        </div>
        <button
          onClick={toggleShoulders}
          className="bg-gray-300 rounded-xl py-1 px-3"
        >
          <div className="text-xl">Instructions +</div>
        </button>
        <div id="shouldersInstructions" className="hidden text-l font-bai">
          {randomShouldersVal?.instructions}
        </div>
      </div>
      <div className="m-6 font-kanit text-gray-800 rounded-md space-y-2">
        <div className="text-2xl font-bold">{randomLegs1Val?.name}</div>
        <div className="text-xl font-bai">Traget Muscles: Quadriceps</div>
        <div className="text-xl font-bai">
          Required Equipment: {randomLegs1Val?.equipment}
        </div>
        <button
          onClick={toggleLegs1}
          className="bg-gray-300 rounded-xl py-1 px-3"
        >
          <div className="text-xl">Instructions +</div>
        </button>
        <div id="legs1Instructions" className="hidden text-l font-bai">
          {randomLegs1Val?.instructions}
        </div>
      </div>
      <div className="m-6 font-kanit text-gray-800 rounded-md space-y-2">
        <div className="text-2xl font-bold">{randomLegs2Val?.name}</div>
        <div className="text-xl font-bai">Traget Muscles: Glutes</div>
        <div className="text-xl font-bai">
          Required Equipment: {randomLegs2Val?.equipment}
        </div>
        <button
          onClick={toggleLegs2}
          className="bg-gray-300 rounded-xl py-1 px-3"
        >
          <div className="text-xl">Instructions +</div>
        </button>
        <div id="legs2Instructions" className="hidden text-l font-bai">
          {randomLegs2Val?.instructions}
        </div>
      </div>
    </div>
  );
}

export default App;
