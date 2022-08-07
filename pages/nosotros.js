import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2>Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
