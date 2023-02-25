let API_URL = 'https://api.spacexdata.com/'

export async function getAllRockets (){
    try {
        let url = `${API_URL}v4/rockets`;
        let response = await fetch(url)
        let data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getAllLaunches() {
    try {
        let url = `${API_URL}v3/launches`;
        let response = await fetch(url)
        let data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getRocketById (rocketId){
    try {
        let url = `${API_URL}v3/rockets/${rocketId}`;
        let response = await fetch(url)
        let data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getLaunchByFlighNumber(FlighNumber, setFunction){
    try {
        let url = `${API_URL}v3/launches/${FlighNumber}`;
        let response = await fetch(url)
        let data = await response.json()
        setFunction(data)
        return data
    }catch (error) {
        console.error(error)
    }
}