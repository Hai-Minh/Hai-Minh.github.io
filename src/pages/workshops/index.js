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
                                content={`An experiential workshop on emotional expression and spatial interaction`}
                                detailsUrl="/workshops/details/moving-with-space"
                            />
                        </PerformanceItem>
                        <PerformanceItem>
                            <PerformanceItemContent
                                imageSrc="/images/street-movement/image_1.jpg"
                                title={`Street Movement & Urban Observation (Mua Đường ờn- Múa Đường`}
                                content={`An interdisciplinary workshop exploring movement within urban spaces`}
                                detailsUrl="/workshops/details/street-movement"
                            />
                        </PerformanceItem> 
                        <PerformanceItem>
                            <PerformanceItemContent
                                imageSrc="/images/drawing-and-movement/image_1.jpg"
                                title={`Drawing & Movement In Play (Từ Hình Đến Động)`}
                                content={`A collaboration between Hong Xiem & Kinergie Studio`}
                                detailsUrl="/workshops/details/drawing-and-movement"
                            />
                        </PerformanceItem> 
                    </div>
                </div>
            </div>
        </SideNavigation>
    );
}

