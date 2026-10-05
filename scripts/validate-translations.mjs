import fs from "node:fs";
import ts from "typescript";
const dictionary=JSON.parse(fs.readFileSync('src/i18n/pt.json','utf8'));
let count=0;const missing=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const path=dir+'/'+e.name;if(e.isDirectory())walk(path);else if(/\.tsx?$/.test(path)){
 const tree=ts.createSourceFile(path,fs.readFileSync(path,'utf8'),ts.ScriptTarget.Latest,true,path.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
 function visit(n){if(ts.isCallExpression(n)&&n.expression.getText(tree)==='t'&&n.arguments[0]&&ts.isStringLiteral(n.arguments[0])){count++;const key=n.arguments[0].text.trim();if(!(key in dictionary))missing.push([path,key]);}ts.forEachChild(n,visit);}visit(tree);
}}}walk('src');
if(missing.length){console.error(missing);process.exitCode=1;}else console.log(`${count} translated strings: catalog coverage passes.`);
