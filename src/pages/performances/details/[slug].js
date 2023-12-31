import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import performanceData from "@/data/performances/details";
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
        setData(performanceData[slug]);
    }, []);

    if (!data) return (<></>);
    
    return (
        <SideNavigation>
            <div className={styles.container}>
                <div className={clsx(styles.content, styles.contentDetails)}>
                    <BackButton url="/performances"/>
                    <h1>{data.title}</h1>
                    <p>
                        {data.description}
                    </p>
                    <br />
                    <p>
                        {data.credits}
                    </p>
                    <div style={{height: "40px"}}></div>
                    {
                        data.videos.length > 0 &&
                        <>
                            {
                                data.videos.length > 1
                                    ? <VideoSlider source={data.videos}/>
                                    : <SingleVideo url={data.videos[0]}/>
                            }
                        </>
                    }
                    <div style={{ height: "40px" }}></div>
                    <div className={styles.imageGallery}>
                        {
                            data.images.map((item, index) => (
                                <div key={index} className={styles.imageContainer}>
                                    <Image src={item} alt="" fill placeholder="blur" />
                                </div>)
                            )
                        }
                    </div>
                </div>
            </div>
        </SideNavigation>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'a-woman' } }, 
            { params: { slug: 'l-ego' } },
            { params: { slug: 'tam-sinh' } },
            { params: { slug: 'cramped' } },
            { params: { slug: 'mr-nobody' } },
            { params: { slug: 'thinhg' } },
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