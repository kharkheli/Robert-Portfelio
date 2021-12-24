import greenGrid from './photoes/greenGrid.png'
import blackGrid from './photoes/blackGrid.png'
import redGrid from './photoes/redGrid.png'
import blueGrid from './photoes/blueGrid.png'
import hangMan from './photoes/hangMan.png'
import ironMan from './photoes/ironMan.PNG'
import lightMan from './photoes/lightMan.PNG'
import spateMan from './photoes/spateMan.png'
import leftMan from './photoes/leftMan.png'
import rightMan from './photoes/rightMan.png'
import light from './photoes/light.png'

export const serviceData = [
  {
    id: 1,
    name: 'Grundbetreuung',
    desc: 'Umfasst Leistungen nach den geltenden Gesetzen und Verordnungen.',
    img: [
      { src: greenGrid, name: 'green-grid' },
      { src: blackGrid, name: 'black-grid' },
      { src: redGrid, name: 'red-grid' },
      { src: blueGrid, name: 'blue-grid' },
    ],
    list: [
      'Unterstützung bei der Gefährdungsbeurteilung (Beurteilung der Arbeitsbedingungen)',
      'Ursachenanalysen nach Ereignissen und deren Auswertungen',
      'Beratung von Arbeitgebern und Führungskräften, betrieblichen Interessenvertretungen und Beschäftigten',
      'Erstellung von Dokumentationen und Erfüllung von Meldepflichten und',
      'Mitwirken in betrieblichen Besprechungen, u. a. Sitzung des Arbeitsschutzausschusses',
    ],
  },
  {
    id: 2,
    name: 'Betriebsspezifische Betreuung',
    desc:
      'Ergänzt die Grundbetreuung bei erhöhten betrieblichen Unfall- und Gesundheitsgefahren.',
    hidden:
      'Die betriebsspezifische Betreuung baut auf der Grundbetreuung auf und ergänzt sie auf der Basis der betrieblichen Gefährdungssituation und sonstigen Gegebenheiten, um die individuellen Betreuungserfordernisse des einzelnen Betriebs.',
    img: [
      { src: ironMan, name: 'iron-man' },
      { src: spateMan, name: 'spate-man' },
      { src: lightMan, name: 'light-man' },
      { src: hangMan, name: 'hang-man' },
    ],
  },
  {
    id: 3,
    name: 'Alternative bedarfsorientierte Betreuung ',
    desc:
      'Anlassbezogene Beratung auf Anforderung eines geschulten Unternehmers. ',
    hidden:
      'Nach dem Abschluss der Motivations- und Informationsmaßnahmen kann der Unternehmer über die Notwendigkeit und das Ausmaß einer externen Betreuung selbst entscheiden. Eine sachgerechte bedarfsorientierte betriebsärztliche und sicherheitstechnische Betreuung im Betrieb erfolgt auf der Grundlage der Gefährdungsbeurteilung, die erforderlichenfalls unter Einschaltung von Betriebsarzt und Fachkraft für Arbeitssicherheit mit branchenspezifischen Kenntnissen durchgeführt wird.',

    img: [
      { src: light, name: 'light' },
      { src: leftMan, name: 'left-man' },
      { src: rightMan, name: 'right-man' },
    ],
  },
]
