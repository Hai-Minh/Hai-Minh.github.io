import styles from "@/styles/Performances.module.scss"
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";

import imgWorkshopNGO from "../../../public/images/workshop-ngo.png";
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

                        <PerformanceItem reverse>
                            <PerformanceItemContent 
                                imageSrc={imgWorkshopNGO}
                                title="“Release and Connect” for NGO"
                                content={
                                    <>
                                        “I was so impressed, full of fun to have the opportunity to know such a dedicated workshop! Thank you is definitely not enough to express the appreciation I am feeling. Come to really touch the emotions, will definitely come back and continue to stick together” – Thanh Mai
                                    </>                            
                                }
                                detailsUrl="/workshops/details/release-and-connect"
                            />
                        </PerformanceItem>
                    </div>
                </div>
            </div>
        </SideNavigation>
    );
}

