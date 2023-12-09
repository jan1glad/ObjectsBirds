const ptak = {
    nazwa: "ptak",
    typ: "brak",
    iloscSkrzydel: 2,
    dziub: "płaski",
    imie: "brak",
    jedzenie: "miesozerny",
    skora: "brak"

};

let ptaki = ["dzikiNielot","chodowlanyNielot","dzikiLatajacy","chodowlanyLatajacy"];

let ptakiWszystkie = ["ptak","latajacy","nielot","dzikiNielot","chodowlanyNielot","dzikiLatajacy","chodowlanyLatajacy"];


let flotaPtakow = [];


const latajacy = Object.create(ptak);
latajacy.typ = "latajacy";
latajacy.iloscSkrzydel = 2;
latajacy.skora = "siersc";

const nielot = Object.create(ptak);
nielot.typ = "nielot";
nielot.iloscSkrzydel = 0;
nielot.skora = "futro"

const dzikiNielot = Object.create(nielot);
dzikiNielot.nazwa = "dzikiNielot";
dzikiNielot.dziub = "Podluzny";
//dzikiNielot.imie = "Marcin";
dzikiNielot.jedzenie = "Roslinozerny";

const chodowlanyNielot = Object.create(nielot);
chodowlanyNielot.nazwa = "chodowlanyNielot";
chodowlanyNielot.dziub = "Plaski";
//chodowlanyNielot.imie = "Tomek";
chodowlanyNielot.jedzenie = "Miesozerny";


const dzikiLatajacy = Object.create(latajacy);
dzikiLatajacy.nazwa = "dzikiLatajacy";
dzikiLatajacy.dziub = "Ostry";
//dzikiLatajacy.imie = "Ameryka";
dzikiLatajacy.jedzenie = "Miesozerny"


const chodowlanyLatajacy = Object.create(latajacy);
chodowlanyLatajacy.nazwa = "chodowlanyLatajacy";
chodowlanyLatajacy.dziub = "Mały";
//dzikiLatajacy.imie = "Ameryka";
chodowlanyLatajacy.jedzenie = "Roslinozerny";


const zwierzeta = {
    "ptak":ptak,
    "latajacy":latajacy,
    "nielot":nielot,
    "dzikiNielot":dzikiNielot,
    "chodowlanyNielot":chodowlanyNielot,
    "dzikiLatajacy":dzikiLatajacy,
    "chodowlanyLatajacy":chodowlanyLatajacy
};


let sections = [];

function startJG(){
    sections = document.getElementsByTagName('section');
    wybierzPtakaJG();
    wybierzPtakaJG2();
    showHideJG(0);
    
}

function showHideJG(nr){
    for (let i=1; i<sections.length; i++){
    sections[i].hidden = true;
    }
    sections[nr].hidden = false
    if(nr === 3){ countParameters();}
   }

function wybierzPtakaJG(){
    let selectPtak = document.getElementById("ptakiJG");
    for(let i=0;i<ptaki.length; i++){
        let option = document.createElement("option");
        option.innerHTML = option.value = ptaki[i];
        selectPtak.appendChild(option);
    }
}
function wybierzPtakaJG2(){
    let selectPtak = document.getElementById("ptakMODIFYJG");
    for(let i=1;i<ptakiWszystkie.length; i++){
        let option = document.createElement("option");
        option.innerHTML = option.value = ptakiWszystkie[i];
        selectPtak.appendChild(option);
    }
}

function addBirdJG(){
    let nowaWartosc = document.getElementById("ptakiJG").value;
    let imieNowyWartosc = document.getElementById("imiePtakaJG").value;
   // console.log(nowaWartosc);
    //console.log(imieNowyWartosc);

    if (imieNowyWartosc === ""){
        imieNowyWartosc = "brak imienia";
    }

    let nowyPtak = Object.create(zwierzeta[nowaWartosc]);
    nowyPtak.imie = imieNowyWartosc;
    flotaPtakow.push(nowyPtak);

    //console.log(flotaPtakow);

  /*  let tabela = document.getElementById("tabelaPtakowJG");


    for (let i = 0; i < flotaPtakow.length; i++) {
        let ptakTabela = flotaPtakow[i];

        const button = document.createElement('button');
        button.textContent = 'Usun';
        button.addEventListener('click', function () {
            usunPtaka(this);
        });

        let row = tabela.insertRow(-1);
        let cell0 = row.insertCell(0);
        cell0.innerHTML = ptakTabela.nazwa;
        let cell1 = row.insertCell(1);
        cell1.innerHTML = ptakTabela.typ;
        let cell2 = row.insertCell(2);
        cell2.innerHTML = ptakTabela.iloscSkrzydel;
        let cell3 = row.insertCell(3);
        cell3.innerHTML = ptakTabela.dziub;
        let cell4 = row.insertCell(4);
        cell4.innerHTML = ptakTabela.imie;
        let cell5 = row.insertCell(5);
        cell5.innerHTML = ptakTabela.jedzenie;
        
        let cell6 = row.insertCell(6);
        cell6.appendChild(button);
        */
    }


function usunPtaka(button){
    let row = button.parentNode.parentNode;
    let index = row.rowIndex -1;
    
    flotaPtakow.splice(index,1);
    
    row.parentNode.removeChild(row);
}

function countParameters(){
    let ileptak, ilelatajacy, ilenielot, iledzikiNielot, ilechodowlanyNielot, iledzikiLatajacy, ilechodowlanyLatajacy, ilemieso, ileroslino, ileskrzydel;

    ileptak = ilelatajacy = ilenielot = iledzikiNielot = ilechodowlanyNielot = iledzikiLatajacy = ilechodowlanyLatajacy = ilemieso = ileroslino = ileskrzydel = 0;

    for (let i=0;i<flotaPtakow.length;i++){
        switch(flotaPtakow[i].nazwa){
                case "dzikiNielot":
                    iledzikiNielot++;
                    ileptak++;
                    ilenielot++;
                    ilemieso++;
                break;
                case "chodowlanyNielot":
                    ilechodowlanyNielot++;
                    ileptak++;
                    ilenielot++;
                    ilemieso++;
                break;
                case "dzikiLatajacy":
                    iledzikiLatajacy++;
                    ileptak++;
                    ilelatajacy++;
                    ileskrzydel += parseInt(dzikiLatajacy.iloscSkrzydel);
                    ileroslino++;
                break;
                case "chodowlanyLatajacy":
                    ilechodowlanyLatajacy++;
                    ileptak++;
                    ilelatajacy++;
                    ileskrzydel+=parseInt(dzikiLatajacy.iloscSkrzydel);
                    ileroslino++;
                break;
        }
    }
    document.getElementById("paramptak").innerHTML=ileptak;
    document.getElementById("paramlatajacy").innerHTML=ilelatajacy;
    document.getElementById("paramnielot").innerHTML=ilenielot;
    document.getElementById("paramdzikinielot").innerHTML=iledzikiNielot;
    document.getElementById("paramchodowlanyNielot").innerHTML=ilechodowlanyNielot;
    document.getElementById("paramdzikiLatajacy").innerHTML=iledzikiLatajacy;
    document.getElementById("paramchodowlanyLatajacy").innerHTML=ilechodowlanyLatajacy;

    document.getElementById("parammieso").innerHTML=ilemieso;
    document.getElementById("paramroslino").innerHTML=ileroslino;
    document.getElementById("paramskrzydel").innerHTML=ileskrzydel;

}


function updateMozliwosciJG() {
    let jakiPtak = document.getElementById("ptakMODIFYJG").value;
    let rodziceSelect = document.getElementById("mozliwosciRodzice");
    let dzieciSelect = document.getElementById("mozliwosciDzieci");
    
    
    if (jakiPtak === "latajacy" || jakiPtak === "nielot") {
        rodziceSelect.style.display = "initial";
        dzieciSelect.style.display = "none";
    } else {
        dzieciSelect.style.display = "initial";
        rodziceSelect.style.display = "none";
    }
}

function modifyJG() {
    let jakiPtak = document.getElementById("ptakMODIFYJG").value;
    let coZmienicRodzice = document.getElementById("mozliwosciRodzice").value;
    let coZmienicDzieci = document.getElementById("mozliwosciDzieci").value;
    let wartosc = document.getElementById("zmienic").value;
    
    if (coZmienicRodzice && coZmienicDzieci === "iloscSkrzydel"){
       wartosc = parseInt(wartosc);
    }

    switch (jakiPtak){
        case("latajacy"):
            latajacy[coZmienicRodzice]=wartosc;
            console.log("Cos ale nie wychodzi tak");
            break;
        case("nielot"):
            nielot[coZmienicRodzice]=wartosc;
            console.log("Cos ale nie wychodzi tak");
            break;
        case("dzikiNielot"):
            dzikiNielot[coZmienicDzieci]=wartosc;
            break;
        case("chodowlanyNielot"):
            chodowlanyNielot[coZmienicDzieci]=wartosc;
            break;
        case("dzikiLatajacy"):
            dzikiLatajacy[coZmienicDzieci]=wartosc;
            break;
        case("chodowlanyLatajacy"):
            chodowlanyLatajacy[coZmienicDzieci]=wartosc;
            break;
    }

   // displayTableJG();
}



function displayTableJG() {
    let tabela = document.getElementById("tabelaPtakowJG");
    tabela.innerHTML = '<tr><th>Nazwa</th><th>typ</th><th>Ilość skrzydel</th><th>dziub</th><th>imie</th><th>jedzenie</th><th>skora</th><th>Przycisk</th></tr>';

    for (let i = 0; i < flotaPtakow.length; i++) {
        let ptakTabela = flotaPtakow[i];

        const button = document.createElement('button');
        button.textContent = 'Usun';
        button.addEventListener('click', function () {
            usunPtaka(this);
        });

        let row = tabela.insertRow(-1);
        let cell0 = row.insertCell(0);
        cell0.innerHTML = ptakTabela.nazwa;
        let cell1 = row.insertCell(1);
        cell1.innerHTML = ptakTabela.typ;
        let cell2 = row.insertCell(2);
        cell2.innerHTML = ptakTabela.iloscSkrzydel;
        let cell3 = row.insertCell(3);
        cell3.innerHTML = ptakTabela.dziub;
        let cell4 = row.insertCell(4);
        cell4.innerHTML = ptakTabela.imie;
        let cell5 = row.insertCell(5);
        cell5.innerHTML = ptakTabela.jedzenie;
        let cell6 = row.insertCell(6);
        cell6.innerHTML = ptakTabela.skora;
        let cell7 = row.insertCell(7);
        cell7.appendChild(button);
    }
}

