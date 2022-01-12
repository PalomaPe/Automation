Abstracta Academy

For the first section of the coding exercise of Abstracta Academy, the technologies were Javascript, Node.JS y Webdriverio which uses Selenium under the hood.

The program goes through Mercado Libre’s results when typing in ‘Camisetas’ in the search bar and stores some of their details to load them in a new file then. This file is required by the client.

Known Issues: 
the details collected during the automation of Mercado Libr are not being burned correctly into the file.
Mercado Libre shows 56 products per page, this program does not collect data for product numbers 56, 112, and 168 due to a problem that arises when using .waitForClickable on them. This problem does not occur when using .waitForDisplayed but the first method was chosen in order to have visual monitoring of the process.

To Improve:
Divide and separate the code more, to create and call clean functions.
Save locators in an independent file and import where necessary.
Pull-apart the processes of automating ML and serving the obtained data into different modules, coding them in the same file was a work-around for ‘import’ issues that need to be handled.

The program can be executed by typing into the console: npm run test or npx wdio run wdio.conf.cjs.
