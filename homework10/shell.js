async function system(cmd) {
    const args = cmd.split(' ');
    const process = Deno.run({ cmd: args });
    const { code } = await process.status();
    process.close();
    return code;
  }
  
  while (true) {
    const cmd = prompt('shell> ');
    if (cmd === 'exit') break;
    await system(cmd);
  }
  