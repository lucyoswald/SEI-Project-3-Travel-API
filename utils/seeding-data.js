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
    },

    //THINGS TO SEE UK
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
      category: "Things to see",
      activityCountry: "United Kingdom",
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
      activityCountry: "United Kingdom",
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
      activityCountry: "United Kingdom",
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
      activityCountry: "United Kingdom",
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
      activityCountry: "United Kingdom",
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
      activityCountry: "United Kingdom",
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
      activityCountry: "United Kingdom",
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
      activityCountry: "United Kingdom",
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
      activityCountry: "New Zealand",
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
      activityCountry: "New Zealand",
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
      activityCountry: "New Zealand",
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
      activityCountry: "New Zealand",
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
      activityCountry: "New Zealand",
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
      activityCountry: "New Zealand",
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
      activityCountry: "New Zealand",
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
      activityCountry: "New Zealand",
      name: "Pacifica Kaimoana Restaurant",
      description:
        "A licensed highly rated seafood restaurant in a bungalow on the Marine Parade, based on the intense contrast between very fine cuisine and relaxed Pacifica hospitality.",
      location: "209 Marine Parade, Napier Central, Napier 4110, New Zealand",
      price: 80,
      imageUrl:
        "https://thefoodpornographer.com/wp-content/uploads/2013/07/DSC_5829-2.jpg",
    },

    {
      category: "Places to eat",
      activityCountry: "New Zealand",
      name: "Rata",
      description:
        "A modern light-filled eatery tucked away in the center of bustling Queenstown, surrounded by an urban forest of native trees with a backdrop of some of the regions oldest historic buildings. It is the essence of New Zealand.",
      location: "Te Nuku,43 Ballarat St,Queenstown, 9348",
      price: 40,
      imageUrl:
        "https://bookmestatic.net.nz/bookme-review-images/reviews/4d1fb6ee-2f68-4931-b09d-26fef6f2dac5.jpeg",
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
