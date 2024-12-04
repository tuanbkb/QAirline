export function formatTime(time) {
    const t = new Date(time);
    var h = t.getHours();
    var min = t.getMinutes();

    var res = h + ":";
    res += min < 10 ? "0" + min : min;
    return res;
}

export function formatDuration(duration) {
    const durationInMins = Math.floor(duration / (1000 * 60));
    const h = Math.floor(durationInMins / 60);
    const m = Math.floor(durationInMins - h * 60);

    var res = "";
    res += h > 10 ? h : "0" + h;
    res += ":";
    res += m > 10 ? m : "0" + m;
    return res;
}

export function calculateDuration(start, end) {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const duration = endTime - startTime;
    return formatDuration(duration);
}

export function formatDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();

    var res = "";
    res += days[d.getDay()] + ", ";
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
    return `${day}/${month}/${year}`;
}

export function getStartOfDay(date) {
    if (!(date instanceof Date)) return "";
    date.setHours(0, 0, 0, 0);
    return date;
}

export function getEndOfDay(date) {
    if (!(date instanceof Date)) return "";
    date.setHours(23, 59, 59, 999);
    return date;
}