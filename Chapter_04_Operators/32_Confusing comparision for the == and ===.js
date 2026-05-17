/* "5" == 5	✅ true	String converted to number
"5" === 5	❌ false	Different datatypes
true == 1	✅ true	true becomes 1
true === 1	❌ false	Boolean vs Number
false == 0	✅ true	false becomes 0
false === 0	❌ false	Different types
null == undefined	✅ true	Special JavaScript rule
null === undefined	❌ false	Different types
"" == 0	✅ true	Empty string converts to 0
"" === 0	❌ false	String vs Number
"10" == 10	✅ true	Type conversion happens
"10" === 10	❌ false	Different types
0 == false	✅ true	false converts to 0
0 === false	❌ false	Number vs Boolean
[] == false	✅ true	Array converts to empty string → 0
[] === false	❌ false	Different types
[] == ""	✅ true	Empty array becomes empty string
[] === ""	❌ false	Object vs String
null == 0	❌ false	No conversion here
undefined == 0	❌ false	No conversion
NaN == NaN	❌ false	NaN is never equal to itself
NaN === NaN	❌ false	Same rule */