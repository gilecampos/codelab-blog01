import { Data } from "./date.js";
import { Element } from "./element.js";
import { iconHeart } from "./iconHeart.js";
import { Like } from "./like.js";
import { Sanitize } from "./sanitize.js";
import { Notice } from "./service/notice.js";

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?busca=tecnologia'
const listPost = document.querySelector('[data-js="list-post"]')
const inputSearch = document.querySelector('[data-js="input-search"]')

const createPosts = async (arrItems) => {
  listPost.innerHTML = ""
  const fragment = new DocumentFragment()
  const posts = arrItems.map(async element => {
    const container = Element.createElement("div");
    Element.addClass(container, "post");

    const containerInfo = Element.createElement("div");
    Element.addClass(containerInfo, "post__info");

    const containerContent = Element.createElement("div");
    Element.addClass(containerContent, "post__content");

    const title = Element.createElement("h2");
    Element.addClass(title, "post__title");
    Element.insertContent(title, element.titulo);

    const description = Element.createElement("p");
    Element.addClass(description, "post__description");
    Element.insertContent(description, element.introducao);

    const date = Element.createElement("span");
    Element.addClass(date, "post__date");
    Element.insertContent(date, Data.newDate(element.data_publicacao));

    containerInfo.append(date);
    containerInfo.append(await iconHeart());
    containerContent.append(title);
    containerContent.append(description);
    container.append(containerInfo);
    container.append(containerContent);
    fragment.appendChild(container);
  });

  await Promise.all(posts);
  listPost.append(fragment);

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
      createPosts(notices.items)
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
      createPosts(search);
    } else {
      const notices = await Notice.getNotices(BASE_URL);
      if (notices && notices.items) {
        createPosts(notices.items);
      } else {
        console.error('Invalid API response:', notices);
      }
    }
  } catch (error) {
    console.error(error);
  }
}, 300));

