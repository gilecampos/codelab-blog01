import { Like } from "./like.js";
import { Sanitize } from "./sanitize.js";
import { Notice } from "./service/notice.js";
import { View } from "./view.js";

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?busca=tecnologia'
const listPost = document.querySelector('[data-js="list-post"]')
const inputSearch = document.querySelector('[data-js="input-search"]')

const render = async (arrItems) => {
  listPost.innerHTML = ""
  const posts = await View.renderPosts(arrItems)
  listPost.append(posts);

  const iconLike = listPost.querySelectorAll(".post__icon")
  iconLike.forEach(like => {
    like.addEventListener("click", (e) => {
      const currentPost = e.currentTarget.closest('.post');
      Like.likedPost(e.currentTarget, 'active')
      Like.likedPost(currentPost, 'active')
    })
  })
}


const app = async () => {
  try {
    const notices = await Notice.getNotices(BASE_URL)
    if (notices && notices.items) {
      render(notices.items)
    } else {
      console.error("Invalid API response:", notices)
    }
  } catch (error) {
    console.error(error)
  }
}

app()

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};


inputSearch.addEventListener('input', debounce(async (e) => {
  try {
    const value = Sanitize.clear(e.target.value);
    if (value) {
      const search = await Notice.searchNotices(BASE_URL, value);
      render(search);
    } else {
      const notices = await Notice.getNotices(BASE_URL);
      if (notices && notices.items) {
        render(notices.items);
      } else {
        console.error('Invalid API response:', notices);
      }
    }
  } catch (error) {
    console.error(error);
  }
}, 300));

