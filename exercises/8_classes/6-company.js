class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([name, salary, position, department].some((el) => el === '') ||
            [name, salary, position, department].some((el) => el === undefined) ||
            [name, salary, position, department].some((el) => el === null)) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!(department in this.departments)) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name: name, salary: salary, position: position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let result = [];
        let bestAverageSalary = 0;
        let bestDep;
        let bestDepName;

        for (const [department, value] of Object.entries(this.departments)) {
            let currentTotalDepartmentSalary = 0;
            let currentAvrgDepartmentSalary = 0;

            for (const employee of value) {
                currentTotalDepartmentSalary += Number(employee.salary);
            }
            currentAvrgDepartmentSalary = currentTotalDepartmentSalary / value.length;

            if (currentAvrgDepartmentSalary > bestAverageSalary) {
                bestAverageSalary = currentAvrgDepartmentSalary.toFixed(2);
                bestDep = this.departments[department];
                bestDepName = department;
            }
        }

        bestDep.sort(function (a, b) {
            return  b.salary - a.salary || a.name.localeCompare(b.name);
        });

        result.push(`Best Department is: ${bestDepName}`);
        result.push(`Average salary: ${bestAverageSalary}`);
        
        for (const employee of bestDep) {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }

        return result.join('\n');
    }
}


let c = new Company();
console.log(c.addEmployee('Stanimir', 2000, "engineer", "Construction"));
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
