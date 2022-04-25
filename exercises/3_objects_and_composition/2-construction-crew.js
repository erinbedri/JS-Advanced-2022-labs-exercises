function solve(worker) {
    if (worker.dizziness) {
        let requiredAmount = 0.1 * worker.weight * worker.experience;

        worker.levelOfHydrated += requiredAmount;
        worker.dizziness = false;
    }
    return worker;
};

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));

console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));

console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));