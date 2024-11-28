import { useEffect, useState } from "react";
import { motion } from "framer-motion"

const Datenschutz = () => {
  const [activeSection, setActiveSection] = useState("");

  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  };




  return (
    <section className="py-[72px] px-6 relative bg-secondary">

      <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col relative">

        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.50, duration: 0.3 }}
          style={{ boxShadow: '0px 4px 22px 0px rgba(8, 15, 52, 0.03)' }}
          className="flex flex-col h-full bg-white w-full lg:pt-[80px] md:pt-[70px] xs:pt-[60px] pt-[50px] lg:px-[91px] md:px-[76px] xs:px-[35px] px-[25px] lg:pb-[108px] md:pb-[90px] xs:pb-[75px] pb-[63px] border border-neutral-300">
          <div id="terms-and-conditions" className="flex flex-col">
            <div className="text-t-primary  md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Datenschutzerklärung</div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profil auf facebook.com (nachfolgend gemeinsam bezeichnet als „Onlineangebot“).
            </div>
            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              I. Definitionen
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind. Soweit im Folgenden von „Daten“ die Rede ist, sind damit stets personenbezogene Daten gemeint.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Als „Nutzer“ werden die Besucher und Nutzer unseres Onlineangebotes bezeichnet.
              „DSGVO“ ist die Datenschutzgrundverordnung.
            </div>






            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              II. Verantwortlicher
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              <span className=" mr-1">Name/Fa.:</span> JOBSADVISION GmbH <br />
              <span className=" mr-1">Straße Nr.:</span> Brucknerstraße 2 <br />
              <span className=" mr-1">PLZ, Ort, Land:</span> 75015 Bretten, Deutschland <br />
              <span className=" mr-1">Handelsregister/Nr.:</span> Amtsgericht Mannheim, HRB 731879 <br />
              <span className=" mr-1">Geschäftsführer:</span> Sigurd Mendel <br />
              <span className=" mr-1">Telefonnummer:</span> +49 (0) 7252 / 580 787 0 <br />
              <span className=" mr-1">E-Mailadresse:</span> info@jobsadvision.de <br /><br />
              <span className=" mr-1">Datenschutzbeauftragter:</span> <br />
              <span className=" mr-1">Name:</span> Giovanni Morello <br />
              <span className=" mr-1">Straße Nr.:</span> Brucknerstraße 2 <br />
              <span className=" mr-1">PLZ, Ort, Land:</span> 75015 Bretten, Deutschland <br />
              <span className=" mr-1">Telefonnummer:</span> +49 (0) 7252 / 5807870 <br />
              <span className=" mr-1">E-Mailadresse:</span> g.morello@jobsadvision.de <br />
            </div>






            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              III. Arten der verarbeiteten Daten
            </div>
            <ol className="md:mt-8 md:mb-10 mt-[26px] xs:mb-[33px] mb-[28px] list-inside">
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners.
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Folgende Daten werden hierbei erhoben: <br />
                Informationen über den Browsertyp und die verwendete Version; <br />
                Den Internet-Service-Provider des Nutzers; <br />
                Die IP-Adresse des Nutzers; <br />
                Datum und Uhrzeit des Zugriffs; <br />
                Websites, von denen das System des Nutzers auf unsere Internetseite gelangt;
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                2. Sofern es zu einem Vertrag kommt, erfassen und verarbeiten wir auch folgende Daten:
                Name (auch Vor- und Zuname von Kontaktpersonen), Anschrift, Telefon- und Telefaxnummer, E-Mailadresse, Geburtsdatum von Kontaktpersonen, Umsatzsteueridentifikationsnummer.
                Soweit es um die Erbringung vertraglicher Leistungen geht, verarbeiten wir Bestandsdaten (z.B., Name - auch Vor- und Zuname von Kontaktpersonen, Anschrift, Telefon- und Telefaxnummer, E-Mailadresse, Geburtsdatum von Kontaktpersonen, Umsatzsteueridentifikationsnummer) und Vertragsdaten (z.B., in Anspruch genommene Leistungen, Zahlungsinformationen).
              </div>
            </ol>






            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              IV. Zweck der Datenverarbeitung
            </div>
            <ol className="md:mt-8 md:mb-10 mt-[26px] xs:mb-[33px] mb-[28px] list-inside">
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                1. Soweit es nur um die Nutzung unserer Webseite geht, verarbeiten wir personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website, sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                2. Soweit es um die Erbringung vertraglicher Leistungen geht, verarbeiten wir Bestandsdaten (z.B., Namen und Adressen sowie Kontaktdaten von Nutzern), Vertragsdaten (z.B., in Anspruch genommene Leistungen, Namen von Kontaktpersonen, Zahlungsinformationen) zwecks Erfüllung unserer vertraglichen Verpflichtungen und Serviceleistungen gem. Art. 6 Abs. 1 lit b. DSGVO. Die in Onlineformularen als verpflichtend gekennzeichneten Eingaben, sind für den Vertragsschluss erforderlich.
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Im Rahmen der Inanspruchnahme unserer Onlinedienste, speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist zur Verfolgung unserer Ansprüche erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c DSGVO.
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Wir verarbeiten Nutzungsdaten (z.B., die besuchten Webseiten unseres Onlineangebotes, Interesse an unseren Produkten) und Inhaltsdaten (z.B., Eingaben im Kontaktformular oder Nutzerprofil) für Werbezwecke in einem Nutzerprofil, um den Nutzer z.B. Produkthinweise ausgehend von ihren bisher in Anspruch genommenen Leistungen einzublenden.
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Die Löschung der Daten erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, die Erforderlichkeit der Aufbewahrung der Daten wird alle drei Jahre überprüft; im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf (in der Regel 10 Jahre). Angaben im etwaigen Kundenkonto verbleiben bis zu dessen Löschung.
              </div>
            </ol>




            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              V. Rechtsgrundlage für die Verarbeitung personenbezogener Daten
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
              Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
            </div>




            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              VI. Sicherheit, Auftragsverarbeitung, Übermittlung in andere Länder
            </div>
            <ol className="md:mt-8 md:mb-10 mt-[26px] xs:mb-[33px] mb-[28px] list-inside">
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                1. Sicherheitsmaßnahmen
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten; Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen berücksichtigt (Art. 25 DSGVO).
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Zu den Sicherheitsmaßnahmen gehört insbesondere die verschlüsselte Übertragung von Daten zwischen Ihrem Browser und unserem Server.
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                2. Zusammenarbeit mit Auftragsverarbeitern und Dritten
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                3. Übermittlungen in Drittländer
              </div>
              <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
                Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln“).
              </div>

            </ol>


            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              VII. Rechte der betroffenen Personen
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              1. Auskunftsrecht
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px] pl-7">
              a) die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden; <br />
              b) die Kategorien von personenbezogenen Daten, welche verarbeitet werden; <br />
              c) die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden; <br />
              d) die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer; <br />
              e) das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung; <br />
              f) das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde; <br />
              g) alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden; <br />
              h) das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und - zumindest in diesen Fällen - aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person. <br />
              Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie betreffenden personenbezogenen Daten in ein Drittland oder an eine internationale Organisation übermittelt werden. In diesem Zusammenhang können Sie verlangen, über die geeigneten Garantien gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden. <br />
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              2. Recht auf Berichtigung
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              3. Recht auf Einschränkung der Verarbeitung
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px] pl-7">
              a) wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen; <br />
              b) die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen; <br />
              c) der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder <br />
              d) wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen. <br />
              Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt, dürfen diese Daten - von ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden. Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen eingeschränkt, werden Sie von dem Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben wird.            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              4. Recht auf Löschung
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px] pl-7">
              a) Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig. <br />
              b) Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung. <br />
              c) Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein. <br />
              d) Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet. <br />
              e) Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt. <br />
              f) Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
              Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist <br />
              a) zur Ausübung des Rechts auf freie Meinungsäußerung und Information; <br />
              b) zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde; <br />
              c) aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO; <br />
              d) für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder <br />
              e) zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              5. Recht auf Datenübertragbarkeit
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              6. Widerspruchsrecht
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die Sie betreffenden personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              7. Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              8. Recht auf Beschwerde bei einer Aufsichtsbehörde
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
              Die für uns zuständige Aufsichtsbehörde ist:
              Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Postfach 10 29 32, 70025 Stuttgart oder Königstraße 10a, 70173 Stuttgart, Telefon: 07 11/61 55 41-0, Telefax: 07 11/61 55 41-15, E-Mail: poststelle@lfdi.bwl.de
            </div>


            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              VIII. Cookies
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Staus gespeichert werden. Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies“).
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Wir können temporäre und permanente Cookies einsetzen; sofern wir dies tun, erfolgt dies zur Wahrnehmung unserer berechtigter Interessen (Art. 6 Abs. 1 lit f DSGVO).
              Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.
              Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite http://www.aboutads.info/choices/ oder die EU-Seite http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.
            </div>



            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              IX. Kontaktaufnahme, Registrierung
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              1. Bei der Kontaktaufnahme mit uns (per Kontaktformular oder E-Mail) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet. Folgende Daten werden bei einer Anfrage für eine Anzeigenschaltung erhoben: Vor- und Zuname, Firmenname, Telefonnummer, E-Mail-Adresse, Kommentare (optional), Hinweis, wie der Nutzer auf die Webseite aufmerksam wurde, Branchenzugehörigkeit, Details zu möglichen Anzeigenschaltungen.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              2. Sie können sich bei uns registrieren, um unseren Jobticker zu benutzen und um einen Überblick in dem Kundenbereich des Nutzers über alle Anzeigen zu haben. Dafür erfassen und verarbeiten wir folgende Daten: Anrede, Vorname, Familienname, Telefonnummer, E-Mail-Adresse.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              3. Die Nutzerkonten im Kundenbereich sind nicht öffentlich und können von Suchmaschinen nicht indexiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto gelöscht, vorbehaltlich deren Aufbewahrung ist aus handels- oder steuerrechtlichen Gründen entspr. Art. 6 Abs. 1 lit. c DSGVO notwendig. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer gespeicherten Daten des Nutzers unwiederbringlich zu löschen.
            </div>



            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              X. Newsletter
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              1. Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren Produkten, Angeboten, Aktionen und unserem Unternehmen.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              2. Double-Opt-In und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              3. Anmeldedaten: Um sich für den Newsletter anzumelden, müssen Sie folgende Daten angeben: Vorname, Familienname, Telefonnummer, E-Mail-Adresse, Firmenname.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              4. Erfolgsmessung - Die Newsletter enthalten einen sog. „web-beacon“, d.h. eine pixelgroße Datei, die beim Öffnen des Newsletters von dem Server des Versanddienstleisters abgerufen wird. Im Rahmen dieses Abrufs werden zunächst technische Informationen, wie Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse und Zeitpunkt des Abrufs erhoben. Diese Informationen werden zur technischen Verbesserung der Services anhand der technischen Daten oder der Zielgruppen und ihres Leseverhaltens anhand derer Abruforte (die mit Hilfe der IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt. Zu den statistischen Erhebungen gehört ebenfalls die Feststellung, ob die Newsletter geöffnet werden, wann sie geöffnet werden und welche Links geklickt werden. Diese Informationen können aus technischen Gründen zwar den einzelnen Newsletterempfängern zugeordnet werden. Es ist jedoch weder unser Bestreben, noch das des Versanddienstleisters, einzelne Nutzer zu beobachten. Die Auswertungen dienen uns viel mehr dazu, die Lesegewohnheiten unserer Nutzer zu erkennen und unsere Inhalte auf sie anzupassen oder unterschiedliche Inhalte entsprechend den Interessen unserer Nutzer zu versenden.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              5. Der Versand des Newsletters und die Erfolgsmessung erfolgen auf Grundlage einer Einwilligung der Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m &sect; 7 Abs. 2 Nr. 3 UWG bzw. auf Grundlage der gesetzlichen Erlaubnis gem. &sect; 7 Abs. 3 UWG.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              6. Kündigung/Widerruf - Newsletterempfänger können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen. Einen Link zur Kündigung des Newsletters finden sie am Ende eines jeden Newsletters. Damit erlöschen gleichzeitig ihre Einwilligungen in die Erfolgsmessung. Mit der Abmeldung von Newsletter, werden die personenbezogenen Daten gelöscht, es sei denn deren Aufbewahrung ist rechtlich geboten oder gerechtfertigt, wobei deren Verarbeitung in diesem Fall nur auf diese Ausnahmezwecke beschränkt wird. Ein individueller Löschungsantrag ist jederzeit möglich.
            </div>



            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              XI. Löschung von Daten
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich anderes angegeben ist, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen. Nach gesetzlichen Vorgaben in Deutschland erfolgt die Aufbewahrung insbesondere für 6 Jahre gemäß &sect; 257 Abs. 1 HGB (Handelsbücher, Inventare, Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe, Buchungsbelege, etc.) sowie für 10 Jahre gemäß &sect; 147 Abs. 1 AO (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handels- und Geschäftsbriefe, Für Besteuerung relevante Unterlagen, etc.).
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal sieben Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              E-Mail Anfragen und Kontaktaufnahmen über unsere Webseite löschen wir innerhalb eines angemessenen Zeitraums, innerhalb dem nicht mehr mit einem Vertragsschluss od. dgl. Zu rechnen ist.
            </div>



            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              XII. Onlinepräsenzen in sozialen Medien
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf der jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien deren jeweiligen Betreiber.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wir die Daten der Nutzer sofern diese mit uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren Onlinepräsenzen verfassen oder uns Nachrichten zusenden.
            </div>



            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              XIII. Google Analytics
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google LLC („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: http://tools.google.com/dlpage/gaoptout?hl=de.
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten erfahren Sie auf den Webseiten von
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px] break-all">
              Google: https://www.google.com/intl/de/policies/privacy/partners („Datennutzung durch Google bei Ihrer Nutzung von Websites oder Apps unserer Partner“), http://www.google.com/policies/technologies/ads („Datennutzung zu Werbezwecken“), http://www.google.de/settings/ads („Informationen verwalten, die Google verwendet, um Ihnen Werbung einzublenden“).
            </div>

            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              XIV. Google Maps
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px] break-all">
              Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden. Die Daten können in den USA verarbeitet werden. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.
            </div>




            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              XV. Twitter
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px]">
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte des Dienstes Twitter, angeboten durch die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Ihr Gefallen betreffend die Inhalte kundtun, den Verfassern der Inhalte oder unsere Beiträge abonnieren können. Sofern die Nutzer Mitglieder der Plattform Twitter sind, kann Twitter den Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen. Twitter ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active). Datenschutzerklärung: https://twitter.com/de/privacy, Opt-Out: https://twitter.com/personalization.
            </div>



            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              XVI. YouTube
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px] break-all">
              Unsere Webseite verwendet für die Einbindung von Videos den Anbieter YouTube LLC , 901, Cherry Avenue, San Bruno, CA 94066, USA, vertreten durch Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Normalerweise wird bereits bei Aufruf einer Seite mit eingebetteten Videos Ihre IP-Adresse an YouTube gesendet und Cookies auf Ihrem Rechner installiert. Wir haben unsere YouTube-Videos jedoch mit dem erweiterten Datenschutzmodus eingebunden (in diesem Fall nimmt YouTube immer noch Kontakt zu dem Dienst Double Klick von Google auf, doch werden dabei laut der Datenschutzerklärung von Google personenbezogene Daten nicht ausgewertet). Dadurch werden von YouTube keine Informationen über die Besucher mehr gespeichert, es sei denn, sie sehen sich das Video an. Wenn Sie das Video anklicken, wird Ihre IP-Adresse an YouTube übermittelt und YouTube erfährt, dass Sie das Video angesehen haben. Sind Sie bei YouTube eingeloggt, wird diese Information auch Ihrem Benutzerkonto zugeordnet (dies können Sie verhindern, indem Sie sich vor dem Aufrufen des Videos bei YouTube ausloggen). Von der dann möglichen Erhebung und Verwendung Ihrer Daten durch YouTube haben wir keine Kenntnis und darauf auch keinen Einfluss. Nähere Informationen können Sie der Datenschutzerklärung von YouTube unter https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.
            </div>



            <div className="text-t-primary  md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">
              XIV. Google Fonts
            </div>
            <div className="text-t-primary text-[18px]  md:mb-8 mb-[26px] leading-[30.006px] break-all">
              Wir binden die Schriftarten ("Google Fonts") des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.
            </div>

          </div>


        </motion.div>
      </div>
    </section>
  )
}

export default Datenschutz