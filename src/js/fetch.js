export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,languages,population,capital,flags`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status)
        }
        return resp.json();
    });
};