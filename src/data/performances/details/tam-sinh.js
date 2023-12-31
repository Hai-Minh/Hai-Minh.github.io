const title = "Tam Sinh";

const videos = [];

const images = [...Array(16).keys()].map(key => `/images/performances/tam_sinh/img_${key}.jpg`);

const description = <>
    <span>
        “ Three births<br />
        Three piece<br />
        and one light...“
    </span>
</>

const credits = <>
    Choreographed and performed by: Minh Hai, Pham Huong, Lo Mo
</>;

export default {
    title,
    videos,
    description,
    credits,
    images,
}