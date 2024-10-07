const fs = require('fs');
const content = 'I am fresh and young';

// const create = async () => {
//     await fs.appendFile('message.txt', content, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
// };
const create = async () => {
    await fs.promises.appendFile('message.txt', content);
    return true;
};

await create();