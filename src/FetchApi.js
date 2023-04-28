const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
}

export const fetchData = async (defaultQuery, id) => {
    const { app_id, app_key } = queryStrings;
    let data;
    try {
        if (id) {
            data = await fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${app_id}&app_key=${app_key}`);
        }
        if (defaultQuery) {
            data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        }

        const response = await data.json();
        return response;
    }
    catch (e) {
        console.log(e, 'something went wrong')
        return e
    }
}
