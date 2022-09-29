var agora = new Date();

document.getElementById("saida").innerHTML = agora + "<br><br>" + agora.getTime();

// dates
var data1 = new Date(1969, 06, 20, 23, 56, 15, 960); // Observe que Julho é 06
var data2 = new Date(1969, 06, 20, 23, 56, 15);
var data3  = new Date(1969, 06, 20, 23, 56);
var data4 = new Date(1969, 06, 20, 23);
var data5 = new Date(1969, 06, 20);
var data6 = new Date(1969, 06);
var data7 = new Date(69, 06); // Usando apenas 2 dígitos
var data8 = new Date(1969, 12); // Usando o comportamento cíclico dos intervalos
var data9 = new Date(1969, 05, 31); // Usando o comportamento cíclico dos intervalos
var data10 = new Date(1969); // Com apenas um dígito temos uma data antes de 1970
var data11 = new Date(0); // época inicial UNIX

var data = new Date(10800000);
var texto1 = data.toUTCString();  // Padrão UTC
var texto2 = data.toDateString(); // Formato mais legível para data, mas americano
var texto3 = data.toTimeString(); // Formato mais legível para hora, mas americano

 // Formatos ISO    
 var data12 = new Date("1969-07-20"); 
 var data13 = new Date("1969-07"); 
 var data14 = new Date("1969"); 
 var data15 = new Date("1969-07-20T23:56:15Z"); 
 var data16 = new Date("1969-07-20T23:56:15-03:00"); 

 // Data Curta
 var data17 = new Date("07/20/1969"); 

 // Data Longa
 var data18 = new Date("Jul 20 1969"); 
 var data19 = new Date("20 Jul 1969"); 
 var data20 = new Date("20 July 1969"); 
 var data21 = new Date("20 JULY 1969"); 
 var data22 = new Date("20 JULY, 1969"); 

 // Date.parse()
 var ms = Date.parse("Jul 20 1969"); 
 var data23 = new Date(ms); 



document.getElementById("saida1").innerHTML = data1;
document.getElementById("saida2").innerHTML = data2;
document.getElementById("saida3").innerHTML = data3;
document.getElementById("saida4").innerHTML = data4;
document.getElementById("saida5").innerHTML = data5;
document.getElementById("saida6").innerHTML = data6;
document.getElementById("saida7").innerHTML = data7;
document.getElementById("saida8").innerHTML = data8;
document.getElementById("saida9").innerHTML = data9;
document.getElementById("saida10").innerHTML = data10;
document.getElementById("saida11").innerHTML = data11;
document.getElementById("saida12").innerHTML = texto1;
document.getElementById("saida13").innerHTML = texto2;
document.getElementById("saida14").innerHTML = texto3;
document.getElementById("saida15").innerHTML = data12;
document.getElementById("saida16").innerHTML = data13;
document.getElementById("saida17").innerHTML = data14;
document.getElementById("saida18").innerHTML = data15;
document.getElementById("saida19").innerHTML = data16;
document.getElementById("saida20").innerHTML = data17;
document.getElementById("saida21").innerHTML = data18;
document.getElementById("saida22").innerHTML = data19;
document.getElementById("saida23").innerHTML = data20;
document.getElementById("saida24").innerHTML = data22;
document.getElementById("saida25").innerHTML = ms;
document.getElementById("saida26").innerHTML = data23;

// metodos de data

var data = new Date();

//Métodos get
var texto4 = data.getFullYear();    
var texto5 = data.getMonth() + 1 ;    
var texto6 = data.getDate();    
var texto7 = data.getHours();    
var texto8 = data.getMinutes();    
var texto9 = data.getSeconds();    
var texto10 = data.getMilliseconds();    
var texto11 = data.getDay();    
var texto12 = data.getTime();    

// Métodos getUTC
var texto13 = data.getUTCFullYear();    
var texto14 = data.getUTCMonth();    
var texto15 = data.getUTCDate();    
var texto16 = data.getUTCHours();    
var texto17 = data.getUTCMinutes();    
var texto18 = data.getUTCSeconds();    
var texto19 = data.getUTCMilliseconds();    
var texto20 = data.getUTCDay(); 

// Métodos set
var data = new Date();
data.setFullYear(2020, 10, 30);
data.setDate(data.getDate() + 60);
var texto21 = data;    

// Comparando Datas
var antes = new Date(1969, 06, 20, 23, 56, 15, 960);
var depois = new Date(1969, 06, 20, 23, 56, 15, 961);
var texto22 = (depois > antes);

document.getElementById("saida27").innerHTML = "getFullYear: " + texto4;
document.getElementById("saida28").innerHTML = "getMonth: " + texto5;
document.getElementById("saida29").innerHTML = "getDate: " + texto6;
document.getElementById("saida30").innerHTML = "getHours: " + texto7;
document.getElementById("saida31").innerHTML = "getMinutes: " + texto8;
document.getElementById("saida32").innerHTML = "getSeconds: " + texto9;
document.getElementById("saida33").innerHTML = "getMilliseconds: " + texto10;
document.getElementById("saida34").innerHTML = "getDay: " + texto11;
document.getElementById("saida35").innerHTML = "getTime: " + texto12;
document.getElementById("saida36").innerHTML = "getUTCFullYear: " + texto13;
document.getElementById("saida37").innerHTML = "getUTCMonth: " + texto14;
document.getElementById("saida38").innerHTML = "getUTCDate: " + texto15;
document.getElementById("saida39").innerHTML = "getUTCHours: " + texto16;
document.getElementById("saida40").innerHTML = "getUTCMinutes: " + texto17;
document.getElementById("saida41").innerHTML = "getUTCSeconds: " + texto18;

document.getElementById("saida42").innerHTML = "getUTCMilliseconds: " + texto19;
document.getElementById("saida43").innerHTML = "getUTCDay: " + texto20;
document.getElementById("saida44").innerHTML = "data.setDate(data.getDate() + 60);: " + texto21;
document.getElementById("saida45").innerHTML = "depois > antes: " + texto22;

var hoje = new Date(1571954585072);
var tipo = typeof hoje;
document.getElementById("resultado").innerHTML = tipo;

var dia1 = new Date(2020,10,06);
var dia2 = new Date(2020.10,10);
var ultimoDia = dia1+dia2;
document.getElementById("resultado2").innerHTML = ultimoDia;

var hoje1 = new Date("2020-11-16T08:00:00-03:00");
var dia3 = hoje1.getDay();
var mes = hoje1.getMonth();
var ano = hoje1.getFullYear();
document.getElementById("resultado3").innerHTML = "Hoje é dia " + dia3 + " do mês de " + mes + " de " + ano;

var hoje2 = new Date("2020-11-16T08:00:00-03:00");
hoje2.setDate(hoje2.getDate()+5);
var novoDia = hoje2.getDate() + "/"+ hoje2.getMonth() + "/" + hoje2.getFullYear();
document.getElementById("resultado4").innerHTML = novoDia;
