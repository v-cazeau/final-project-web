export default function SoundCloud() {
  return (
    <section>
      <iframe
        width="100%"
        height="200"
        title="SoundCloud Playlist"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/483718232&color=%232f895c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/lofi-hip-hop-music"
          rel="noreferrer"
          title="𝗟𝗢𝗙𝗜"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          SoundCloud
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/lofi-hip-hop-music/sets/lofi-hip-hop-beats"
          rel="noreferrer"
          title="𝗟𝗢𝗙𝗜"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Lofi Beats
        </a>
      </div>
    </section>
  );
}
