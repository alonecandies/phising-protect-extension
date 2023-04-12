import BigNumber from "bignumber.js";
import { min } from "lodash";

export function filterNumberInput(event: any, value: any, preVal: any) {
  let strRemoveText = value.replace(/[^0-9.]/g, "");
  let str = strRemoveText.replace(/\./g, (val: any, i: any) => {
    if (strRemoveText.indexOf(".") !== i) val = "";
    return val;
  });

  if (str === ".") str = "0.";

  event.target.value = str;

  return preVal !== str;
}

export const convertToUnit256 = (amount: string | number): string => {
  return amount.toLocaleString("fullwide", { useGrouping: false });
};

export const ipToNumber = (ip: string) => {
  let ipSplitted = ip.split(".");
  ipSplitted = ipSplitted.map((part: string) => {
    if (part.length < 3) {
      return `00${part}`.slice(-3);
    }
    return part;
  });

  return Number(ipSplitted.join(""));
};

export function calculatePriceDifference(currentRate: number, refRate: number) {
  return ((currentRate - refRate) / refRate) * 100;
}

export function toBigAmount(number: number | string, decimal = 18): string {
  const bigNumber = new BigNumber(number.toString());
  return bigNumber.times(Math.pow(10, decimal)).toFixed(0);
}

export function calculateTxFee(
  gasPrice: number | string,
  gasLimit: number | string,
  precision = 7
) {
  return roundNumber(
    multiplyOfTwoNumber(toGwei(gasPrice), gasLimit),
    precision
  );
}

export function toGwei(number: number | string) {
  const bigNumber = new BigNumber(number.toString());
  return bigNumber.div(1000000000).toString();
}

export function toWei(number: number | string) {
  return toBigAmount(number, 9);
}

export function roundNumber(
  number: number | string,
  precision = 6,
  isFormatted = false
) {
  if (!number) return 0;

  const amountBigNumber = new BigNumber(number);
  const amountString = amountBigNumber.toFixed().toString();
  const indexOfDecimal = amountString.indexOf(".");
  const roundedNumber =
    indexOfDecimal !== -1
      ? amountString.slice(0, indexOfDecimal + (precision + 1))
      : amountString;

  return isFormatted ? formatNumber(roundedNumber, precision) : roundedNumber;
}

export function multiplyOfTwoNumber(
  firstNumber: number | string,
  secondNumber: number | string
) {
  const firstBigNumber = new BigNumber(firstNumber);
  const secondBigNumber = new BigNumber(secondNumber);

  return firstBigNumber.multipliedBy(secondBigNumber).toString();
}

export function formatNumber(number: any, precision = 0) {
  if (!number) return 0;
  if (number > 0 && number < 1) return toMeaningfulNumber(+number);

  let bigNumber = new BigNumber(number);
  let formattedNumber = bigNumber.toFormat(precision);
  const numberParts = formattedNumber.split(".");

  if (numberParts.length === 2 && !+numberParts[1]) {
    formattedNumber = numberParts[0];
  }

  return formattedNumber;
}

export const formatNumberV2 = (
  number: any,
  decimals = 0,
  isAbsolutely = false
) => {
  const bigNumber = new BigNumber(number);

  if (bigNumber.isZero()) return "0";

  if (bigNumber.isGreaterThan(0) && bigNumber.isLessThan(1)) {
    try {
      const decimalPart = bigNumber.toString().split(".")[1];
      const firstMeaningfulNumberIndex = decimalPart.search("[1-9]") + 4;
      const numberDecimals = isAbsolutely
        ? firstMeaningfulNumberIndex
        : min([decimals, firstMeaningfulNumberIndex]);
      const decimalPartReFormatted = decimalPart.slice(0, numberDecimals);

      return new BigNumber(`0.${decimalPartReFormatted}`).toString();
    } catch (e) {
      return "0";
    }
  }

  return new BigNumber(bigNumber.toFixed(decimals)).toFormat();
};

export function toMeaningfulNumber(number: number): number {
  const meaningfulNumber = number.toFixed(20).match(/^-?\d*\.?0*\d{0,4}/);
  if (!meaningfulNumber) return 0;
  return +meaningfulNumber[0];
}

export function shortenNumber(number: number) {
  const symbol = ["", "K", "M", "B", "T", "P", "E"];
  const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  if (tier === 0) return number.toFixed(1);

  const suffix = symbol[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = number / scale;

  return scaled.toFixed(1) + (suffix || "VB");
}

export const meaningDecimalNumber = (number: number) => {
  if (number === 0 || +`${number.toFixed(10)}`.split(".")[0] > 0) {
    return 2;
  }
  try {
    const decimalPart = `${number.toFixed(10)}`.split(".")[1] || " ";
    if (decimalPart.match(/[^1-9]+/)) {
      // @ts-ignore
      return decimalPart.match(/[^1-9]+/)[0].length + 3;
    }
    return 2;
  } catch (e) {
    console.log(e);
    return 2;
  }
};

export const priceColor = (price: number) => {
  if (price === 0) {
    return "white.800";
  }
  if (price > 0) {
    return "primary.300";
  }

  return "red.400";
};

const urlRegex = /(https?:\/\/[^\s]+)/g;

export const urlify = (text: string) => {
  return text.replace(urlRegex, function (url) {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
};

export function getColorFromPriceChanged(priceChange: number) {
  if (isNaN(priceChange) || !priceChange) return "#1de9b6";
  if (priceChange >= 0) return "#1de9b6";
  // if (priceChange === 0) return "#fff";
  return "#fe6d40";
}

export const getNumberDecimalSupportedToDisplay = (number: any) => {
  const numberCharacter = parseInt(`${number}`).toString().length;
  return numberCharacter + 1;
};
