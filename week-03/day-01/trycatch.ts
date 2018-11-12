function divideBy(a: number, b:number) : number { //ez a return value
    if (b === 0){
        throw new Error ('can\'t divide by zero');
    }
	return a/b;
}

try {
    divideBy(1,2);
} catch (e) {
    console.log(e)
} 

/* error es exception kozott a kulonbseg
exc azert van hogy letre tudjunk hozni hibakat
kivetelkepzes, ha olyan hiba van amit nem akarunk, pl ne tudjunk nullaval osztani, jelszoellenorzes, stb.
keyword: throw 
kidob egy error objectet
11. sorban: e.name, e.message
*/