var restify = require('restify');
var builder = require('botbuilder');
var sourceFile = require('./sourceFile');

//luis ai app model for TATA SKY
var recognizer1 = new builder.LuisRecognizer('https://api.projectoxford.ai/luis/v1/application?id=b746432a-7f7d-44be-92eb-900db813a733&subscription-key=c9ad898006c6426d95251f015167aaa1&q=');
var recognizer2 = new builder.LuisRecognizer('https://api.projectoxford.ai/luis/v1/application?id=37d62173-2e8e-45e0-96fa-6b5e054096da&subscription-key=c9ad898006c6426d95251f015167aaa1&q=');
var recognizer3 = new builder.LuisRecognizer('https://api.projectoxford.ai/luis/v1/application?id=9ef81def-abde-4531-8470-af3024ab7d57&subscription-key=c9ad898006c6426d95251f015167aaa1&q=');
var dialog  = new builder.IntentDialog({ recognizers: [recognizer1, recognizer2, recognizer3] });

// Get secrets from server environment
var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);

// // // Setup Restify Server
var server = restify.createServer();
// Handle Bot Framework messages
server.post('/api/messages', connector.listen());
// Serve a static web page
server.get(/.*/, restify.serveStatic({
	'directory': '.',
	'default': 'index.html'
}));

server.listen(process.env.port|| process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});

// =============================================================================================
//DEFAULT BOT BUILDER TO CONNECT WITH CONSOLE CONNECTOR
// var builder = require('botbuilder');
// var connector = new builder.ConsoleConnector().listen();
// var bot = new builder.UniversalBot(connector);
//DEFAULT BOT BUILDER TO CONNECT WITH CONSOLE CONNECTOR
// =============================================================================================

// Create bot root dialog
bot.dialog('/', dialog);

// =============================================================================================
// DIALOG MATCH AND STATIC RESPONSE

//App 1
dialog.matches('None', builder.DialogAction.send(sourceFile.None));
dialog.matches('Insurance', builder.DialogAction.send(sourceFile.Insurance));
dialog.matches('CIMandate', builder.DialogAction.send(sourceFile.CIMandate));
dialog.matches('CITypes',  builder.DialogAction.send(sourceFile.CITypes));
dialog.matches('Policy',  builder.DialogAction.send(sourceFile.Policy));
dialog.matches('LiabilityPolicy',  builder.DialogAction.send(sourceFile.LiabilityPolicy));
dialog.matches('CICompPackage',  builder.DialogAction.send(sourceFile.CICompPackage));
dialog.matches('AddOnCover', builder.DialogAction.send(sourceFile.AddOnCover));
dialog.matches('Exclusion', builder.DialogAction.send(sourceFile.Exclusion));
dialog.matches('Duration',  builder.DialogAction.send(sourceFile.Duration));
dialog.matches('InspectVehicle',  builder.DialogAction.send(sourceFile.InspectVehicle));
dialog.matches('Premium',  builder.DialogAction.send(sourceFile.Premium));
dialog.matches('CarEval', builder.DialogAction.send(sourceFile.CarEval));
dialog.matches('IDV',  builder.DialogAction.send(sourceFile.IDV));
dialog.matches('PlaceOfReg',  builder.DialogAction.send(sourceFile.PlaceOfReg));
dialog.matches('DiffCompPremium',  builder.DialogAction.send(sourceFile.DiffCompPremium));
dialog.matches('Discounts',  builder.DialogAction.send(sourceFile.Discounts));
dialog.matches('Deductible',  builder.DialogAction.send(sourceFile.Deductible));
dialog.matches('Claim',  builder.DialogAction.send(sourceFile.Claim));
dialog.matches('Greeting', builder.DialogAction.send(sourceFile.Greeting));

//App 2
dialog.matches('NCB',  builder.DialogAction.send(sourceFile.NCB));
dialog.matches('Bonus',  builder.DialogAction.send(sourceFile.Bonus));
dialog.matches('OldNoClaim',  builder.DialogAction.send(sourceFile.OldNoClaim));
dialog.matches('NoClaimTransfer',  builder.DialogAction.send(sourceFile.NoClaimTransfer));
dialog.matches('Insurer',  builder.DialogAction.send(sourceFile.Insurer));
dialog.matches('NoClaimLapse',  builder.DialogAction.send(sourceFile.NoClaimLapse));
dialog.matches('AAMDiscount',  builder.DialogAction.send(sourceFile.AAMDiscount));
dialog.matches('ATDDiscount',  builder.DialogAction.send(sourceFile.ATDDiscount));
dialog.matches('SellCar',  builder.DialogAction.send(sourceFile.SellCar));
dialog.matches('InsureRenewal',  builder.DialogAction.send(sourceFile.InsureRenewal));
dialog.matches('CancelInsure',  builder.DialogAction.send(sourceFile.CancelInsure));
dialog.matches('Installments',  builder.DialogAction.send(sourceFile.Installments));
dialog.matches('InsureCert',  builder.DialogAction.send(sourceFile.InsureCert));
dialog.matches('DocsNeeded',  builder.DialogAction.send(sourceFile.DocsNeeded));
dialog.matches('TotalLoss',  builder.DialogAction.send(sourceFile.TotalLoss));
dialog.matches('Insured',  builder.DialogAction.send(sourceFile.Insured));
dialog.matches('CashlessClaims',  builder.DialogAction.send(sourceFile.CashlessClaims));
dialog.matches('CarStolen',  builder.DialogAction.send(sourceFile.CarStolen));
dialog.matches('OtherPerson',  builder.DialogAction.send(sourceFile.OtherPerson));
dialog.matches('CarAccessories',  builder.DialogAction.send(sourceFile.CarAccessories));

//App 3
dialog.matches('BetterIDV',  builder.DialogAction.send(sourceFile.BetterIDV));
dialog.matches('NCBAllowed',  builder.DialogAction.send(sourceFile.NCBAllowed));
dialog.matches('BreakInInsure',  builder.DialogAction.send(sourceFile.BreakInInsure));
dialog.matches('LPGCNG',  builder.DialogAction.send(sourceFile.LPGCNG));
dialog.matches('Endorsement',  builder.DialogAction.send(sourceFile.Endorsement));
dialog.matches('Electric',  builder.DialogAction.send(sourceFile.Electric));
dialog.matches('Bike',  builder.DialogAction.send(sourceFile.Bike));
dialog.matches('RTO',  builder.DialogAction.send(sourceFile.RTO));
dialog.matches('RTOCode',  builder.DialogAction.send(sourceFile.RTOCode));
dialog.matches('Aggregator',  builder.DialogAction.send(sourceFile.Aggregator));
dialog.matches('DiffAggregator',  builder.DialogAction.send(sourceFile.DiffAggregator));
dialog.matches('MyUniverse',  builder.DialogAction.send(sourceFile.MyUniverse));
dialog.matches('MyUniverseTypes',  builder.DialogAction.send(sourceFile.MyUniverseTypes));
dialog.matches('EasyPolicy',  builder.DialogAction.send(sourceFile.EasyPolicy));
