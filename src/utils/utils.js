//日期格式化
import moment from 'moment'

export function dateFormat(row, column) {
  let date = row[column.property];
  if (date === undefined) {
    return "";
  }
  return moment(date).format("YYYY-MM-DD");
}
