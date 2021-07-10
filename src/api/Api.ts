// Implementing the Api endpoints from the docs
// I'm storing the string here which is not good practice but for the demo it's okay. 
const TVSHOWANDCASTDATA = "https://api.tvmaze.com/shows/143?embed=cast";
const TVSHOWEPISODES = " https://api.tvmaze.com/shows/143/episodes?specials=1";

export async function getTvShowAndCastData() {
  const res = await fetch(TVSHOWANDCASTDATA);
  return await res.json();
}

export async function getTvShowEpisodes() {
  const res = await fetch(TVSHOWEPISODES);	
  return res.json();
}
