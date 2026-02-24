import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import performanceData from "@/data/performances/details";
import otherData from "@/data/others/details";
import danceFilmsData from "@/data/dance-films/details";
import styles from "@/styles/Performances.module.scss";
import BackButton from "@/components/back-button";
import VideoSlider from "@/components/video-slider";
import SingleVideo from "@/components/single-video";
import SideNavigation from "@/components/side-nav";


export default function PerformanceItemDetails() {
    const router = useRouter();
    const { slug } = router.query;

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(performanceData[slug] ?? otherData[slug] ?? danceFilmsData[slug]);
    }, []);

    if (!data) return (<></>);
    
    return (
        <SideNavigation>
            <div className={styles.container}>
                <div className={clsx(styles.content, styles.contentDetails)}>
                    <BackButton url="/projects"/>
                    <h1>{data.title}</h1>
                    {
                        data.videos.length > 0 &&
                        <>
                            {
                                data.videos.length > 1
                                    ? <VideoSlider source={data.videos}/>
                                    : <SingleVideo url={data.videos[0]}/>
                            }
                            <div style={{ height: "40px" }}></div>
                        </>
                    }
                    <div className={styles.imageGallery}>
                        {
                            data.images.map((item, index) => (
                                <div key={index} className={styles.imageContainer}>
                                    <Image src={item} alt="" fill sizes="(max-width: 768px) 80vw, (max-width: 1200px) 48vw, 33vw" priority quality={100} />
                                </div>)
                            )
                        }
                    </div>
                    <div style={{ height: "40px" }}></div>
                    <div>
                        {data.description}
                    </div>
                    <br />
                    <div>
                        {data.credits}
                    </div>
                </div>
            </div>
        </SideNavigation>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'rites-of-kite' } },
            { params: { slug: 'sea-choreo-lab' } },
            { params: { slug: 'resonance-camp' } },
            { params: { slug: 'cat-walk' } }, 
            { params: { slug: 'xin-hay-nhin-em' } },
            { params: { slug: 'in-the-banana-forest' } },
        ],
        fallback: false, // can also be true or 'blocking'
    }
  }

export async function getStaticProps({ params }) {
    return {
        props: {

        }, // will be passed to the page component as props
    }
}