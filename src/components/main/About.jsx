import Subtitle from "../Subtitle";

const About = () => {
  return (
    <section className="tablet:min-w-[250px] desktop:w-3/5 mx-auto" id="acerca">
      <Subtitle className="pb-4">Acerca</Subtitle>
      <article className="px-4 tablet:px-8 desktop:text-lg">
        <p>
          <b>EpetConf </b>
          es un evento creado con el objetivo de promover la oratoria en los
          estudiantes, ampliar nuestra mente a nuevas ideas y disrupciones,
          mediante
          <i> charlas de estudiantes</i>, <i>invitados</i> y
          <i> paneles de debate</i>.
        </p>
        <br />
        <p className="px-4">
          Dedicado a las distintas escuelas de Realicó y la zona. Pensado por
          alumnos y con el acompañamiento de empresas.
        </p>
      </article>
    </section>
  );
};

export default About;
