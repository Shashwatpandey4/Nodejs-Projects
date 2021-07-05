const lett = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'
const symbols = '!@#$%^&*()_+<>?:"{}|~'

const createPass = (length,hasNumbers =true,hasSymbols=true)=>{
    let chars = lett
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return genPass(length,chars)
}

const genPass = (length,chars)=>{
    let password = ''
    for (let i=0;i<length;i++){
        password += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return password
}


module.exports = createPass