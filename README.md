<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">Judicio</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> An algorithm-driven robust Bail Reckoning System utilizing BNS, BNSS and CrPC.
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

The objective is to develop an innovative digital solution, termed the "Bail Reckoner," designed to assist undertrial prisoners, legal aid providers, and judicial authorities in streamlining the bail process. 

The Bail Reckoner aims to simplify and expedite the bail application and evaluation process by considering various legal and procedural parameters. 
Parameters to Consider for integration in the Tool: 
1. Nature of the Offense and Penal Provisions: In this regard Statutes like Indian Penal Code,1860 and the upcoming Bhartiya Nyaya Sanhita 2023; Bhartiya Suraksha Sanhita 2023; and Bhartiya Saakshya Adhiniyam 2023; is covered. Special statutes on the following under-mentioned areas should also be covered: 
1. Cyber Crimes 
2. Crimes Against SCs and STs 
3. Crimes Against Women 
4. Crimes Against Children 
5. Offences Against the State 
6. Economic Offence 
7. Crimes Against Foreigners 

By leveraging technology and innovation, the Bail Reckoner aims to make the bail process more transparent, efficient, and just, contributing to a more equitable legal system.

## 💡 Solution <a name = "idea"></a>

The "Bail Reckoner" is a digital tool aimed at simplifying and expediting the bail process for undertrial prisoners, legal aid providers, and judicial authorities. It integrates key legal and procedural parameters to ensure that the process is more transparent, efficient, and equitable. The tool covers various offenses under laws like the Indian Penal Code (IPC), Bhartiya Nyaya Sanhita (2023), and special statutes for crimes such as cybercrimes, offenses against women, children, and Scheduled Castes and Tribes (SCs and STs). A comprehensive backend database maps penalties to specific sections of these statutes, providing detailed legal information.

The Bail Reckoner tracks the duration of imprisonment already served by undertrial prisoners, allowing the system to calculate bail eligibility based on time served and applicable sentences. Additionally, it evaluates factors of judicial discretion, such as the risk of the prisoner fleeing or influencing witnesses, providing judges with a clearer understanding of the risks involved.

Procedural requirements like surety bonds, personal bonds, and identity verification are outlined, ensuring compliance with the IPC, CrPC, and other legal provisions. The tool also integrates key judicial rulings on bail, particularly for prisoners who have served a substantial portion of their potential sentence, automatically identifying those eligible for bail.

Designed to be user-friendly, the Bail Reckoner offers a clear interface for undertrial prisoners, legal aid providers, and judicial authorities, helping them navigate the bail process efficiently. It is also a plug-and-play tool, meaning it can seamlessly integrate with existing legal and prison systems. By leveraging technology, the Bail Reckoner enhances fairness in the bail process, ensuring timely decisions and reducing unnecessary delays in justice.


## 🚀 Future Scope <a name = "future_scope"></a>

In the upcoming future, we have plans to develop a comprehensive but accurate Machine Learning model capable of completely automating the bail - criterion verification process, thus further making the system tamper-proof.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them.

```
NodeJS, MongoDB, Express, React, Python , Metamask , Ganache 
```

### Installing

The installation procedure is very simple

Step - 1:

```
npm install
```
Step - 2:

```
cd blockchain
npm install -g truffle
npm install -g ganache-cli
npm install @chainlink/contracts
npm install web3
npm install axios
npm install express
npm install chai
npm install mocha
```

Step - 2:

```
cd blockchain
ganache-cli --port 7545
```

Step - 4:
Open a New Terminal
```
cd blockchain
truffle migrate 
cd..
npm run dev
```

## 🎈 Usage <a name="usage"></a>

Go to this [link](https://judicio.vercel.app/) to use a working, deployed prototype.

## ⛏️ Built With <a name = "tech_stack"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Flask](https://flask.palletsprojects.com/en/3.0.x/) - Virtual Environment

## ✍️ Authors <a name = "authors"></a>

- [@RudranilChowdhury](https://github.com/Zephyrus2822) - Front - End Developer
- [@AnuskaBiswas](https://github.com/anuska2027biswas) - Front - End Developer
- [@ChandanKumar](https://github.com/Chandan-Kr-dev) - Back - End Developer
- [@AdbulRehman](https://github.com/Abdul-Rahman-58) - GeminiAPI Training
- [@AyashBera](https://github.com/Ayash-Bera) - UI/UX Designer & Web3 
- [@ArnaDutta](https://github.com/arnadutta) - Proof-of-Concept and Design

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- [@AditiGhosh](https://github.com/GhoshAditi)
