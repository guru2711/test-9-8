const img = document.createElement("img")
img.setAttribute("src","https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png")
img.setAttribute("class","img")
// document.body.append(img)
const population = 88000070
function country(){
    const a = document.createElement("div")
a.innerHTML = `<img class="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png">
<h1>Germany</h1>
<p><b>Population</b> : 
81,775,900</p>
<p><b>Region</b> : Europe</p>
<p><b>Capital</b> :Berlin</p>
<img class="img" src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg">
<h1>India</h1>
<p><b>Population</b> : 
1,380,004,385</p>
<p><b>Region</b> : Asia</p>
<p><b>Capital</b> : Dehli</p>
<img class="img" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg">
<h1>United States of America</h1>
<p><b>Population</b> : 
1,380,004,22</p>
<p><b>Region</b> : Americas</p>
<p><b>Capital</b> : Washington.D.C</p>
<img class="img" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg">
<h1>South Korea</h1>
<p><b>Population</b> : 
5,17,10,000</p>
<p><b>Region</b> : Asia</p>
<p><b>Capital</b> : Seoul</p>
`
document.body.append(a)
}
country()
// for(var i = 0; i < 5; i++ ){
//     country()
// }

