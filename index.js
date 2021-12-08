const btn = document.querySelector(".btn");
const pin = document.querySelector(".intPin");
const vacDate = document.querySelector(".intDate");
const tableData = document.querySelector(".table_data");

async function createData(event){
    event.preventDefault();
    const userPin = pin.value;
    const userVacDate = vacDate.value;
    const rDate = userVacDate.split("-").reverse().join("-");
    const fetchData = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${userPin}&date=${rDate}`);
    const data = await fetchData.json();
    const res = data.sessions;
    for(let i = 0; i<=res.length; i++){
        tableData.innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${res[i].date}</td>
        <td>${res[i].name}</td>
        <td>${res[i].pincode}</td>
        <td>${res[i].center_id}</td>
        <td>${res[i].slots}</td>
        <td>${res[i].available_capacity}</td>
        <td>${res[i].vaccine}</td>
        </tr>
        `;
    }
};
