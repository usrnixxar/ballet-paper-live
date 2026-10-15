// Party order (1–5) is ballot position, not any official electoral ranking.
// Names and images load from Supabase; these values provide a visible fallback.
export const election = {
  title: 'Online Election',
  subtitle: 'Our Vote • Our Right • Independent Public Opinion'
};
export const initialCandidates = [
  {id:1,name:'Bharatiya Janata Party',shortName:'BJP',symbol:'star',color:'#F28C28',votes:0,imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/BJP_Election_Symbol.svg'},
  {id:2,name:'Indian National Congress',shortName:'Congress',symbol:'book',color:'#1585CD',votes:0,imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_National_Congress_hand_logo.svg'},
  {id:3,name:'Cockroach Janta Party',shortName:'CJP',symbol:'tree',color:'#2F865B',votes:0,imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Cockroach_Janta_Party_logo.svg'},
  {id:4,name:'Samajwadi Party',shortName:'SP',symbol:'lamp',color:'#D12832',votes:0,imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Samajwadi_Party.png'},
  {id:5,name:'Tamilaga Vettri Kazhagam',shortName:'TVK',symbol:'wheel',color:'#AD283E',votes:0,imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Tamilaga_Vettri_Kazhagam_(TVK)_Flag.png'}
];
