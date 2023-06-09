const openai = require('openai');

function chatgpt(question, lang, format) {
  const response = openai.ChatCompletion.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a chatbot' },
      { role: 'system', content: `Answer in ${lang}` },
      { role: 'system', content: `Format in ${format}` },
      { role: 'user', content: question }
    ]
  });
  return response.choices[0].message.content;
}

function translate(text, toLang) {
  const response = openai.ChatCompletion.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a chatbot' },
      { role: 'system', content: `Answer in ${toLang}` },
      { role: 'system', content: `Format in ${format}` },
      { role: 'user', content: `Translate the following text to ${toLang}\n\n${text}` }
    ]
  });
  const result = response.choices[0].message.content;
  return result;
}

const opList = ['quit', 'chatgpt', 'load', 'save', 'shell', 'translate', 'history'];

const user = process.argv[2] || 'user';
const lang = process.argv[3] || '繁體中文';
const format = process.argv[4] || 'Markdown+LaTex, add space before and after $..$';
console.log(`Welcome ${user} to shellgpt. You may use the following commands`);
console.log('1. chatgpt <question>');
console.log('2. load <file>');
console.log('3. save <file>');
console.log('4. translate');
console.log('5. history');
console.log('6. quit\n');

let response = null;
let question = null;
const commandList = [];

function getInput(prompt) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    readline.question(prompt, (input) => {
      readline.close();
      resolve(input);
    });
  });
}

async function main() {
  while (true) {
    const command = await getInput('\ncommand> ');
    console.log('');
    commandList.push(command);
    const args = command.split(' ');
    if (args.length === 0) continue;
    const op = args[0];
    const tail = args.slice(1).join(' ');
    if (!opList.includes(op)) {
      console.log(`Operation error, only ${opList} allowed!`);
      continue;
    }
    if (op === 'chatgpt') {
      question = tail;
      response = chatgpt(question, lang, format);
      console.log(response);
    }
    if (op === 'quit') break;
    if (op === 'shell') {
      const { exec } = require('child_process');
      exec(tail, (error, stdout, stderr) => {
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
        if (error) console.error(`Error executing shell command: ${error}`);
      });
    }
    if (op === 'load') {
      const fs = require('fs');
      const fname = args[1];
      const content = fs.readFileSync(fname, 'utf-8');
      response = content;
      console.log(response);
    }
    if (op === 'save') {
      if (response === null) {
        console.log('error: no response to save!');
      } else {
        const fs = require('fs');
        const fname = args[1];
        fs.appendFileSync(fname, response, 'utf-8');
      }
    }
    if (op === 'translate') {
      const toLang = args[1] || lang;
      response = translate(response, toLang);
      console.log(response);
    }
    if (op === 'history') {
      for (let i = 0; i < commandList.length; i++) {
        console.log(`${i}:${commandList[i]}`);
      }
    }
  }
}

main();