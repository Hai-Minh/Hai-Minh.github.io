const title = (
  <span>
    {`Mr Nobody (2023)`}
  </span>
);

const videos = ['https://www.youtube.com/embed/c5x8cdgOAsU?si=blFw5JSlroW48LR9'];

const images = [...Array(15).keys()].map(key => `/images/performances/mr_nobody/img_${key}.jpg`);

const description = (
  <>
    <span style={{ whiteSpace: "pre-line" }}>
      {`
They would be perfectly normal human

“Look at you then look at me
It can be different, it can be the same
Maybe we are all the same…”


The performance is the expression of sympathy besides an effort to share about injustices or power imbalances in many countries nowadays. Some people have lost their speech, some people have lost their right, some people simply cannot have a “normal” life!

You are invited to come, to see, to feel and to breathe with the atmosphere of “Mr Nobody” that Hai was trying to create, with earnestness and care. 
`}
    </span>
  </>
);

const credits = (<>
  <ul style={{ paddingLeft: "24px" }}>
    <li><strong >By and with:</strong > Minh Hải Trần</li>
    <li><strong >Music:</strong > Tam Thi Pham</li>
    <li><strong >Text:</strong > The Graveyard Book by Neil Gaiman</li>
    <li>With kind support of the residency program “Frankfurt Moves!”</li>
  </ul>
  <br />
  <p>{`“Frankfurt Moves!” is an initiative of the foundation KfW Stiftung aimed at promoting artistic exchange and intercultural dialogue. The residency program in cooperation with the Frankfurt LAB supports international emerging artists in the performing arts.`}</p>
  <br />
  <p>{`Record on 14th, October, 2023, Frankfurt LAB by De-Da Productions`}</p>
</>);

export default {
  title,
  videos,
  description,
  credits,
  images,
};
