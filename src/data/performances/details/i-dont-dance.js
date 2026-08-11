const title = "Hết giờ chơi - “I don't dance” (2024)";

const videos = [
  "https://www.youtube.com/embed/uoGZWN2uxpE"
];

const images = [
  "/images/performances/i-dont-dance/img_0.jpg",
  "/images/performances/i-dont-dance/img_1.jpg",
  "/images/performances/i-dont-dance/img_2.jpg",
  "/images/performances/i-dont-dance/img_3.jpg",
  "/images/performances/i-dont-dance/img_4.jpg",
  "/images/performances/i-dont-dance/img_5.jpg",
  "/images/performances/i-dont-dance/img_6.jpg",
  "/images/performances/i-dont-dance/img_7.jpg",
  "/images/performances/i-dont-dance/img_8.jpg",
  "/images/performances/i-dont-dance/img_9.jpg",
  "/images/performances/i-dont-dance/img_10.jpg",
];

const description = (
    <pre>
{`“Playing together, laughing together
Rolling around in circles
Molding and un-molding
Order followed by chaos
Rigid then soft
Between here and there
From here to there
Play, then not play
When playtime is over... continue playing
or return to 'no play'?”`}
    </pre>                    
)


const credits = (
  <>
    <ul style={{ paddingLeft: "24px" }}>
      <li><strong >Choreographer:</strong > Minh Hải</li>
      <li><strong >Assistant Choreographers:</strong > Linh, Bach Viet Phan</li>
      <li><strong >Art Consultant:</strong > Đỗ Hoàng Thi Ngọc</li>
      <li><strong >Producer:</strong > Nguyễn Thị Thu Trang</li>
      <li><strong >Music:</strong > Ian Richter</li>
      <li><strong >Costume:</strong > Hoàng Dung</li>
      <li><strong >Make-up:</strong > Luna Nguyễn</li>
      <li><strong >Performers:</strong > Hoàng Dung, Phương Đặng, Tiểu Phương, My Hà, Phương Xù, Minh Quay, Đỗ Quốc Hưng, Bach Viet Phan, Linh, Hoàng Thanh Lan, Đường Bảo Ngọc, Hoàng Lam, Linh Chi, Chinh Trinh, Thơm Thảo, Tâm, Ngọc, Đan Sâm, Thảo R, Ngô Trần Việt Hà, Minh Hải</li>
      <li><strong >Cinematography:</strong > Dan & Đặng Gia Khiêm</li>
      <li><strong >Photography:</strong > Đỗ Thế Quang, Hà Tâm, Quang Huy, Quang Thanh</li>
    </ul>
    <br />
    <p>{`The performance is part of the 10th anniversary celebration of Kinergie Studio Thập Ki(n).`}</p>
  </>
);

export default {
    title,
    videos,
    description,
    credits,
    images,
}