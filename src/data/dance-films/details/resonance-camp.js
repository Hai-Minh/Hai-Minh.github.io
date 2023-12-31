const title = "Resonance - Improvised Dance & Music Camp";

const videos = [];

const images = [...Array(21).keys()].map(key => `/images/dance-films/resonance-camp/img_${key}.jpg`);

const description = <>
    Resonance - Improvised Dance & Music Camp is an invitation for everyone to explore and deepen the art of improvisation by opening our senses and redirecting our bodies and minds back to nature.
</>                            


const credits = <>
    Artists:<br />
    Tu Le (Contact Improv dancer/improviser)<br />
    Hai Minh (Contemporary Dance dancer/improviser)<br />
    Tam Thi Pham (multimedia composer, improviser and performer)<br />
    Goran Lazarevic (multimedia composer, accordionist and improviser)<br />
</>;

export default {
    title,
    videos,
    description,
    credits,
    images,
}