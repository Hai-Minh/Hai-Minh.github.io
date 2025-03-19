import styles from "@/styles/Performances.module.scss";
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import WordAWoman from "@/components/word-a-woman";
import BackButton from "@/components/back-button";
import SideNavigation from "@/components/side-nav";

import imgAWoman from "../../../public/images/perf_a_woman.jpg";
import imgTamSinh from "../../../public/images/perf_tam_sinh.jpg";
import imgLego from "../../../public/images/perf_l_ego.jpg";
import imgCramped from "../../../public/images/perf_cramped.jpg";
import imgMrNobody from "../../../public/images/perf_mr_nobody.jpg";
import imgThinhg from "../../../public/images/perf_thinhg.jpg";

export default function PerformancesPage() {
  return (
    <SideNavigation>
      <div className={styles.container}>
        <div className={styles.content}>
          <BackButton url="/works" />
          <h1>Performances</h1>
          <div className={styles.performanceList}>
            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={'/images/perf_rites_of_kite.webp'}
                title={<>
                  <p>{`"Rites of kite" - `}</p>
                  <p>{`a multidisciplinary performance project by Siedl/Cao`}</p>
                </>}
                content={
                  <span>
                    {`"Rites of kite" is a contemplation about kite-flying, a tradition that is endangered by the sprawling urbanisation, a practice or even a ritual that connects the ancestors and the modern people, the nature and the human-being.`}
                  </span>
                }
                detailsUrl="/performances/details/rites-of-kite"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={'/images/perf_sea_choreo_lab.jpg'}
                title={"SEA Choreolab 2024 - Participant"}
                content={
                  <span>14 selected choreographers will live, work and explore together, with guidance from our international facilitator, Taiwanese choreographer Hsiao-Mei Ho.</span>
                }
                detailsUrl="/performances/details/sea-choreo-lab"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                  imageSrc={'/images/perf_i_dont_dance.jpg'}
                  title={"Hết giờ chơi (I don't dance)"}
                  content={
                      <span>Playing together, laughing together</span>
                  }
                  detailsUrl="/performances/details/i-dont-dance"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={imgThinhg}
                title={<span>{`Thinh(g)`}</span>}
                content={
                  <>
                    <span style={{ fontSize: "20px", fontWeight: 600 }}>
                      {`
                       A dance performance within the artwork “A Tide of Emotions” from  Chiharu Shiota
                      `}
                    </span>
                    <br />
                    <br />
                    <span style={{ fontStyle: "italic" }}>
                      {`“throwing chaos into stillness, watch and hear the world unfold”`}
                    </span>
                  </>
                }
                detailsUrl="/performances/details/thinhg"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={imgMrNobody}
                title={
                  <span>
                    {`Mr Nobody`}
                    <br />
                    <span style={{ fontSize: "20px", fontStyle: "italic" }}>
                      {`They would be perfectly normal human`}
                    </span>
                  </span>
                }
                content={
                  <span style={{ whiteSpace: "pre-line", fontStyle: "italic" }}>
                    {`
                        “Look at you then look at me 
                        It can be different, it can
                        be the same Maybe we are all the same…”
                      `}
                  </span>
                }
                detailsUrl="/performances/details/mr-nobody"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={imgAWoman}
                title={<WordAWoman />}
                content={
                  <span>
                    “{<WordAWoman />}" is a contemporary dance play within the
                    Goethe Institute's Antigone project (calling for innovative
                    performances based on Sophocles' classic Greek play
                    Antigone) was choreographed by Minh Hai and Hoang Ha.
                    Instead of showing all philosophical layers of the original
                    play, "{<WordAWoman />}" focuses on looking deeper into
                    Antigone's inner world and through this woman's journey to
                    find the answer for the question: What can a human do when
                    fate has been arranged? Even if it is a tragedy, how will a
                    person proceed in the journey to her own foreknown death?
                  </span>
                }
                detailsUrl="/performances/details/a-woman"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={imgTamSinh}
                title="Tam Sinh"
                content={
                  <>
                    <span>
                      “ Three births
                      <br />
                      Three piece
                      <br />
                      and one light...“
                    </span>
                  </>
                }
                detailsUrl="/performances/details/tam-sinh"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={imgLego}
                title="L'ego"
                content={
                  <>
                    <span>
                      Me – us, monochromatic – multichromatic colors, individual
                      – collective, personal – joint stories are fragments that
                      in moments of connection create a colorful, spontaneous,
                      hence captivating picture.
                    </span>
                    <br />
                    <span>
                      L'EGO is a co-creation with influences from contemporary
                      dance, hip hop and jazz theater. There is talk of beauty,
                      identity and individual people, of subtle connections,
                      emotional exchange and the many colours and shades of
                      every moment of life.
                    </span>
                  </>
                }
                detailsUrl="/performances/details/l-ego"
              />
            </PerformanceItem>

            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={imgCramped}
                title="Chật (Journey of Chat)"
                content={
                  <>
                    <span>
                      “CHẬT 2:1:2” explores the responses of individuals and
                      collectives within limited and narrow spaces, expressing
                      people’s choices, struggles, the search for balance,
                      adaptivity... CHẬT was first introduced in Kinergie Studio
                      last December and enjoyed much of love of the audience.
                    </span>
                  </>
                }
                detailsUrl="/performances/details/cramped"
              />
            </PerformanceItem>
          </div>
        </div>
      </div>
    </SideNavigation>
  );
}
