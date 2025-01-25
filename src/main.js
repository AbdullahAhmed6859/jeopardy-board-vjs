const game = document.getElementById("game");

import a6 from "./assets/images/a6.png";
import q6 from "./assets/images/q6.png";
import bio_q6 from "./assets/images/bio_q6.png";

const jeopardyCategories = [
  {
    genre: "Physics",
    questions: [
      {
        question:
          " A water wave in a ripple tank is diffracted as it passes through a gap in a barrier. Which two factors affect the angle of diffraction of the wave? <br/><br/> A) the amplitude and frequency of the incident wave  <br/> B) the amplitude of the incident wave and the width of the gap <br/> C) the wavelength and amplitude of the incident wave <br/>D) the wavelength of the incident wave and the width of the gap",
        answer:
          "D) the wavelength of the incident wave and the width of the gap",
        level: 10,
      },
      {
        question:
          "2) The instantaneous and average velocity of a body are equal when it has______? <br/><br/> A) Non-uniform acceleration <br/> B) Zero acceleration <br/> C) Uniform acceleration <br/> D) Variable acceleration",
        answer: "C) Uniform acceleration",
        level: 20,
      },
      {
        question:
          "3) The intensity of radiation emitted by a black body is directly proportional to the fourth power of temperature in Kelvin. This statement is known as the<br/><br/>A. Compton's effect.<br/>B. Plank's radiation law.<br/>C. Stefan-Boltzmann law.<br/>D. De-Broglie's hypothesis.",
        answer: "C. Stefan-Boltzmann law.",
        options: [],
        level: 30,
      },
      {
        question:
          "4) Which of the following best describes the behavior of an electron in the double-slit experiment?<br/><br/>A. The electron always follows a single, predictable path <br/>B. The electron behaves like a classical particle with a definite trajectory <br/>C. The electron demonstrates both wave-like and particle-like properties<br/>D. The electron disappears when observed",
        answer:
          "The electron demonstrates both wave-like and particle-like properties",
        level: 40,
      },
      {
        question:
          "5) A gas is compressed at a constant pressure of 50 N/m^2 from a volume of 10m^3To a volume of 4m^3. Energy of 100j is then added to the gas by heating. Its internal energy is<br/><br/>A. increased by 400j<br/>B. increased by 200j<br/>C. increased by 100j<br/>D. decreased by 200j",
        answer: "A. increased by 400j",
        level: 50,
      },
      {
        question:
          "6) A projectile is launched at an angle of 45° with an initial velocity of 20 m/s. Calculate its maximum height.<br/><br/>A.5<br/>B.10<br/>C.15<br/>D.20",
        answer: "B.10",
        level: 60,
      },
    ],
  },
  {
    genre: "Biology",
    questions: [
      {
        question:
          "Viruses are called non-cellular infections entities because:<br/><br/>A. They are pathogens and cause infections<br/>B. They can replicate inside and outside the living cell<br/>C. They cause infections and can only replicate inside living cell<br/>D. They can affect the host",
        answer:
          "C. They cause infections and can only replicate inside living cell",
        level: 10,
      },
      {
        question:
          "Which of the following is not a function of the liver?<br/><br/>A. Detoxification of harmful substances<br/>B. Production of bile<br/>C. Regulation of blood sugar levels<br/>D. Storage of oxygen",
        answer: "D. Storage of oxygen",
        level: 20,
      },
      {
        question:
          "Which equation represents aerobic respiration in plant cells?<br/><br/>A. 6CO2 + 6H2O → C6H12O6 + 6O2<br/>B. 2C2H5OH + 2CO2 → C6H12O6<br/>C. C6H12O6 → 2C2H5OH + 2CO2<br/>D. C6H12O6 + 6O2 → 6CO2 + 6H2O",
        answer: "D. C6H12O6 + 6O2 → 6CO2 + 6H2O",
        level: 30,
      },
      {
        question:
          "Which of the following is a type of sclerenchyma cells which is found in nut shells and provides protection?<br/><br/>A. Fibre<br/>B. Vessel<br/>C. Sclereid<br/>D. Tracheid",
        answer: "C. Sclereid",
        level: 40,
      },
      {
        question:
          "A compound, analogous to alcohols, with the general formula RSH and a disagreeable odour is termed as<br/><br/>A. enol.<br/>B. thiol.<br/>C. borole.<br/>D. pyrrole.",
        answer: "B. thiol.",
        level: 50,
      },
      {
        question: `<img src=${bio_q6} width='800'> <br/> <br/> A) L-glucose does not fit into the active site of glucose oxidase. <br/> B) L-Glucose has a different Structural formual to D-Glucode <br/>C) L-Glucose is a synthetic sugar <br/>D) L-Glucose is the mirror image of D-Glucose`,
        answer:
          "A) L-glucose does not fit into the active site of glucose oxidase. ",
        level: 60,
      },
    ],
  },
  {
    genre: "Mathematics",
    questions: [
      {
        question:
          "The complex number - 3(2 - i)+ 2(1+ i) can be expressed in the form of a + bi as<br/><br/>A) 4 - 5i<br/>B) 4 + 5i<br/>C) -4 + 5i<br/>D) - 4 - 5i",
        answer: "C) - 4 + 5i",
        level: 10,
      },
      {
        question:
          "Value of tan(675)° is:<br/><br/>A) √3<br/>B) 1<br/>C) -1/√3<br/>D) -1",
        answer: "D) -1",
        level: 20,
      },
      {
        question:
          "What is the magnitude of the vector 12i-8j-24k?<br/><br/>(A) 18<br/>(B) 28 )<br/>(C) 38<br/>(D) 48",
        answer: "B) 28",
        level: 30,
      },
      {
        question:
          "If is one of the cube roots of unity, -20 will be<br/><br/>A) -1<br/>B) -w<br/>C) w<br/>D) 2w",
        answer: "C) w",
        level: 40,
      },
      {
        question:
          "Distance between the parallel lines x+y-13=0 and 2x+2y+25=0 is:<br/><br/>A) 0<br/>B) 26<br/>C) 39√2<br/>D) 13√2",
        answer: "D) 13√2",
        level: 50,
      },
      {
        question: `<img src=${q6} alt='Description of the image'>`,
        answer: `<img src=${a6} alt='Description of the image'>`,
        level: 60,
      },
    ],
  },
  {
    genre: "Chemistry",
    questions: [
      {
        question:
          "The identification of functional groups within a molecule is easily accomplished by:<br/><br/>A. mass spectrometry.<br/>B. infrared spectroscopy. <br/>C. ultraviolet-visible spectroscopy.<br/>D. nuclear magnetic resonance spectroscopy.",
        answer: "B. infrared spectroscopy.",
        level: 10,
      },
      {
        question:
          "Balance the chemical equation: C3H8 + O2 → CO2 + H2O.<br/><br/>A. C3H8 + 5 O2 → 3 CO2 + 4 H20 <br/>B. C3H8 + 4 O2 → 3 CO2 + 4 H20<br/>C. C3H8 + 6 O2 → 3 CO2 + 4 H20<br/>D. C3H8 + 3 O2 → 3 CO2 + 5 H20",
        answer: "A. C3H8 + 5 O2 → 3 CO2 + 4 H20",
        level: 20,
      },
      {
        question:
          "When a non-volatile solute is added to a pure solvent, the<br/><br/>A. boiling point of the solution decreases.<br/>B. freezing point of the solution increases.<br/>C. vapour pressure of the solvent increases.<br/>D. rate of evaporation of the solvent decreases. ",
        answer: "D. rate of evaporation of the solvent decreases.",
        level: 30,
      },
      {
        question:
          "How many moles of oxygen gas are needed for the complete combustion of 1mol of (CH3)3COH?<br/><br/>A. 6<br/>B. 6.5<br/>C. 12<br/>D. 13",
        answer: "A. 6",
        level: 40,
      },
      {
        question:
          "Which of the following statements is FALSE for a phenol?<br/><br/>A. The conjugate base of phenol is more stable than a phenol molecule.<br/>B. The addition of a strong base to a phenol produces a reactive nucleophile.<br/>C. The O–H group attached to a benzene ring in phenol shows acidic properties.<br/>D. The negative charge in the phenoxide ion remains localized on the oxygen atom.",
        answer:
          "D. The negative charge in the phenoxide ion remains localized on the oxygen atom.",
        level: 50,
      },
      {
        question:
          "A compound, analogous to alcohols, with the general formula RSH and a disagreeable odour is termed as<br/><br/>A. enol.<br/>B. thiol. <br/>C. borole.<br/>D. pyrrole.",
        answer: "B. thiol.",
        level: 60,
      },
    ],
  },
  {
    genre: "Tech",
    questions: [
      {
        question:
          "Which of the following memories can a CPU directly communicate with?<br/><br/>A. Register <br/>B. CD-ROM<br/>C. DVD-ROM<br/>D. USB Flash drive",
        answer: "A. Register",
        level: 10,
      },
      {
        question:
          "Which of the following is FALSE about assembly language?<br/><br/>A. It takes less memory space as compared to high-level languages.<br/>B. Debugging of programs is simplified as compared to machine code.<br/>C. Before running on a machine, an assembly language program requires a translator.<br/>D. Each assembly language instruction generates many machine language instructions. ",
        answer:
          "D. Each assembly language instruction generates many machine language instructions.",
        level: 20,
      },
      {
        question:
          "Which of the following is not a type of database?<br/><br/>A. Relational database<br/>B. Hierarchical database<br/>C. Object-oriented database<br/>D. Virtual database ",
        answer: "D. Virtual database",
        level: 30,
      },
      {
        question:
          "Which of the following encryption algorithms is asymmetric?<br/><br/>A. RSA <br/>B. AES<br/>C. DES<br/>D. Blowfish",
        answer: "A. RSA",
        level: 40,
      },
      {
        question:
          "In quantum computing, what is a qubit?<br/><br/>A. A binary representation of data<br/>B. A unit of classical memory<br/>C. A quantum version of the classical bit <br/>D. A quantum algorithm",
        answer: "C. A quantum version of the classical bit",
        level: 50,
      },
      {
        question:
          "Which of these are not low-level programming languages? <br/><br/> a) Python <br/> b) Java <br/> c) Both a and b <br/> d) none of the above",
        answer: "c) Both A and B",
        level: 60,
      },
    ],
  },

  {
    genre: "Mystery",
    questions: [
      {
        question:
          "What are some common applications or uses of DNA in various fields? <br/><br/> A) DNA is used for generating electricity. <br/> B) DNA is employed in agriculture for pest control. <br/> C) DNA is utilized in forensic science for crime scene analysis. <br/> D) DNA is a source of fuel for vehicles.",
        answer:
          "C) DNA is utilized in forensic science for crime scene analysis.",
        options: [
          "A) DNA is used for generating electricity.",
          "B) DNA is employed in agriculture for pest control.",
          "C) DNA is utilized in forensic science for crime scene analysis.",
          "D) DNA is a source of fuel for vehicles.",
        ],
        level: 10,
      },
      {
        question:
          "What happens when a massive star collapses under its gravity, forming a region in space with gravitational forces so strong that nothing, not even light, can escape? <br/><br/> A) The star expands and becomes a red giant. <br/> B) The star transforms into a neutron star. <br/> C) The star collapses to form a black hole. <br/> D) The star releases a burst of energy known as a supernova.",
        answer: "C) The star collapses to form a black hole.",
        options: [
          "A) The star expands and becomes a red giant.",
          "B) The star transforms into a neutron star.",
          "C) The star collapses to form a black hole.",
          "D) The star releases a burst of energy known as a supernova.",
        ],
        level: 20,
      },
      {
        question:
          "What does HTTP stand for in the context of web communication? <br/><br/>  a) HyperText Transmission Protocol <br/> b) HyperText Transfer Protocol <br/> c) HyperTransfer Text Protocol <br/> d) High-Tech Transport Protocol ",
        answer: "b) HyperText Transfer Protocol",
        options: [],
        level: 30,
      },
      {
        question:
          "What is the pH of a mixture of hydrochloric acid (HCl) and vinegar? <br/><br/> A. Greater than 7 <br/> B. Less than 2.5  <br/> C. Between 2.5 and 7  <br/> D. Exactly 7",
        answer: "B. Less than 2.5 ",
        options: [
          "A. Greater than 7",
          "B. Less than 2.5",
          "C. Between 2.5 and 7",
          "D. Exactly 7",
        ],
        level: 40,
      },
      {
        question:
          "If sin(x) = 3/5 and cos(x) < 0, what is the value of tan(x)? <br/><br/>  A) 3/5 <br/> B) 4/3 <br/> C) −(4/3) <br/> D) −(3/4)",
        answer: "C) −(4/3)",
        options: ["A) 3/5", "B) 4/3", "C) −(4/3)", "D) −(3/4)"],
        level: 50,
      },
      {
        question:
          "Which of the following statements best describes the concept of perpetual motion? <br/><br/> A) A system that can continuously produce energy without any external input. <br/> B) A machine that operates indefinitely without any loss of energy due to friction or other factors. <br/> C) The idea that a system can create energy from nothing and operate perpetually. <br/> D) A device that can violate the laws of thermodynamics by sustaining motion indefinitely.",
        answer:
          "B) A machine that operates indefinitely without any loss of energy due to friction or other factors.",
        options: [
          "A) A system that can continuously produce energy without any external input.",
          "B) A machine that operates indefinitely without any loss of energy due to friction or other factors.",
          "C) The idea that a system can create energy from nothing and operate perpetually.",
          "D) A device that can violate the laws of thermodynamics by sustaining motion indefinitely.",
        ],
        level: 60,
      },
    ],
  },
];

function addCategory(category) {
  const column = document.createElement("div");
  column.classList.add("genre-column");

  const genreTitle = document.createElement("div");
  genreTitle.classList.add("genre-title");
  genreTitle.innerHTML = category.genre;

  column.appendChild(genreTitle);
  game.append(column);

  category.questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.append(card);

    switch (question.level) {
      case 10:
      case 20:
      case 30:
      case 40:
      case 50:
      case 60:
        card.innerHTML = question.level;
        break;
      default:
        break;
    }

    card.setAttribute("data-question", question.question);
    card.setAttribute("data-answer", question.answer);
    card.setAttribute("data-value", card.innerHTML);

    card.addEventListener("click", flipCard);
  });
}

function flipCard() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const content = document.createElement("div");
  content.classList.add("modal-content");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", function () {
    modal.remove();
  });
  content.appendChild(closeBtn);

  const questionText = document.createElement("div");
  questionText.classList.add("modal-text");
  questionText.innerHTML = this.getAttribute("data-question");

  const card = this;

  if (!card.classList.contains("clicked")) {
    card.classList.add("clicked");

    const answerButton = document.createElement("button");
    answerButton.classList.add("answer-button");
    answerButton.innerHTML = "Show Answer";
    answerButton.setAttribute("data-answer", this.getAttribute("data-answer"));

    answerButton.addEventListener("click", function () {
      questionText.style.display = "none";
      answerButton.style.display = "none";

      const answerText = document.createElement("div");
      answerText.classList.add("modal-text");
      const answer = answerButton.getAttribute("data-answer");
      answerText.innerHTML = answer;

      content.appendChild(answerText);
    });

    content.appendChild(questionText);
    content.appendChild(answerButton);

    modal.appendChild(content);
    document.body.appendChild(modal);
  }
}

jeopardyCategories.forEach((category) => addCategory(category));
