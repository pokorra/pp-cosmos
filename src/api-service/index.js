
const apiHost = "https://api.spacexdata.com/v4"
export const getData = (categoryPath) => fetch(`${apiHost}/${categoryPath}`).then(res => res.json())
