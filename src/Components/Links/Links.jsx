import { useState, useEffect } from 'react'

export default function Links() {
  const [videoId, setVideoId] = useState('hIRCKOyhuEY')

  const labels = {
    C98V6udLCkU: "Looxi's Highlights || CS2 || Headshots",
    MSc314qFEmg: "Gosu Can't Stop Laughing At A Joke - 2017",
    kFxQahOzNRw: "This is What aggressive support players looks like...",
    hIRCKOyhuEY: 'Valorant Edit - Diamond Phonk'
  }

  const playingLabel = labels[videoId] ?? videoId

  useEffect(() => {
    document.title = `Playing — ${playingLabel}`
  }, [playingLabel])

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <input
          id="current-playing"
          value={playingLabel}
          readOnly
          aria-label="Currently playing"
          style={{ width: 560, padding: '6px 8px', fontSize: 14 }}
        />
      </div>

      <div style={{ maxWidth: 560 }}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <button onClick={() => setVideoId('C98V6udLCkU')}>Latest</button>
        <button onClick={() => setVideoId('MSc314qFEmg')} style={{ marginLeft: 8 }}>Most watched</button>
        <button onClick={() => setVideoId('kFxQahOzNRw')} style={{ marginLeft: 8 }}>Recommended</button>
      </div>
    </div>
  )
}
