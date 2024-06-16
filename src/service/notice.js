import { Sanitize } from "../sanitize.js";

export class Notice {
  static async makeRequest(url) {
    return (await (fetch(url))).json()
  }

  static async getNotices(url) {
    const data = this.makeRequest(url)
    return data;
  }

  static async searchNotices(url, words) {
    const data = await this.getNotices(url)
    const filteredData = data.items.filter(item => {
      return (
        Sanitize.clear(item.introducao).includes(words) ||
        Sanitize.clear(item.titulo).includes(words) ||
        Sanitize.clear(item.data_publicacao).includes(words)
      )
    })

    return filteredData
  }
}