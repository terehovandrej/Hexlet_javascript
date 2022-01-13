import _ from 'lodash'

// BEGIN (write your solution here)
const normalize = (lesson) => {
    lesson.description = lesson.description.toLowerCase()
    lesson.name = _.capitalize(lesson.name.toLowerCase())

    return lesson
}
// END
const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
};

normalize(lesson);

console.log(normalize(lesson));