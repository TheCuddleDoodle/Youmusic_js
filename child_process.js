const{exec} = require("child_process")


exec('ping 1.1.1.1', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    // console.log(`stdout: ${stdout}`);
    const output = stdout;

    return(<p>"{stdout}"</p>);
});

export default exec
