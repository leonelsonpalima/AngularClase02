import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //BD

  titulo: string
  descripcion: string
  palabraclave: string
  foto: string

  recetas: Array<{
    titulo: string,
    descripcion: string,
    palabraclave: string,
    foto: string
  }> = []
  fotoFile: File
  fotoSeleccionada: any

  constructor() {
    if (localStorage.getItem("recetas")) {
      this.recetas = JSON.parse(localStorage.getItem("recetas"))
    }
  }
  //personas: {nombre: string, foto: string}[]

  //agregar(nombre: string, foto: string) {
  agregar() {

    if (this.titulo.trim() != "" && this.foto.trim() != "") {

      this.recetas.push({ titulo: this.foto, descripcion: this.descripcion, palabraclave: this.palabraclave, foto: this.foto })


      localStorage.setItem("recetas", JSON.stringify(this.recetas))
    }

    //console.log(this.foto.nativeElement.value)


    console.log(this.recetas)
  }

  cargarFoto(evento) {
    this.fotoFile = evento.target.files[0]

    let lector: FileReader = new FileReader()
    lector.onload = (e) => {
      this.fotoSeleccionada = e.target["result"]
    }

    lector.readAsDataURL(this.fotoFile)

    //console.log(evento.target.files[0])
  }

}