import DateFormat from "dateformat";

export let UtilDateTime = {
  dateManipulation(operator, date, months, days, hours, minutes, seconds) {
    var newDate = "";
    var durationInMs = 0;
    date = new Date(date);

    if (operator == "-") {
      durationInMs = (24 * days * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000;
      newDate = new Date(date.getTime() - durationInMs);
    } else {
      durationInMs = (24 * days * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000;
      date.setMonth(date.getMonth() + months);
      newDate = new Date(date.getTime() + durationInMs);
    }
    return this.formatDateTime(newDate);
  },

  currentSyncDateAndTime() {
    try {
      return DateFormat(new Date(), "dd mmm, yyyy");
    } catch (err) {
      return "";
    }
  },

  formatDate(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "dd mmm, yyyy");
    } catch (err) {
      return "";
    }
  },

  convertUTCDateToLocalDate(date) {
    var utcDate = new Date(date);

    return new Date(utcDate);
  },

  formatDateTime(dateTimeValue) {
    try {
      var date = new Date(dateTimeValue);
      return (
        (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
        "-" +
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
        "-" +
        date.getFullYear()
      );
    } catch (err) {
      return "";
    }
  },

  formatDateAndTime(dateTimeValue) {
    try {
      var date = new Date(dateTimeValue);
      function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      return {
        date: (
          (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
          "-" +
          (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
          "-" +
          date.getFullYear()
        ),
        time : addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds())
      }
    } catch (err) {
      return "";
    }
  },

  formatMonthDateYear(dateTimeValue) {
    try {
      var options = { year: "numeric", month: "short", day: "numeric" };
      var date = new Date(dateTimeValue);
      return date.toLocaleDateString(['ban', 'id'], options);
    } catch (err) {
      return "";
    }
  },

  formatStartDateTime(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "yyyy-mm-dd 00:00:00");
    } catch (err) {
      return "";
    }
  },

  formatEndDateTime(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "yyyy-mm-dd 23:59:59");
    } catch (err) {
      return "";
    }
  },

  
  formatDateTimeToDate(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "yyyy-mm-dd");
    } catch (err) {
      return "";
    }
  },

  formatTimeAsHHMMTT(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "hh:MM TT");
    } catch (err) {
      return "";
    }
  },

  formatMonthAsFullString(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "mm");
    } catch (err) {
      return "";
    }
  },

  formatYearAsFullString(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "yyyy");
    } catch (err) {
      return "";
    }
  },

  formatYearAndMonthAsFullString(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "mmm, yyyy");
    } catch (err) {
      return "";
    }
  },

  formatYearMonthAndDayAsFullString(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "dd, mmm, yyyy");
    } catch (err) {
      return "";
    }
  },

  formatYearMonthAndDayAsInt(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "dd-mm-yyyy");
    } catch (err) {
      return "";
    }
  },

  formatYearMonthAndDayAsIntNew(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "dd/mm/yyyy");
    } catch (err) {
      return "";
    }
  },

  formatTimeAsHHMM(dateTimeValue) {
    try {
      return DateFormat(dateTimeValue, "hh:MM");
    } catch (err) {
      return "";
    }
  },

  checkDateTimePeriod(dateTimeValue) {
    try {
      let dd = DateFormat(dateTimeValue, "yyyy-mm-dd 23:59:59");
      return new Date() < new Date(dateTimeValue);
    } catch (err) {
      return "";
    }
  },
  parseIsoToDateString(isoTime){
    const getSuffix = (day) => {
      var date = parseInt(day)
      // if (day >= 11 && day <= 13) {
      //   return 'th';
      // }
      switch (date % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };
    const parsedDate = new Date(isoTime);
    const date = parsedDate.getDate();
    const month = parsedDate.toLocaleString('default', { month: 'long' }); // Get full month name
    const parsedString = date + getSuffix(date) + " " + month.slice(0,3);
    return parsedString
  },
};

export default UtilDateTime;
