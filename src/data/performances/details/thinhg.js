const title = (
  <span>
    {`Thinh(g) (2023)`}
  </span>
);

const videos = [
  "https://www.youtube.com/embed/wrfMxUPM1ec?si=9jculiy4Sx6xWqPD"
];

const images = [...Array(17).keys()].map(key => `/images/performances/thinhg/img_${key}.jpg`);

const description = (
  <>
    <p>{`A dance performance within the artwork “A Tide of Emotions” from  Chiharu Shiota`}</p>
    <br />
    <p>{`“throwing chaos into stillness, watch and hear the world unfold”`}</p>
    <br />
    <p>{`In Vietnamese, "thinh" means "sound," while "thinh khong" denotes the absence of sound, or the stillness of nothingness. In the still space of the exhibition, the dance work is a response to the vibrations that Chiharu Shiota imparted to the tide. Artists share their perspective, "thinh(g)" regarding human relationships and the unseen or physical threads that bind us all together. “thinh(g)” - is a stage that extends to fill the entire exhibition area, and on it, performers tell stories while guiding audiences through a range of intense emotions.`}</p>
    <br />
  </>
);

const credits = (
  <>
    <ul style={{ paddingLeft: "24px" }}>
      <li><strong >Co-directors:</strong > Hoàng Hà, Minh Hải</li>
      <li><strong >Art consultant:</strong > Đỗ Hoàng Thi Ngọc</li>
      <li><strong >Performers:</strong > Minh Hải, Trần Minh Quang, Nguyễn Hoàng Dung, Nguyễn Trần Phương, Nguyễn Tiểu Phương, Huyền M Hoàng, Nguyễn Khánh Linh</li>
      <li><strong >Music:</strong > Tâm Thị Phạm</li>
      <li><strong >Producer:</strong > Luna Nguyễn Thuy Thuỷ</li>
      <li><strong >Produce consultant:</strong > Nguỵ Hải An</li>
      <li><strong >Make-up:</strong > Luna Nguyễn Thu Thủy</li>
      <li><strong >Technique Support:</strong > VCCA</li>
      <li><strong >Video:</strong > Nguyễn Minh Thông, Bách Việt Phan, Nguyễn Hữu Ngọc</li>
      <li><strong >Photo:</strong > Bach Viet Phan, Phan Quang Hưng, Lê Hoàng Anh</li>
      <li><strong >Sound technique:</strong > Phạm Hải Đăng , Lê Minh Tân</li>
    </ul>
    <br />
    <p>{`With kind support from Vincom Center for Contemporary Art (VCCA) and Japan Foundation in Việt Nam`}</p>
  </>
);

export default {
  title,
  videos,
  description,
  credits,
  images,
};
