import styles from "@/styles/Performances.module.scss"
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";

import imgWorkshopMwS from "../../../public/images/moving-with-space/image_1.jpg";
import imgWorkshopBtH from "../../../public/images/workshop-body-to-heart.jpg";
import SideNavigation from "@/components/side-nav";

export default function WorkshopPage() {

    return (
        <SideNavigation>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Workshops</h1>
                    <div className={styles.performanceList}>
                        <PerformanceItem>
                            <PerformanceItemContent 
                                imageSrc={imgWorkshopBtH}
                                title={<>
                                    <p>{`[Inclusive Contemporary Dance Workshops and Performance Series]`}</p>
                                    <p>{`Body to Heart: Encounters of different body realities`}</p>
                                </>}
                                content="Moving together and allowing these bodily realities to meet is an opportunity to explore how each person lives, breathes, and interacts with the world."
                                detailsUrl="/workshops/details/body-to-heart"
                            />
                        </PerformanceItem>
                        <PerformanceItem>
                            <PerformanceItemContent 
                                imageSrc={imgWorkshopMwS}
                                title="Moving With Space"
                                content={`Through fluid and somatic guidance, participants explore the grace of movement while discovering deep interconnections between thought, emotion, the physical body, and surrounding space.`}
                                detailsUrl="/workshops/details/moving-with-space"
                            />
                        </PerformanceItem>
                        <PerformanceItem>
                            <PerformanceItemContent
                                imageSrc="/images/street-movement/image_1.jpg"
                                title={`Street Movement & Urban Observation (Mua Đường - Múa Đường`}
                                content={`By observing social dynamics, urban transformations, and everyday narratives, participants explore the dialogue between the human body and the city, transforming spatial observations into site-specific movement vocabularies.`}
                                detailsUrl="/workshops/details/street-movement"
                            />
                        </PerformanceItem> 
                        <PerformanceItem>
                            <PerformanceItemContent
                                imageSrc="/images/drawing-and-movement/image_1.jpg"
                                title={`Drawing & Movement In Play (Từ Hình Đến Động)`}
                                content={`Simultaneously, visual observation and spatial drawing enable movers to deepen their awareness of form, light, color, and environment, creating visually compelling and intentional spatial dynamics.`}
                                detailsUrl="/workshops/details/drawing-and-movement"
                            />
                        </PerformanceItem> 
                        <PerformanceItem>
                            <PerformanceItemContent
                                imageSrc="/images/mother-and-child/image_1.jpg"
                                title={`Happy Dance For Mother & Child`}
                                content={`Through interactive games using non-verbal "body language," the session offers a healthy play space that stimulates children's imagination and creativity while fostering deeper empathy, mutual understanding, and seamless communication between parent and child.`}
                                detailsUrl="/workshops/details/mother-and-child"
                            />
                        </PerformanceItem>
                        <PerformanceItem>
                            <PerformanceItemContent
                                imageSrc="/images/cubist-perspectives/image_0.jpg"
                                title={`Journey Through The Art World: Cubist Perspectives`}
                                content={`The movement exercises stimulate children's multi-sensory awareness, encouraging them to freely shift their physical perspectives in space to observe how shapes transform and translate these lived spatial observations into unique, multi-dimensional Cubist artworks.`}
                                detailsUrl="/workshops/details/cubist-perspectives"
                            />
                        </PerformanceItem>
                    </div>
                </div>
            </div>
        </SideNavigation>
    );
}
