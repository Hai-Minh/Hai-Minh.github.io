import Image from "next/image";
import styles from "@/styles/Works.module.scss";
import Link from "next/link";

export default function WorkListItem({title, imgSrc, url}) {
    return (
        <Link href={url}>
            <div className={styles.workListItem}>
                <div className={styles.workListItemImage}>
                    <Image src={imgSrc} alt="" fill sizes="(max-width: 768px) 80vw, (max-width: 1200px) 48vw, 33vw" priority quality={100} />
                </div>
                <p className={styles.workListItemText}>{title}</p>
            </div>
        </Link>
    );
}