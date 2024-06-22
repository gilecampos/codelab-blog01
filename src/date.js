export class Data {
  static newDate(date) {
    const dateToISO = this.convertToISO(date)
    const newDate = new Date(dateToISO)
    const month = this.getMonth(newDate)
    const day = this.getDay(newDate)
    const year = this.getFullYear(newDate)
    const stringMonth = this.getStringMonth(month)
    const formatDate = `${day} de ${stringMonth}, ${year}`
    return formatDate;
  }

  static convertToISO(date) {
    const [day, month, year, time] = date.split(/[\s\/:]+/);
    return `${year}-${month}-${day}T${time}:00`;
  }

  static getStringMonth(month) {
    const monthsArr = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return monthsArr[month].substring(0, 3)
  }

  static getMonth(date) {
    return date.getMonth()
  }

  static getDay(date) {
    return date.getDay()
  }

  static getFullYear(date) {
    return date.getFullYear()
  }
}