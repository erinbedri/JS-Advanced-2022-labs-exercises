function previousDay(year, month, day) {
    let givenDate = `${year}-${month}-${day}`;
    let result = new Date(givenDate);

    result.setDate(result.getDate() - 1);

    console.log(`${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`);
}

previousDay(2016, 10, 1)