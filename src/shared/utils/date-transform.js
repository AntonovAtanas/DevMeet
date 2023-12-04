import moment from 'moment/moment';

export default function dateTransform(dateString) {
    const parsedDate = moment(dateString, 'YYYY-MM-DD');

    // Format the date to the desired output format
    const formattedDate = parsedDate.format('dddd, D MMMM, YYYY');

    return formattedDate;
}
