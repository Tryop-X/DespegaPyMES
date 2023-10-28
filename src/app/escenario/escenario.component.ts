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
      "pregunta": "una persona siempre debe asumir una deuda cuando tiene alguna necesidad por cubrir.",
      "respuesta": false
    },
    {
      "pregunta": "las deudas son buenas en todas las circunstancias.",
      "respuesta": false
    },
    {
      "pregunta": "el pago mensual de tus deudas no debe ser mayor al 30% de tus ingresos.",
      "respuesta": true
    },
    {
      "pregunta": "el sobreendeudamiento ocurre cuando el pago mensual de tus deudas supera el 30% de tus ingresos.",
      "respuesta": true
    },
    {
      "pregunta": "los bancos cobran intereses por prestar dinero debido a que necesitan generar ingresos para ser rentables.",
      "respuesta": true
    },
    {
      "pregunta": "la tasa de interés que los bancos cobran por otorgar un producto financiero se llama 'tasa de rendimiento efectiva anual' (trea).",
      "respuesta": false
    },
    {
      "pregunta": "las tarjetas de crédito y las tarjetas de débito son iguales en términos de cómo afectan tus finanzas personales.",
      "respuesta": false
    },
    {
      "pregunta": "se recomienda utilizar una tarjeta de crédito para compras que puedas pagar a fin de mes y para compras más grandes que necesitas pagar en cuotas.",
      "respuesta": true
    },
    {
      "pregunta": "la fecha de facturación de una tarjeta de crédito es la fecha en la que debes pagar el monto total de tus compras.",
      "respuesta": false
    },
    {
      "pregunta": "para tener un buen historial crediticio, es importante asegurarse de que el pago mensual de tus deudas no exceda el 30% de tus ingresos.",
      "respuesta": true
    }
  ]

  paso: PasoModel[] = [
    {
      preguntas: this.preguntas,
      title: 'Maneja tu dinero ',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas2,
      title: 'Arma un presupuesto',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas3,
      title: 'Ahorra para tu futuro',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas2,
      title: 'Maneja bien tus deudas',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas3,
      title: 'Usa canales digitales ',
      description: 'una descripción de prueba',
    },
    {
      preguntas: this.preguntas2,
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
