import imgMrNobody from "../../../public/images/perf_mr_nobody.jpg";
import imgThinhg from "../../../public/images/perf_thinhg.jpg";
import imgAWoman from "../../../public/images/perf_a_woman.jpg";
import imgLego from "../../../public/images/perf_l_ego.jpg";

import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import SideNavigation from "@/components/side-nav";
import WordAWoman from "@/components/word-a-woman";
import performancesStyles from "@/styles/Performances.module.scss";
import styles from "@/styles/Works.module.scss";

export default function WorksPage() {
  return (
    <SideNavigation>
      <div className={styles.container}>
        <div className={performancesStyles.content}>
          <h1>Works</h1>
          <div className={performancesStyles.performanceList}>
            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={"/images/coc_kien_gioi.jpg"}
                title={"Cóc kiện Zời"}
                content={
                  <>
                    <span style={{ display: "inline-block", marginBottom: "8px" }}>
                      {`Tái hiện một câu chuyện dân gian mang tính đương đại trước mắt khán giả tại Hà Nội. Cóc kiện Zời là tác phẩm múa đương đại được lấy cảm hứng từ câu truyện dân gian Việt Nam “Con Cóc là cậu ông Giời” `}
                    </span>
                    <br />
                    <span>{`The performance has a poetic, visually rich, and compelling staging that reimagined a traditional folktale through a contemporary lens for Hanoi audiences. “Cóc Kiện Zời” is a contemporary dance performance inspired by the Vietnamese folktale “Cóc kiện Giời” (“The Toad That Sued The Celestial Emperor”)`}</span>
                  </>
                }
                detailsUrl="/works/details/coc-kien-zoi"
              />
            </PerformanceItem>
            <PerformanceItem>
              <PerformanceItemContent
                imageSrc={"/images/perf_i_dont_dance.jpg"}
                title={"Hết giờ chơi (I don't dance)"}
                content={<span>Playing together, laughing together</span>}
                detailsUrl="/works/details/i-dont-dance"
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
                detailsUrl="/works/details/mr-nobody"
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
                detailsUrl="/works/details/thinhg"
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
                detailsUrl="/works/details/a-woman"
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
                detailsUrl="/works/details/l-ego"
              />
            </PerformanceItem>
          </div>
        </div>
      </div>
    </SideNavigation>
  );
}
