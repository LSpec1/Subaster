import {AfterViewInit, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})

export class PublishComponent implements OnInit, AfterViewInit {
  //Comunas 
  Tarapaca = new Array("Arica");
  Antofagasta = new Array("Alto Hospicio","Iquique","Pozo Almonte");
  Atacama = new Array("Caldera","Chanaral","Copiapo","Diego de Almagro","El Salvador","Huasco","Tierra Amarilla","Vallenar");
  Coquimbo = new Array("Andacollo","Combarbala","Coquimbo","El Palqui","Illapel","La Serena","Los Vilos","Montepatria","Ovalle","Salamanca","Vicuna");
  Valparaiso = new Array("Algarrobo","Cabildo","Calle Larga","Cartagena","Casablanca","Catemu","Concon","El Melon","El Quisco","El Tabo","Hijuelas","La Calera","La Cruz","La Ligua","Las Ventanas","Limache","Llaillay","Los Andes","Nogales","Olmue","Placilla de Penuelas","Putaendo","Quillota","Quilpue","Quintero","Rinconada","San Antonio","San Esteban","San Felipe","Santa Maria","Santo Domingo","Valparaiso","Villa Alemana","Villa Los Almendros","Vina del Mar");
  OHiggins = new Array("Chimbarongo","Codegua","Donihue","Graneros","Gultro","Las Cabras","Lo Miranda","Machali","Nancagua","Palmilla","Peumo","Pichilemu","Punta Diamante","Quinta de Tilcoco","Rancagua","Rengo","Requinoa","San Fernando","San Francisco de Mostazal","San Vicente de Tagua Tagua","Santa Cruz");
  Maule = new Array("Cauquenes","Constitucion","Curico","Hualane","Linares","Longavi","Molina","Parral","San Clemente","San Javier","Talca","Teno","Villa Alegre");
  Bio_Bio = new Array("Arauco","Bulnes","Cabrero","Canete","Chiguayante","Chillan","Chillan Viejo","Coelemu","Coihueco","Concepcion","Conurbacion La Laja-San Rosendo","Coronel","Curanilahue","Hualpen","Hualqui","Huepil","Lebu","Los alamos","Los angeles","Lota","Monte aguila","Mulchen","Nacimiento","Penco","Quillon","Quirihue","San Carlos","San Pedro de la Paz","Santa Barbara","Santa Juana","Talcahuano","Tome","Yumbel","Yungay");
  Araucania = new Array("Angol","Carahue","Collipulli","Cunco","Curacautin","Freire","Gorbea","Labranza","Lautaro","Loncoche","Nueva Imperial","Padre Las Casas","Pitrufquen","Pucon","Puren","Renaico","Temuco","Traiguen","Victoria","Villarrica");
  Los_Lagos = new Array("Futrono","La Union","Lanco","Los Lagos","Paillaco","Panguipulli","Rio Bueno","San Jose de la Mariquina","Valdivia");
  Aisen = new Array("Coihaique","Puerto Aisen");
  Magallanes_y_Antartica = new Array("Punta Arenas","Puerto Natales");
  Metropolitana = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipu","Melipilla","Nunoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
  Los_Rios = new Array("Ancud","Calbuco","Castro","Fresia","Frutillar","Llanquihue","Los Muermos","Osorno","Puerto Montt","Puerto Varas","Purranque","Quellon","Rio Negro");
  Arica_y_Parinacota = new Array("Antofagasta","Calama","Maria Elena","Mejillones","Taltal","Tocopilla");
  region ="";
  comuna ="";

  //Listas y Dropdowns
  lista_Cat = ["Aceros y elementos metálicos ", "Electricidad",    "Artefactos sanitarios y gasfitería", "Revestimientos y estucos",
    "Maderas y muebles", "Equipos y herramientas", "Pinturas y accesorios", "Cerámicos y adhesivos", "Puertas y ventanas",
    "Residuos peligrosos", "Seguridad"];
  lista_Est = ["Nuevo","Usado","Usado-Como Nuevo","Nuevo-Abierto","Residuo"];
  lista_Unit = ["Sacos", "KG", "UN", "ML", "M2", "M3", "Cajas", "Tinetas", "Pallet"];
  isCollapsed = true;
  urli= new Array();
  urlv= new Array();
  
  lat:number;
  lng:number;


  //Formulario
  publicacionForm : FormGroup;

  constructor() {
    this.lat=0;
    this.lng=0;
    this.publicacionForm = new FormGroup({
      media : new FormControl('', [
        Validators.required
      ]),
      nombre : new FormControl('', [
        Validators.required,
        Validators.nullValidator
      ]),
      descripcion : new FormControl('', [
        Validators.required,
        Validators.maxLength(150)
      ]),
      cantidad : new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      categoria : new FormControl('', [
        Validators.required
      ]),
      estado : new FormControl('', [
        Validators.required
      ]),
      unidad : new FormControl('', [
        Validators.required
      ]),
      precio : new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      region : new FormControl('', [
        Validators.required
      ]),
      comuna : new FormControl('', [
        Validators.required,
        Validators.nullValidator
      ]),
      direccion : new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ])
    })
    
  }

  ngAfterViewInit(): void {    
  }


  ngOnInit(): void {
    let select:any = document.getElementById("comuna");
    let direccion:any = document.getElementById("direccion");
    select.disabled = true;
    direccion.disabled = true;
  }

  initMap(){
    
  }

  buscar_ciudad(e:any){
    let region = e.target.value;    
    this.region = region;
    let comunas = eval("this."+region)
    let select:any = document.getElementById("comuna");
    select.disabled = false; 
    let direccion:any = document.getElementById("direccion");
    direccion.value = null;
    direccion.disabled = true;
    while (select.firstChild) {
      select.removeChild(select.firstChild);
    }
    let  nuevaopcion = new Option("","", true,true);
    nuevaopcion.disabled = true;  
    select?.appendChild(nuevaopcion)
    for (let index = 0; index < comunas.length; index++) {
      let  nuevaopcion = new Option(comunas[index], comunas[index], false,false);   
      select?.appendChild(nuevaopcion)
    }          
    
  }

  enable(e:any){    
    let direccion:any = document.getElementById("direccion");
    direccion.disabled = false;
  }

  direccionShow(e:any){
    let direccion:any = document.getElementById("direccion");
    if(direccion.value.trim() != "" && direccion.value != null){
      let direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': direccion + "," + this.comuna + "," + this.region}, (results, status) =>{
        if(status == google.maps.GeocoderStatus.OK){
          let resultados:any = results;
          this.lat = resultados[0].geometry.location.lat();
          this.lng = resultados[0].geometry.location.lng();  
        }
      })
    }
  }

  deleteimg(i:any){
    delete this.urli[i]
    this.urli = this.urli.filter(function (el) {
      return el != null;
    });
    console.log(this.urli);
    
  }

  deletevid(i:any){
    delete this.urlv[i]
    this.urlv = this.urlv.filter(function (el) {
      return el != null;
    });
  }

  selectFile(event:any){
    if(event.target.files){
      let reader = new FileReader();
      if(event.target.files[0].type.split("/")[0] == "video"){
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event:any) =>{
          this.urlv.push(event.target.result)
        }
      }else if(event.target.files[0].type.split("/")[0] == "image"){
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event:any) =>{
          this.urli.push(event.target.result)
        }
      }
    }
  }
  



  
}
