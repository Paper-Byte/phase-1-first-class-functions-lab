// Code your solution in this file!
const returnFirstTwoDrivers = function (driversListArray) {
  return [driversListArray[0], driversListArray[1]];
};

const returnLastTwoDrivers = function (driversListArray) {
  return [
    driversListArray[driversListArray.length - 2],
    driversListArray[driversListArray.length - 1],
  ];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (nameArray, arrayFunction) => {
  return arrayFunction(nameArray);
};
