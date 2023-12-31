const title = "L'ego";

const videos = [
    'https://www.youtube.com/embed/lv0EBtj9-S0',
];

const images = [...Array(13).keys()].map(key => `/images/performances/l-ego/img_${key}.jpg`);

const description = <>
    <span>Me – us, monochromatic – multichromatic colors, individual – collective, personal – joint stories are fragments that in moments of connection create a colorful, spontaneous, hence captivating picture.</span>
    <br />
    <span>L'EGO is a co-creation with influences from contemporary dance, hip hop and jazz theater. There is talk of beauty, identity and individual people, of subtle connections, emotional exchange and the many colours and shades of every moment of life.</span>
</>                            


const credits = <>
    Artistic Director: Do Hoang Thi Ngoc<br />
    Performers:<br />
    Hải Minh, Hoàng Hà, Tú Phạm, Việt Bách, Ngọc Hoa (Kinergie Studio)<br />
    Kim (La Différence, Sài Gòn)<br />
    Nega, Quay Trần (Abnormal Conceptz)<br />
    Linh An (Theater Dance Vietnam)<br />
    Music: Ian Richter, Trần Uy Đức<br />
    Costume: Trần Quỳnh Nhi<br />
    Make-up: Luna, Bambii<br />
    Photograph: Hoàng Nguyễn, Quang Hưng<br />
    Filming: Thu Uyên, Duy Anh<br />
    Production: Thu Hiền, Red, Thùy Trang<br />
    Music Production Supporter: Anaba studio<br />
</>;

export default {
    title,
    videos,
    description,
    credits,
    images,
}