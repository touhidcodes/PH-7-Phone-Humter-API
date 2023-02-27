const loadPhone = async (phone) => {
	const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
	const res = await fetch(url);
	const data = await res.json();
	displayPhone(data.data);
};

const displayPhone = (phones) => {
	const phonesContainer = document.getElementById("phones-container");
	phonesContainer.innerHTML = "";

	// Display 20 Phones Only
	phones = phones.slice(0, 20);

	//Display no Phone
	const noPhone = document.getElementById("text-warning");
	if (phones.length == 0) {
		noPhone.classList.remove("d-none");
	} else {
		noPhone.classList.add("d-none");
	}

	// Display Phone
	phones.forEach((phone) => {
		console.log(phone);
		const phoneCard = document.createElement("div");
		phoneCard.classList.add("col");
		phoneCard.innerHTML = `
        <div class="card h-100 p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional
                content. This content is a little bit longer.</p>
        </div>
        </div>
        `;
		phonesContainer.appendChild(phoneCard);
	});
	toggleSpinner(false);
};

loadPhone("iphone");

const searchPhone = () => {
	toggleSpinner(true);
	const search = document.getElementById("input-phone").value;
	loadPhone(search);
};

const toggleSpinner = (isLoading) => {
	const loaderSection = document.getElementById("loader");
	if (isLoading) {
		loaderSection.classList.remove("d-none");
	} else {
		loaderSection.classList.add("d-none");
	}
};
