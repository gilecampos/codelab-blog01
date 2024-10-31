import { Data } from "./date.js";
import { Element } from "./element.js";
import { iconHeart } from "./iconHeart.js";

export class View {
  static async renderPosts(arrItems) {
    const fragment = new DocumentFragment()
    const posts = arrItems.map(async element => {
      const postContent = await this.createPost(element)
      fragment.appendChild(postContent);
    });

    await Promise.all(posts)
    return fragment
  }

  static async createPost(element) {
    const container = Element.create("article", "post");
    const containerInfo = Element.create("header", "post__info");
    const containerContent = Element.create("div", "post__content");

    const title = Element.create("h2", "post__title", element.titulo);
    const description = Element.create("p", "post__description", element.introducao);

    const date = Element.create("span", "post__date", Data.newDate(element.data_publicacao));

    containerInfo.append(date);
    containerInfo.append(await iconHeart());
    containerContent.append(title);
    containerContent.append(description);
    container.append(containerInfo);
    container.append(containerContent);

    return container
  }
}