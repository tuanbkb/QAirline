export function getCorrectJSTime(dateTimeStr) {
    const [datePart, timePart] = dateTimeStr.split(" "); // Tách phần ngày và giờ
    const [day, month, year] = datePart.split("/").map(Number); // Tách và chuyển đổi ngày, tháng, năm thành số
    const [hours, minutes, seconds] = timePart.split(":").map(Number); // Tách và chuyển đổi giờ, phút, giây thành số
      
    // Lưu ý: Tháng trong JavaScript là từ 0 (tháng 1 là 0)
    return new Date(year, month - 1, day, hours, minutes, seconds);
}

export function formatTime(time) {
    if (!(time instanceof Date)) return "";
    var h = time.getHours();
    var min = time.getMinutes();

    var res = "";
    res += h > 10 ? h : "0" + h;
    res += ":";
    res += min < 10 ? "0" + min : min;
    return res;
}

export function calculateDuration(start, end) {
    if (!(start instanceof Date) || !(end instanceof Date)) return "";
    const diff = Math.floor((end - start) / 60000);
    const h = Math.floor(diff / 60);
    const min = diff - h * 60;
    var res = "";
    res += h > 10 ? h : "0" + h;
    res += ":";
    res += min < 10 ? "0" + min : min;
    return res;
}

export function formatDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    var res = "";
    res += days[date.getDay()] + ", ";
    res += day > 10 ? day : "0" + day;
    res += "/";
    res += month > 10 ? month : "0" + month;
    res += "/" + year;
    return res;
}

export function getFormattedDate(date) {
    if (!(date instanceof Date)) return "";
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    var res = "";
    res += day > 10 ? day : "0" + day;
    res += "/";
    res += month > 10 ? month : "0" + month;
    res += "/" + year;
    return res;
}

export function convertToSendFormat(date) {
    let res = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " ";
    res += (date.getHours() < 10 ? "0" : "") + date.getHours() + ":";
    res += (date.getMinutes() < 10 ? "0" : "") + date.getMinutes() + ":";
    res += (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    return res;
}

export function getStartOfDay(date) {
    if (!(date instanceof Date)) return "";
    date.setHours(0, 0, 0, 0);
    // let utcDate = date.getTime() - 7 * 60 * 60 * 1000;
    return convertToSendFormat(new Date(date));
}

export function getEndOfDay(date) {
    if (!(date instanceof Date)) return "";
    date.setHours(23, 59, 59, 999);
    // let utcDate = date.getTime() - 7 * 60 * 60 * 1000;
    return convertToSendFormat(new Date(date));
}