const loadCountries = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    displayCountries(data);
}

loadCountries()

const displayCountries = (countries) =>{

    const countriesContainer = document.getElementById('countries');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('single-country')
        countryDiv.addEventListener("click", function(){
            loadCountryDetails(country.name);
            
        })
        countryDiv.innerHTML = `
        <img src='${country.flag}' width='200px'/>
        <h2>${country.name.slice(0,20)}</h2>
        <p>${country.capital}</p>
        `
        countriesContainer.appendChild(countryDiv)
    }
    )
    
}

const loadCountryDetails =async (name) =>{
    try{
        const res = await fetch(`https://restcountries.eu/rest/v1/name/${name}`)
        const data = await res.json();
        countryDetails(data[0]);
}catch(err){
    alert("Something Wrong. Please Try Again Later")
    
}}

const countryDetails = info =>{
    
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";


    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
  modal.style.display = "none";
}}

const modalBody = document.getElementById('modal-body');
modalBody.innerHTML=`
                <h1>${info.name}</h1>
                <p>Capital: ${info.capital}</p>
                <p>Area: ${info.area}</p>
                <p>Currencies: ${info.currencies[0]}</p>
                <p>Population: ${info.population}</p>
                <p>Region: ${info.region}</p>
                <p>Language: ${info.languages[0]}</p>
                <p>Time zone: ${info.timezones[0]}</p>
`
}