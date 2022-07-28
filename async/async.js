const fnAsync = () => {
    return new Promise(function (res, rej) {
        (true)
            ? setTimeout(() => res('async'), 2000)
            : rej(new Error('error'));
    });
};

const another = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('oal');
}

console.log('before');
another();
console.log('after');