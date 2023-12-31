import img0 from "../../../../public/images/performances/thinhg/img_0.jpg";
import img1 from "../../../../public/images/performances/thinhg/img_1.jpg";
import img2 from "../../../../public/images/performances/thinhg/img_2.jpg";
import img3 from "../../../../public/images/performances/thinhg/img_3.jpg";
import img4 from "../../../../public/images/performances/thinhg/img_4.jpg";
import img5 from "../../../../public/images/performances/thinhg/img_5.jpg";
import img6 from "../../../../public/images/performances/thinhg/img_6.jpg";
import img7 from "../../../../public/images/performances/thinhg/img_7.jpg";
import img8 from "../../../../public/images/performances/thinhg/img_8.jpg";
import img9 from "../../../../public/images/performances/thinhg/img_9.jpg";
import img10 from "../../../../public/images/performances/thinhg/img_10.jpg";
import img11 from "../../../../public/images/performances/thinhg/img_11.jpg";
import img12 from "../../../../public/images/performances/thinhg/img_12.jpg";
import img13 from "../../../../public/images/performances/thinhg/img_13.jpg";
import img14 from "../../../../public/images/performances/thinhg/img_14.jpg";
import img15 from "../../../../public/images/performances/thinhg/img_15.jpg";
import img16 from "../../../../public/images/performances/thinhg/img_16.jpg";

const title = (
  <span>
    {`Thinh(g)`}
    <br />
    <span style={{ fontSize: "24px" }}>
      {`A dance performance within the artwork “A Tide of Emotions” from  Chiharu Shiota`}
    </span>
    <br />
    <span style={{ fontSize: "18px", fontStyle: "italic" }}>
      {`“throwing chaos into stillness, watch and hear the world unfold”`}
    </span>
  </span>
);

const videos = [];

const images = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

const description = (
  <>
    {`
    In Vietnamese, "thinh" means "sound," while "thinh khong" denotes the absence of sound, or the stillness of nothingness. In the still space of the exhibition, the dance work is a response to the vibrations that Chiharu Shiota imparted to the tide. Artists share their perspective, "thinh(g)" regarding human relationships and the unseen or physical threads that bind us all together. “thinh(g)” - is a stage that extends to fill the entire exhibition area, and on it, performers tell stories while guiding audiences through a range of intense emotions.
    `}
  </>
);

const credits = (
  <span style={{ whiteSpace: "pre-line" }}>{`
Co-directors: Hoàng Hà, Minh Hải
Art consultant: Đỗ Hoàng Thi Ngọc
Performers:  Minh Hải, Trần Minh Quang, Nguyễn Hoàng Dung, Nguyễn Trần Phương, Nguyễn Tiểu Phương, Huyền M Hoàng, Nguyễn Khánh Linh
Music: Tâm Thị Phương
Producer: Luna Nguyễn Thuy Thuỷ
Produce consultant: Nguỵ Hải An
Make-up: Luna Nguyễn Thu Thủy
Technique Support: VCCA
Video: Nguyễn Minh Thông, Bách Việt Phan, Nguyễn Hữu Ngọc 
Photo: Bach Viet Phan, Phan Quang Hưng, Lê Hoàng Anh
Sound technique: Phạm Hải Đăng , Lê Minh Tân

With kind support from Vincom Center for Contemporary Art (VCCA) and Japan Foundation in Việt Nam    
`}</span>
);

export default {
  title,
  videos,
  description,
  credits,
  images,
};
