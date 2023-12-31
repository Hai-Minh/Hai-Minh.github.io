import styles from "@/styles/Performances.module.scss";
import Image from "next/image";
import Link from "next/link";

export function PerformanceItemContent({ imageSrc, content, title, detailsUrl }) {
    return (
        <>
            <Link href={detailsUrl} style={{textAlign: "center"}}>
                <span className={styles.viewMoreButton}>View More</span>
            </Link>
            <div className={styles.performanceItemImage}>
                <Image src={imageSrc} alt="" fill sizes="(max-width: 768px) 80vw, (max-width: 1200px) 48vw, 33vw" priority quality={100} />
            </div>
            <div className={styles.performanceItemContent}>
                <h2>
                    <Link href={detailsUrl}>
                        {title}
                    </Link>
                </h2>
                <p>{content}</p>
                <Link href={detailsUrl}>
                    <span className={styles.viewMoreButton}>View More</span>
                </Link>
            </div>
        </>
    );
}
