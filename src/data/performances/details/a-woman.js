import WordAWoman from "@/components/word-a-woman";

const title = <WordAWoman />;

const videos = [
    "https://www.youtube.com/embed/eKcMhVe4D0E",
    "https://www.youtube.com/embed/Clatr3nOanw",
    "https://www.youtube.com/embed/5BaPdK1Vb-Y",
];

const images = [...Array(7).keys()].map(key => `/images/performances/a_woman/img_${key}.jpg`);

const description = <>
    “{<WordAWoman />}" is a contemporary dance play within the Goethe Institute's Antigone project (calling for innovative performances based on Sophocles' classic Greek play Antigone) was choreographed by Minh Hai and Hoang Ha. Instead of showing all philosophical layers of the original play, "{<WordAWoman />}" focuses on looking deeper into Antigone's inner world and through this woman's journey to find the answer for the question: What can a human do when fate has been arranged? Even if it is a tragedy, how will a person proceed in the journey to her own foreknown death?
</>

const credits = <>
    Co-directors: Hoàng Hà, Phạm Hương, Minh Hải<br />
    Art consultant: Đỗ Hoàng Thi Ngọc<br />
    Performers: Hoàng Hà, Minh Hải, Trần Minh, Quay Trần, Hà Kiều Anh, Zê Ly<br />
    Music: Ian Richter<br />
    Producer: Ngụy Hải An<br />
    Stage designer: Phạm Hương, Nam Nguyễn, Lê Tú Anh, Trịnh Ngân Hạnh<br />
    Communication: Ngụy Hải An, Lê Tú Anh, Trịnh Ngân Hạnh<br />
    Visual materials: Phan Việt Bách, Đỗ Thế Quang<br />
</>;

export default {
    title,
    videos,
    description,
    credits,
    images,
}