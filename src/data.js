// Party order (1–5) is ballot position, not any official electoral ranking.
// Names and images load from Supabase; these values provide a visible fallback.
export const election = {
  title: 'Online Election',
  subtitle: 'Our Vote • Our Right • Independent Public Opinion'
};
export const initialCandidates = [
  {id:1,name:'Bharatiya Janata Party',shortName:'BJP',symbol:'star',color:'#F28C28',votes:0,imageUrl:'https://upload.wikimedia.org/wikipedia/commons/e/e8/BJP_election_symbol.png'},
  {id:2,name:'Indian National Congress',shortName:'Congress',symbol:'book',color:'#1585CD',votes:0,imageUrl:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Indian_National_Congress_hand_logo.svg'},
  {id:3,name:'Cockroach Janta Party',shortName:'CJP',symbol:'tree',color:'#2F865B',votes:0,imageUrl:'/images/parties/cjp.webp'},
  {id:4,name:'Samajwadi Party',shortName:'SP',symbol:'lamp',color:'#D12832',votes:0,imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c3/Samajwadi_Party.png'},
  {id:5,name:'Tamilaga Vettri Kazhagam',shortName:'TVK',symbol:'wheel',color:'#AD283E',votes:0,imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Tamilaga_Vettri_Kazhagam_%28TVK%29_Flag.png'}
];
