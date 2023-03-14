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
    {
      category: "Things to do",
      activityCountry: "Thailand",
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
      activityCountry: "Thailand",
      name: "Waterfall, Elephant Sanctuary and Bamboo Rafting",
      description:
        "Explore the beauty of Chiang Mai with a waterfall trekking experience and an elephant sanctuary in one day. Interact with rescued elephants, eat a Thai lunch, and enjoy bamboo rafting in the jungle.",
      location: "Chiang Mai",
      price: 44.49,
      imageUrl:
        "https://cdn.getyourguide.com/img/tour/6322f601ef998.jpeg/98.jpg",
    },
    {
      category: "Things to do",
      activityCountry: "Thailand",
      name: "James Bond Island Luxury Sunset Cruise",
      description:
        "Experience James Bond Island on a luxury cruise equipped with a full bar, day beds, DJ, and dance floor. Enjoy a beautiful sunset ocean panorama while having dinner on board.",
      location: "Phuket",
      price: 116.17,
      imageUrl:
        "https://cdn.getyourguide.com/img/tour/63406aedeff86.jpeg/98.jpg",
    },
    {
      category: "Things to see",
      activityCountry: "Thailand",
      name: "Khao Yai National Park",
      description:
        "Thailands most impressive wildlife haven is just a few short hours from Bangkok by road, but the dense, dripping jungles hide elephants, monkeys, gibbons, bears, hornbills, bats and some of the last wild Thai tigers. Hikes in the rainforest pass through terrain strung with vines and orchids while waterfalls thunder into jungle pools.",
      location: "Khao Yai",
      price: 0.0,
    },
    {
      category: "Things to see",
      activityCountry: "Thailand",
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
      activityCountry: "Thailand",
      name: "The Grand Palace",
      description:
        "A trip to Bangkok would not be complete without a visit to the spectacular Grand Palace, a collection of impressive temples and structures in Rattanakosin, the historic centre of the city. Built by the early kings of the Chakri dynasty, this vast complex is home to shimmering gold palaces, intricate Buddha statues and over 50 temples including Wat Phra Kaeo, Thailand’s oldest temple which houses the thousand-year-old Emerald Buddha. The Thai Royal Family no longer live here so visitors have the freedom to explore the buildings and get up close to throne halls, royal stables and government buildings.",
      location: "Bangkok",
      price: 0.0,
      imageUrl:
        "https://www.pettitts.co.uk/images/Blog/19_incredible_landmarks_you_dont_want_to_miss_in_thailand/shutterstock/grand-palace-bangkok.jpg",
    },
    {
      category: "Things to see",
      activityCountry: "Thailand",
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
      activityCountry: "Thailand",
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
      activityCountry: "Thailand",
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
      activityCountry: "Thailand",
      name: "Kway Tiew Heavy for pork noodles with a rock’n’roll twist",
      description:
        "Head chef Ekkarin “Ek” Sae-Guay is known locally as the “Carabao Noodle Guy in Thonburi”, as he belts out tunes by the Thai rock band Carabao while serving up the best pork noodles in the city. His stew is infused with a secret blend of spices for hours before the stall opens for dinner; it’s then topped with milk to help create a richer texture. There’s usually a long queue of locals at his stall, but Ek whips up the bowls in no time, entertaining the waiting crowd with a side of dance moves.",
      location: "Bangkok",
      price: 2.0,
    },
    {
      category: "Places to eat",
      activityCountry: "Thailand",
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
      activityCountry: "Vietnam",
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
      activityCountry: "Vietnam",
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
      activityCountry: "Vietnam",
      name: "Full-Day City Tour and Water Puppet Show",
      description:
        "Experience an unforgettable day exploring Hanoi on a guided tour with lunch in the Old Quarter. Visit museums, pagodas, temples, and much more. Enjoy a traditional water puppet show.",
      location: "Hanoi",
      price: 36.93,
      imageUrl:
        "https://lp-cms-production.imgix.net/2023-01/Vietnam-Sebastian%20Warneke-GettyImages-1032621458-rfc.jpg?auto=format&q=75&w=1024",
    },
    {
      category: "Things to see",
      activityCountry: "Vietnam",
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
      activityCountry: "Vietnam",
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
      activityCountry: "Vietnam",
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
      activityCountry: "Vietnam",
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
      activityCountry: "Vietnam",
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
      activityCountry: "Vietnam",
      name: "Cha Ca La Vong",
      description:
        "Established in 1871, Cha Ca La Vong specializes in a traditional Vietnamese dish with the same name that locals and tourists enjoy. If you’re looking for a spot that offers authentic Vietnamese food, Cha Ca La Vong is a fantastic option. This restaurant offers a wide array of dishes that you must try during your trip to the country.",
      location: "Hanoi",
      price: 40,
      imageUrl:
        "https://familydestinationsguide.com/wp-content/uploads/2021/12/Cha-Ca-La-Vong.jpg.webp",
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
