//Select all the elements

const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector("total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

const ctx = document.querySelector("#axes_line_chart").getContext("2d");

//App Variables
let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  dates = [];

// Users Country Code via API
let country_code = function geoplugin_countryCode() {
  return "DE";
};
let user_country;
country_list.forEach((country) => {
  if (country.code == country_code) {
    user_country = country.name;
  }
});

////////https://rapidapi.com/astsiatsko/api/covid19-monitor-pro/////////////

function fetchData(user_country) {
  fetch(
    "https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_country_paginated.php?limit=%3CREQUIRED%3E&page=%3CREQUIRED%3E&country=%3CREQUIRED%3E",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "47ef66e40dmsha279e7a4e351b9ep152dcbjsn336bfd0ffd35",
        "x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      response.json();
    })
    .then((data) => {
      dates = Object.keys(data);
      dates.forEach((date) => {
        let DATA = data[date];
        app_data.push(DATA);
        cases_list.push(parseInt(DATA.total_cases.replace(/,/g, "")));
        recovered_list.push(parseInt(DATA.total_recovered.replace(/,/g, "")));
        deaths_list.push(parseInt(DATA.total_deaths.replace(/,/g, "")));
      });
    })
    .then(() => {
      updateUI();
    })
    .catch((error) => {
      alert(error);
    });
}

fetchData(user_country);

function updateUI() {
  updateStats();
}

function updateStats() {
  let last_entry = app_data[app_data.length - 1];
  let before_last_entry = app_data[app_data.length - 2];

  country_name_element.innerHTML = last_entry.country_name;
  total_cases_element.innerHTML = last_entry.total_cases || 0;

  recovered_element.innerHTML = last_entry.total_recovered || 0;
  new_recovered_element.innerHTML =
    last_entry.total_recovered - before_last_entry.total_recovered;
}
