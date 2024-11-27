import React from 'react'
import ContactForm from '../components/ContactForm'
import Accordion from '../components/Accordion'
import * as motion from "framer-motion/client";
const Contact = () => {
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
        <div className='flex flex-col'>
            <ContactForm />
            <section className="py-[72px] px-6 overflow-hidden flex items-center justify-center relative bg-white">
                <div className="flex flex-col max-w-[750px] w-full mx-auto">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.50, duration: 0.3 }}
                        className="max-w-[750px] mb-10 w-full min-w-[288px] text-center flex flex-col lg:mr-10 px-6">
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] so-bold text-t-primary mb-5">Sie haben Fragen, wir haben die Antworten</div>
                        <div className="leading-[30px] text-t-primary text-[18px] so-medium">Ihre Frage ist nicht dabei? Kontaktieren Sie uns, und wir antworten Ihnen unverzüglich.</div>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.50, duration: 0.3 }}
                        className="flex flex-col gap-4">
                        <Accordion
                            title="Was sind die Vorteile, wenn wir über Jobsadvision buchen?"
                            type="list"
                            listHeaders={["1. Prozessübernahme:", "2. Kosteneinsparnis:", "3. Top Beratung:"]}
                            listContent={[
                                "Wir kümmern uns um den gesamten Prozess – von der Erstellung bis zur Veröffentlichung Ihrer Stellenanzeige. Das bedeutet weniger Arbeit für Sie und wertvolle Zeitersparnis.",
                                "Mit unseren Stellenpaketen sparen Sie bis zu 70 % der Kosten im Vergleich zu Einzelbuchungen. Effizienz und Sparsamkeit in einem.",
                                "Profitieren Sie von unserer über 20-jährigen Markterfahrung. Wir wissen genau, welche Stellenmärkte am besten zu Ihren Anforderungen passen und beraten Sie individuell.",
                            ]}
                        />

                        <Accordion
                            title="Wie lange dauert es, bis meine Stellenanzeige online ist?"
                            content="Nach Ihrer Freigabe stellen wir Ihre Anzeige innerhalb von 48 Stunden auf den vereinbarten Plattformen online." />
                        <Accordion
                            title="Welche Informationen benötigt Jobsadvision, um eine Anzeige zu erstellen?"
                            content="Wir benötigen Details zur Position, Anforderungen, Vergütung (falls gewünscht) und Ihrem Unternehmen. Gerne beraten wir Sie zur optimalen Gestaltung." />
                        <Accordion
                            title="Kann ich meine Stellenanzeige auch nach der Veröffentlichung ändern lassen?"
                            content="Ja, wir bieten Ihnen die Möglichkeit, Ihre Anzeige auch nach der Veröffentlichung anzupassen. Unser Team kümmert sich schnell um Ihre Änderungswünsche." />
                        <Accordion
                            title="Welche Jobbörsen deckt Jobsadvision ab?"
                            content="Wir arbeiten mit allen führenden Plattformen zusammen, darunter allgemeine und spezialisierte Stellenbörsen. So erreichen wir genau Ihre Zielgruppe." />
                        <Accordion
                            title="Was passiert, wenn ich keine Bewerber erhalte?"
                            content="Sollten Sie nicht genügend Bewerbungen erhalten, analysieren wir die Resonanz und können bei Bedarf die Anzeige optimieren oder auf weiteren Plattformen schalten." />
                        <Accordion
                            title="Kann ich bei Jobsadvision auch ein individuelles Anzeigenlayout verwenden?"
                            content="Ja, wir integrieren Ihr eigenes Corporate Design, sodass Ihre Anzeige perfekt zu Ihrem Unternehmensauftritt passt." />
                        <Accordion
                            title="Können auch Anzeigenkontingente bei Ihnen gebucht werden?"
                            content="Ja, es ist möglich, Anzeigenkontingente zu buchen." />
                        <Accordion
                            title="Ist eine persönliche Beratung möglich?"
                            content="Natürlich! Unser Team steht Ihnen jederzeit für eine persönliche Beratung zur Verfügung und erstellt ein individuelles Angebot, abgestimmt auf Ihre Bedürfnisse." />
                        <Accordion
                            title="Wie ist der Ablauf nach der Auftragsbestätigung?"
                            content="Nach der Auftragsbestätigung erstellen wir Ihre professionelle Stellenanzeige und senden Ihnen einen Vorschaulink zu. Nach Ihrer Freigabe geht die Stellenanzeige auf allen Portalen live, und Sie dürfen sich über Bewerbungen freuen." />
                        <Accordion
                            title="Wie garantiert Jobsadvision eine hohe Qualität meiner Anzeige?"
                            content="Wir übernehmen die Texterstellung, Verschlagwortung, das Lektorat und den AGG-Check, um sicherzustellen, dass Ihre Anzeige sowohl rechtlich einwandfrei als auch zielgruppengerecht gestaltet ist." />
                    </motion.div>
                </div>
            </section>
        </div>

    )
}

export default Contact