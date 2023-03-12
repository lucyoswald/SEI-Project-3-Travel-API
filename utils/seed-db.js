import { connectToDb } from "./db.js";
import Country from "../models/Country.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Activity from "../models/Activity.js";

const hashThePassword = async (plainTextPassword) => {
  return await bcrypt.hash(plainTextPassword, 10);
};

const adminId = "640369312cde07d7901f3946";
const userId = "64036a6ff49ce0b73b35a8cb";
const testerId = "64036e8aa6779d2d20b1f1af";

const seedingData = {
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
      createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
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
  ],
};

const seedData = async () => {
  await connectToDb();
  console.log("Connected to the database");
  await mongoose.connection.db.dropDatabase();
  console.log("Old data dropped.");

  const users = await User.create(seedingData.users);
  console.log(`${users.length} pre-set user accounts created.`);

  const activities = await Activity.create(
    seedingData.activities.map((activity) => ({
      ...activity,
      createdBy: userId,
    }))
  );
  console.log(activities.map((activity) => activity._id));
  console.log;
  console.log(`${activities.length} acitvity created with seed-bd.`);

  const allCountryData = await Country.create(
    seedingData.countries.map((country) => ({
      ...country,
      createdBy: userId,
      // activities: activities.map((activity) => activity._id),
    }))
  );
  console.log(`${allCountryData.length} full country entries created.`);
  mongoose.disconnect();
  console.log("Disconnected now");
};

seedData();
