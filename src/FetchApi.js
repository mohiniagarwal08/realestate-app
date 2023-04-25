import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'

const url = "https://bayut.p.rapidapi.com/properties/list";
export const FetchApi = async (url) => {
    console.log(url, 'ghbvfgh');
    const data = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'iFUdxubHsQmshe51vbzzowIsXzBrp1zQDPGjsnlyuFeYlDeBLs'
        }
    })


}

