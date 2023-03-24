import { connectToDb } from "./db.js";
import Country from "../models/Country.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import Activity from "../models/Activity.js";
import { seedingData, userId } from "./seeding-data.js";

const seedData = async () => {
  await connectToDb();
  console.log("Connected to the database");
  await mongoose.connection.db.dropDatabase();
  console.log("Old data dropped.");

  const users = await User.create(seedingData.users);
  console.log(`${users.length} pre-set user accounts created.`);
  console.log(users);

  const activities = await Activity.create(
    seedingData.activities.map((activity) => ({
      ...activity,
      createdBy: userId,
    }))
  );

  console.log(`${activities.length} acitvities created with seed-bd.`);

  const allCountryData = await Country.create(
    seedingData.countries.map((country) => ({
      ...country,
      createdBy: userId,
      activities: activities.filter((activity) => {
        if (country.name === activity.activityCountry) {
          return activity.id;
        }
      }),
    }))
  );

  console.log(`${allCountryData.length} full country entries created.`);
  mongoose.disconnect();
  console.log("Disconnected now");
};

seedData();
