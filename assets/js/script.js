/*Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team!*/

const teamMembers = [
	{
		name: 'Marco Bianchi',
		role: 'Designer',
		email: 'marcobianchi@team.com',
		img: './assets/img/male1.png'
	},
	{
		name: 'Laura Rossi',
		role: 'Front-end Developer',
		email: 'laurarossi@team.com',
		img: '../assets/img/female1.png'
	},
	{
		name: 'Giorgio Verdi',
		role: 'Back-end Developer',
		email: 'giorgioverdi@team.com',
		img: '../assets/img/male2.png'
	},
	{
		name: 'Marta Ipsum',
		role: 'SEO Specialist',
		email: 'martarossi@team.com',
		img: '../assets/img/female2.png'
	},
	{
		name: 'Roberto Lorem',
		role: 'SEO Specialist',
		email: 'robertolorem@team.com',
		img: '../assets/img/male3.png'
	},
	{
		name: 'Daniela Amet',
		role: 'Analyst',
		email: 'danielaamet@team.com',
		img: '../assets/img/female3.png'
	}
]
const teamsEl = document.getElementById('teams')
for (let i = 0; i < teamMembers.length; i++) {
	const team = teamMembers[i]
	let { name, role, email, img } = team
	console.log(team)

	let markup = `<div class="col">
						<div class="card bg-black d-flex flex-row align-items-center">
							<img src="${img}" class=col-lg-4 alt="" />
							<div class="ms-2 col-lg-9">
								<h2 class="text-white">${name}</h2>
								<h5 class="text-white">${role}</h5>
								<p class="text-primary">${email}</p>
							</div>
						</div>
					</div>
`

	teamsEl.insertAdjacentHTML('beforeend', markup)
}
