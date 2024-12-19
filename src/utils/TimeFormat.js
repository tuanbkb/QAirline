export function getCorrectJSTime(dateTimeStr) {
    const [datePart, timePart] = dateTimeStr.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);
      
    return new Date(year, month - 1, day, hours, minutes, seconds);
}

export function formatTime(time) {
    if (!(time instanceof Date)) return "";
    var h = time.getHours();
    var min = time.getMinutes();

    var res = "";
    res += h >= 10 ? h : "0" + h;
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
    res += h >= 10 ? h : "0" + h;
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
    res += day >= 10 ? day : "0" + day;
    res += "/";
    res += month >= 10 ? month : "0" + month;
    res += "/" + year;
    return res;
}

export function getFormattedDate(date) {
    if (!(date instanceof Date)) return "";
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    var res = "";
    res += day >= 10 ? day : "0" + day;
    res += "/";
    res += month >= 10 ? month : "0" + month;
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
    return convertToSendFormat(new Date(date));
}

export function getEndOfDay(date) {
    if (!(date instanceof Date)) return "";
    date.setHours(23, 59, 59, 999);
    return convertToSendFormat(new Date(date));
}

export function calculateDelayedArrivalTime(depart, delayedDepart, arrive) {
    if (!(depart instanceof Date) || !(delayedDepart instanceof Date) || !(arrive instanceof Date)) return "";
    const plannedDuration = arrive - depart;
    const delayedArrival = new Date(delayedDepart.getTime() + plannedDuration);
    return delayedArrival;
}