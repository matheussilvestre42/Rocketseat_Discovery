module.exports = function getFlag(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
    /* for(let i = 0; i < process.argv.length; i++) {
        if(flag == process.argv[i]){
            return process.argv[i + 1]
        }
    }
    
    return "Flag não encontrada"*/
}
