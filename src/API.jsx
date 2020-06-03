// All fetch for data will done here

import axios from "axios";
const url = "https://covid19.mathdro.id/api";

//When the App mount this will be first data to populate the app.
export const gobalData = async () => {
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios(url);
        const requiredData = { confirmed, recovered, deaths, lastUpdate };
        return requiredData;
    } catch (error) {}
};

export const country = async () => {
    const url = "https://api.covid19api.com/summary";
    try {
        const { data } = await axios({
            method: "GET",
            url: "https://covid-193.p.rapidapi.com/statistics",
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "cd10b36193msh385809215ab606fp10432bjsn8f3f970d9d66",
                useQueryString: true,
            },
        });
        const requiredDatas = data.response.map((country) => ({
            Country: country.country,
            Newcase: country.cases.new,
            Totalconfirmed: country.cases.total,
            Totalrecovered: country.cases.recovered,
            day: country.day,
            Totaldeaths: country.deaths.total,
            Newdeaths: country.deaths.new,
        }));
        return requiredDatas;
    } catch (error) {}
};

export const countries = async () => {
    try {
        const { data } = await axios(`${url}/countries`);
        const requiredDatas = data.countries.map((country) => ({
            label: country.name,
            value: country.name,
        }));
        requiredDatas.unshift({ label: "Global", value: "Global" });
        return requiredDatas;
    } catch (error) {}
};

export const specCountry = async (country) => {
    let newUrl = `${url}/countries/${country}`;
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios(newUrl);
        const requiredData = { confirmed, recovered, deaths, lastUpdate };
        console.log(requiredData);
        return requiredData;
    } catch (error) {}
};
