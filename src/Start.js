import React from 'react'
import Spec from './Spec'

function Start({ empNum, setEmpNum }) {
  return (
    <>
      <section id="START">
        <Spec empNum={empNum} setEmpNum={setEmpNum} />
        <div style={{ transform: 'translateY(-10rem)' }}>
          <h1>
            {/* <span className="heading"> Gemeinsam Besser</span> */}
            <div className="keyword keyword0">Arbeitssicherheit</div>
            <div className="keyword keyword1">Unterweisung</div>
            <div className="keyword keyword3">Sicherheit</div>
            <div className="keyword keyword4">Begehung</div>
            <div className="keyword keyword5">Grundbetreuung</div>
            <div className="keyword keyword6">Mutterschutz</div>
            <div className="keyword keyword7">Arbeitsschutz</div>
            <div className="keyword keyword8">Schutzausrüstung</div>
            <div className="keyword keyword9">Unfalluntersuchung</div>
            <div className="keyword keyword10">Betriebsanweisung</div>
            <div className="keyword keyword11">Prävention</div>
            <div className="keyword keyword13">Gesundheitsschutz</div>
            <div className="keyword keyword14">Mitarbeiterschutz</div>
            <div className="keyword keyword15">Gefährdungsbeurteilung</div>
            <div className="keyword keyword16">Arbeitssicherheitsausschuss</div>
            <div className="keyword keyword17">Erste Hilfe</div>
            <div className="keyword keyword21">Substitution</div>
            <div className="keyword keyword22">Fachkraft</div>
            <div className="keyword keyword12">Brandschutz</div>
          </h1>
          {/* <h3>
            Lassen Sie sich sicherheitstechnisch beraten, verbessern Sie Ihre
            Arbeitssicherheit und vermeiden Sie Arbeitsunfälle.
          </h3> */}
        </div>
      </section>
    </>
  )
}

export default Start
