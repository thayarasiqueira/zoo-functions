### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'publisher.sh' fornecido 
## pela Trybe. 

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path coverage \
    --path evaluator \
    --path test/calculateEntry.test.js \
    --path test/countAnimals.test.js \
    --path test/getAnimalMap.test.js \
    --path test/getAnimalsOlderThan.test.js \
    --path test/getEmployeeByName.test.js \
    --path test/getEmployeesCoverage.test.js \
    --path test/getOldestFromFirstSpecies.test.js \
    --path test/getRelatedEmployees.test.js \
    --path test/getSchedule.test.js \
    --path test/getSpeciesByIds.test.js \
    --path img \
    --path README.md \
    --invert-paths --force