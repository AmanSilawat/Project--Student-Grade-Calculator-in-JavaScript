function calcy() {
    const wd = document.getElementById('wd').value;
    const maths = document.getElementById('maths').value;
    const comp = document.getElementById('comp').value;
    const phy = document.getElementById('phy').value;
    let grades = '';

    const totalGrades =
        parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);

    const perc = (totalGrades / 400) * 100;

    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    } else if (perc <= 79 && perc >= 60) {
        grades = 'B';
    } else if (perc <= 59 && perc >= 40) {
        grades = 'C';
    } else {
        grades = 'F';
    }

    if (perc >= 40) {
        document.getElementById('showData').innerHTML = `
            Out of 400 your total is ${totalGrades} and percentage is ${perc}%.
            <br> Your grade is ${grades}. You are Pass.
        `;
    } else {
        document.getElementById('showData').innerHTML = `
            Out of 400 your total is ${totalGrades} and percentage is ${perc}%.
            <br> Your grade is ${grades}. You are Fail.
        `;
    }
}
