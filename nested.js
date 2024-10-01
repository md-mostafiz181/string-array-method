const college = {
    name : "Gaibandha govt college" , 
    class : ["11", "12", "13"],
    students : 1500 ,
    department : ["physics", "chemistry", "biology", "English"],
    professor : {
        name : "khalilur Rahman", 
        assistanceProfessor : "Abdur Rashid",
    }
}

console.log(college)
college.department[1]= "Bangla"
console.log(college.department[1])

const head = college.professor.name ;
console.log(head)