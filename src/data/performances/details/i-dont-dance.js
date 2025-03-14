const title = "Hết giờ chơi (I don't dance)";

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
        <strong>
{`"Playing together, laughing together
Rolling around in circles
Molding and un-molding
Order followed by chaos
Rigid then soft
Between here and there
From here to there
Play, then not play
When playtime is over... continue playing
or return to 'no play'?"`}
        </strong>
    </pre>                    
)


const credits = (
    <>
        <pre>
{`Choreographer: Minh Hải
Assistant Choreographers: Linh, Bach Viet Phan
Art Consultant: Đỗ Hoàng Thi Ngọc
Producer: Nguyễn Thị Thu Trang
Music: Ian Richter
Costume: Hoàng Dung
Make-up: Luna Nguyễn
Performers: 
    Hoàng Dung - Phương Đặng - Tiểu Phương
    My Hà - Phương Xù - Minh Quay
    Đỗ Quốc Hưng - Bach Viet Phan - Linh
    Hoàng Thanh Lan - Đường Bảo Ngọc - Hoàng Lam
    Linh Chi - Chinh Trinh - Thơm Thảo
    Tâm - Ngọc - Đan Sâm
    Thảo R - Ngô Trần Việt Hà - Minh Hải
Cinematography: Dan & Đặng Gia Khiêm
Photography: Đỗ Thế Quang - Hà Tâm
    Quang Huy - Quang Thanh`}
        </pre>
        <p>
            {`The performance is part of the 10th anniversary celebration of Kinergie Studio Thập Ki(n).`}
        </p>
    </>
);

export default {
    title,
    videos,
    description,
    credits,
    images,
}