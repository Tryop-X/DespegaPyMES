import { Component, OnInit } from '@angular/core';
import {CursoModel} from "../modelos/curso.model";
import {PasoModel} from "../modelos/paso.model";
import {PreguntasModel} from "../modelos/preguntas.model";

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent implements OnInit {

  punteroCallenge = 0;
  punteroCurso = 0;

  preguntas: PreguntasModel[] = [
    {
      "pregunta": "el estudio mencionado en el curso determinó que la infidelidad es la principal causa de separación de las parejas.",
      "respuesta": true
    },
    {
      "pregunta": "según el curso, los problemas económicos representan la principal razón de separación de las parejas en el perú.",
      "respuesta": false
    },
    {
      "pregunta": "según estudios recientes, el 95% de la población peruana no cuenta con conocimientos financieros.",
      "respuesta": true
    },
    {
      "pregunta": "la transcripción menciona que 6 de cada 10 peruanos gasta más de lo que gana mensualmente.",
      "respuesta": false
    },
    {
      "pregunta": "para armar un presupuesto es necesario seguir cinco pasos.",
      "respuesta": false
    },
    {
      "pregunta": "los ingresos fijos son aquellos que recibimos todos los meses y cuyo monto varía.",
      "respuesta": false
    },
    {
      "pregunta": "el fondo de emergencia debe ser al menos el 10 por ciento de tus ingresos del mes.",
      "respuesta": true
    },
    {
      "pregunta": "los gastos hormiga no afectan significativamente el presupuesto mensual.",
      "respuesta": false
    },
    {
      "pregunta": "una de las cinco reglas de oro para hacer un presupuesto exitoso es llevar el control de tus gastos.",
      "respuesta": true
    }
  ]

  preguntas2: PreguntasModel[] = [
    {
      "pregunta": "el ahorro se define como el hábito de gastar una parte de los ingresos que obtiene una persona.",
      "respuesta": false
    },
    {
      "pregunta": "se recomienda guardar el 10 por ciento de los ingresos mensuales para afrontar situaciones de emergencia.",
      "respuesta": true
    },
    {
      "pregunta": "el ahorro para una emergencia debe considerarse como un gasto variable.",
      "respuesta": false
    },
    {
      "pregunta": "juan definió que necesitaría 2000 soles para comprar una nueva laptop.",
      "respuesta": false
    },
    {
      "pregunta": "el ahorro mensual que juan debería hacer para comprar la laptop en 5 meses es de 300 soles.",
      "respuesta": true
    },
    {
      "pregunta": "muchas personas aún guardan su dinero debajo del colchón en varios países.",
      "respuesta": true
    },
    {
      "pregunta": "la tarjeta de débito es un medio de crédito que reemplaza el efectivo.",
      "respuesta": false
    },
    {
      "pregunta": "se recomienda tener una cuenta exclusiva para gastos diarios y otra para ahorros.",
      "respuesta": true
    },
    {
      "pregunta": "el cuy mágico del ahorro menciona que se deben tener 6 reglas de oro para ahorrar de la mejor manera.",
      "respuesta": false
    }
  ]

  preguntas3: PreguntasModel[] = [
    {
      "pregunta": " El presupuesto se define como un plan financiero que detalla cómo se gastará el dinero y los ingresos esperados en un período determinado?.",
      "respuesta": true
    },
    {
      "pregunta": "¿Registrar gastos ayuda a tener un control de las finanzas, identificar áreas de gasto excesivo y tomar decisiones financieras más informadas?.",
      "respuesta": true
    },
    {
      "pregunta": "¿El interés compuesto se calcula aplicando intereses menos los intereses ganados anteriormente y no nos genera crecimiento?.",
      "respuesta": false
    },
    {
      "pregunta": "¿La principal diferencia entre una cuenta de ahorros y una cuenta corriente es que en la primera gano intereses y en la segunda sólo sirve para transacciones diarias?.",
      "respuesta": false
    },
    {
      "pregunta": "¿Para poder generar una factura, necesito saber de manera obligatoria el RUC de la otra empresa?.",
      "respuesta": true
    },
    {
      "pregunta": "¿Las declaraciones mensuales no son obligatorias si es que pertenezco al Régimen General?",
      "respuesta": false
    },
  ]

  paso: PasoModel[] = [
    {
      preguntas: this.preguntas3,
      img: 'reto6',
      title: 'Maneja tu dinero ',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas,
      img: 'reto5',
      title: 'Arma un presupuesto',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas3,
      img: 'reto4',
      title: 'Ahorra para tu futuro',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas2,
      img: 'reto3',
      title: 'Maneja bien tus deudas',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas,
      img: 'reto2',
      title: 'Usa canales digitales ',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas3,
      img: 'reto1',
      title: 'Usa canales digitales II',
      description: 'una descripción de prueba',
    },
  ];

  cursos: CursoModel[] = [
    {
      name: 'Curso de Finanzas PyMES',
      url: 'google.com',
      pasos: this.paso,
    },
    {
      name: 'Curso de Finanzas PyMES II',
      url: 'google.com',
      pasos: this.paso,
    },
    {
      name: 'Cursos de Facturación I',
      url: 'google.com',
      pasos: this.paso,
    },
    {
      name: 'Cursos de Fraudes Financieros',
      url: 'google.com',
      pasos: this.paso,
    },
    {
      name: 'Curso de Financiamientos para Micro Empresas',
      url: 'google.com',
      pasos: this.paso,
    },
    {
      name: 'Curso de Ahorro Persona Jurídica',
      url: 'google.com',
      pasos: this.paso,
    },
    {
      name: 'Curso de Factorin Electrónico',
      url: 'google.com',
      pasos: this.paso,
    },
  ]
  constructor() { }

  ngOnInit() {
    this.cursos = this.shuffle(this.cursos);
  }

  shuffle(array: CursoModel[]) {
    return array.sort(() => Math.random() - 0.5).slice(0, 6);
  }
}
