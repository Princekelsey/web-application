const state = {
  orders: [],
  singleOrder: {},
};

const getters = {
  getOrders: (state) => state.orders,
  getSingleOrder: (state) => state.singleOrder,
};

const actions = {
  addOrder({ commit }, order) {
    commit("setOrders", order);
  },

  addSingleOrder({ commit }, id) {
    commit("setSingleOrder", findOrder(id));
  },
};

const mutations = {
  setOrders: (state, order) => state.orders.push(order),
  setSingleOrder: (state, selected) => (state.singleOrder = selected),
};

const findOrder = (id) => {
  return state.orders.find((order) => order.productId === id);
};

export default {
  state,
  getters,
  actions,
  mutations,
};
