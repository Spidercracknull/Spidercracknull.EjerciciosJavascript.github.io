 function capital()
 {
   let cap=document.getElementById("cap").value;
   let resultado=cap*0.02
   document.getElementById("resul").value=resultado;
    
 }
 function ejercicio2()
 {
   let venta1=document.getElementById("venta1").value;
   let venta2=document.getElementById("venta2").value;
   let venta3=document.getElementById("venta3").value;
   let sueldo=document.getElementById("sueldobase").value;
   let comision=(parseFloat(venta1)+parseFloat(venta2)+parseFloat(venta3))*0.1;
   let sueldototal=parseFloat(sueldo)+parseFloat(comision);
   document.getElementById("sueldobaseresul").value=sueldo;
   document.getElementById("comisionresul").value=comision;
   document.getElementById("sueldotresul").value=sueldototal;
 }
 function ejercicio3()
 {
   let compra=document.getElementById("compra").value;
   let descuento=parseFloat(compra)*0.15;
   let preciofinal=parseFloat(compra)-descuento;
   document.getElementById("compraresultado").value=preciofinal;
 }
 function ejercicio4()
 {
   let calificacion1=document.getElementById("calificacion1").value;
   let calificacion2=document.getElementById("calificacion2").value;
   let calificacion3=document.getElementById("calificacion3").value;
   let califexamenfinal=document.getElementById("examenfinal").value;
   let trabajofinal=document.getElementById("trabajofinal").value;
   let promediocalificaciones=(parseFloat(calificacion1)+parseFloat(calificacion2)+parseFloat(calificacion3))/3;
   let porcentajefinal=(promediocalificaciones*0.55)+(parseFloat(califexamenfinal)*0.30)+(parseFloat(trabajofinal)*0.15);
   document.getElementById("calificacionfinal").value=porcentajefinal;
 }
 function ejercicio5()
 {
  let numeroalumnos=document.getElementById("numeroalumnos").value;
  let numeroalumnosh=document.getElementById("alumnosh").value;
  let numeroalumnosm=document.getElementById("alumnosm").value;
  let porcentajealumnosh=(numeroalumnosh*100)/numeroalumnos;
  let porcentajealumnom=(numeroalumnosm*100)/numeroalumnos;
  document.getElementById("porcentajealumnos").value=porcentajealumnosh;
  document.getElementById("porcentajealumnas").value=porcentajealumnom;
 }
 function ejercicio6() {
  let fechan=new Date(document.getElementById("fechan").value);
  let fechaa=new Date();
  let años=fechaa.getFullYear()-fechan.getFullYear();
  let meses=fechaa.getMonth()-fechan.getMonth();
  let dias=fechaa.getDate()-fechan.getDate();
  if (meses<0 || (meses===0 && dias<0)) {
    años--;
    meses+=(dias<0?11:12);
  }

  if (dias<0) {
    let mesesdias=new Date(fechaa.getFullYear(), fechaa.getMonth(), 0).getDate();
    dias+=mesesdias;
    meses--;
  }

  let result= `Tienes ${años} años, ${meses} meses y ${dias} días de edad.`;
  document.getElementById('edadc').value = result;
}
 
function ejercicio7()
{
  let n1=parseFloat(document.getElementById("n1").value);
  let n2=parseFloat(document.getElementById("n2").value);
  let resuk;
  if(n1==n2)
  {
    resuk=n1*n2;
  }
  if (n1>n2)
  resuk=n1-n2;
  else
  {
    resuk=n1+n2;
  }
  document.getElementById("resuk").value=resuk;
}
function ejercicio8()
{
  let nu1=parseFloat(document.getElementById("nu1").value);
  let nu2=parseFloat(document.getElementById("nu2").value);
  let nu3=parseFloat(document.getElementById("nu3").value);
  let mayor=nu1;
  if (nu2>mayor) 
  {
    mayor=nu2;
  }
  if (nu3>mayor) {
    mayor=nu3;
  }
    document.getElementById("resup").value=mayor;
  }
function ejercicio9()
 {
  let horastotales=document.getElementById("horastotales").value;
  let salariohora=document.getElementById("salario").value;
  let horasnormalestrabajadas;
  let pagototal;
  let pagonormal;
  let horasextra;
  let salariohorasextra2;
  let pagohorasextra;
  let salarioenhoratriple;
  let horasextratrabajadasp;
  let horasdobletrabajadas;
  let horastripletrabajadas;
  if (horastotales<=40)
  {
    pagototal=horastotales*salariohora;
  }
  else
  {
    pagonormal=40*salariohora;
    horasextra=horastotales-40;
    if(horasextra<=8)
    {
      pagohorasextra=salariohora*2;
      salariohorasextra2=pagohorasextra*horasextra;
      pagototal=pagonormal+salariohorasextra2;
    }
    else
    {
      pagohorasextra=salariohora*2;
      salariohorasextra2=pagohorasextra*8;
      horastriple=horasextra-8;
      salarioenhoratriple=salariohora*3;
      pagohorastriple=horastriple*salarioenhoratriple;
      pagototal=pagohorastriple+pagonormal+salariohorasextra2;
    }
  }
  if(horastotales<=40)
  {
    horasnormalestrabajadas=horastotales;
    horasdobletrabajadas=0;
    horastripletrabajadas=0;
  }
  else
  {
    horasnormalestrabajadas=40;
    horasextratrabajadasp=horastotales-40;
    if(horasextratrabajadasp<=8)
    {
      horasdobletrabajadas=horasextratrabajadasp;
      horastripletrabajadas=0;
    }
    else
    {
      horasnormalestrabajadas=40;
      horasdobletrabajadas=8;
      horastripletrabajadas=horasextratrabajadasp-8;
    }

  }
  document.getElementById("salariofinal").value=pagototal;
  document.getElementById("horasnormales").value=horasnormalestrabajadas;
  document.getElementById("horasdobles").value=horasdobletrabajadas;
  document.getElementById("horastriples").value=horastripletrabajadas;
 }
   
function ejercicio10(){
  let años=parseFloat(document.getElementById("años").value);
  let meses=parseFloat(document.getElementById("meses").value);
  let pagomes=parseFloat(document.getElementById("pagomes").value);
  let mesesaaños;
  let utilidad;
  let añostotales;
  let salariototal;
  mesesaaños=meses/12;
  añostotales=mesesaaños+años; 
  if(añostotales<1){
      utilidad=pagomes*0.05;
  }
  if(añostotales>=1 && añostotales<2){
      utilidad=pagomes*0.07;
  }
  if(añostotales>=2 && añostotales<5){
      utilidad=pagomes*0.10;
  }
  if(añostotales>=5 && añostotales<10){
      utilidad=pagomes*0.15;
  }
  if(añostotales>=10){
      utilidad=pagomes*0.20;
  }
  let utilidadb;
  utilidadb=utilidad*12;
  let salariob;
  salariob=pagomes*12;
  salariototal=salariob+utilidadb;
  document.getElementById("sutilidad").value=salariototal;
  document.getElementById("utilidad").value=utilidadb;
}
