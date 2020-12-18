function getUrlBySpeciality(specialities, speciality) {
  let data = specialities.find((item) => item.specialty === speciality);
  return data["url"];
}

module.exports = {
  getUrlBySpeciality,
};
