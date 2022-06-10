function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this._salary = 0;
        };

        get salary() {
            return this._salary;
        };

        set salary(newSalary) {
            this._salary = newSalary;
        };

        work() {
            let index = -1;

            if (index < this.tasks.length) {
                index++;
                return this.tasks[index];
            } else {
                index = 0;
                return this.tasks[index];
            }
        };

        collectSalary() {
            return `${this.name} received ${this.salary} this month.`;
        };
    };

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a simple task.`,
            ];
        };
    };

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ];
        };
    };

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this._dividend = 0;
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
        };

        get dividend() {
            return this._dividend;
        }

        set dividend(newDividend) {
            this._dividend = newDividend;
        }

        collectSalary() {
            return `${this.name} received ${this.salary + this.dividend} this month.`;
        }
    };

    return { Employee, Junior, Senior, Manager };
}

let result = solution();
var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);
