

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Allan-Teran/portifolio-DIO/refs/heads/master/assets/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}

