import axios from "axios";
const config = {
    headers: {
        Authorization: "Bearer 351c1044-75f2-44ef-8628-cf078cc7064e",
    }
}
const url = "https://coda.io/apis/v1/docs/yt8sLYrmCS/tables/grid-kXtDm5PUkV/rows?useColumnNames=true&sortBy=natural&tableTypes=table"

const response = await axios.get(url, config)
const jobs = response.data.items;

return jobs