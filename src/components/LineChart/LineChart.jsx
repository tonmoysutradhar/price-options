import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { "student_id": 1, "name": "Alice", "math_marks": 85, "chemistry_marks": 78, "physics_marks": 82 },
        { "student_id": 2, "name": "Bob", "math_marks": 78, "chemistry_marks": 69, "physics_marks": 74 },
        { "student_id": 3, "name": "Charlie", "math_marks": 92, "chemistry_marks": 88, "physics_marks": 90 },
        { "student_id": 4, "name": "David", "math_marks": 74, "chemistry_marks": 71, "physics_marks": 68 },
        { "student_id": 5, "name": "Eve", "math_marks": 88, "chemistry_marks": 85, "physics_marks": 87 },
        { "student_id": 6, "name": "Frank", "math_marks": 67, "chemistry_marks": 72, "physics_marks": 65 },
        { "student_id": 7, "name": "Grace", "math_marks": 94, "chemistry_marks": 91, "physics_marks": 95 },
        { "student_id": 8, "name": "Hannah", "math_marks": 81, "chemistry_marks": 79, "physics_marks": 83 },
        { "student_id": 9, "name": "Ivan", "math_marks": 76, "chemistry_marks": 68, "physics_marks": 72 },
        { "student_id": 10, "name": "Jack", "math_marks": 89, "chemistry_marks": 84, "physics_marks": 86 }
      ]
      

    return (
        <div>
            <LChart  width={500} height={400} data={mathMarksData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Line dataKey="math_marks" stroke="red" />
                <Line dataKey="chemistry_marks" stroke="yellow" />
                <Line dataKey="physics_marks" />
            </LChart>
        </div>
    );
};

export default LineChart;