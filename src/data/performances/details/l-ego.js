const title = "L'ego (2019)";

const videos = [
    'https://www.youtube.com/embed/lv0EBtj9-S0',
];

const images = [...Array(13).keys()].map(key => `/images/performances/l-ego/img_${key}.jpg`);

const description = <>
    <p>{`Me – us, monochromatic – multichromatic colors, individual – collective, personal – joint stories are fragments that in moments of connection create a colorful, spontaneous, hence captivating picture.`}</p>
    <br />
    <p>{`L'EGO is a co-creation with influences from contemporary dance, hip hop and jazz theater. There is talk of beauty, identity and individual people, of subtle connections, emotional exchange and the many colours and shades of every moment of life.`}</p>
</>                            


const credits = (
  <ul style={{ paddingLeft: "24px" }}>
    <li><strong >Artistic Director:</strong > Do Hoang Thi Ngoc</li>
    <li><strong >Performers:</strong > Hải Minh, Hoàng Hà, Tú Phạm, Việt Bách, Ngọc Hoa (Kinergie Studio), Kim (La Différence, Sài Gòn), Nega, Quay Trần (Abnormal Conceptz), Linh An (Theater Dance Vietnam)</li>
    <li><strong >Music:</strong > Ian Richter, Trần Uy Đức</li>
    <li><strong >Costume:</strong > Trần Quỳnh Nhi</li>
    <li><strong >Make-up:</strong > Luna, Bambii</li>
    <li><strong >Photography:</strong > Hoàng Nguyễn, Quang Hưng</li>
    <li><strong >Filming:</strong > Thu Uyên, Duy Anh</li>
    <li><strong >Production:</strong > Thu Hiền, Red, Thùy Trang</li>
    <li><strong >Music Production Supporter:</strong > Anaba studio</li>
  </ul>
);

export default {
    title,
    videos,
    description,
    credits,
    images,
}