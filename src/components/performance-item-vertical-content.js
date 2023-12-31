import styles from "@/styles/Performances.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function PerformanceItemVerticalContent({ content, title, detailsUrl, imgSrc }) {
    return (
        <div className={styles.performanceItemVerticalContent}>
            <h2>
                <Link href={detailsUrl}>
                    {title}
                </Link>
            </h2>
            <p>{content}</p>
            <div className={styles.performanceItemVerticalImage}>
                <Image src={imgSrc} alt="" fill sizes="(max-width: 768px) 60vw, (max-width: 1200px) 50vw, 40vw" priority quality={100} />
            </div>
            <Link href={detailsUrl} style={{textAlign: 'center'}}>
                <span className={clsx(styles.viewMoreButton, styles.large)}>View More</span>
            </Link>
        </div>
    );
}
