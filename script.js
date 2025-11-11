// Ciao ragazzi,
// esercizio di oggi: Our Team

// repo: js-our-team

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)

// Bonus

// Curare meglio l'aspetto grafico
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  },

];

const cardContainer = document.querySelector(".team-card-container");





let memberCards = "";
for (let i = 0; i < teamMembers.length; i++) {
  const curMember = teamMembers[i];
  const { name, role, email, img } = curMember;
  const card = `
  <div class="col-md-4">
      <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col">
                            <img src="${img}" class="img-fluid img-thumbnail rounded-start" alt="...">
                        </div>
                        <div class="col">
                            <div class="card-body">
                                <h5 class="card-title name">${name}</h5>
                                <p class="card-text role">${role}</p>
                                <p class="card-text e-mail"><small class="text-body-secondary">${email}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                `;

  memberCards += card;

}

cardContainer.innerHTML = memberCards;

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const fileInput = document.getElementById("file");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newName = nameInput.value;
  const newRole = roleInput.value;
  const newEmail = emailInput.value;
  const newFile = fileInput.value;

  const newMember = {

    name: newName,
    role: newRole,
    email: newEmail,
    img: newFile,
  }

  teamMembers.push(newMember);

  const newCard = `
    <div class="col-md-4">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col">
            <img src="${newFile}" class="img-fluid img-thumbnail rounded-start" alt="...">
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title name">${newName}</h5>
              <p class="card-text role">${newRole}</p>
              <p class="card-text e-mail"><small class="text-body-secondary">${newEmail}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>`;


  cardContainer.innerHTML += newCard;

  form.reset();

});