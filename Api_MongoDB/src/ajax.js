//Consulta por continente America MongoDB
document.querySelector('#america').addEventListener('click', traerdatosamerica);
function traerdatosamerica(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:8080/api/campeones',true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response); 
            let data = document.querySelector('#data');
            data.innerHTML = '';
            for(let item of datos){
                if(item.continenteCampeon == 'America'){
                    data.innerHTML += `
                    <tr>
                    <td>${item.año}</td>
                    <td>${item.pais}</td>
                    <td>${item.ganador}</td>
                    <td>${item.segundo}</td>
                    <td>${item.tercero}</td>
                    <td>${item.cuarto}</td>
                    <td>${item.golesAnotados}</td>
                    <td>${item.equiposCalificados}</td>
                    <td>${item.partidosJugados}</td>
                    <tr>
                    `
                }
            }
        }
    }
    const xhttp2 = new XMLHttpRequest();
    xhttp2.open('GET','http://localhost:8000/equipos/',true);
    xhttp2.send();
    xhttp2.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response);
            let data = document.querySelector('#data2');
            data.innerHTML = '';
            for(let item of datos){
                if(item.Continente_campeon == 'America'){
                    data.innerHTML += `
                    <td>${item.Año}</td>
                    <td>${item.Pais}</td>
                    <td>${item.Campeon}</td>
                    <td>${item.Segundo}</td>
                    <td>${item.Tercero}</td>
                    <td>${item.Cuarto}</td>
                    <td>${item.Goles_anotados}</td>
                    <td>${item.Equipos_calificados}</td>
                    <td>${item.Partidos_jugados}</td>
                    `
                }
            }
        }
    }    
}

//Consulta por continente Africa MongoDB
document.querySelector('#africa').addEventListener('click', traerdatosafrica);
function traerdatosafrica(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:8080/api/campeones',true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response); 
            let data = document.querySelector('#data');
            data.innerHTML = '';
            for(let item of datos){
                if(item.continenteCampeon == 'Africa'){
                    data.innerHTML += `
                    <tr>
                    <td>${item.año}</td>
                    <td>${item.pais}</td>
                    <td>${item.ganador}</td>
                    <td>${item.segundo}</td>
                    <td>${item.tercero}</td>
                    <td>${item.cuarto}</td>
                    <td>${item.golesAnotados}</td>
                    <td>${item.equiposCalificados}</td>
                    <td>${item.partidosJugados}</td>
                    </tr>
                    `
                }
            }
        }
    }
    const xhttp2 = new XMLHttpRequest();
    xhttp2.open('GET','http://localhost:8000/equipos/',true);
    xhttp2.send();
    xhttp2.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response);
            let data = document.querySelector('#data2');
            data.innerHTML = '';
            for(let item of datos){
                if(item.Continente_campeon == 'Africa'){
                    data.innerHTML += `
                    <td>${item.Año}</td>
                    <td>${item.Pais}</td>
                    <td>${item.Campeon}</td>
                    <td>${item.Segundo}</td>
                    <td>${item.Tercero}</td>
                    <td>${item.Cuarto}</td>
                    <td>${item.Goles_anotados}</td>
                    <td>${item.Equipos_calificados}</td>
                    <td>${item.Partidos_jugados}</td>
                    `
                }
            }
        }
    }
}

//Consulta por continente Asia MongoDB
document.querySelector('#asia').addEventListener('click', traerdatosasia);
function traerdatosasia(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:8080/api/campeones',true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response); 
            let data = document.querySelector('#data');
            data.innerHTML = '';
            for(let item of datos){
                if(item.continenteCampeon == 'Asia'){
                    data.innerHTML += `
                    <tr>
                    <td>${item.año}</td>
                    <td>${item.pais}</td>
                    <td>${item.ganador}</td>
                    <td>${item.segundo}</td>
                    <td>${item.tercero}</td>
                    <td>${item.cuarto}</td>
                    <td>${item.golesAnotados}</td>
                    <td>${item.equiposCalificados}</td>
                    <td>${item.partidosJugados}</td>
                    </tr>
                    `
                }
            }
        }
    }
    const xhttp2 = new XMLHttpRequest();
    xhttp2.open('GET','http://localhost:8000/equipos/',true);
    xhttp2.send();
    xhttp2.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response);
            let data = document.querySelector('#data2');
            data.innerHTML = '';
            for(let item of datos){
                if(item.Continente_campeon == 'Asia'){
                    data.innerHTML += `
                    <td>${item.Año}</td>
                    <td>${item.Pais}</td>
                    <td>${item.Campeon}</td>
                    <td>${item.Segundo}</td>
                    <td>${item.Tercero}</td>
                    <td>${item.Cuarto}</td>
                    <td>${item.Goles_anotados}</td>
                    <td>${item.Equipos_calificados}</td>
                    <td>${item.Partidos_jugados}</td>
                    `
                }
            }
        }
    }
}

//Consulta por continente Europa MongoDB
document.querySelector('#europa').addEventListener('click', traerdatoseuropa);
function traerdatoseuropa(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:8080/api/campeones',true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response); 
            let data = document.querySelector('#data');
            data.innerHTML = '';
            for(let item of datos){
                if(item.continenteCampeon == 'Europe'){
                    data.innerHTML += `
                    <tr>
                    <td>${item.año}</td>
                    <td>${item.pais}</td>
                    <td>${item.ganador}</td>
                    <td>${item.segundo}</td>
                    <td>${item.tercero}</td>
                    <td>${item.cuarto}</td>
                    <td>${item.golesAnotados}</td>
                    <td>${item.equiposCalificados}</td>
                    <td>${item.partidosJugados}</td>
                    </tr>
                    `
                }
            }
        }
    }
    const xhttp2 = new XMLHttpRequest();
    xhttp2.open('GET','http://localhost:8000/equipos/',true);
    xhttp2.send();
    xhttp2.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response);
            let data = document.querySelector('#data2');
            data.innerHTML = '';
            for(let item of datos){
                if(item.Continente_campeon == 'Europe'){
                    data.innerHTML += `
                    <td>${item.Año}</td>
                    <td>${item.Pais}</td>
                    <td>${item.Campeon}</td>
                    <td>${item.Segundo}</td>
                    <td>${item.Tercero}</td>
                    <td>${item.Cuarto}</td>
                    <td>${item.Goles_anotados}</td>
                    <td>${item.Equipos_calificados}</td>
                    <td>${item.Partidos_jugados}</td>
                    `
                }
            }
        }
    }
}

//Consulta por continente Oceania MongoDB
document.querySelector('#oceania').addEventListener('click', traerdatosoceania);
function traerdatosoceania(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:8080/api/campeones',true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response); 
            let data = document.querySelector('#data');
            data.innerHTML = '';
            for(let item of datos){
                if(item.continenteCampeon == 'Oceania'){
                    data.innerHTML += `
                    <tr>
                    <td>${item.año}</td>
                    <td>${item.pais}</td>
                    <td>${item.ganador}</td>
                    <td>${item.segundo}</td>
                    <td>${item.tercero}</td>
                    <td>${item.cuarto}</td>
                    <td>${item.golesAnotados}</td>
                    <td>${item.equiposCalificados}</td>
                    <td>${item.partidosJugados}</td>
                    </tr>
                    `
                }
            }
        }
    }
    const xhttp2 = new XMLHttpRequest();
    xhttp2.open('GET','http://localhost:8000/equipos/',true);
    xhttp2.send();
    xhttp2.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response);
            let data = document.querySelector('#data2');
            data.innerHTML = '';
            for(let item of datos){
                if(item.Continente_campeon == 'Oceania'){
                    data.innerHTML += `
                    <td>${item.Año}</td>
                    <td>${item.Pais}</td>
                    <td>${item.Campeon}</td>
                    <td>${item.Segundo}</td>
                    <td>${item.Tercero}</td>
                    <td>${item.Cuarto}</td>
                    <td>${item.Goles_anotados}</td>
                    <td>${item.Equipos_calificados}</td>
                    <td>${item.Partidos_jugados}</td>
                    `
                }
            }
        }
    }
}

//consulta por año
document.querySelector('#boton').addEventListener('click',consultarporaño);
function consultarporaño(){
    let a = document.getElementById('input').value;
    document.getElementById('input').value = null;
    if(a<=1974){
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET','http://localhost:8080/api/campeones',true);
        xhttp.send();
        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.response);
                let data = document.querySelector('#data');
                data.innerHTML = '';
                let data2 = document.querySelector('#data2');
                data2.innerHTML = '';
                for(let item of datos){
                    if(item.año == a){
                        data.innerHTML += `
                            <tr>
                            <td>${item.año}</td>
                            <td>${item.pais}</td>
                            <td>${item.ganador}</td>
                            <td>${item.segundo}</td>
                            <td>${item.tercero}</td>
                            <td>${item.cuarto}</td>
                            <td>${item.golesAnotados}</td>
                            <td>${item.equiposCalificados}</td>
                            <td>${item.partidosJugados}</td>
                            </tr>
                            `
                    }
                }
            }
        }
    }else{
        const xhttp2 = new XMLHttpRequest();
        xhttp2.open('GET','http://localhost:8000/equipos/',true);
        xhttp2.send();
        xhttp2.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.response);
                let data = document.querySelector('#data');
                data.innerHTML = '';
                let data2 = document.querySelector('#data2');
                data2.innerHTML = '';
                for(let item of datos){
                    if(item.Año == a){
                        data.innerHTML += `
                        <tr>
                        <td>${item.Año}</td>
                        <td>${item.Pais}</td>
                        <td>${item.Campeon}</td>
                        <td>${item.Segundo}</td>
                        <td>${item.Tercero}</td>
                        <td>${item.Cuarto}</td>
                        <td>${item.Goles_anotados}</td>
                        <td>${item.Equipos_calificados}</td>
                        <td>${item.Partidos_jugados}</td>
                        </tr>    
                        `
                    }
                }
            }
        }
    }
}

const form1 = document.querySelector('#form1');
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = new FormData();
    
});

//Añadir nuevo campeon MongoDB
/*document.querySelector('#añadir').addEventListener('click',añadircampeon);
function añadircampeon(){
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c = document.getElementById('input3').value;
    let d = document.getElementById('input4').value;
    let e = document.getElementById('input5').value;
    let f = document.getElementById('input6').value;
    let g = document.getElementById('input7').value;
    let h = document.getElementById('input8').value;
    let i = document.getElementById('input9').value;
    let j = document.getElementById('input10').value;
    document.getElementById('input1').value = null;
    document.getElementById('input2').value = null;
    document.getElementById('input3').value = null;
    document.getElementById('input4').value = null;
    document.getElementById('input5').value = null;
    document.getElementById('input6').value = null;
    document.getElementById('input7').value = null;
    document.getElementById('input8').value = null;
    document.getElementById('input9').value = null;
    document.getElementById('input10').value = null;
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST','http://localhost:8080/api/campeones');
    xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({"año":a,"pais":b,"ganador":c,"segundo":d,"tercero":e,"cuarto":f,"golesAnotados":g,"equiposCalificados":h,"partidosJugados":i,"continenteCampeon":j}));
}*/

document.querySelector('#añadir').addEventListener('click',añadircampeon);
function añadircampeon(){
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c = document.getElementById('input3').value;
    let d = document.getElementById('input4').value;
    let e = document.getElementById('input5').value;
    let f = document.getElementById('input6').value;
    let g = document.getElementById('input7').value;
    let h = document.getElementById('input8').value;
    let i = document.getElementById('input9').value;
    let j = document.getElementById('input10').value;
    document.getElementById('input1').value = null;
    document.getElementById('input2').value = null;
    document.getElementById('input3').value = null;
    document.getElementById('input4').value = null;
    document.getElementById('input5').value = null;
    document.getElementById('input6').value = null;
    document.getElementById('input7').value = null;
    document.getElementById('input8').value = null;
    document.getElementById('input9').value = null;
    document.getElementById('input10').value = null;
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST','http://localhost:8000/equipos/');
    xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({"Año":a,"Pais":b,"Campeon":c,"Segundo":d,"Tercero":e,"Cuarto":f,"Goles_anotados":g,"Equipos_calificados":h,"Partidos_jugados":i,"Continente_campeon":j}));
}


