import { Country, Gender, Alive } from "../App";

export function filterCastData(
  data: any,
  params: {
    country: Country;
    alive: Alive;
    gender: Gender;
    birthday: number | string;
    search: string;
  }
) {
  if (data !== undefined && data._embedded !== undefined) {
    let filteredData = [];
    // This is the filter chain
    filteredData = filterCountry(params.country, data._embedded.cast);
    filteredData = filterGender(params.gender, filteredData);
    filteredData = filterAlive(params.alive, filteredData);
    filteredData = filterBirthday(params.birthday, filteredData);
    filteredData = filterSearch(params.search, filteredData);
    return filteredData;
  } else {
    return [];
  }
}

function filterCountry(country: Country, cast: any) {
  if (country !== Country.None) {
    let filteredData = [];
    for (let i = 0; i < cast.length; i++) {
      if (cast[i].person.country.name === country) {
        filteredData.push(cast[i]);
      }
    }
    return filteredData;
  } else {
    return cast;
  }
}

function filterGender(gender: Gender, cast: any) {
  if (gender !== Gender.None) {
    let filteredData = [];
    for (let i = 0; i < cast.length; i++) {
      if (cast[i].person.gender === gender) {
        filteredData.push(cast[i]);
      }
    }
    return filteredData;
  } else {
    return cast;
  }
}

function filterAlive(alive: Alive, cast: any) {
  if (alive !== Alive.None) {
    let filteredData = [];
    for (let i = 0; i < cast.length; i++) {
      const lives = cast[i].person.deathday === null ? Alive.Yes : Alive.No;
      if (lives === alive) {
        filteredData.push(cast[i]);
      }
    }
    return filteredData;
  } else {
    return cast;
  }
}

function filterBirthday(birthday: number | string, cast: any) {
  const birthTime = new Date(birthday).getTime();
  if (!isNaN(birthTime)) {
    let filteredData = [];
    for (let i = 0; i < cast.length; i++) {
      const castBirth = new Date(cast[i].person.birthday).getTime();
      if (castBirth < birthTime) {
        filteredData.push(cast[i]);
      }
    }
    return filteredData;
  } else {
    return cast;
  }
}

function filterSearch(search: string, cast: any) {
  if (search !== "") {
    let filteredData = [];
    for (let i = 0; i < cast.length; i++) {
      const name = cast[i].person.name;
      if (name.includes(search)) {
        filteredData.push(cast[i]);
      }
    }
    return filteredData;
  } else {
    return cast;
  }
}
