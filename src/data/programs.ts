// ============================================================
// Featured programs — edit this data to update program cards.
// ============================================================

export interface Program {
  countryCode: string;
  flagEmoji: string;
  region: string;
  regionColor: string;
  university: string;
  course: string;
  intake: string;
  fee: string;
}

export const programs: Program[] = [
  {
    countryCode: "GB",
    flagEmoji: "🇬🇧",
    region: "Europe",
    regionColor: "#0f7a5f",
    university: "University of London, UK",
    course: "Business & Economics",
    intake: "Fall / Spring",
    fee: "From £8,500 / year",
  },
  {
    countryCode: "CA",
    flagEmoji: "🇨🇦",
    region: "Americas",
    regionColor: "#d97706",
    university: "University of Toronto, Canada",
    course: "Engineering",
    intake: "All Intakes",
    fee: "From $12,000 / year",
  },
  {
    countryCode: "DE",
    flagEmoji: "🇩🇪",
    region: "Europe",
    regionColor: "#0f7a5f",
    university: "TU Munich, Germany",
    course: "Technology",
    intake: "Winter / Summer",
    fee: "Tuition Free",
  },
  {
    countryCode: "AU",
    flagEmoji: "🇦🇺",
    region: "Oceania",
    regionColor: "#6366f1",
    university: "University of Melbourne, AUS",
    course: "Health Sciences",
    intake: "All Intakes",
    fee: "From $18,000 / year",
  },
];
