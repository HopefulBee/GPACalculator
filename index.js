// To calculate grade
function gradeCal(grade, unit) {
    if (grade === "A"){
        return 5 * unit;
    } else if (grade === "B"){
        return 4 * unit;
    } else if (grade === "C"){
        return 3 * unit;
    } else if (grade === "D"){
        return 1 * unit;
    } else if (grade === "F"){
        return 0 * unit;
    }
}

let counter = 1;

//adding course function
function addCourse() {
    let addNewCourse = document.createElement("form");
    addNewCourse.classList.add("add_new", `key-${counter}`);
    const course_name = `
    <form class="add_new key-${counter}">
    <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
    <input type="number" class="credit-unit key-${counter}" placeholder="Credit Units" value="" required>
    <select class="grade key-${counter}" required>
        <option class="grade" value="select"> Select </option>
            <option class="grade" value="5"> A </option>
            <option class="grade" value="4"> B </option>
            <option class="grade" value="3"> C </option>
            <option class="grade" value="1"> D </option>
            <option class="grade" value="0"> F </option>
        </select>
</form>
`;
    addNewCourse.innerHTML = course_name;
    document.getElementById("courses-list").appendChild(addNewCourse);
    counter++;
}

function removeCourse(){
    let mainForm = document.querySelector("form.add_new");
    mainForm?.remove();
}

const reports = [];
/**
 * @description calculates the gpa
 */

function calcGpa() {
    const GPAPARAGRAPH = document.getElementById("gpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-unit");

    const courseReport = [];
    const gradeList = [];
    const unitList = [];

    let totalUnits = 0;

    //Each Grade Selected
    GRADESSELECT.forEach((e) => {
        let GRADES = e.options;
        const selectedIndex = e.selectedIndex;
        const selectedGrade = GRADES[selectedIndex];
        const gradeValue = selectedGrade.text.toUpperCase();
        gradeList.push(gradeValue);
    });
    console.log(gradeList);

    //Each Unit Selected
    UNIT.forEach((e) => {
        const unitValue = parseInt(e.value);
        totalUnits += unitValue;
        unitList.push(unitValue);
    });
    console.log(unitList);

    let totalEarnedUnits = 0;
    for (let i = 0; i < unitList.length; i++) {
      totalEarnedUnits += gradeCal(gradeList[i], unitList[i]);
    }
    const gpa = totalEarnedUnits/totalUnits;

    if (gpa >= 0){
        GPAPARAGRAPH.textContent = "GPA is " + gpa.toFixed(2);
    } else {
        GPAPARAGRAPH.textContent = "Invalid Grade or Credit Unit";
    }
}