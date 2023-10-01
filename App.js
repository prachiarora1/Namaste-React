import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
const heading = React.createElement("h1", {}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

const resList = [
  {
    info: {
      id: "5938",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Tasker Town",
      areaName: "Shivaji Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "5938",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
      type: "WEBLINK",
    },
  },

  {
    info: {
      id: "506322",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "2nd stage domlur",
      areaName: "Indiranagar",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "506322",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8800,
      },
      parentId: "22485",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/louis-burger-2nd-stage-domlur-indiranagar-bangalore-506322",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "43836",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10583",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Frazer Town",
      areaName: "Frazer Town",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "10583",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 5400,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5400,
      },
      parentId: "721",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-frazer-town-bangalore-10583",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23786",
      name: "Domino's Pizza",
      cloudinaryImageId: "b4zubbrh1yiw67cr2wys",
      locality: "4th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "23786",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 9100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9100,
      },
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-4th-block-koramangala-bangalore-23786",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3435",
      name: "Nandhini Deluxe",
      cloudinaryImageId: "j6vmqs3fyfa7znut859r",
      locality: "RT Nagar",
      areaName: "RT Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Chinese", "Andhra", "Biryani"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "3435",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8800,
      },
      parentId: "2451",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nandhini-deluxe-rt-nagar-bangalore-3435",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "341895",
      name: "Burger Seigneur",
      cloudinaryImageId: "k4z46joj5ozirqpyww1z",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      costForTwo: "₹1300 for two",
      cuisines: ["American", "Continental", "Burgers", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "341895",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 9800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9800,
      },
      parentId: "12095",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1669879258/GFF_logo_new_xbycg6.png",
            description: "gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "gourmet",
                  imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-seigneur-indiranagar-bangalore-341895",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "314691",
      name: "Momoz",
      cloudinaryImageId: "ktiphhoyhayzyrxxxyy6",
      locality: "Ganganagar",
      areaName: "RT Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Thai", "Seafood", "Asian", "Malaysian"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "314691",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8100,
      },
      parentId: "2486",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 04:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/momoz-ganganagar-rt-nagar-bangalore-314691",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "76879",
      name: "Art of Delight - Ice Creams, Sundaes and Desserts",
      cloudinaryImageId: "k26tlvm4wdapvrtndmdv",
      locality: "1st Block",
      areaName: "Kalyan Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "76879",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 10600,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 10600,
      },
      parentId: "2321",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/art-of-delight-ice-creams-sundaes-and-desserts-1st-block-kalyan-nagar-bangalore-76879",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "93497",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Rashtriya Vidyalaya Rd",
      areaName: "Jayanagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "93497",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 5400,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5400,
      },
      parentId: "21809",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-rashtriya-vidyalaya-rd-jayanagar-bangalore-93497",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45871",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Brigade Road",
      areaName: "Central Bangalore",
      costForTwo: "₹350 for two",
      cuisines: ["Fast Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "45871",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-brigade-road-central-bangalore-bangalore-45871",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "402710",
      name: "WarmOven Cake & Desserts",
      cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
      locality: "Millars Road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "402710",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5300,
      },
      parentId: "9696",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-millars-road-vasanth-nagar-bangalore-402710",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23423",
      name: "Samosa Party",
      cloudinaryImageId: "tjvc0aazurmha5ovsazb",
      locality: "HAL 3rd Stage",
      areaName: "Jeevan Bima Nagar",
      costForTwo: "₹150 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "23423",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 10600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 10600,
      },
      parentId: "6364",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1500",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/samosa-party-hal-3rd-stage-jeevan-bima-nagar-bangalore-23423",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "50018",
      name: "Krispy Kreme",
      cloudinaryImageId: "v2axowfo3vrwosy4majn",
      locality: "Vega City Mall",
      areaName: "Bannerghatta Road",
      costForTwo: "₹170 for two",
      cuisines: ["Desserts", "Beverages"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "50018",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 11300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 11300,
      },
      parentId: "570",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 8.8,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "8.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/krispy-kreme-vega-city-mall-bannerghatta-road-bangalore-50018",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "448216",
      name: "Momo Zone - The Momo Company",
      cloudinaryImageId: "hi85rwc7kdc9pqomvdzv",
      locality: "CMH Road",
      areaName: "Indiranagar",
      costForTwo: "₹150 for two",
      cuisines: ["Chinese", "Tibetan", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "448216",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7100,
      },
      parentId: "382343",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-cmh-road-indiranagar-bangalore-448216",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "307906",
      name: "Samosa Singh",
      cloudinaryImageId: "77baefd8a5e319c828b4d7dff7260644",
      locality: "3rd Block",
      areaName: "Basaveshwara Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Street Food", "Chaat", "Beverages", "Desserts", "Snacks"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "307906",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 9100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9100,
      },
      parentId: "5639",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "7.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹600",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/samosa-singh-3rd-block-basaveshwara-nagar-bangalore-307906",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "59801",
      name: "Indiana Burgers",
      cloudinaryImageId: "h3g8hqh8txova02g4v5y",
      locality: "2nd stage",
      areaName: "Indiranagar",
      costForTwo: "₹150 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Desserts"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "59801",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7100,
      },
      parentId: "5714",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-02 05:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/indiana-burgers-2nd-stage-indiranagar-bangalore-59801",
      type: "WEBLINK",
    },
  },
];

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGHsej-XWllGscA1TGBLimMeITnZPCYJdLhwAMojuuA&s"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res, index) => (
          <Card key={res.info.id} resObj={res} />
        ))}
      </div>
    </div>
  );
};

const Card = (props) => {
  const { resObj } = props;
  const { name, cloudinaryImageId, cuisines, costForTwo, sla, avgRating } =
    resObj.info;

  console.log(resObj);
  return (
    <div className="card" style={styleCard}>
      <img
        className="foodImage"
        alt="foodImage"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4> {name}</h4>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} mins</h4>
    </div>
  );
};
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);
