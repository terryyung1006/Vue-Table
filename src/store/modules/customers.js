const state = {
  customers: [{
    "code": 1,
    "name": "Constantine Scampion",
    "country": "France"
  }, {
    "code": 2,
    "name": "Haily Rojahn",
    "country": "Poland"
  }, {
    "code": 3,
    "name": "Valeda Castell",
    "country": "Philippines"
  }, {
    "code": 4,
    "name": "Nady Frusher",
    "country": "China"
  }, {
    "code": 5,
    "name": "Inge Beadham",
    "country": "China"
  }, {
    "code": 6,
    "name": "Claudelle Belverstone",
    "country": "France"
  }, {
    "code": 7,
    "name": "Hewitt Torra",
    "country": "Chile"
  }, {
    "code": 8,
    "name": "Rolph Leinthall",
    "country": "Indonesia"
  }, {
    "code": 9,
    "name": "Phelia McCarlich",
    "country": "Brazil"
  }, {
    "code": 10,
    "name": "Hallie Kays",
    "country": "Morocco"
  }, {
    "code": 11,
    "name": "Meier Ruddock",
    "country": "Philippines"
  }, {
    "code": 12,
    "name": "Simonne Gynne",
    "country": "Indonesia"
  }, {
    "code": 13,
    "name": "Haskell Rogan",
    "country": "Philippines"
  }, {
    "code": 14,
    "name": "Helen-elizabeth Overstreet",
    "country": "Portugal"
  }, {
    "code": 15,
    "name": "Bartolomeo Vannacci",
    "country": "Sweden"
  }, {
    "code": 16,
    "name": "Reiko Briggdale",
    "country": "Brazil"
  }, {
    "code": 17,
    "name": "Jefferson Folley",
    "country": "Croatia"
  }, {
    "code": 18,
    "name": "Demetris Vitall",
    "country": "Kenya"
  }, {
    "code": 19,
    "name": "Ki Bonn",
    "country": "Indonesia"
  }, {
    "code": 20,
    "name": "Angelia Applewhite",
    "country": "Brazil"
  }, {
    "code": 21,
    "name": "Hansiain Koppel",
    "country": "Uganda"
  }, {
    "code": 22,
    "name": "Jarrad Bonhome",
    "country": "Brazil"
  }, {
    "code": 23,
    "name": "Piper Kline",
    "country": "Macedonia"
  }, {
    "code": 24,
    "name": "Pam Orgen",
    "country": "China"
  }, {
    "code": 25,
    "name": "Maximilian Savins",
    "country": "Madagascar"
  }, {
    "code": 26,
    "name": "Edin Tesoe",
    "country": "Mexico"
  }, {
    "code": 27,
    "name": "Wendall Fontel",
    "country": "Japan"
  }, {
    "code": 28,
    "name": "Cody Shewsmith",
    "country": "Israel"
  }, {
    "code": 29,
    "name": "Georgianna Rentenbeck",
    "country": "Mali"
  }, {
    "code": 30,
    "name": "Reginauld Slym",
    "country": "United Kingdom"
  }, {
    "code": 31,
    "name": "Iolande Lambrechts",
    "country": "Ireland"
  }, {
    "code": 32,
    "name": "Adda Trythall",
    "country": "Sweden"
  }, {
    "code": 33,
    "name": "Christoph Velde",
    "country": "China"
  }, {
    "code": 34,
    "name": "Emeline Gosney",
    "country": "France"
  }, {
    "code": 35,
    "name": "Alene McEwen",
    "country": "China"
  }, {
    "code": 36,
    "name": "Reiko Benasik",
    "country": "China"
  }, {
    "code": 37,
    "name": "Wandie Sissens",
    "country": "Philippines"
  }, {
    "code": 38,
    "name": "Antonie Shulver",
    "country": "Portugal"
  }, {
    "code": 39,
    "name": "Alys Stovine",
    "country": "France"
  }, {
    "code": 40,
    "name": "Karoline Spur",
    "country": "Canada"
  }, {
    "code": 41,
    "name": "Ashia McEwen",
    "country": "Indonesia"
  }, {
    "code": 42,
    "name": "Arluene Marcq",
    "country": "Thailand"
  }, {
    "code": 43,
    "name": "Ronny Farleigh",
    "country": "Philippines"
  }, {
    "code": 44,
    "name": "Arley Rickets",
    "country": "Colombia"
  }, {
    "code": 45,
    "name": "Collin Cornillot",
    "country": "Malaysia"
  }, {
    "code": 46,
    "name": "Pierce Itskovitz",
    "country": "Russia"
  }, {
    "code": 47,
    "name": "Chucho Kemme",
    "country": "Macedonia"
  }, {
    "code": 48,
    "name": "Brandie Sciusscietto",
    "country": "Croatia"
  }, {
    "code": 49,
    "name": "Nickolai Accombe",
    "country": "Japan"
  }, {
    "code": 50,
    "name": "Tracey Habbema",
    "country": "France"
  }],
};
const getters = {
  allCustomers: (state) => {
    return state.customers;
  },
};
const mutations = {
  getCustomersSimple(state, payload) {
    //TODO:search customer simply
    console.log("simple search");
    console.log(payload);
    //state.customers = payload;
  },
  getCustomersAdvanced(state, payload) {
    //TODO:search customer
    console.log("advanced search");
    console.log(payload);
    //state.customers = payload;
  },
};
const actions = {
  getCustomersSimple({ commit }, payload) {
    commit("getCustomersSimple", payload);
  },
  getCustomersAdvanced({ commit }, payload) {
    commit("getCustomersAdvanced", payload.criterias);
    if (payload.callback) payload.callback();
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
