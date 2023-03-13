import bcrypt from "bcrypt";
import mongoose from "mongoose";

const hashThePassword = async (plainTextPassword) => {
  return await bcrypt.hash(plainTextPassword, 10);
};

export const adminId = "640369312cde07d7901f3946";
export const userId = "64036a6ff49ce0b73b35a8cb";
const testerId = "64036e8aa6779d2d20b1f1af";

export const seedingData = {
  users: [
    {
      email: "admin@gmail.com",
      userName: "Admin290",
      password: await hashThePassword("123456"),
      role: "admin",
      _id: adminId,
    },
    {
      email: "user@gmail.com",
      userName: "User000",
      password: await hashThePassword("1234567"),
      role: "user",
      _id: userId,
    },
    {
      email: "testeraccount@gmail.com",
      userName: "Tester",
      password: await hashThePassword("12345678"),
      role: "user",
      _id: testerId,
    },
  ],
  activities: [
    {
      category: "Things to see",
      activityCountry: "Australia",
      name: "Sydney Opera House",
      description:
        "Tour the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive building.",
      location: "Bennelong Point, Sydney NSW 2000, Australia",
      price: 23.5,
      imageUrl:
        "https://cdn.britannica.com/85/95085-050-FBA5ABEE/Sydney-Opera-House-Bennelong-Point-Port-Jackson.jpg",
      linkToWebsite: "https://www.sydneyoperahouse.com/",
    },
    {
      category: "Things to see",
      activityCountry: "Australia",
      name: "Bondi Beach",
      description: "Take a swim at one of the most popular beachs in Sydney.",
      location: "Bondi BeachNSW 2026, Australia",
      price: 0.0,
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.r9cdn.net%2Frimg%2Fdimg%2Fb8%2F05%2F48044093-city-41543-15984ab4ec9.jpg%3Fwidth%3D1200%26height%3D630%26crop%3Dtrue&imgrefurl=https%3A%2F%2Fwww.kayak.co.uk%2FBondi-Beach-Hotels.41543.hotel.ksp&tbnid=vpM2Ihd7RerbIM&vet=12ahUKEwja5a3_1Nb9AhVLXaQEHYelDfUQMygLegUIARD4AQ..i&docid=7UPju46IOqO70M&w=1200&h=630&q=bondi%20beach&ved=2ahUKEwja5a3_1Nb9AhVLXaQEHYelDfUQMygLegUIARD4AQ",
      createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    },
    {
      category: "Things to see",
      activityCountry: "Australia",
      name: "Blue Mountains",
      description:
        "The Blue Mountains is a rugged region west of Sydney in Australia’s New South Wales. Known for dramatic scenery, it encompasses steep cliffs, eucalyptus forests, waterfalls and villages dotted with guesthouses, galleries and gardens..",
      location: "50 km (31 mi) NW of Sydney CBD",
      price: 0.0,
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpeakvisor.com%2Fimg%2Fnews%2FAustralia-Blue-Mountains.jpg&imgrefurl=https%3A%2F%2Fpeakvisor.com%2Fpark%2Fblue-mountains-national-park.html&tbnid=gcLDmU81pbKp3M&vet=12ahUKEwjeuJL6ndn9AhXOWqQEHdRGBR8QMygBegUIARDlAQ..i&docid=XKjuB1REf-WYDM&w=1200&h=800&q=blue%20mountains%20australia&ved=2ahUKEwjeuJL6ndn9AhXOWqQEHdRGBR8QMygBegUIARDlAQ",
      createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    },
    {
      category: "Things to see",
      activityCountry: "United Kingdom",
      name: "The Lake District National Park",
      description:
        "Explore some of the most beautiful and historic walks in the Lake District. Through the lake, gorgeous grassy moors and lovely views of Lakeland Fells. Parking cost for the day below otherwise the walking routes are free!",
      location: "Lake District National Park, Nearest lake LA23 1LJ.",
      price: 65,
      imageUrl:
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/477000/477291-Lake-District-Cumbria.jpg",
      createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
  countries: [
    {
      name: "Australia",
      currencyName: "Australian dollar",
      continent: "Australia",
    },
    {
      name: "New Zealand",
      currencyName: "New Zealand Dollar",
      continent: "Oceania",
    },
    {
      name: "Thailand",
      currencyName: "Thai Baht",
      continent: "Asia",
    },
    {
      name: "Loas",
      currencyName: "Laotian Kip",
      continent: "Asia",
    },
    {
      name: "Vietnam",
      currencyName: "Vietnamese dong",
      continent: "Asia",
    },
    {
      name: "United Kingdom",
      currencyName: "British pound sterling",
      continent: "Europe",
    },
  ],
};
