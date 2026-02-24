import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import WordAWoman from "@/components/word-a-woman";
import SideNavigation from "@/components/side-nav";


export default function Home() {

  return (
    <SideNavigation>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.background}>
            <Image
              src={"/images/bg_home.jpg"}
              alt=""
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 48vw, 33vw"
              priority
              quality={100}
            />
          </div>
          <div className={styles.title}>
            <p>Minh Hai</p>
            <p>
              Dancer <span style={{ fontFamily: "Arial, sans-serif" }}>&</span>{" "}
              Performer
            </p>
          </div>
          <div className={styles.info}>
            <p>
              Minh Hai (b. 1993) is a Vietnamese dancer, choreographer, and
              dance teacher based in Hanoi, Viet Nam.
            </p>
            <p>
              Her practice is shaped by in-depth training across multiple
              movement disciplines, including contemporary dance, improvisation,
              ballet, martial arts, and is currently expanding through her
              practice of Chinese classical dance. This diverse physical
              foundation informs a nuanced understanding of the body in motion,
              where different movement logics and energies coexist within her
              choreographic language.
            </p>
            <p>
              Drawing from close observation of everyday life, her works explore
              a wide range of themes, including folk culture, personal growth
              and transformation, and the interconnectedness between
              individuals, society, and the natural world.
            </p>
            <p>
              With extensive experience working with performers of diverse ages,
              physical abilities, and levels of training, Hai approaches
              choreography as a flexible and responsive process. She recognizes
              and cultivates each performer’s individual strengths, fostering
              their development and shaping these qualities into advantages that
              serve the specific needs and character of each work.
            </p>
            <p className={styles.contactSection}>
              <span className={styles.contact}>
                <span>Trần Thị Minh Hải</span>
                <span>Email: Haiminhchan@gmail.com</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </SideNavigation>
  );
}
