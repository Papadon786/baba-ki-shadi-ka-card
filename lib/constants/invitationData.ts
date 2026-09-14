export interface EventItem {
  id: string;
  name: string;
  time?: string;
  note?: string;
  location?: string;
}

export interface EventDay {
  date: string;
  dayOfWeek: string;
  formattedDate: string;
  title: string;
  events: EventItem[];
  highlight?: string;
}

export interface VenueInfo {
  name: string;
  location: string;
  description: string;
  mapsUrl: string;
  event: string;
}

export const invitationData = {
  couple: {
    bride: "Arshiya",
    brideTitle: "DAUGHTER OF",
    groom: "Farhan",
    groomTitle: "SON OF",
    tagline: "AS THEY BEGIN THEIR FOREVER.",
    openingQuote: "A love written in the stars",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    bismillahShort: "بِسْمِ الله",
    blessingText: "With the blessings of Allah, Farhan and Arshiya invite you to share in the joy of their union.",
  },
  
  datesOverview: "8 — 12 DECEMBER 2026",

  days: [
    {
      date: "8 DECEMBER 2026",
      dayOfWeek: "Tuesday",
      formattedDate: "December 8, 2026",
      title: "Milad & Manjha",
      events: [
        {
          id: "milad",
          name: "MILAD",
          time: "2:00 PM",
          note: "Seeking divine blessings and prayers for the sacred union",
        },
        {
          id: "manjha",
          name: "MANJHA",
          time: "4:00 PM",
          note: "Traditional festivities and joyful celebration with family",
        },
      ],
    },
    {
      date: "10 DECEMBER 2026",
      dayOfWeek: "Thursday",
      formattedDate: "December 10, 2026",
      title: "The Barat",
      events: [
        {
          id: "barat",
          name: "BARAT",
          time: "6:00 PM",
          note: "LEAVING FROM RESIDENCE",
          location: "Akbarpur, Kanpur Dehat",
        },
      ],
    },
    {
      date: "12 DECEMBER 2026",
      dayOfWeek: "Saturday",
      formattedDate: "December 12, 2026",
      title: "Reception & Walima",
      events: [
        {
          id: "walima",
          name: "RECEPTION / WALIMA",
          time: "8:00 PM",
          location: "Shivam Palace, Keshavpuram, Kanpur",
          note: "An evening of celebration, banquet & prayers",
        },
      ],
    },
  ] as EventDay[],

  venues: [
    {
      name: "Shivam Palace",
      location: "Keshavpuram, Kanpur",
      description: "Grand banquet hall hosting the Reception & Walima dinner.",
      mapsUrl: "https://maps.google.com/?q=Shivam+Palace+Keshavpuram+Kanpur",
      event: "Reception / Walima — Dec 12, 8:00 PM",
    },
    {
      name: "Akbarpur Residence",
      location: "Akbarpur, Kanpur Dehat",
      description: "Family residence from where the grand Barat departs.",
      mapsUrl: "https://maps.google.com/?q=Akbarpur+Kanpur+Dehat",
      event: "Barat Departure — Dec 10, 6:00 PM",
    },
  ] as VenueInfo[],

  dressCode: {
    title: "DRESS CODE",
    theme: "Pastels & Jewel Tones",
    note: "Traditional Attire & Festive Elegance",
  },

  closing: {
    title: "WITH ALL OUR HEARTS",
    heading: "Your presence is our present",
    message: "Your love, prayers and presence are the greatest gifts as we embark on this sacred journey together.",
    subheading: "We can't wait to celebrate with you",
  },
};
