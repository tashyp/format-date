const formatDate = (timeInSeconds) => {

	if (!timeInSeconds) timeInSeconds = 0;
	const seconds = Math.floor(timeInSeconds % 60);
	const minutes = Math.floor((timeInSeconds % 3600) / 60);
	const hours = Math.floor((timeInSeconds % 86400) / 3600);
	const days = Math.floor(timeInSeconds / 86400);


	return `${days !== 0 ? `${days}d` : ''}${days && hours ? ' ' : ''}${hours !== 0 ? `${hours}h` : ''}${(days || hours) && minutes ? ' ' : ''}${minutes !== 0 ? `${minutes}m` : ''}${(days || hours || minutes) && seconds ? ' ' : ''}${seconds !== 0 || (days === 0 && hours === 0 && minutes === 0) ? `${seconds}s` : ''}`;
	//return `${timeInSeconds}s`;
}

module.exports = formatDate;