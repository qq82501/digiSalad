import styles from "./VideoBackground.module.css";
import { useEffect } from "react";

function VideoBackground(props) {
  const { videoId } = props;
  useEffect(() => {
    var player;
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.setAttribute("onload", "onYouTubeIframeReady()");
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeReady = function () {
      player = new window.YT.Player("player", {
        videoId: "M7lc1UVf-VE",
        playerVars: {
          controls: 0,
          playsinline: 1,
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          enablejsapi: 1,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      const btnMenuEl = document.querySelector("#btn__menu");

      btnMenuEl.addEventListener("click", (e) => {
        if (player.getPlayerState() === 2) {
          player.playVideo();
        } else player.pauseVideo();
      });

      document.body.addEventListener("click", (e) => {
        if (!e.target.closest("a:link")) return;
        player.playVideo();
      });
    };

    function onPlayerReady(event) {
      event.target.playVideo();
    }
    function onPlayerStateChange(event) {}
  }, [videoId]);

  return (
    <div className={styles.heroSection__videoBackground}>
      <div className={styles.videoCenterlize}>
        <div id="player"></div>
        {/* <iframe
          // id="player"
          src={props.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; "
        ></iframe> */}
      </div>
    </div>
  );
}

export default VideoBackground;
