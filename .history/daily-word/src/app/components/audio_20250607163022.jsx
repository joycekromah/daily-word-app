
export function AudioBtn({data}) {
    const playAudio = () => {
        if (!data.audio) return;
    
        let subdir = 'number';
        if (data.audio.startsWith('bix')) subdir = 'bix';
        else if (data.audio.startsWith('gg')) subdir = 'gg';
        else if (/^[a-zA-Z]/.test(data.audio)) subdir = data.audio[0];
    
        const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdir}/${data.audio}.mp3`;
    
        const audio = new Audio(audioUrl);
        audio.play();
      }
    return (
        <div><button className="audio-btn" classNAME="btn btn-outline-secondary" onClick={playAudio}>Listen</button></div>
    )
}

