import { useState } from "react";
import "./prisoner.css";
import axios from "axios";

const Prisoner = () => {
  const [Name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [polstn,setpolstn] =useState("");
  const [age,setage] =useState("");
  const [voter,setvoter] = useState("");
  const [resadd, setresadd] = useState("");
  const [peradd, setperadd] = useState("");
  const [adharnum, setadharnum] = useState("");
  const [prisonbefore, setprisonbefore] = useState("");
  const [firdate, setfirdate] = useState("");
  const [datetrial, setdatetrial] = useState("");
  const [crime, setcrime] = useState("");
  const [gender, setgender] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault()
    try {
       axios.post(`${import.meta.env.VITE_DEV_URL}api/prisonerdets`, {
        Name,
        FatherName,
        polstn,
        age,
        resadd,
        voter,
        
        adharnum,
        prisonbefore,
        firdate,
        crime,
        
      })
      .then((response)=>console.log(response))
      .catch((err)=>console.log(err))

      setName("")
      setFatherName("")
      setpolstn("")
      setage("")
      setvoter("")
      setresadd("")
      setadharnum("")
      setcrime("")
      setdatetrial("")
      setfirdate("")
      setperadd("")
      setprisonbefore("")
    } catch (error) {
      console.error(error)
    }
  };

  return (
   
    <div className="container">
      <div className="title">Register Yourself For Bail Application</div>
      <div className="content">
        <form onSubmit={handleSubmit} action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                name="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Age</span>
              <input
                name="age"
                value={age}
                onChange={(e) => setage(e.target.value)}
                type="text"
                placeholder="Enter Age"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Son Of (S/O)</span>
              <input
                name="FatherName"
                value={FatherName}
                onChange={(e) => setFatherName(e.target.value)}
                type="text"
                placeholder="Enter Father's Name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Residential Address</span>
              <input
                name="resadd"
                value={resadd}
                onChange={(e) => setresadd(e.target.value)}
                type="text"
                placeholder="Enter Residential Address"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Permanent Address (if exists)</span>
              <input
                name="peradd"
                value={peradd}
                onChange={(e) => setperadd(e.target.value)}
                type="text"
                placeholder="Enter Permanent Address"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Police Station (P/S)</span>
              <input
                name="polstn"
                value={polstn}
                onChange={(e) => setpolstn(e.target.value)}
                type="text"
                placeholder="Tobin Road PS"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Voter ID Number</span>
              <input
                name="voter"
                value={voter}
                onChange={(e) => setvoter(e.target.value)}
                type="text"
                placeholder="Enter Voter ID"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Aadhar Number</span>
              <input
                name="adharnum"
                value={adharnum}
                onChange={(e) => setadharnum(e.target.value)}
                type="text"
                placeholder="Enter Aadhar number"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">No of Prisonment Before</span>
              <input
                name="prisonbefore"
                value={prisonbefore}
                type="number"
                onChange={(e) => setprisonbefore(e.target.value)}
                placeholder="Enter the no of prisonment before"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">FIR Lodge Date</span>
              <input
                name="firdate"
                value={firdate}
                onChange={(e) => setfirdate(e.target.value)}
                type="date"
                placeholder="Enter FIR date"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Date of Trial</span>
              <input
                name="datetrial"
                value={datetrial}
                onChange={(e) => setdatetrial(e.target.value)}
                type="date"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="conviction">
              <label
                htmlFor="crime"
               
              >
                <span  style={{ fontSize: "16px;", fontWeight: "800;" }}>Convicted For:</span>
              </label>

              <input
                className="rounded border-[2px] ml-3 px-2 py-1"
                onChange={(e) => setcrime(e.target.value)}
                list="crime"
                name="crime"
                value={crime}
                id=""
                placeholder="Select crime"
              />
              <datalist id="crime">
                <option value="Cyber Crime"></option>
                <option value="Crime against SCs and STs"></option>
                <option value="Crime against Women"></option>
                <option value="Crime against Children"></option>
                <option value="Offenses against the state"></option>
                <option value="Economic Offenses"></option>
                <option value="Crime against Foreigners"></option>
                <option value="Others"></option>
              </datalist>
            </div>
            <div className="gender-details">
              <input
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                type="radio"
                name="gender"
                id="dot-1"
              />
              <input
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                type="radio"
                name="gender"
                id="dot-2"
              />
              <input
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                type="radio"
                name="gender"
                id="dot-3"
              />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Other</span>
                </label>
              </div>
            <button  className="button" type="submit">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Prisoner;
