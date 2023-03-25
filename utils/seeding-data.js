import bcrypt from "bcrypt";
import mongoose from "mongoose";

const hashThePassword = async (plainTextPassword) => {
  return await bcrypt.hash(plainTextPassword, 10);
};

export const adminId = "640369312cde07d7901f3946";
export const userId = "64036a6ff49ce0b73b35a8cb";
const testerId = "64036e8aa6779d2d20b1f1af";
const kpId = "6416e187c7d67cc5c2d34753";

const countryIds = {
  Australia: new mongoose.Types.ObjectId(),
  NewZealand: new mongoose.Types.ObjectId(),
  Thailand: new mongoose.Types.ObjectId(),
  UnitedStates: new mongoose.Types.ObjectId(),
  Vietnam: new mongoose.Types.ObjectId(),
  UnitedKingdom: new mongoose.Types.ObjectId(),
  Germany: new mongoose.Types.ObjectId(),
  Turkey: new mongoose.Types.ObjectId(),
  China: new mongoose.Types.ObjectId(),
  Italy: new mongoose.Types.ObjectId(),
  Spain: new mongoose.Types.ObjectId(),
  India: new mongoose.Types.ObjectId(),
  Japan: new mongoose.Types.ObjectId(),
  Canada: new mongoose.Types.ObjectId(),
};

const users = [
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
    email: "testAccount@gmail.com",
    userName: "Tester",
    password: await hashThePassword("12345678"),
    role: "user",
    _id: testerId,
  },
  {
    email: "kptest@gmail.com",
    userName: "Kptest",
    password: await hashThePassword("Maisey"),
    role: "user",
    _id: kpId,
  },
];

const activities = [
  {
    category: "Things to see",
    activityCountry: countryIds.Australia,
    name: "Sydney Opera House",
    description:
      "Walk along the harbour for a view of the Sydney Opera House. The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive building.",
    location: "Bennelong Point, Sydney NSW 2000, Australia",
    price: 23.5,
    imageUrl:
      "https://content.r9cdn.net/rimg/dimg/b8/05/48044093-city-41543-15984ab4ec9.jpg?width=1200&height=630&crop=true",
    linkToWebsite: "https://www.sydneyoperahouse.com/",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Australia,
    name: "Bondi Beach",
    description: "Take a swim at one of the most popular beachs in Sydney.",
    location: "Bondi BeachNSW 2026, Australia",
    price: 0,
    imageUrl:
      "https://content.r9cdn.net/rimg/dimg/b8/05/48044093-city-41543-15984ab4ec9.jpg?width=1200&height=630&crop=true",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Australia,
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
    activityCountry: countryIds.Australia,
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
    activityCountry: countryIds.Australia,
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
    activityCountry: countryIds.Australia,
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
    activityCountry: countryIds.Australia,
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
    activityCountry: countryIds.Australia,
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
    activityCountry: countryIds.Australia,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
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
    activityCountry: countryIds.UnitedStates,
    name: "The Broken Oar Restaurant",
    description:
      "Casual American dining in a lodge setting, with options including steaks, seafood, pasta & barbecue.",
    location: "53 W 400 N, Moab, UT 84532-2355",
    price: 0,
    imageUrl:
      "https://d3qvqlc701gzhm.cloudfront.net/thumbs/caac48b5ec43287f2cb8f903216d21b5ff0b7d79f0c1c4dace38f831c282552c-750.jpg",
    linkToWebsite: "https://www.thebrokenoarmoab.com/",
  },

  //THINGS TO SEE UK
  {
    category: "Things to see",
    activityCountry: countryIds.UnitedKingdom,
    name: "The Lake District National Park",
    description:
      "Explore some of the most beautiful and historic walks in the Lake District. Through the lake, gorgeous grassy moors and lovely views of Lakeland Fells. Parking cost for the day below otherwise the walking routes are free!",
    location: "Lake District National Park, Nearest lake LA23 1LJ.",
    price: 65,
    imageUrl:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/477000/477291-Lake-District-Cumbria.jpg",
  },

  {
    category: "Things to see",
    activityCountry: countryIds.UnitedKingdom,
    name: "Stonehenge",
    description:
      "Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England, two miles west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons, topped by connecting horizontal lintel stones. The price includes entry to the museum + the ability to get up close to the site.",
    location: "Salisbury SP4 7DE",
    price: 62,
    imageUrl:
      "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1644423030/rgrovd2gmkjnbexburk5.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.UnitedKingdom,
    name: "Porthcurno Beach",
    description:
      "Porthcurno Beach is considered one of the stand-out jewels of the Penwith Heritage Coast. It's folded into the rugged headlands just a little southeast of where Land's End marks the very tip of the county. That helps to keep the spot relatively remote and empty, even during the height of the summer months.",
    location: "Porthcurno Beach, TR19 6JX.",
    price: 0.0,
    imageUrl:
      "https://www.carbisbayholidays.co.uk/blog/wp-content/uploads/sites/17/2021/05/Porthcurno.jpg",
  },

  //THINGS TO DO: UK
  {
    category: "Things to do",
    activityCountry: countryIds.UnitedKingdom,
    name: "London Dungeon",
    description:
      "Journey through London’s darkest days with an entrance ticket to the London Dungeon. This chilling sensory experience includes elaborate staging, interactive attractions, and engaging performances. Witness gruesome scenes including the horrors of London’s notorious killers, the putrescence of the Great Plague, and the Great Fire of 1666.",
    location:
      "Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB",
    price: 26.5,
    imageUrl:
      "https://assets.londonist.com/uploads/2017/07/i875/the_torturer_-1.jpg",
  },

  {
    category: "Things to do",
    activityCountry: countryIds.UnitedKingdom,
    name: "Cornwall: The Eden Project",
    description:
      "The Eden Project in Cornwall represents a number of environmental and social projects all under the auspices of sustainable growth. Visitors can view a variety of beautiful landscapes in addition to numerous works of art. It also plays home to regular music events and hosts a botanical and conservation research division.The Eden Project is far more than a sizable horticultural theme park. It is a cultural revelation whereby visitors can learn through interactive displays together with detailed information given throughout the 10 hectares of natural wonder..",
    location: "Bodelva, Par PL24 2SG",
    price: 32.5,
    imageUrl:
      "https://www.edenproject.com/sites/default/files/2021-06/eden-project-tamsyn-lewis.jpg",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.UnitedKingdom,
    name: "The Vault at the Natural History Museum",
    description:
      "Some of nature's most unique and valuable treasures are on display in the Vault gallery.See the world's largest collection of coloured diamonds (they also glow in the dark), and marvel at rare meteorites from out of this world.Star specimens and exhibits include a piece of the Winchcombe meteorite, from the first meteorite fall to have been recovered in the UK for 30 years.The Aurora Pyramid of Hope, an unrivalled collection of 296 coloured diamonds.",
    location:
      "Natural History Museum, Cromwell Rd, South Kensington, London SW7 5BD",
    price: 26.5,
    imageUrl:
      "https://www.nhm.ac.uk/content/dam/nhmwww/visit/Galleriesandfloorplans/Aurora-pyramid-diamonds-vault-full-width.jpg.thumb.1920.1920.jpg",
  },

  //PLACES TO EAT: UK
  {
    category: "Places to eat",
    activityCountry: countryIds.UnitedKingdom,
    name: "Ciro's Pomodoro, London",
    description:
      "A truly hidden gem tucked away in Knightsbidge on Beauchamp Place, underground bar and restaurant with live music and wonderful food! Ciros Pomodoro is a perfect combination of Great Italian food, Image, High Energy, and of course the man himself, forming the nucleus of the very successful formula. Get the ravoli with their famous sauce!",
    location: "51 Beauchamp Pl, London SW3 1NY",
    price: 30,
    imageUrl:
      "https://c.yell.com/t_galleryFit,f_auto/da44b17c-ea48-4c7a-b57a-f99d6360aa6e_image_jpeg.jpg",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.UnitedKingdom,
    name: "Bibi's Covent Garden",
    description:
      "Founded by Turkish born chef and food creative Bilur Yapici (or Bibi for short) the Bibi’s family of cafés specialises in original salad recipes, made fresh everyday. From freshly prepared, colourful salads, our specialty bulgur and made-in-house hummus, to homemade cakes and treats, mini stuffed croissants and more, you can find everything in our intimate cafés – perfect for popping in and out, or staying for a while..",
    location: "25 Rose St, London WC2E 9EA",
    price: 9,
    imageUrl:
      "https://www.letsgotobibis.co.uk/wp-content/uploads/2021/09/bibis_kitchen_catring_banner3.jpg",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.UnitedKingdom,
    name: "Kami, Japanese restaurant ",
    description:
      "Authentic Japanese Restaurant, created with love and balance, served with style in our funky, vibrant restaurants … that’s the Kami experience.Authentic Japanese food include Kimchi, Oyako Don, Katsu Curry Don, Miso Soup and tempura and features rice, noodle and seafood (Salmon, Sea bass, King Prawns, Squid, and Scallop) as staples.",
    location: "260 Kentish Town Rd, London NW5 2AA",
    price: 25,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNQ64zRoFHCQpSpEZRX-5JV13Ji08N61B8HFjHi=s1360-w1360-h1020",
  },

  //THINGS TO SEE: NEW ZEALAND
  {
    category: "Things to see",
    activityCountry: countryIds.NewZealand,
    name: "Fiordland National Park and Milford Sound, South Island",
    description:
      "A World Heritage Site, Fiordland National Park protects some of the most spectacular scenery in the country. Glaciers sculpted this dramatic landscape, carving the famous fjords of Milford, Dusky, and Doubtful Sounds",
    location: "Lake District National Park, Nearest lake LA23 1LJ.",
    price: 0.0,
    imageUrl:
      "https://www.planetware.com/photos-large/NZ/new-zealand-south-island-fiordland-national-park.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.NewZealand,
    name: "Lake Taupo and Tongariro National Park, North Island",
    description:
      "In the center of the North Island and just a few kilometers from glittering Lake Taupo, New Zealand's largest lake, lies Tongariro National Park. ",
    location:
      "Tongariro National Park covers 786 km2 stretching between 175° 22' and 175° 48' East and 38° 58' and 39° 25' South in the heart of the North Island of New Zealand.",
    price: 0.0,
    imageUrl:
      "https://www.planetware.com/photos-large/NZ/new-zealand-north-island-tongariro-national-park.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.NewZealand,
    name: "Te Waikoropupu Springs",
    description:
      "Te Waikoropupū Springs, also known as Pupu Springs and Waikaremumu Springs, are located in Golden Bay, in New Zealand's South Island. The springs are known for the clarity of the water, and the volume of water discharged. The springs are spiritually significant to Māori people. The springs feed Te Waikoropupū River, a short tributary of the Tākaka River. ",
    location: "Te Waikoropupu Springs Scenic Reserve",
    price: 0.0,
    imageUrl:
      "https://resources.stuff.co.nz/content/dam/images/1/s/m/q/s/1/image.related.StuffLandscapeSixteenByNine.710x400.1smfek.png/1542507029923.jpg",
  },

  //THINGS TO DO: NEW ZEALAND
  {
    category: "Things to do",
    activityCountry: countryIds.NewZealand,
    name: "Caving",
    description:
      "In the North Island the best known caving area is Waitomo Caves in the Waikato region. There are caves that you can simply walk through; there are caves you can float through (this is called black water rafting); and there are caves that require abseiling, climbing and squeezing. Experienced operators here know how to turn you into a caver in a single day.  ",
    location: "Waitomo Village Road, Waitomo, Te Kuiti 3977 ",
    price: 35,
    imageUrl:
      "https://www.newzealand.com/assets/Operator-Database/img-1589270515-7129-22752-bwr_2017-sjp-5__aWxvdmVrZWxseQo_FocalPointCropWzExMDAsMzIwMCw1MCw1MCw3NSwianBnIiw2NSwyLjVd.jpg",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.NewZealand,
    name: "Hobbiton Lord of The Rings Movie Set Tour",
    description:
      "Vist the number one attraction in New Zealand. Join us and experience the real Middle-earth™ at the Hobbiton Movie Set, where, in the heart of the Waikato region, you can step into the lush pastures of the Shire™, as seen in The Lord of the Rings and The Hobbit trilogies.You will journey around the 12 acre set; past Hobbit Holes, the Mill and into the world-famous Green Dragon™ Inn, where you will be presented with a complimentary, exclusive Hobbit Southfarthing beverage to conclude your own Middle-earth adventure.",
    location: "501 Buckland Road, Matamata 3472, New Zealand ",
    price: 46,
    imageUrl:
      "https://www.hobbitontours.com/media/1177/hobbiton-movie-set-4.jpg?crop=0,0.33180725114859916,0,0.19999767021111672&cropmode=percentage&width=2600&heightratio=0.3125&rnd=132732403000000000&format=webp",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.NewZealand,
    name: "Winery Tour - Best of the Locals - Wine Tour",
    description:
      "Experience some of the best wineries around Queenstown with this full-day tour. Visit award-winning locations like Cox's Vineyard, Aurum Wines, Mondillo Vineyard and more. While sampling local wines, learn about the history of this region and meet the local families who are the faces behind the product. A delicious lunch is also included as part of this tour. ",
    location:
      "Location 1: Gibbston, Gibbston, Otago Region, South Island. Location 2: Aurum Wines, Rapid 140 State Highway 6 State Highway 6, Cromwell 9384 New Zealand. Location 3: Mondillo Vineyard, 370 Bendigo Loop Road, 9383 New Zealand. Location 4: Misha's Vineyard Tasting Room, 182 State Highway 8B (Freeway Orchard Complex), Cromwell 9310 New Zealand.Final location: Central Otago, Central Otago, Otago Region, South Island",
    price: 196,
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/04/cf/35.jpg",
  },

  //PLACES TO EAT: NEW ZEALAND
  {
    category: "Places to eat",
    activityCountry: countryIds.NewZealand,
    name: "Sidart",
    description:
      "Showcasing the best seasonal produce and ingredients from some of the finest growers and farmers in the Auckland region and the whole of New Zealand. Indian fine dining aiming to focus on local and seasonal produce native to both New Zealand and the wider Pacific region.",
    location: "283 Ponsonby Road, Ponsonby, Auckland 1011, New Zealand",
    price: 90,
    imageUrl:
      "https://nz.rs-cdn.com/images/nwsvq-3tbmu/feature/a9b38d63fce2f7514cf3c31d25e60260__7b5f/hcrop1920x1086@stretch.jpg.webp",
  },

  {
    category: "Places to eat",
    activityCountry: countryIds.NewZealand,
    name: "Pacifica Kaimoana Restaurant",
    description:
      "A licensed highly rated seafood restaurant in a bungalow on the Marine Parade, based on the intense contrast between very fine cuisine and relaxed Pacifica hospitality.",
    location: "209 Marine Parade, Napier Central, Napier 4110, New Zealand",
    price: 81,
    imageUrl:
      "https://thefoodpornographer.com/wp-content/uploads/2013/07/DSC_5829-2.jpg",
  },

  {
    category: "Places to eat",
    activityCountry: countryIds.NewZealand,
    name: "Rata",
    description:
      "A modern light-filled eatery tucked away in the center of bustling Queenstown, surrounded by an urban forest of native trees with a backdrop of some of the regions oldest historic buildings. It is the essence of New Zealand.",
    location: "Te Nuku,43 Ballarat St,Queenstown, 9348",
    price: 40,
    imageUrl:
      "https://bookmestatic.net.nz/bookme-review-images/reviews/4d1fb6ee-2f68-4931-b09d-26fef6f2dac5.jpeg",
  },

  {
    category: "Things to do",
    activityCountry: countryIds.Thailand,
    name: "Phi Phi Islands Speedboat Day Tour",
    description:
      "Experience the barefoot lifestyle and tropical landscape of the Phi Phi Islands in the Andaman Sea on a full-day tour from Krabi. Swim with colorful fish at Lohsamah and Monkey Bay, snorkel among coral gardens and laze on white sand beaches at Maya Bay.",
    location: "From Krabi Province",
    price: 37.99,
    imageUrl:
      "https://cdn.getyourguide.com/img/tour/5e181e66d89c1.jpeg/145.jpg",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Thailand,
    name: "Waterfall, Elephant Sanctuary and Bamboo Rafting",
    description:
      "Explore the beauty of Chiang Mai with a waterfall trekking experience and an elephant sanctuary in one day. Interact with rescued elephants, eat a Thai lunch, and enjoy bamboo rafting in the jungle.",
    location: "Chiang Mai",
    price: 44.49,
    imageUrl: "https://cdn.getyourguide.com/img/tour/6322f601ef998.jpeg/98.jpg",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Thailand,
    name: "James Bond Island Luxury Sunset Cruise",
    description:
      "Experience James Bond Island on a luxury cruise equipped with a full bar, day beds, DJ, and dance floor. Enjoy a beautiful sunset ocean panorama while having dinner on board.",
    location: "Phuket",
    price: 116.17,
    imageUrl: "https://cdn.getyourguide.com/img/tour/63406aedeff86.jpeg/98.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Thailand,
    name: "Khao Yai National Park",
    description:
      "Thailands most impressive wildlife haven is just a few short hours from Bangkok by road, but the dense, dripping jungles hide elephants, monkeys, gibbons, bears, hornbills, bats and some of the last wild Thai tigers. Hikes in the rainforest pass through terrain strung with vines and orchids while waterfalls thunder into jungle pools.",
    location: "Khao Yai",
    price: 0.0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Haew_Suwat_Waterfall_Khao-Yai02.jpg/1200px-Haew_Suwat_Waterfall_Khao-Yai02.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Thailand,
    name: "Chiang Mai",
    description:
      "Shrouded in misty, jungly mountains, Chiang Mai is one of the best destinations in Thailand for travelers looking to see a different side of the country: a city of ancient constructions, thick tropical rainforests, and hill trekking. A good way to see the wild side of Chiang Mai is to head out to Doi Inthanon National Park, which is part of the Himalayan mountain range and home to remote villages and stunning viewpoints.",
    location: "Chiang Mai",
    price: 0.0,
    imageUrl:
      "https://www.planetware.com/wpimages/2019/08/thailand-best-places-to-visit-chiang-mai.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Thailand,
    name: "The Grand Palace",
    description:
      "A trip to Bangkok would not be complete without a visit to the spectacular Grand Palace, a collection of impressive temples and structures in Rattanakosin, the historic centre of the city. Built by the early kings of the Chakri dynasty, this vast complex is home to shimmering gold palaces, intricate Buddha statues and over 50 temples including Wat Phra Kaeo, Thailand’s oldest temple which houses the thoUnited Statesnd-year-old Emerald Buddha. The Thai Royal Family no longer live here so visitors have the freedom to explore the buildings and get up close to throne halls, royal stables and government buildings.",
    location: "Bangkok",
    price: 0.0,
    imageUrl:
      "https://www.pettitts.co.uk/images/Blog/19_incredible_landmarks_you_dont_want_to_miss_in_thailand/shutterstock/grand-palace-bangkok.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Thailand,
    name: "Wat Arun",
    description:
      "Located on the Thonburi side of the Chao Phraya River in Bangkok, Wat Arun is one of Bangkok’s most unique Buddhist temples. It is known as the Temple of the Dawn as when the very first rays of light strike the temple it creates an iridescent sheen that glows over the river. The temple is home to colourful pagodas and spires that tower over the water; it is recommended to climb up one of the ornate structures for spectacular views over the city.",
    location: "Bangkok",
    price: 0.0,
    imageUrl:
      "https://www.pettitts.co.uk/images/Blog/19_incredible_landmarks_you_dont_want_to_miss_in_thailand/shutterstock/wat-arun.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Thailand,
    name: "Ayutthaya Historical Park",
    description:
      "Founded in the mid-14th century, Ayutthaya became the second Siamese capital after Sukhothai and remained so until 1767. During this time, Ayutthaya flourished to become not only one of the world's largest cities but also as a centre of global diplomacy and commerce with trading links to much of Asia, Arabia and Europe. The UNESCO World Heritage Site of Ayutthaya is dotted with reliquary towers and vast monasteries which provide an indication of the city's former splendour with highlights including Wat Ratchaburana, Wat Chai Wattanaram and Wat Phra Mahathat.",
    location: "Ayutthaya",
    price: 0.0,
    imageUrl:
      "https://www.pettitts.co.uk/images/Blog/19_incredible_landmarks_you_dont_want_to_miss_in_thailand/shutterstock/ayutthaya_historical_park.jpg",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Thailand,
    name: "Lim Lao San for fierce fishball noodle soup",
    description:
      "This humble street-food stall is famous for its bowls of noodle soup, generous hunks of fish and hearty fish balls. Run by a brother and sister team (and their father before them), Lim Lao San is a 50-year-old operation that has perfected every element of its bowls, from the chewiness of the egg hor fun to the stickiness of the rice noodles made fresh every day. The eating area is tucked down a tiny alley, with tables set against exposed brick walls and old wooden door frames – you’ll feel like you’re on an outdoor movie set.",
    location: "Bangkok",
    price: 1.5,
    imageUrl:
      "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2021/07/2fmbx4g-e1627300322614.jpg",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Thailand,
    name: "Kway Tiew Heavy for pork noodles with a rock’n’roll twist",
    description:
      "Head chef Ekkarin “Ek” Sae-Guay is known locally as the “Carabao Noodle Guy in Thonburi”, as he belts out tunes by the Thai rock band Carabao while serving up the best pork noodles in the city. His stew is infused with a secret blend of spices for hours before the stall opens for dinner; it’s then topped with milk to help create a richer texture. There’s usually a long queue of locals at his stall, but Ek whips up the bowls in no time, entertaining the waiting crowd with a side of dance moves.",
    location: "Bangkok",
    price: 2.0,
    imageUrl:
      "https://christieathome.com/wp-content/uploads/2020/12/Char-Kway-Teow-13-scaled.jpg",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Thailand,
    name: "Sae Phun for hug-in-a-bowl chicken stew",
    description:
      "Don’t be fooled by this modern exterior; despite recent renovations, Sae Phun has been at this spot on Mahannop Road for 80 years. Recipes have been passed down through generations of family chefs, who have perfected the art of chicken stew on rice or noodles. The chicken is tender, the rice fluffy and the gravy smooth – it’s no surprise that Sae Phun won Michelin’s Bib Gourmand award.",
    location: "Bangkok",
    price: 1.8,
    imageUrl:
      "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2022/02/2hmfyff.jpg",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Vietnam,
    name: "Cruise the Mekong Delta",
    description:
      "After travelling over 4,000km from the Tibetan Himalaya, the Mekong hits Vietnam and slows down to a more languid pace. With islands, rice paddies, stilted villages and a way of life that hasn’t changed for centuries, it’s as if the river wants to take it easy and soak up the view. The cruise from Cai Be to Can Tho is a great way to experience a night on the river. As you travel southwards along the Mang Thit River linking the Tien Giang and Bassac systems, the channel becomes so narrow that you can peer into the riverbank’s rickety stilted houses.",
    location: "Cai Be to Can Tho",
    price: 500,
    imageUrl:
      "https://cdn2.wanderlust.co.uk/media/1025/cruise-the-mekong-river.jpg?anchor=center&mode=crop&width=800&height=0&format=auto&quality=90&rnd=132265153320000000",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Vietnam,
    name: "Cruise the northern bays",
    description:
      "Three hours east of Hanoi, Halong Bay is rightly one of Vietnam's most touristic sites, with 1600 jagged limestone islands emerging from the sea like ash-green daggers. While hundreds of boats depart from Halong daily, the adjacent Bai Tu Long Bay to the northwest is still a less-touristy waterworld filled with rows of jungle-studded limestone karsts that rise like fangs amid remote floating villages. A highlight is kayaking in the heart of the bay to Vung Vieng, 24km (15 miles) away from the mainland, hopping between fishermen's homes to learn about their lifestyle.",
    location: "Halong Bay",
    price: 0.0,
    imageUrl:
      "https://lp-cms-production.imgix.net/2023-01/Vietnam-Sebastian%20Warneke-GettyImages-1032621458-rfc.jpg?auto=format&q=75&w=1024",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Vietnam,
    name: "Full-Day City Tour and Water Puppet Show",
    description:
      "Experience an unforgettable day exploring Hanoi on a guided tour with lunch in the Old Quarter. Visit museums, pagodas, temples, and much more. Enjoy a traditional water puppet show.",
    location: "Hanoi",
    price: 36.93,
    imageUrl:
      "https://www.itourvn.com/images/easyblog_articles/422/water-puppet-theares-in-Vietnam.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Vietnam,
    name: "The Temple of Literature",
    description:
      "At the Intersection of Van Mieu and Pho Quoc Tu Giam you’ll find the Temple of Literature, probably the most tranquil of Hanoi landmarks. The temple is said to be the first university in Vietnam, originally dedicated in 1070 to the teachings of Confucius and is a top landmark building in Vietnam.",
    location: "Hanoi",
    price: 0.0,
    imageUrl:
      "https://thetravelbunny.com/wp-content/uploads/2021/08/Temple-of-Literature-Hanoi-Vietnam-735x491.jpg.webp",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Vietnam,
    name: "The One Pillar Pagoda",
    description:
      "The One Pillar Pagoda temple rises from a single pillar in the centre of a lotus pond and is said to represent a lotus flower growing up out of the water. This tiniest of temples, at just three square metres, is one of the most iconic sights to see in Vietnam.",
    location: "Hanoi",
    price: 0.0,
    imageUrl:
      "https://thetravelbunny.com/wp-content/uploads/2021/08/One-Pillar-Pagoda-Hanoi-Vietnam-1-720x540.jpg.webp",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Vietnam,
    name: "Ho Chi Minh Mausoleum",
    description:
      "The Ho Chi Minh Mausoleum is one of Hanoi’s most imposing buildings and one of the most popular tourist attractions in Vietnam’s capital city. The huge granite memorial is located in the impressive Ba Dinh Square and is watched over by guards wearing crisp white uniforms.",
    location: "Hanoi",
    price: 0.0,
    imageUrl:
      "https://thetravelbunny.com/wp-content/uploads/2021/08/Ho-Chi-Minh-Mausoleum-Hanoi-Vietnam.jpg.webp",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Vietnam,
    name: "Lac Thien, Lac Thanh and Lac Thuan",
    description:
      "Opened in 1965, Lac Thien, Lac Thanh and Lac Thuan is perhaps Hue’s most popular restaurant. It serves authentic, affordable yet high-quality Hue cuisine. If you want to taste authentic Vietnamese food but don’t know where to eat in Vietnam, Lac Thien, Lac Thanh and Lac Thuan is the place to be. This restaurant proves that top-notch food doesn’t have to be expensive. Aside from that, the quality of service and the friendly staff make the dining experience even better.",
    location: "Hue",
    price: 8,
    imageUrl:
      "https://familydestinationsguide.com/wp-content/uploads/2021/12/Lac-Thien-Lac-Thanh-and-Lac-Thuan.jpg.webp",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Vietnam,
    name: "Banh Xeo",
    description:
      "Just by the restaurant’s name, you immediately know what Banh Xeo specializes in. This infamous food spot serves some of, if not the best banh xeo, a savory pancake or crepe, in Vietnam. If you’re looking for the top casual spots to eat in the country, definitely try Banh Xeo. This restaurant gained more attraction when the well-known celebrity chef and food travel vlogger, Anthony Bourdain, featured it in his travel documentary.",
    location: "Ho Chi Minh City",
    price: 0.0,
    imageUrl:
      "https://familydestinationsguide.com/wp-content/uploads/2021/12/Banh-Xeo.jpg.webp",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Vietnam,
    name: "Cha Ca La Vong",
    description:
      "Established in 1871, Cha Ca La Vong specializes in a traditional Vietnamese dish with the same name that locals and tourists enjoy. If you’re looking for a spot that offers authentic Vietnamese food, Cha Ca La Vong is a fantastic option. This restaurant offers a wide array of dishes that you must try during your trip to the country.",
    location: "Hanoi",
    price: 40,
    imageUrl:
      "https://familydestinationsguide.com/wp-content/uploads/2021/12/Cha-Ca-La-Vong.jpg.webp",
  },

  {
    category: "Things to see",
    activityCountry: countryIds.Germany,
    name: "Neuschwanstein Castle",
    description:
      "Neuschwanstein Castle is a 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany.",
    location: "Bavaria",
    price: 12,
    imageUrl:
      "https://neuschwansteintickets.com/images/neuschwanstein-castle.jpg",
  },

  {
    category: "Things to see",
    activityCountry: countryIds.Germany,
    name: "Cologne Cathedral",
    description:
      "Cologne Cathedral is a Catholic cathedral in Cologne, North Rhine-Westphalia. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne.",
    location: "Cologne",
    price: 0,
    imageUrl:
      "https://www.aesu.com/wp-content/uploads/2020/03/europe-4272297_640.jpg",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Germany,
    name: "The Badeschiff, Berlin",
    description:
      "The Badeschiff is a floating public swimming pool in Berlin, the capital city of Germany. Situated in the East Harbour section of the River Spree. Drinks in the sun, really great spot for the summer.",
    location: "Berlin",
    price: 0,
    imageUrl:
      "https://images.rove.me/w_1920,q_85/toxqotg0rdaijfdqdhjv/berlin-badeschiff-bathing-season.jpg",
  },

  {
    category: "Things to see",
    activityCountry: countryIds.India,
    name: "Taj Mahal",
    description:
      "The Taj Mahal 'Crown of the Palace' is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
    location: "Uttar Pradesh, India",
    price: 11,
    imageUrl:
      "https://images.thequint.com/thequint%2F2020-02%2F96a380b4-136e-4257-a2bb-190850c4484a%2FTaj_Mahal.webp",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.India,
    name: " Harmandir Sahib",
    description:
      "The Golden Temple (also known as the Harmandir Sahib, lit. 'abode of God',is a gurdwara located in the city of Amritsar, Punjab, India.It is the preeminent spiritual site of Sikhism. ",
    location: "Amritsar, Punjab",
    price: 0,
    imageUrl:
      "https://cdn.britannica.com/13/173813-050-1DCA15F5/Harmandir-Sahib-Amritsar-India-Punjab.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.India,
    name: "Amber Fort",
    description:
      "Amer Fort is known for its artistic style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace. ",
    location: "Amer, Rajasthan",
    price: 5,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=1200&h=1200&s=1",
  },

  {
    category: "Things to do",
    activityCountry: countryIds.India,
    name: "Private Full Day Old and New Delhi City Tour",
    description:
      "Explore the sights of Old and New Delhi with your own private guide on a full-day tour. Travel to UNESCO World Heritage sites including Jama Masjid, Qutub Minar, and Humayun's Tomb.",
    location: "Old and New Delhi City",
    price: 35,
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/49/c9/33.jpg",
  },
  {
    category: "Things to do",
    activityCountry: "India",
    name: "Ranthambore National Park",
    description:
      "India contains over half of the world's population of wild tigers so if you want to see one of these incredible animals in their natural habitat, this is the place! Ranthambore National Park is one of the top tiger reserves in the country, containing around 60 wild tigers along with foxes, crocodiles, leopards, sloth bears, and jackals.",
    location: "Rajasthan, India",
    price: 45,
    imageUrl:
      "https://imageio.forbes.com/blogs-images/jimdobson/files/2018/11/IMG_1525.jpg?format=jpg&width=1200",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.India,
    name: "Della Adventure Park",
    description:
      "Della Adventure Park is India’s Largest Extreme Adventure park with 50 plus adventure activities. ",
    location: "Maharashtra 410401, India",
    price: 55,
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/13/1a/5e/95/della-adventure-training.jpg",
  },

  {
    category: "Things to see",
    activityCountry: countryIds.Japan,
    name: "Fushimi Inari Taisha",
    description:
      "Fushimi Inari-taisha (伏見稲荷大社) is the head shrine of the kami Inari. The shrine became the object of imperial patronage during the early Heian period. In 965, Emperor Murakami decreed that messengers carry written accounts of important events to the guardian kami of Japan.",
    location: "Fushimi-ku, Kyoto",
    price: 0,
    imageUrl:
      "https://photos.smugmug.com/Kyoto/Kyoto-Photo-Of-The-Week-2019/i-fK8vNt2/0/31499dfd/L/IK-2019-week-30-shutterstock_284665973-L.jpg",
  },
  {
    category: "Things to see",
    activityCountry: countryIds.Japan,
    name: "Kinkaku-ji Temple",
    description:
      "Kinkaku-ji 金閣寺, literally Temple of the Golden Pavilion, officially named Rokuon-ji 鹿苑寺, literally Deer Garden Temple.",
    location: "Kyoto",
    price: 2.52,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG",
  },

  {
    category: "Things to see",
    activityCountry: countryIds.Japan,
    name: "Himeji Castle",
    description:
      "Himeji Castle (姫路城, Himeji-jō) is a hilltop Japanese castle complex situated in the city of Himeji. The castle is regarded as the finest surviving example of prototypical Japanese castle architecture, comprising a network of 83 rooms with advanced defensive systems from the feudal period.",
    location: "Hyōgo Prefecture of Japan",
    price: 6.3,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Himeji_castle_in_may_2015.jpg/1920px-Himeji_castle_in_may_2015.jpg",
  },

  {
    category: "Things to do",
    activityCountry: countryIds.Japan,
    name: "Super Nintendo World",
    description:
      "Super Nintendo World is the world's first Nintendo-themed land inside Universal Studios Japan in Osaka, Japan. Officially opened on March 18, 2021, this brand-new land is a Nintendo fan's dream.",
    location: "Osaka",
    price: 20,
    imageUrl:
      "https://cdn.osaka-info.jp/page_translation/content/de66222e-8787-11eb-8bab-0af0cba29dd8.jpeg",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Japan,
    name: "Stay in a Ryokan",
    description:
      "A ryokan is a traditional Japanese guesthouse. Ryokans were set up in the Edo period (1603-1868) for lords and samurai warriors on the road. After a long day of travelling, the esteemed guests would bathe, enjoy a tea ceremony and have a long meal, washed down with plenty of sake.",
    location: "Kyoto and Nara",
    price: 100,
    imageUrl:
      "https://www.wayfairertravel.com/media/4645/staying-in-a-traditional-japanese-ryokan-nishimuraya-kinosaki.png?anchor=center&mode=crop&width=1920&height=1200&rnd=131807826960000000",
  },
  {
    category: "Things to do",
    activityCountry: countryIds.Japan,
    name: "Osaka Aquarium Kaiyukan",
    description:
      "The Osaka Aquarium Kaiyukan (海遊館, Kaiyūkan, known as the Kaiyukan) is an aquarium located in the ward of Minato in Osaka, Osaka Prefecture, Japan, near Osaka Bay. When it first opened, it was the largest public aquarium in the world.",
    location: "Osaka Prefecture",
    price: 18,
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/eb/36/e3.jpg",
  },

  {
    category: "Places to eat",
    activityCountry: countryIds.Japan,
    name: "Hida beef and sake in Takayama",
    description:
      "Kill two culinary birds with one stone with a visit to Takayama, a historic town in the mountains 200 miles west of Tokyo, famous for both its hida beef and sake. ",
    location: "KOsaka Prefecture",
    price: 30,
    imageUrl:
      "https://i.guim.co.uk/img/media/37e529ecc47daaaa17baf0631987e15df267c8e8/0_232_5600_3358/master/5600.jpg?width=620&quality=45&dpr=2&s=none",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Japan,
    name: "Tofu temple, Kyoto",
    description:
      "Following the jade waters of the Hozu river, then take a steep path into the forest to a lonely hillside clearing with a wooden house, which seems to belong in a fairytale. Shoraian’s fame rests on its tofu-based menu. ",
    location: "Ukyo-ku, Kyoto-shi",
    price: 25,
    imageUrl:
      "https://i.guim.co.uk/img/media/51650a1e76edb05606cd5e2ac65a71c503827ca9/0_0_640_384/master/640.jpg?width=620&quality=45&dpr=2&s=none",
  },
  {
    category: "Places to eat",
    activityCountry: countryIds.Japan,
    name: "Ise Sueyoshi",
    description:
      "Intimate, minimalist venue for thoughtfully plated, traditional multi-course Japanese meals.",
    location: "Minato City, Tokyo, Japan",
    price: 20,
    imageUrl:
      "https://blog-imgs-156.fc2.com/i/s/e/isesueyoshi/317079132_5506639322785203_6822173068287996390_n.jpg",
  },
].map((activity) => ({ ...activity, _id: new mongoose.Types.ObjectId() }));

const countries = [
  {
    _id: countryIds.Australia,
    name: "Australia",
    currencyName: "Australian dollar",
    continent: "Australia",
    image:
      "https://thumbs.dreamstime.com/b/sydney-opera-house-australia-14210813.jpg",
    text: "Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. ",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Australia)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.NewZealand,
    name: "New Zealand",
    currencyName: "New Zealand Dollar",
    continent: "Oceania",
    image:
      "https://images.movehub.com/wp-content/uploads/2018/08/15163753/nz-22.jpg",
    text: "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.NewZealand)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.Thailand,
    name: "Thailand",
    currencyName: "Thai Baht",
    continent: "Asia",
    image:
      "https://www.holidayhypermarket.co.uk/wp-content/uploads/2021/05/Thailand_shutterstock_162648617.png",
    text: "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Thailand)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.UnitedStates,
    name: "United States",
    currencyName: "US Dollar",
    continent: "North America",
    image:
      "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/3:2/w_3000,h_2000,c_limit/New%20York%20City_GettyImages-1347979016.jpg",
    text: "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.",
    activities: activities
      .filter(
        (activity) => activity.activityCountry === countryIds.UnitedStates
      )
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.Vietnam,
    name: "Vietnam",
    currencyName: "Vietnamese dong",
    continent: "Asia",
    image:
      "https://www.telegraph.co.uk/content/dam/travel/2022/11/30/TELEMMGLPICT000317515821_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQf0Rf_Wk3V23H2268P_XkPxc.jpeg?imwidth=680",
    text: "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Vietnam)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.UnitedKingdom,
    name: "United Kingdom",
    currencyName: "British pound sterling",
    continent: "Europe",
    image:
      "http://www.harlemworldmagazine.com/wp-content/uploads/2022/06/United-Kingdom.jpg",
    text: "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe.",
    activities: activities
      .filter(
        (activity) => activity.activityCountry === countryIds.UnitedKingdom
      )
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.Germany,
    name: "Germany",
    currencyName: "Euro",
    continent: "Europe",
    image: "https://cdn.cnn.com/cnnnext/dam/assets/170706112840-germany.jpg",
    text: "Germany, officially the Federal Republic of Germany, is a country in Central Europe.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Germany)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.Turkey,
    name: "Turkey",
    currencyName: "Turkish lira",
    continent: "Asia/Europe",
    image:
      "https://media.worldnomads.com/Explore/middle-east/hagia-sophia-church-istanbul-turkey-gettyimages-skaman306.jpg",
    text: "Turkey, officially the Republic of Türkiye, is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeast Europe.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Turkey)
      .map((activity) => activity._id),
  },

  {
    _id: countryIds.China,
    name: "China",
    currencyName: "Chinese Yuan",
    continent: "Asia",
    image:
      "https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop",
    text: "China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population exceeding 1.4 billion.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.China)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.Italy,
    name: "Italy",
    currencyName: "Euro",
    continent: "Europe",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/63863f8e897028436ea067d8/Rome--Italy--Papal-Basilica-Of-St--Peter-In-The-Vatican--Sightseeing-Boat-Floating/960x0.jpg?format=jpg&width=960",
    text: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Italy)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.Spain,
    name: "Spain",
    currencyName: "Euro",
    continent: "Europe",
    image:
      "https://www.spain.info/export/sites/segtur/.content/imagenes/rutas/madrid-dos-dias/catedral-almudena-madrid-s527688430.jpg_1224728085.jpg",
    text: "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Spain)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.India,
    name: "India",
    currencyName: "Indian Rupee",
    continent: "Asia",
    image:
      "https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/11/HERO-Agra-Taj-Mahal-GettyImages-1169737420-copy.jpg?w=2120&h=848&crop=1",
    text: "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.India)
      .map((activity) => activity._id),
  },

  {
    _id: countryIds.Canada,
    name: "Canada",
    currencyName: "Canadian Dollar",
    continent: "North America",
    image:
      "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg",
    text: "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Canada)
      .map((activity) => activity._id),
  },
  {
    _id: countryIds.Japan,
    name: "Japan",
    currencyName: "Japanese Yen",
    continent: "East Asia",
    image:
      "https://lp-cms-production.imgix.net/2023-02/shutterstock_776445706.jpg",
    text: "Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south.",
    activities: activities
      .filter((activity) => activity.activityCountry === countryIds.Japan)
      .map((activity) => activity._id),
  },
];

console.log(countries[0]);

export const seedingData = {
  users,
  activities,
  countries,
};
