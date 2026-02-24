import imgResonanceCamp from "../../../public/images/films_resonance_camp.jpg";

import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import SideNavigation from "@/components/side-nav";
import styles from "@/styles/Performances.module.scss";

export default function ProjectsPage() {
  return (
    <SideNavigation>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Projects</h1>
          <div className={styles.performanceList}>
            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={"/images/perf_rites_of_kite.webp"}
                title={
                  <>
                    <p>{`"Rites of kite" - `}</p>
                    <p>{`a multidisciplinary performance project by Siedl/Cao`}</p>
                  </>
                }
                content={
                  <span>
                    {`"Rites of kite" is a contemplation about kite-flying, a tradition that is endangered by the sprawling urbanisation, a practice or even a ritual that connects the ancestors and the modern people, the nature and the human-being.`}
                  </span>
                }
                detailsUrl="/projects/details/rites-of-kite"
              />
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={"/images/perf_sea_choreo_lab.jpg"}
                title={"SEA Choreolab 2024 - Participant"}
                content={
                  <span>
                    14 selected choreographers will live, work and explore
                    together, with guidance from our international facilitator,
                    Taiwanese choreographer Hsiao-Mei Ho.
                  </span>
                }
                detailsUrl="/projects/details/sea-choreo-lab"
              />
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={imgResonanceCamp}
                title={"Resonance - Improvised Dance & Music Camp"}
                content={
                  <span>
                    Resonance - Improvised Dance & Music Camp is an invitation
                    for everyone to explore and deepen the art of improvisation
                    by opening our senses and redirecting our bodies and minds
                    back to nature.
                  </span>
                }
                detailsUrl="/projects/details/resonance-camp"
              />
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceItemContent
                title="“Catwalk” - Music video"
                imageSrc={"/images/film_cat_walk.png"}
                content={
                  <>
                    Official music video for "Catwalk", taken from Tran Uy Duc’s
                    second album “Came”
                  </>
                }
                detailsUrl="/projects/details/cat-walk"
              />
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceItemContent
                title="“Xin hãy nhìn em (Baby one more time)” - A film by Nguyễn Duy Anh"
                imageSrc={"/images/film_xin_hay_nhin_em.png"}
                content={
                  <>
                    To find the inspiration for a new role as well as to please
                    her husband, Hương - the author of the movie has applied to
                    work as a telemarketing employee for a sleeping pill
                    company. Ironically, on the first day of work, Huong was
                    unfairly slapped by her colleague Nhài. The slap is like the
                    clap on the movie set, leaving a resounding echo in Huong as
                    well as a rhythm for a series of dramatic changes that
                    happen continuously throughout her day.
                  </>
                }
                detailsUrl="/projects/details/xin-hay-nhin-em"
              />
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceItemContent
                title="In The Banana Forest"
                imageSrc={"/images/others_banana_forest.jpg"}
                content={
                  <>
                    Inspired by the esthetic of painter Nguyen Gia Tri lacquer
                    painting and the story in the banana trees in Nguyen Tuan
                    novel “Echo and Shadow Upon a Time” (Vang Bong Mot Thoi)."
                    Seven dancers are performing between the banana trees in a
                    Butoh manner. They will blend in to be a part of nature,
                    like wandering souls or just like the dried banana leaves in
                    the garden. You can hear cutting pieces of a sonar, silent,
                    than the sound of the banana forest.
                  </>
                }
                detailsUrl="/projects/details/in-the-banana-forest"
              />
            </PerformanceItem>
          </div>
        </div>
      </div>
    </SideNavigation>
  );
}
