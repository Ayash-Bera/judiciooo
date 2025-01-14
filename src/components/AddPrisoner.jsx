import React, { useState, useEffect } from "react";
import "./addprisoner.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import video from "../assets/video04.mp4";

const AddPrisoner = () => {
  const [name, setname] = useState("");
  const [fathername, setfathername] = useState("");
  const [adharnum, setadharnum] = useState("");
  const [trialdate, settrialdate] = useState("");
  const [crimes, setcrimes] = useState("");
  const [witness, setwitness] = useState("");
  const [status, setstatus] = useState("");
  const [crime, setcrime] = useState("");

  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DEV_URL}api/crimes` // replace URL with ${import.meta.env.VITE_DEV_URL} before pushing
      );
      console.log(response.data);
      setcrimes(response.data);
      console.log(crimes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}api/prisonerdets`, {
          //replace this URL with ${import.meta.env.VITE_DEV_URL} before pushing
          name,
          fathername,
          adharnum,
          trialdate,
          crime,
          status,
          witness,
        })
        .then((response) => {
          if (response.data === "Prisoner already exists") {
            // setuserstatus("Prisoner already exists");
            navigate("/updateprisoner");
          }
          console.log(response);
          setname("");
          setfathername("");
          setadharnum("");
          settrialdate("");
          setcrime("");
          setstatus("");
          setwitness("");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background-video min-h-screen ">
      <video autoPlay muted loop className="video-bg">
        <source src={video} type="video/mp4" />
      </video>

      <div
        className="container-ap"
        style={{
          position: "absolute",
          top: "4%",
          left: "15%",
          
          // marginTop: "100px",
        }}
      >
        <form onSubmit={handlesubmit} className="form-addprisoner">
          <h1 className="wel-message">ENTER PRISONER DETAILS:</h1>

          <label id="name">NAME</label>
          <input
            className="text-black"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Rudranil Chowdhury"
          />
          <br />

          <label id="fathername">S/O OR D/O</label>
          <input
            type="text"
            name="fathername"
            id="f-name"
            value={fathername}
            onChange={(e) => setfathername(e.target.value)}
            placeholder="Jagdish Chandra"
          />
          <br />

          <label id="aadhar">AADHAAR NUMBER</label>
          <input
            type="text"
            name="adharnum"
            id="aadhar"
            value={adharnum}
            onChange={(e) => setadharnum(e.target.value)}
            placeholder="#### #### ####"
          />
          <br />

          <label id="trial">TRIAL</label>
          <input
            type="date"
            name="trialdate"
            id="trial"
            value={trialdate}
            onChange={(e) => settrialdate(e.target.value)}
            placeholder="MM/DD/YYYY"
          />
          <br />

          <label id="testimonial">TESTIMONIAL</label>
          <input
            type="text"
            name="witness"
            id="testimonal"
            value={witness}
            onChange={(e) => setwitness(e.target.value)}
            placeholder="I witnessed this person doing...."
          />
          <br />

          <label id="location">STATUS</label>
          <input
            list="location"
            name="status"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            placeholder="Location Status"
          />
          <br />

          <datalist id="location">
            <option value="In India"></option>
            <option value="Outside India"></option>
            <option value="Unknown"></option>{" "}
            {/*  in this case there will be instant bail cancellation */}
            <option value="Being Tracked"></option>{" "}
            {/*  in this case there will be instant bail cancellation */}
          </datalist>

          <label id="crime1">CRIME</label>
          <input
            list="crime1"
            value={crime}
            name="crime"
            onChange={(e) => setcrime(e.target.value)}
            placeholder="Crime Status"
          />
          <br />

          <datalist id="crime1">
            {/* {crimes.map((crimee, idx) => (
              <option key={idx} value={crimee.crime}></option>
            ))} */}
            <option value="Crime against SCs and STs"></option>
            <option value="Crime against Women"></option>
            <option value="Crime against Children"></option>
            <option value="Offenses against the state"></option>
            <option value="Economic Offenses"></option>
            <option value="Crime against Foreigners"></option>
            <option value="Others"></option>
          </datalist>
          <button
            type="submit"
            className="ap-button absolute h-10 border-blue-200  w-15 ml-[245px] text-white bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add Prisoner
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPrisoner;
