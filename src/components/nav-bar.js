import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";
import { NavDropdown, NavDropdownItem } from "./nav-dropdown";
import Image from "next/image";

const NavigationData = [
    { title: "Works", url: "/works" },
    { title: "Projects", url: "/projects" },
    { title: "Workshops", url: "/workshops" },
    {
        title: "Curriculum Vitae",
        url: "https://www.canva.com/design/DAFaUgAG5p4/lgEwsD-b-ImZBOI6pK6W-g/view",
        icon: '/icons/ic_open_in_new.svg',
        isOpenNew: true,
    },
];


export default function NavigationBar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image alt="" src="/avatar.png" width={44} height={44} />
                        <span>Minh Hai Tran</span>
                    </Link>
                </div>
                <div className={styles.navList}>
                    {
                        NavigationData.map((item, index) => {
                            if (item.sub) {
                                return (
                                    <NavDropdown title={item.title} titleUrl={item.url}>
                                        {
                                            item.sub.map((subItem, subIndex) =>
                                                <NavDropdownItem
                                                    key={subIndex}
                                                    title={subItem.title}
                                                    url={subItem.url}
                                                />
                                            )
                                        }
                                    </NavDropdown>
                                )
                            }

                            let config = {
                                key: index,
                                href: item.url,
                                onClick: null,
                            };

                            if (item.isOpenNew) {
                                config.onClick = (e) => {
                                    e.preventDefault();

                                    window.open(item.url);
                                };
                            }

                            return (
                                <Link {...config}>
                                    <span className="highlight">
                                        {item.title}
                                    </span>
                                    {
                                        item.icon && (
                                            <Image src={item.icon} alt="" width={20} height={16} />
                                        )
                                    }
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <style jsx>{`
            .highlight:hover {
                text-decoration: underline;
            }
        `}</style>
        </>
    );
};