// src/data/poolUtils.ts
const models = require('./models.json');

export const getAllPools = () => {
  return models;
};

export const getPoolsByCategory = (category) => {
  return models.filter(pool => pool.category === category);
};
