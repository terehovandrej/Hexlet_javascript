// @ts-check

import yup from 'yup';

const genres = [
    'drama', 'horror', 'fantasy', 'classic',
];

// BEGIN (write your solution here)
export default function getInvalidBooks(books) {
    let result = []
    const schema = yup.object().shape({
        name: yup.string().required(),
        author: yup.string().required(),
        pagesCount: yup.number().positive(),
        link: yup.string().url().matches({excludeEmptyString: true}),
        genre: yup.mixed().oneOf(genres)
    });
    for (const book of books) {
        if(!schema.isValidSync(book) ){
            result.push(book)
        }
    }
    return result
}
// END