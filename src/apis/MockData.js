/* eslint-disable no-unused-vars */
const mockdata = {
  document: {
    type: [
      {
        key: "board",
        desc: "Chứa toàn bộ nội dung phần body của 1 trang",
        components: [
          "slider",
          "container_product",
          "container_tag",
          "container_popular_product",
        ],
      },
      {
        key: "slider",
        desc: "Chứa nội dung phần slider _ thường sẽ được đặt ở đầu trang",
        components: ["category", "product", "poster"],
      },
      {
        key: "container_product",
        desc: "Chứa các ",
        components: ["card"],
      },
      {
        key: "container_popular_product",
        desc: "Chứa các ",
        components: ["card", "image"],
      },
      {
        key: "container_tag",
        desc: "Chứa các ",
        components: ["tag"],
      },
    ],
  },
  mainboard: {
    type: "board",
    _id: "board_01",
    components: [
      {
        type: "slider",
        _id: "slider_01",
        components: [
          {
            type: "category",
            _id: "category_01",
            content: [
              {
                _id: "type_01",
                icon: "",
                title: "Action",
              },
              {
                _id: "type_02",
                icon: "",
                title: "Adventure",
              },
              {
                _id: "type_03",
                icon: "",
                title: "Role_Playing",
              },
              {
                _id: "type_04",
                icon: "",
                title: "Simulation",
              },
              {
                _id: "type_05",
                icon: "",
                title: "Strategy",
              },
              {
                _id: "type_06",
                icon: "",
                title: "Sports & Racing",
              },
              {
                _id: "type_07",
                icon: "",
                title: "Horror",
              },
              {
                _id: "type_08",
                icon: "",
                title: "Casual",
              },
              {
                _id: "type_09",
                icon: "",
                title: "All Sports",
              },
              {
                _id: "type_10",
                icon: "",
                title: "Role-Playing",
              },
              {
                _id: "type_11",
                icon: "",
                title: "Survival",
              },
              {
                _id: "type_12",
                icon: "Racing",
                title: "Survival",
              }
            ],
          },
          {
            type: "poster",
            _id: "poster_01",
            components: [
              {
                type: "image",
                _id: "poster_01_01",
                title: "",
                url: "",
              },
              {
                type: "image",
                _id: "poster_01_02",
                title: "",
                url: "",
              },
              {
                type: "image",
                _id: "poster_01_03",
                title: "",
                url: "",
              },
              {
                type: "image",
                _id: "poster_01_04",
                title: "",
                url: "",
              },
            ],
          },
          {
            type: "product",
            title: "popular_product",
            _id: "container_product_01",
            components: [
              {
                type: "card",
                _id: "card_01",
                title: "",
                url: "",
              },
              {
                type: "card",
                _id: "card_02",
                title: "",
                url: "",
              },
              {
                type: "card",
                _id: "card_03",
                title: "",
                url: "",
              },
              {
                type: "card",
                _id: "card_04",
                title: "",
                url: "",
              },
              {
                type: "card",
                _id: "card_05",
                title: "",
                url: "",
              },
              {
                type: "card",
                _id: "card_06",
                title: "",
                url: "",
              },
            ],
          },
        ],
      },
      {
        type: "container_product",
        title: "Outstanding product",
        desc: "List of trending products you might like",
        button: {
          title: "Discovery",
          desc: "click to view more",
          url: "",
        },
        components: [
          {
            type: "card",
            _id: "card_01",
            title: "COUNTER-STRIKE 2",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1696513856",
            inf_product: {
              type: "text",
              _id: "inf_product_01",
              desc: "dummy desc",
              unit_price: "0",
              sale: "100%",
              view: "7694152"
            },
          },
          {
            type: "card",
            _id: "card_02",
            title: "FOOTBALL MANAGER 2023",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1904540/header.jpg?t=1680627762",
            inf_product: {
                type: "text",
                _id: "inf_product_02",
                desc: "dummy desc",
                unit_price: "0",
                sale: "100%",
                view: "7694152"
              },
          },
          {
            type: "card",
            _id: "card_03",
            title: "WWE 2K23",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1942660/header.jpg?t=1697822265",
            inf_product: {
                type: "text",
                _id: "inf_product_03",
                desc: "dummy desc",
                unit_price: "100.000",
                sale: "50%",
                view: "7694152"
              },
          },
          {
            type: "card",
            _id: "card_04",
            title: "PGA TOUR 2K23",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1588010/header.jpg?t=1690902331",
            inf_product: {
              type: "text",
              _id: "inf_product_04",
              desc: "Dummy desc",
              unit_price: "89.000",
              sale: "_66%",
              view: "7694152"
            },
          },
          {
            type: "card",
            _id: "card_05",
            title: "SUMMER MEMORIES",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1227890/header.jpg?t=1697798559",
            inf_product: {
              type: "text",
              _id: "inf_product_05",
              desc: "Tài khoản Netflix Premium 1 tháng _ xem phim",
              unit_price: "89.000",
              sale: "_66%",
            },
          },
          {
            type: "card",
            _id: "card_31",
            title: "COUNTER-STRIKE 2",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg?t=1697663163",
            inf_product: {
              type: "text",
              _id: "inf_product_31",
              desc: "dummy desc",
              unit_price: "0",
              sale: "100%",
              view: "7694152"
            },
          },
          {
            type: "card",
            _id: "card_32",
            title: "FOOTBALL MANAGER 2023",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg?t=1666811027",
            inf_product: {
                type: "text",
                _id: "inf_product_32",
                desc: "dummy desc",
                unit_price: "0",
                sale: "100%",
                view: "7694152"
              },
          },
          {
            type: "card",
            _id: "card_33",
            title: "NEW WORLD",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1063730/header.jpg?t=1695753023",
            inf_product: {
                type: "text",
                _id: "inf_product_33",
                desc: "dummy desc",
                unit_price: "100.000",
                sale: "50%",
                view: "7694152"
              },
          },
          {
            type: "card",
            _id: "card_44",
            title: "PGA TOUR 2K23",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg?t=1691103008",
            inf_product: {
              type: "text",
              _id: "inf_product_44",
              desc: "Dummy desc",
              unit_price: "89.000",
              sale: "_66%",
              view: "7694152"
            },
          },
        ],
      },
      {
        type: "container_tag",
        title: "Từ khóa nổi bật",
        desc: "",
        components: [
          {
            type: "tag",
            title: "Action",
            desc: "",
            url: "",
          },
          {
            type: "tag",
            title: "Adventure",
            desc: "",
            url: "",
          },
          {
            type: "tag",
            title: "Role_Playing",
            desc: "",
            url: "",
          },
          {
            type: "tag",
            title: "Simulation",
            desc: "",
            url: "",
          },
          {
            type: "tag",
            title: "Strategy",
            desc: "",
            url: "",
          },
          {
            type: "tag",
            title: "Sports & Racing",
            desc: "",
            url: "",
          },
        ],
      },
      {
        type: "container_popular_product",
        title: "#Sản phẩm bán chạy nhất",
        desc: "",
        image: "",
        button: {
          title: "khám phá",
          desc: "click to view more",
          url: "",
        },
        components: [
          {
            type: "card",
            _id: "card_11",
            title: "CRUSH CRUSH",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/459820/header.jpg?t=1697586778",
            inf_product: {
              type: "text",
              _id: "inf_product_11",
              desc: "Dummy desc",
              unit_price: "89.000",
              sale: "_66%",
              view: "1111111"
            },
          },
          {
            type: "card",
            _id: "card_12",
            title: "DISCO ELYSIUM - THE FINAL CUT",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg?t=1681291304",
            inf_product: {
              type: "text",
              _id: "inf_product_12",
              desc: "Dummy desc",
              unit_price: "89.000",
              sale: "_66%",
              view: "2222222"
            },
          },
          {
            type: "card",
            _id: "card_13",
            title: "SNOWRUNNER",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1465360/header.jpg?t=1697715028",
            inf_product: {
              type: "text",
              _id: "inf_product_13",
              desc: "Dummy desc",
              unit_price: "89.000",
              old_price: "260.000",
              sale: "_66%",
            },
          },
          {
            type: "card",
            _id: "card_14",
            title: "BEAMNG.DRIVE",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/284160/header.jpg?t=1697812961",
            inf_product: {
              type: "text",
              _id: "inf_product_14",
              desc: "Dummy desc",
              unit_price: "89.000",
              sale: "_66%",
            },
          },
          {
            type: "card",
            _id: "card_15",
            title: "THE WALKING DEAD: THE TELLTALE DEFINITIVE SERIES",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/234140/header.jpg?t=1634068672",
            inf_product: {
              type: "text",
              _id: "inf_product_15",
              desc: "Dummy desc",
              unit_price: "89.000",
              sale: "_66%",
            },
          },
        ],
      },
      {
        type: "container_product",
        title: "Games on Steam",
        desc: "Well-rated games and attractive content are waiting for you",
        button: {
          title: "khám phá",
          desc: "click to view more",
          url: "",
        },
        components: [
          {
            type: "card",
            _id: "card_01",
            title: "COUNTER-STRIKE 2",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1696513856",
            inf_product: {
              type: "text",
              _id: "inf_product_01",
              desc: "dummy desc",
              unit_price: "0",
              sale: "100%",
              view: "7694152"
            },
          },
          {
            type: "card",
            _id: "card_02",
            title: "FOOTBALL MANAGER 2023",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1904540/header.jpg?t=1680627762",
            inf_product: {
                type: "text",
                _id: "inf_product_02",
                desc: "dummy desc",
                unit_price: "0",
                sale: "100%",
                view: "7694152"
              },
          },
          {
            type: "card",
            _id: "card_03",
            title: "WWE 2K23",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg?t=1696948801",
            inf_product: {
                type: "text",
                _id: "inf_product_03",
                desc: "dummy desc",
                unit_price: "100.000",
                sale: "50%",
                view: "7694152"
              },
          },
          {
            type: "card",
            _id: "card_44",
            title: "PGA TOUR 2K23",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg?t=1691103008",
            inf_product: {
              type: "text",
              _id: "inf_product_44",
              desc: "Dummy desc",
              unit_price: "89.000",
              sale: "_66%",
              view: "7694152"
            },
          },
        ],
      },
      {
        type: "container_product",
        title: "Entertainment",
        desc: "",
        components: [
          {
            type: "card",
            _id: "card_31",
            title: "COUNTER-STRIKE 2",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg?t=1697663163",
            inf_product: {
              type: "text",
              _id: "inf_product_31",
              desc: "dummy desc",
              unit_price: "0",
              sale: "100%",
              view: "7694152"
            },
          },
          {
            type: "card",
            _id: "card_32",
            title: "FOOTBALL MANAGER 2023",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg?t=1666811027",
            inf_product: {
                type: "text",
                _id: "inf_product_32",
                desc: "dummy desc",
                unit_price: "0",
                sale: "100%",
                view: "7694152"
              },
          },
          {
            type: "card",
            _id: "card_33",
            title: "NEW WORLD",
            url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1063730/header.jpg?t=1695753023",
            inf_product: {
                type: "text",
                _id: "inf_product_33",
                desc: "dummy desc",
                unit_price: "100.000",
                sale: "50%",
                view: "7694152"
              },
          },
        ],
      },

    ],
  },
};

export default mockdata