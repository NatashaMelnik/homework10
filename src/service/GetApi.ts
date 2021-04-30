
const url = {
    url10: 'https://swapi.dev/api/people/10/',
    url5: 'https://swapi.dev/api/people/5/',
    url11: 'https://swapi.dev/api/people/11/'
}

export async function getApi10() {

    let response10;
    let person10;

    try {
        response10 = await fetch(url.url10);

        if (!response10.ok) {
            throw new Error(`HTTP error! status: ${response10.status}`);
        } else {
            person10 = await response10.json();
        }
    } catch (e) {
        console.log(e);
    }

    return person10;
}

export async function getApi5() {
    let response5;
    let person5;
    try {
        response5 = await fetch(url.url5);
        if (!response5.ok) {
            throw new Error(`HTTP error! status: ${response5.status}`);
        } else {
            person5 = await response5.json();
        }
    } catch (e) {
        console.log(e);
    }
    return person5;
}

export async function getApi11() {
    let response11;
    let person11;
    try {
        response11 = await fetch(url.url11);
        if (!response11.ok) {
            throw new Error(`HTTP error! status: ${response11.status}`);
        } else {
            person11 = await response11.json();
        }
    } catch (e) {
        console.log(e);
    }
    return person11;
}
