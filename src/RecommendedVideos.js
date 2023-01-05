import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard.js";

const RecommendedVideos = () => {
  return (
    <div className="recommededVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Best Games Ever"
          views="2M views"
          timestamp="2 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXBKHy5zPg9DnSmpNA6cyzcc9VUHyUcajlw&usqp=CAU"
          channel="GamingBoss"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMHB_haA4k2HmJizI4GRnU80bZdNhNxxoWg&usqp=CAU"
        />
        <VideoCard
          title="Opening a Diamond Store in Mindcraft!!"
          views="5.2M views"
          timestamp="1 month ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnolf6Urro9esk-tPR9tdTvm_z9KqixkhcQ&usqp=CAU"
          channel="Maizen"
          image="https://i.ytimg.com/vi/By5V0BXESFY/maxresdefault.jpg"
        />
        <VideoCard
          title="Modern React Web Development Full Course - 12 Hours | 4 Real Industry Web Applications"
          views="348k views"
          timestamp="2 month ago"
          channelImage="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj"
          channel="JavaScript Mastery"
          image="https://i.ytimg.com/vi/XxXyfkrP298/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlP0Do5VIFlyu8HOLfVF2U7cXcQQ"
        />
        <VideoCard
          title="Veg Chowmein Recipe | How to boil Noodles Perfectly | Chef Sanjyot Keer"
          views="315k views"
          timestamp="9 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0pnnUQrcDvkQXQMkmTwu4gjI0UIsTkWDjg&usqp=CAU"
          channel="Your Food Lab"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAmSLVlVub6U06yzJBu_xiGvhW9ogZJVxQQ&usqp=CAU"
        />
        <VideoCard
          title="MAKE JOKE OF ||MJO||-KALUA THE KIDNAPPER"
          views="81M views"
          timestamp="9 days ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu-qcmgORwtH4vE4vus672LZgS0PgE_Ca64CtnhiKQ=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Make Joke Of"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZK5R45X-aZ7WamTcF5Es7PyiR3JnO-MUrzQ&usqp=CAU"
        />
        <VideoCard
          title="Zara Zara - The QuickStyle"
          views="1.1M views"
          timestamp="5 month ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu_fVOs_5sqjN7M8xoe5C6i0NTOYKP8SjHwPOvxOig=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="TheQuickStyle"
          image="https://i.ytimg.com/vi/gVp3Gpi8ExY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBmdEVXiXlgkilp7eHBBuGNZxCAQ"
        />
        <VideoCard
          title="Agam - Shree Hari Stotram | Vishnu Mantra | Lyrical Sanskrit Mantra"
          views="3.8M views"
          timestamp="58 Minutes ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu_Uzx4N2aikRUFawZOk_rtQc3daL9AlN8Z64ZI4=s88-c-k-c0x00ffffff-no-rj"
          channel="Agam Aggarwal"
          image="https://i.ytimg.com/vi/cToCInaGzCw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScdP5uyHQlyVGD79kCINp7oDgTw"
        />

        <VideoCard
          title="Why I Don’t Use Arrow Functions With const/let"
          views="41k views"
          timestamp="1 day ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Web Dev Simplified"
          image="https://i.ytimg.com/vi/5iGGvJn8K1U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUXq22ILHhY77loa-obe__kOh7Dg"
        />
        <VideoCard
          title="Nanak Ji (Official Video) | Diljit Dosanjh | Bir Singh | Gurpurab 2022"
          views="4.6M views"
          timestamp="1 month ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AMLnZu-15724oKvw3d6sEhdXi56P4qj_k-cIB9ZCjuRGxg=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Diljit Dosanjh"
          image="https://i.ytimg.com/vi/MMUpUpZ-d2s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMgrdAaf-h_0i-PEeaswQjZaMF6g"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
