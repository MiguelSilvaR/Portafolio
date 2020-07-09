import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  proyectos = [
    {
      nombre: "Azteca",
      media: 1,
      mediaURL: "https://www.youtube.com/embed/5MuVeRTzh-U",
      descripcion: `Sistema de realidad aumentada para Grupo Televisa, 
      donde una pantalla permite a los aficionados tomarse una foto con 
      los jugadores y el DT del club América`,
      year: 2020
    },
    {
      nombre: "V-Soft",
      media: 1,
      mediaURL: "https://www.youtube.com/embed/WHeea2Qsuwo",
      descripcion: `Sistema inteligente de control de semáforos, que permite reducir
      la cantidad de tiempo empleada por los conductores para movilizarse 
      por la ciudad, empleando algoritmos avanzados de inteligencia artificial 
      en conjunto con realidad virtual.`,
      year: 2019
    },
    {
      nombre: "Escalate",
      media: 1,
      mediaURL: "https://www.youtube.com/embed/7Rzet7Exe2E",
      descripcion: `Aplicación para centros de escalada. Enfocada en la interacción con los 
      alumnos para hacer más entretenido el entrenamiento.`,
      year: 2018
    },
    {
      nombre: "SpaceRunner",
      media: 1,
      mediaURL: "https://www.youtube.com/embed/HmyRuQu-BOs",
      descripcion: `Demo de juego con temática espacial minimalista que emplea las últimas tendencias de la industria, 
      para ofrecer una experiencia inmersiva acompañada de excelentes gráficos
      con una mecánica de juego revolucionaria. `,
      year: 2018
    },
    {
      nombre: "PAE",
      media: 0,
      mediaURL: "assets/img/PAE.jpeg",
      descripcion: `Sistema gestor de sesiones de tutoreo para materias universitarias dentro del Tecnológico de Monterrey, 
      empleando un algoritmo preciso y eficiente, se asegura la asignación óptima de cada alumno con un estudiante capacitado
       para ofrecer sesiones de estudio de calidad.`,
      year: 2018
    },
    {
      nombre: "Novaguard AR",
      media: 1,
      mediaURL: "https://www.youtube.com/embed/GQdFP2B983A",
      descripcion: `Aplicación para móviles iOS y Android que hace uso de reconocimiento 
      de imágenes para facilitar la interacción social a 
      través de la relación de perfiles de personas con su indumentaria.`,
      year: 2017
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getURL(proyecto) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(proyecto.mediaURL)
  }

}
