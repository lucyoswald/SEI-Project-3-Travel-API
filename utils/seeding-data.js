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
        "Walk along the harbour for a view of the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive building.",
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
      price: 0,
      imageUrl:
        "https://content.r9cdn.net/rimg/dimg/b8/05/48044093-city-41543-15984ab4ec9.jpg?width=1200&height=630&crop=true",
    },
    {
      category: "Things to see",
      activityCountry: "Australia",
      name: "Blue Mountains",
      description:
        "The Blue Mountains is a rugged region west of Sydney in Australia’s New South Wales. Known for dramatic scenery, it encompasses steep cliffs, eucalyptus forests, waterfalls and villages dotted with guesthouses, galleries and gardens..",
      location: "50 km (31 mi) NW of Sydney CBD",
      price: 0,
      imageUrl: "https://peakvisor.com/img/news/Australia-Blue-Mountains.jpg",
      linkToWebsite: "https://www.sydneyoperahouse.com/",
    },
    {
      category: "Things to do",
      activityCountry: "Australia",
      name: "Sydney Harbour Bridge Climb",
      description:
        "The Blue Mountains is a rugged region west of Sydney in Australia’s New South Wales. Known for dramatic scenery, it encompasses steep cliffs, eucalyptus forests, waterfalls and villages dotted with guesthouses, galleries and gardens..",
      location: "3 Cumberland St, The Rocks NSW 2000, Australia",
      price: 147,
      imageUrl:
        "https://media.cntraveler.com/photos/53da90d9dcd5888e145bd22b/master/pass/sydney-harbor-bridge-climb-wendy-perrin.jpg",
    },
    {
      category: "Things to do",
      activityCountry: "Australia",
      name: "Great Ocean Road",
      description:
        "Take a day to drive the Great Ocean Road. The Great Ocean Road is an Australian National Heritage listed 240-kilometre stretch of road along the south-eastern coast of Australia between the Victorian cities of Torquay and Allansford.",
      location: "Torquay, Victoria 3228, Australia",
      price: 0,
      imageUrl:
        "https://meetmeindepartures.com/wp-content/uploads/2021/11/12-Apostles-Great-Ocean-Road.jpg",
    },
    {
      category: "Things to do",
      activityCountry: "Australia",
      name: "Whitsunday Islands Tour",
      description:
        "The 74 Whitsunday Islands lie between the northeast coast of Queensland, Australia, and the Great Barrier Reef, a massive stretch of coral teeming with marine life. Most of the islands are uninhabited. They're characterized by dense rainforest, hiking trails and white sand beaches. The town of Airlie Beach on the mainland is the region's central hub.",
      location: "Airlie BeachQueensland 4802, Australia",
      price: 40,
      imageUrl:
        "https://media.tacdn.com/media/attractions-content--1x-1/0b/de/b3/95.jpg",
    },
    {
      category: "Places to eat",
      activityCountry: "Australia",
      name: "Anchor Bar",
      description:
        "Laid-back destination with a pool & sea views offering hearty meals, plus beer & cocktails.",
      location:
        "5 Golden Orchid Drive Whitsunday Terraces Resort, Airlie Beach, Queensland 4802 Australia",
      price: 0,
      imageUrl:
        "https://asset-api-dynamic.localsearch.cloud/83/GRCL/B5936BEE32474E408CBD9D6613DF6683_v1.png",
      linkToWebsite: "https://www.anchorbar.com.au/",
    },
    {
      category: "Places to eat",
      activityCountry: "Australia",
      name: "Slowpoke Espresso",
      description:
        "Breakfast, burgers and cakes in a cool spot with rustic wood panelling and a quaint courtyard.",
      location: "157 Brunswick St, Fitzroy, Yarra, Victoria 3065 Australia",
      price: 0,
      imageUrl:
        "https://images.ctfassets.net/3tapvt0o6lko/PskpzRAzGCi2UibTpiTU4/aa46b5e100e97f6d76c2945ea3957acb/Slowpoke.jpg",
      linkToWebsite: "https://www.facebook.com/slowpokeespresso/",
    },
    {
      category: "Places to eat",
      activityCountry: "Australia",
      name: "Aalia",
      description:
        "AALIA beautifully combines ingredients from across territories and times, contrasting tradition with modern techniques to offer diners an Arabian nomadic time-travelling odyssey of dishes. ",
      location:
        "Mlc Centre 25 Martin Pl Shop 7.07 + 7.08, Sydney, New South Wales 2000 Australia",
      price: 0,
      imageUrl: "https://media.timeout.com/images/105917630/750/422/image.jpg",
      linkToWebsite: "https://www.aaliarestaurant.com/",
    },
    {
      category: "Things to see",
      activityCountry: "USA",
      name: "Arches National Park",
      description:
        "Arches National Park lies north of Moab in the state of Utah. Bordered by the Colorado River in the southeast, it’s known as the site of more than 2,000 natural sandstone arches, such as the massive, red-hued Delicate Arch in the east. Long, thin Landscape Arch stands in Devils Garden to the north. Other geological formations include Balanced Rock, towering over the desert landscape in the middle of the park.",
      location: "Utah, United States.",
      price: 25,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3Iz4nxg26OYUnxF1R7R8Z9_kowXT2i91wA&usqp=CAU",
      linkToWebsite: "https://www.nps.gov/arch/index.htm",
    },
    {
      category: "Things to see",
      activityCountry: "USA",
      name: "Zion National Park",
      description:
        "Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden. Also along the river, partly through deep chasms, is Zion Narrows wading hike.",
      location: "Utah, United States.",
      price: 29,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Zion_angels_landing_view.jpg",
      linkToWebsite: "https://www.nps.gov/zion/index.htm",
    },
    {
      category: "Things to see",
      activityCountry: "USA",
      name: "Bryce Canyon National Park",
      description:
        "Bryce Canyon National Park, a sprawling reserve in southern Utah, is known for crimson-colored hoodoos, which are spire-shaped rock formations. The park’s main road leads past the expansive Bryce Amphitheater, a hoodoo-filled depression lying below the Rim Trail hiking path. It has overlooks at Sunrise Point, Sunset Point, Inspiration Point and Bryce Point. Prime viewing times are around sunup and sundown.",
      location: "Utah, United States.",
      price: 29,
      imageUrl:
        "https://th-thumbnailer.cdn-si-edu.com/I3IYM4a9S14E4PU1yCr_iAPUyU0=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-journeys-media.s3.amazonaws.com%2Ffiler%2Fd2%2F52%2Fd252f665-21c6-4daa-b163-8911ddd0d383%2Fut_bryce_hoodoos_sunset_ist_176984017.jpg",
      linkToWebsite: "https://www.nps.gov/brca/index.htm",
    },
    {
      category: "Things to do",
      activityCountry: "USA",
      name: "Colorado River Half-Day Rafting Trip",
      description:
        "Half-day Colorado River rafting trip on mild class 1 and 2 rapids. The trip covers seven miles with fantastic scenery, informative guides and lots of fun.",
      location: "Moab, United States.",
      price: 77.96,
      imageUrl:
        "https://cdn.getyourguide.com/img/tour/5cab8e22a99a3.jpeg/145.jpg",
      linkToWebsite:
        "https://www.getyourguide.co.uk/moab-l1509/moab-half-day-rafting-trip-on-colorado-river-t210969/",
    },
    {
      category: "Things to do",
      activityCountry: "USA",
      name: "Self-Drive 2.5-Hour Hells Revenge 4x4 Guided Tour",
      description:
        "Drive a 4x4 UTV through a guided tour of the Hell’s Revenge Trail to the Colorado River, where you can overlook into Arches National Park. This thrilling adventure through Utah's iconic landscapes is available for the morning, afternoon, or sunset.",
      location: "Moab, United States.",
      price: 146.48,
      imageUrl:
        "https://cdn.getyourguide.com/img/tour/5e67f78d66883.jpeg/145.jpg",
      linkToWebsite:
        "https://www.getyourguide.co.uk/moab-l1509/moab-25-hour-hells-revenge-4x4-guided-tour-t383455/",
    },
    {
      category: "Things to do",
      activityCountry: "USA",
      name: "3-Hour Jet Boat Tour to Dead Horse Point State Park",
      description:
        "Experience a jet boat tour on the Colorado River that passes through the bottom of Dead Horse State Park, the famous Thelma and Louise Point. Enjoy an awe-inspiring panorama.",
      location: "Moab, United States.",
      price: 105.86,
      imageUrl:
        "https://cdn.getyourguide.com/img/tour/5d2e1e2a62595.jpeg/145.jpg",
      linkToWebsite:
        "https://www.getyourguide.co.uk/moab-l1509/moab-3-hour-jet-boat-tour-to-dead-horse-point-state-park-t276187/",
    },
    {
      category: "Places to eat",
      activityCountry: "USA",
      name: "Quesadilla Mobilla",
      description:
        "This is a food truck on the corner of the food truck park in Moab, UT.",
      location: "95 N Main St, Moab, UT 84532-2302",
      price: 0,
      imageUrl:
        "https://diapersonaplane.com/wp-content/uploads/2017/09/Mobilla-Quesadilla-Web.jpg",
      linkToWebsite: "https://www.quesadillamobilla.com/",
    },
    {
      category: "Places to eat",
      activityCountry: "USA",
      name: "Desert Bistro",
      description:
        "Casually upscale gourmet cuisine with a southwestern flair. Join us in our intimate dining room or on the covered patio for fun & innovative food with friendly, attentive service. Visit our website to see our current menu and make reservations.",
      location: "36 S 100 W, Moab, UT 84532-2513",
      price: 0,
      imageUrl:
        "https://www.moabhappenings.com/images/recipe/0509DesertBistro.jpg",
      linkToWebsite: "http://desertbistro.com/",
    },
    {
      category: "Places to eat",
      activityCountry: "USA",
      name: "The Broken Oar Restaurant",
      description:
        "Casual American dining in a lodge setting, with options including steaks, seafood, pasta & barbecue.",
      location: "53 W 400 N, Moab, UT 84532-2355",
      price: 0,
      imageUrl:
        "https://d3qvqlc701gzhm.cloudfront.net/thumbs/caac48b5ec43287f2cb8f903216d21b5ff0b7d79f0c1c4dace38f831c282552c-750.jpg",
      linkToWebsite: "https://www.thebrokenoarmoab.com/",
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
      name: "USA",
      currencyName: "US Dollar",
      continent: "North America",
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
