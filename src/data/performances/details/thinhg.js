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

const images = [...Array(17).keys()].map(key => `/images/performances/thinhg/img_${key}.jpg`);

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
