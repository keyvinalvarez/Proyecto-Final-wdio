function getUrlBySpeciality(json, value, speciality) {
    let data = json.find(item => item.especialty === speciality);
    return data[value];
}

module.exports = {
    getUrlBySpeciality,
};
