import { useEffect, useState } from "preact/hooks";

const RemainingDate = {
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
};

const localeDate = (date) => {
	const d = date || new Date();
	return new Date(d.toLocaleString("en-US"));
};

const mapValues = (object, iterator) => {
	return Object.keys(object).reduce((acc, key) => {
		acc[key] = iterator(object[key]);
		return acc;
	}, {});
};

const alwaysPositive = (value) => Math.max(0, value);

const getRemainingTime = (deadline) => {
	const currentDate = localeDate();
	const diff = deadline.getTime() - currentDate.getTime();

	const days = alwaysPositive(Math.floor(diff / (1000 * 60 * 60 * 24)));
	const hours = alwaysPositive(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
	const minutes = alwaysPositive(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
	const seconds = alwaysPositive(Math.floor((diff % (1000 * 60)) / 1000));

	return { days, hours, minutes, seconds };
};

const fillZeros = (remainingDate) => {
	return mapValues(remainingDate, (value) => `${value}`.padStart(2, "0"));
};

export const useRemainingTime = (deadline) => {
	const [remainingDate, setRemainingDate] = useState(getRemainingTime(deadline));
	const [isDone, setIsDone] = useState(false);

	const { seconds, minutes, hours, days } = remainingDate;

	const continueCountdown = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

	useEffect(() => {
		const timer =
			!continueCountdown &&
			setInterval(() => {
				setRemainingDate(getRemainingTime(deadline));
			}, 1000);

		if (continueCountdown) {
			clearInterval(timer);
			setIsDone(true);
		}

		return () => clearInterval(timer);
	}, [continueCountdown]);

	return { ...fillZeros(remainingDate), countdownEnded: continueCountdown, isDone };
};
