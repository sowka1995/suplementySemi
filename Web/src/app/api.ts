const server: string = "http://localhost:3000/api";

export const listAllSupplements: string = server + '/supplements/listAllSupplements';
export const listAllCategories: string = server + '/supplements/listAllCategories';
export const listAllProducers: string = server + '/supplements/listAllProducers';
export const listFilteredSupplementsByCategory = function (categoryFilter) {
    return server + '/supplements/listFilteredSupplementsByCategory/' + categoryFilter;
};
export const listFilteredSupplementsByProducer= function (producerFilter) {
    return server + '/supplements/listFilteredSupplementsByProducer/' + producerFilter;
};
export const addSupplement: string = server + '/supplements/addSupplement';
export const deleteSupplement: string = server + '/supplements/deleteSupplement';
export const addSupplementOpinion: string = server + '/supplements/addSupplementOpinion';
export const showSupplement = function (supplementName) {
    return server + '/supplements/info/' + supplementName;
};
