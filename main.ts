#!/usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const time = (ms=2000)=>new Promise((resolve, rejects)=>setTimeout(resolve, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.pulse("WELCOME TO THE WORLD OF WORD COUNTING!!");
    await time();
    rainbowTitle.stop();
}
// welcome()

async function wordcounter() {
    let counter = await inquirer.prompt([
        {
            name: "wordcount",
            type: "input",
            message: chalk.blue("Please write down the paragraph, sentence or word to know its exact length:")
        }
    ])
    const { wordcount } = counter;
    
    const sentence = wordcount.split(" ");
    console.log(chalk.gray`Word count of this sentence is ${sentence.length}`);

    const character = wordcount.replace(/ /g, "");
    console.log(chalk.gray`Letter count of this sentence is ${character.length}`);
}
async function restart () {
do {
    console.clear();
    await welcome();
    await wordcounter();
    var re = await inquirer.prompt([
        {
            name: "start",
            type: "input",
            message: chalk.blue("Would you like to use this word counter again? Y or N:")
        }
    ])
} while (re.start == "yes" || re.start == "YES" || re.start == "Y" || re.start == "y")
};
restart();
