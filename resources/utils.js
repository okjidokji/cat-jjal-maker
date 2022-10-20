const EMPTY_HEART = "🤍";
const FULL_HEART = "💖";

const CAT1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHKe0ZZOLjpQjO8TAqTV0Q20hkeoi1HUmJQ&usqp=CAU";
const CAT2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEQs_hm7Mgwp1OQ4T7Vs4ntOdwwhDuT2skA&usqp=CAU";
const CAT3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsviz4VMRyCSVzDZVhWH6l5jv5mBI7j2y0iA&usqp=CAU";

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};
