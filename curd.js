let students = [];
const studentForm = document.getElementById('studentForm');
const studentsList = document.getElementById('studentsList');
const studentId = document.getElementById('studentId');

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const identification = document.getElementById('identification').value;
    const club = document.getElementById('club').value;
    const category = document.getElementById('category').value;

    if (studentId.value) {
        // Edit existing student
        const index = students.findIndex(student => student.id === studentId.value);
        students[index] = { id: studentId.value, name, identification, club, category };
    } else {
        // Add new student
        const newStudent = { id: Date.now().toString(), name, identification, club, category };
        students.push(newStudent);
    }

    studentForm.reset();
    studentId.value = '';
    renderStudents();
});

function renderStudents() ```javascript
{
    studentsList.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.identification}</td>
            <td>${student.club}</td>
            <td>${student.category}</td>
            <td>
                <button onclick="editStudent('${student.id}')">Editar</button>
                <button onclick="deleteStudent('${student.id}')">Eliminar</button>
            </td>
        `;
        studentsList.appendChild(row);
    });
}

function editStudent(id) {
    const student = students.find(student => student.id === id);
    document.getElementById('name').value = student.name;
    document.getElementById('identification').value = student.identification;
    document.getElementById('club').value = student.club;
    document.getElementById('category').value = student.category;
    studentId.value = student.id;
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    renderStudents();
}
``` ```javascript
}
``` ```javascript
}
``` ```javascript
}
