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
            <Image src={'/images/bg_home.jpg'} alt="" fill sizes="(max-width: 768px) 80vw, (max-width: 1200px) 48vw, 33vw" priority quality={100} />
          </div>
          <div className={styles.title}>
            <p>Minh Hai</p>
            <p>Dancer <span style={{fontFamily: "Arial, sans-serif"}}>&</span> Performer</p>
          </div>
          <div className={styles.info}>
            <p>
              Trần Minh Hải (b.1993) is a Vietnamese dancer, choreographer, and performer  based in Hanoi, Viet Nam  . She started her career in practicing contemporary dance since 2017 in Kinergie Studio  Since then, she has been actively involved in choreographing and performing a range of independent performances of Kinergie Studio as well as collaborating with international artists in art festivals such as “A Touch of Belgium”, “Krossing Over Arts Festival“.
            </p>
            <p>
              In 2021, Hải co-directed and performed in the contemporary dance piece "{<WordAWoman />}" as part of the Antigone Saison project initiated by the Goethe-Institut Vietnam, marking her first professional artwork.
            </p>
            <p>
              In recognition of her contributions, she was nominated in 2022 for the Active Artist category in the Hanoi Grapevine Finest Pandemic Award. In 2023, Hải was selected as one of six artists to participate in the Artist Residency program "Frankfurt Move!" hosted by Frankfurt LAB in collaboration with KfW Stiftung. In this year, Hai and her colleagues created the work "thinh(g)”,  which serves as a dialogue with the artwork "A Tide of Emotions" by artist Chiharu Shiota in the Vincom Center for Contemporary Art.
            </p>
            <p>
              Hải is also recognized for her interdisciplinary collaborations with musicians, film directors, especially with South East Asia Choreographer after participating the Southeast Asian Choreolab - an international choreographic laboratory, facilitated by renowned Taiwanese choreographer Hsiao-Mei Ho in July of 2024.
            </p>
          </div>
        </div>
      </div>
    </SideNavigation>
  )
}
