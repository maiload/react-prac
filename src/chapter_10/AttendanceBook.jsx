const students = [
    {
        id: 1,
        name: "jin",
    },
    {
        id: 2,
        name: "steve",
    },
    {
        id: 3,
        name: "bill",
    },
    {
        id: 4,
        name: "jeff",
    },
];

function AttendanceBook() {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;