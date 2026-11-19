// ─────────────────────────────────────────────────────────────
//  All of the site's words and settings live in this one file.
//  Edit text here; the components in src/components lay it out.
//
//  Anything set to `null` isn't known yet. While `showDrafts`
//  is true, those spots show a yellow "needs info" highlight.
//  Set `showDrafts` to false before launch.
// ─────────────────────────────────────────────────────────────

export const showDrafts = true;

// While false, the page tells Google and other search engines not to list it,
// so the draft doesn't show up when people search for Derek. Set to true at launch.
export const allowSearchEngines = false;

export const site = {
  candidate: 'Derek Klingel',
  lastName: 'Klingel',
  office: 'Stroud Township Supervisor',
  party: 'Democrat',
  committee: 'Friends of Derek Klingel',
  description:
    'Derek Klingel for Stroud Township Supervisor. A lifelong resident with deep roots and real management experience.',

  election: {
    label: 'Primary Election',
    date: 'Tuesday, May 18, 2027',
    confirmed: false, // flip to true once the county confirms
  },

  // Put a photo in /public (e.g. public/derek.jpg) and set this to '/derek.jpg'
  photo: null as string | null,

  // ActBlue page, e.g. 'https://secure.actblue.com/donate/klingel'
  donateUrl: null as string | null,
  donateAmounts: [10, 25, 50, 100, 250],

  // Form service endpoint, e.g. 'https://formspree.io/f/abcd1234'
  volunteerFormAction: null as string | null,

  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
};

export const hero = {
  eyebrow: 'Candidate for Stroud Township Supervisor',
  headline: 'Derek Klingel',
  headlineAccent: 'for Stroud Township.', // read by screen readers in place of the rotating line
  // The gold line cycles through these and loops back to the first.
  // Stroudsburg is a separate borough, but many township residents have a
  // Stroudsburg mailing address, so it's included on purpose.
  places: ['Arlington Heights', 'Penn Estates', 'Blue Mountain Lake', 'Cherry Valley', 'Analomink', 'Glen Brook', 'Stroudsburg'],
  lede:
    'A lifelong Stroud Township resident with deep family roots here, Derek brings years of hands-on management experience to the job of keeping our township a great place to live, work, and visit.',
};

export const about = {
  eyebrow: 'Meet Derek',
  heading: 'Stroud Township, born and raised.',
  // "Ask Derek about…" card: conversation starters tied to the platform,
  // plus one for fun. (Unused icons for later: movie, gamepad, golf, kitchen.)
  askAbout: [
    { icon: 'road' as IconName, text: 'The road on your street that needs fixing' },
    { icon: 'mountain' as IconName, text: "What should and shouldn't get built in Stroud Township" },
    { icon: 'house' as IconName, text: 'Short-term rentals in your neighborhood' },
    { icon: 'people' as IconName, text: 'What our parks and rec programs need' },
    { icon: 'shield' as IconName, text: 'Where your township tax dollars go' },
    { icon: 'paw' as IconName, text: 'Life with six dogs' },
  ],
  askFooter: "He'd rather hear it from you.",
  bio: [
    "Derek Klingel didn't move to Stroud Township. He comes from here. His family has called this township home for generations, and he grew up knowing the roads, the neighbors, and the small businesses that hold our community together.",
    "Derek has spent his career in the businesses that keep our local economy running. He's managed tourist attractions, run restaurants and bars, worked in sales, and even been a golf pro. And from his years in tech support, when something breaks, he's the guy who figures out how to fix it. He knows what brings visitors to the Poconos, he knows how to work with people, and he knows how to get things done.",
    "Derek is running for Supervisor for a simple reason: he cares about this place. He has the experience to do the job well, and he's ready to give it the time and attention it deserves, and to be there when residents need him. Ask anyone who knows him: when Derek is in your corner, he stays there.",
    "Derek and his wife, Cassie, share their home with six dogs. He's a proud member of East Stroudsburg Elks Lodge No. 319, a big movie buff, and still can't resist a round of golf.",
  ],
  quote:
    'My family has called Stroud Township home for generations, and I want yours to be able to say the same. That doesn’t take flashy politics. It takes showing up, doing the homework, and getting it right.',
};

// "Derek by the numbers" strip. Numbers count up when scrolled into view.
export const stats = [
  { value: 38, label: 'years calling Stroud Township home' }, // update each birthday
  { value: 7, label: 'neighborhoods, one township' },
  { value: 6, label: "dogs who've already endorsed him" },
  { value: 1, label: 'supervisor who returns your calls' },
];

export type IconName =
  | 'road' | 'mountain' | 'house' | 'pin' | 'people' | 'shield'
  | 'movie' | 'gamepad' | 'golf' | 'kitchen' | 'paw';

export const priorities = {
  eyebrow: 'The Plan',
  heading: 'Priorities for Stroud Township',
  intro:
    "Practical, common-sense priorities from someone who's lived here his whole life and plans to stay.",
  items: [
    {
      icon: 'road' as IconName,
      title: 'Roads, Plowing & Stormwater',
      body: "The basics come first. Derek will push for a clear, public road repair schedule, dependable snow removal, and drainage fixes in the neighborhoods that flood every time it rains. When state roads like 611 and 209 need work, he'll keep pressing PennDOT until it gets done.",
    },
    {
      icon: 'mountain' as IconName,
      title: 'Smart, Balanced Growth',
      body: 'Growth should work for the people who already live here. Derek will make sure new development, including large warehouses, gets real scrutiny for traffic, noise, and impact on neighbors, and that the woods, streams, and open space that define the Poconos are protected.',
    },
    {
      icon: 'house' as IconName,
      title: 'Good Neighbors, Fair Rules',
      body: "Short-term rentals are part of our tourism economy, but neighbors shouldn't pay the price. Derek supports fair, enforceable rules on noise, parking, trash, and occupancy, with a local contact who answers when there's a problem, so responsible owners can operate and residents can enjoy their homes.",
    },
    {
      icon: 'pin' as IconName,
      title: 'Tourism & Local Business',
      body: "Derek has spent his career in tourism, hospitality, and small business, and knows what keeps visitors coming back. He'll work to support the local businesses and jobs tourism brings, cut unnecessary red tape for small businesses, and make sure growth in visitors doesn't come at the expense of quality of life.",
    },
    {
      icon: 'people' as IconName,
      title: 'Parks & Recreation',
      body: 'Our parks, trails, and rec programs keep families here and draw visitors in. Derek will work to keep parks clean, safe, and well maintained, and to expand programs for kids, seniors, and everyone in between.',
    },
    {
      icon: 'shield' as IconName,
      title: 'Careful Spending, Open Doors',
      body: "Every township dollar is your money. Derek will put public safety first, standing behind our police, fire, and EMS, including the volunteers who keep our companies running. He'll also push for a budget residents can actually read, meetings people can attend, and a supervisor who returns your calls.",
    },
  ],
};

// Add events here. While the list is empty, the page shows "Events coming soon."
// Example:
//   { month: 'Jan', day: '17', title: 'Campaign Kickoff',
//     details: 'East Stroudsburg Elks Lodge No. 319 · 2:00 PM', rsvpUrl: '#involved' },
export const events: {
  month: string;
  day: string;
  title: string;
  details: string;
  rsvpUrl?: string;
}[] = [];
