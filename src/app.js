import { Like } from "./like.js";
import { Sanitize } from "./sanitize.js";
import { Notice } from "./service/notice.js";
import { View } from "./view.js";

let currentPage = 1
const BASE_URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=tecnologia`
const listPost = document.querySelector('[data-js="list-post"]')
const inputSearch = document.querySelector('[data-js="input-search"]')
const showCurrentPage = document.querySelector('.page__current')
const prevButton = document.querySelector('.prev__button')
const nextButton = document.querySelector('.next__button')

showCurrentPage.innerText = currentPage

const renderNewPage = async (page) => {
  showCurrentPage.innerText = page
  const newURL = `${BASE_URL}&page=${page}`
  try {
    const notices = await Notice.getNotices(newURL)
    render(notices.items)
  } catch (error) {
    console.error("Invalid API response:")
  }
}

const nextPage = async () => {
  currentPage++
  await renderNewPage(currentPage)
  
}

const prevPage = async () => {
  if(currentPage > 1) {
    currentPage--
    renderNewPage(currentPage)
  }
}

nextButton.addEventListener('click', nextPage)
prevButton.addEventListener('click', prevPage)

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





