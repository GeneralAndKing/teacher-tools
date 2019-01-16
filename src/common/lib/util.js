function getNowFormatDate () {
  let date = new Date()
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  let minute = date.getMinutes()
  let hour = date.getHours()
  let second = date.getSeconds()
  month = month < 10 ? '0' + month : month
  strDate = strDate < 10 ? '0' + strDate : strDate
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  return `${month}-${strDate}  ${hour}:${minute}:${second}`
}

export default getNowFormatDate
