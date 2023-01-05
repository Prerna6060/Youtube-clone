import React from "react";
import "./searchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AMLnZu-qcmgORwtH4vE4vus672LZgS0PgE_Ca64CtnhiKQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Make Joke Of"
        verified
        subs="11.9M"
        noOfVideos={250}
        description={`"Make Joke Of" is a youtube Channel in which one can find funny animated videos made on social topics.`}
      />
      <hr />

      <VideoRow
        views="81M"
        subs="11.9M"
        description={`A Kidnapper "KALUA", two assistants and one man named "TILAK", see what happens next.`}
        timestamp="58 minutes ago"
        channel="Make Joke Of"
        title="MAKE JOKE OF ||MJO||-KALUA THE KIDNAPPER"
        image="https://img.youtube.com/vi/N8f7J-pW9ec/sddefault.jpg"
      />

      <VideoRow
        views="5.2M"
        subs="11.9M"
        description="See how TAU is not well in the house and want to DEH TYAG. Presenting the latest MAKE JOKE OF Video, ENJOY."
        timestamp="2 days ago "
        channel="Make Joke Of"
        title="MAKE JOKE OF ||MJO|| - DEH TYAG"
        image="https://img.youtube.com/vi/tzFC7bAeNzo/sddefault.jpg"
      />
      <VideoRow
        views="10M"
        subs="11.9M"
        description=" Presenting another episode of Make Joke Of titled COURT MARRIAGE, see how a couple finds its way and deals with the officer to get their marriage done, ENJOY"
        timestamp="2 month ago"
        channel="Make Joke Of"
        title="MAKE JOKE OF ||MJO|| - COURT MARRIAGE"
        image="https://img.youtube.com/vi/6T_JdQXCMtU/sddefault.jpg"
      />
      <VideoRow
        views="19M"
        subs="11.9M"
        description="Presenting Rakshabandhan Special MJO Video, See the chemistry of PAPA and BUA in this festival of love with Make Joke Of`s latest video."
        timestamp="4 month ago"
        channel="Make Joke Of"
        title="MAKE JOKE OF ||MJO|| - RAKSHABANDHAN || PAPA VS BUA"
        image="https://img.youtube.com/vi/h5sxRIo7doY/sddefault.jpg"
      />
      <VideoRow
        views="10M"
        subs="11.9M"
        description="Meet MJO Daddu having fun with some extra swag in his pocket. Presenting Diwali special Make Joke of Video. Let your Diwali be extra funny. ENJOY"
        timestamp="1 year ago"
        channel="Make Joke Of"
        title="MAKE JOKE OF ||MJO|| - COMEDY NIGHTS (DIWALI SPECIAL)"
        image="https://img.youtube.com/vi/TFW21ylLvU0/sddefault.jpg"
      />
      <VideoRow
        views="13M"
        subs="11.9M"
        description={`Presenting another funny "Make Joke Of" comedy video, GOLU MOLU. See how an MJO family reacts when an uncle comes with a surprisingly funny issue. This video also features official MJO name reveal.`}
        timestamp="1 year ago"
        channel="Make Joke Of"
        title="MAKE JOKE OF ||MJO|| - GOLU MOLU || ft. NAME REVEAL"
        image="https://img.youtube.com/vi/XP3QMwNg4BM/sddefault.jpg"
      />
    </div>
  );
};

export default SearchPage;
