const state = {
  online: false,
  contents: [
    {
      'username': 'student1',
      'date': getNowFormatDate(),
      'data': '这是一个对话1',
      'ip': '10.0.0.1'
    },
    {
      'username': 'teacher',
      'date': getNowFormatDate(),
      'data': '这是一个了老师',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student2',
      'date': getNowFormatDate(),
      'data': '这是一个对话2',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student3',
      'date': getNowFormatDate(),
      'data': '这是一个对话3',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4',
      'ip': '10.0.0.1'
    },
    {
      'username': 'student4',
      'date': getNowFormatDate(),
      'data': '这是一个对话4话4这是一个对话4这是一个这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4这是一个对话4',
      'ip': '10.0.0.1'
    }
  ]
}

function getNowFormatDate () {
  let date = new Date()
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  return month + '-' + strDate +
  ' ' + date.getHours() + ':' + date.getMinutes() +
  ':' + date.getSeconds()
}

export default state
