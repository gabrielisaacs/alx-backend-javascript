interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Brian',
  lastName: 'Mwangi',
  age: 22,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Tonia',
  lastName: 'Elohor',
  age: 23,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const headerRow = table.insertRow();
const firstNameHeader = headerRow.insertCell(0);
const locationHeader = headerRow.insertCell(1);
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);

