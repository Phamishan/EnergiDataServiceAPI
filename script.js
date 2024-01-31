function getData() {
    fetch("https://api.energidataservice.dk/dataset/CO2Emis?limit=5")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.records[0].Minutes5DK);
            const table = document.getElementById("tableForData");
            for (let i = 0; i < data.records.length; i++) {
                const tr = document.createElement("tr");
                const tdForEmission = document.createElement("td");
                tdForEmission.innerHTML = data.records[i].CO2Emission;
                const tdForMinutes5 = document.createElement("td");
                tdForMinutes5.innerHTML = data.records[i].Minutes5DK;
                const tdForPriceArea = document.createElement("td");
                tdForPriceArea.innerHTML = data.records[i].PriceArea;

                tr.appendChild(tdForEmission);
                tr.appendChild(tdForMinutes5);
                tr.appendChild(tdForPriceArea);
                table.appendChild(tr);
            }
        });
}
