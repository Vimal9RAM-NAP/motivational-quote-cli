const quotes = require('inspirational-quotes');
const chalk = require('chalk');

function generateQuote() {
  // Fetch a random quote object containing text and author
  const quote = quotes.getQuote();

  // Print a cleanly formatted, colorful output to the terminal
  console.log('\n' + chalk.cyan.bold('========== QUOTE OF THE DAY =========='));
  console.log(chalk.yellow.italic(`"${quote.text}"`));
  console.log(chalk.green.bold(`— ${quote.author}`));
  console.log(chalk.cyan.bold('======================================\n'));
}

generateQuote();