import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //BD

  @ViewChild("titulo") titulo: ElementRef
  @ViewChild("descripcion") descripcion: ElementRef
  @ViewChild("palabraclave") palabraclave: ElementRef
  @ViewChild("foto") foto: ElementRef

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
    const titulo = this.titulo.nativeElement.value
    const descripcion = this.descripcion.nativeElement.value
    const palabraclave = this.palabraclave.nativeElement.value
    const foto = this.foto.nativeElement.value

    if (titulo.trim() != "" && foto.trim() != "") {

      this.recetas.push({ titulo, descripcion, palabraclave, foto })
      this.titulo.nativeElement.value = ""
      this.descripcion.nativeElement.value = ""
      this.palabraclave.nativeElement.value =""
      this.foto.nativeElement.value=""

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