// Music and stamp effects use separate channels. The background track and
// volume are controlled by the authenticated backend's Supabase configuration.
// Browsers may require a tap/click before audible playback begins.
export function createAnthemPiano(){
  const background=new Audio('/audio/background.mp3');
  const stamp=new Audio('/audio/stamp.mp3');
  background.loop=true;
  background.preload='auto';
  background.volume=0.35;
  stamp.preload='auto';
  stamp.volume=0.9;
  let currentUrl='/audio/background.mp3';
  let playing=false;
  async function start(){
    if(playing&&!background.paused)return;
    await background.play();
    playing=true;
  }
  function stop(){background.pause();playing=false;}
  function playStamp(){
    stamp.pause();stamp.currentTime=0;
    return stamp.play();
  }
  function configure({src,volume,updatedAt}={}){
    if(typeof volume==='number'&&Number.isFinite(volume)){
      background.volume=Math.max(0,Math.min(1,volume/100));
    }
    // Cache-bust only when the server has published a new configuration.
    if(typeof src==='string'&&/^\/audio\/background\.(mp3|m4a|ogg|wav)$/.test(src)){
      const next=src+(updatedAt?'?v='+encodeURIComponent(updatedAt):'');
      if(currentUrl!==next){
        const wasPlaying=playing&&!background.paused;
        background.pause();
        background.src=next;
        background.load();
        currentUrl=next;
        if(wasPlaying)background.play().catch(()=>{playing=false;});
      }
    }
  }
  function dispose(){
    stop();background.removeAttribute('src');background.load();
    stamp.pause();stamp.removeAttribute('src');stamp.load();
  }
  return {start,stop,playStamp,configure,dispose};
}
