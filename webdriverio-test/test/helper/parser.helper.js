function getUrlBySpeciality(json, speciality) {
    let data = json.find(item => item.specialty === speciality);
    return data["url"];
}

module.exports = {
    getUrlBySpeciality,
};
