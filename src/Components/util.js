import moment from "moment";
export const getTotalDays = (endDate, startDate) => {
    let days = moment(endDate).diff(startDate, "days") + 1;
	return days
}
export const getEndDate = (startDate, totalDays) => {
    let endDate = moment(startDate)
					.add(totalDays - 1, "day")
					.format("YYYY-MM-DD");

        return endDate
}
export const getStartDate = (endDate, totalDays) => {
    let startDate = moment(endDate)
					.add(-(totalDays - 1), "day")
					.format("YYYY-MM-DD");

        return startDate
}
