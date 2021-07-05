#!/usr/bin/env node
const program  = require('commander')
const chalh = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPass = require('./utils/createPass')
const savePass = require('./utils/savePass')
const chalk = require('chalk')

program.version('1.0.0').description('password generator')

program
    .option('-l,--length <number>','length of password','8')
    .option('-s,--save','save password to passwords.txt')
    .option('-nn,--no-numbers','remove numerical values from the password')
    .option('-ns,--no-symbols','remove symbols from the password')
    .parse()


const {length,save,numbers,symbols} = program.opts()

//generate password

const genPass = createPass(length,numbers,symbols)

//save to file
if(save){
    savePass(genPass)
}

//copy to clip board

clipboardy.writeSync(genPass)

//output 
log(chalk.cyan('Your generated password : ')+chalk.magenta(genPass))
log(chalk.cyan('Password copied to clipboard !! '))