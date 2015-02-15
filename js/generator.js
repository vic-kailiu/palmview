function generateQnsA1(label1, label2, scala1, scala2, generateMCQ) {
	total = scala1 + scala2;
	labels = label1 + '%' + scala1.toString() + '/' + total.toString()
			+ '&' + label2 + '%' + scala2.toString() + '/' + total.toString();
	values = scala1.toString() + '%' + scala1.toString() + '/' + total.toString()
			+ '&' + scala2.toString() + '%' + scala2.toString() + '/' + total.toString()
			+ '|?%1';
	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}
	var output = 'MODAL_A1@' + labels+'@'+values;
	if (!generateMCQ)
		return output;
	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsA2(label1, label2, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label1, label2, scala1, scala2, false));

	pool.push('false@'+generateQnsA1(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsA2(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label2, label1, scala1, scala2, false));

	shuffle(pool);
	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateQnsA2(label1, label2, scala1, scala2, generateMCQ) {
	total = scala1 + scala2;
	labels = label1 + '%' + scala1.toString() + '/' + total.toString()
			+ '&' + label2 + '%1';
	values = scala1.toString() + '%' + scala1.toString() + '/' + total.toString()
			+ '&' + scala2.toString() + '%' + scala2.toString() + '/' + total.toString()
			+ '|?%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_A2@' + labels+'@'+values;
	if (!generateMCQ)
		return output;

	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsA1(label1, label2, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label1, label2, scala1, scala2, false));

	pool.push('false@'+generateQnsA1(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsA2(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label2, label1, scala1, scala2, false));

	shuffle(pool);
	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateQnsA3(label1, label2, label3, scala1, scala2, scala3, generateMCQ) {
	total = scala1 + scala2 + scala3;
	labels = label1 + '%' + scala1.toString() + '/' + total.toString()
			+ '&' + label2 + '%' + scala2.toString() + '/' + total.toString()
			+ '&' + label3 + '%' + scala3.toString() + '/' + total.toString();
	values = scala1.toString() + '%' + scala1.toString() + '/' + total.toString()
			+ '&' + scala2.toString() + '%' + scala2.toString() + '/' + total.toString()
			+ '&' + scala3.toString() + '%' + scala3.toString() + '/' + total.toString()
			+ '|?%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_A2@' + labels+'@'+values;
	if (!generateMCQ)
		return output;

	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsA2(label1, label2, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label1, label2, scala1, scala2, false));

	pool.push('false@'+generateQnsA3(label3, label2, label1, scala1, scala2, scala3, false));
	pool.push('false@'+generateQnsA3(label2, label1, label3, scala1, scala2, scala3, false));
	pool.push('false@'+generateQnsA3(label1, label3, label2, scala1, scala2, scala3, false));
	pool.push('false@'+generateQnsA2(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label2, label1, scala1, scala2, false));

	shuffle(pool);
	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateQnsS1(label1, label2, scala1, scala2, firstIsQuestion, generateMCQ) {
	if (scala1 < scala2) scala2 = [scala1, scala1 = scala2][0];
	diff = scala1 - scala2;
	if (firstIsQuestion) {
		labels = label1 + '%' + diff.toString() + '/' + scala1.toString()
				+ '&' + label2 + '%' + scala2.toString() + '/' + scala1.toString();
		values = '?%' + diff.toString() + '/' + scala1.toString()
				+ '&' + scala2.toString() + '%' + scala2.toString() + '/' + scala1.toString()
				+ '|' + scala1.toString() + '%1';
	} else {
		labels = label1 + '%' + scala2.toString() + '/' + scala1.toString()
				+ '&' + label2 + '%' + diff.toString() + '/' + scala1.toString();
		values = scala2.toString() + '%' + scala2.toString() + '/' + scala1.toString()
				+ '&?%' + diff.toString() + '/' + scala1.toString()
				+ '|' + scala1.toString() + '%1';
	}


	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_S1@' + labels+'@'+values;
	if (!generateMCQ)
		return output;

	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsA2(label1, label2, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, ~firstIsQuestion, false));
	pool.push('false@'+generateQnsS2(label1, label2, scala1, scala2, false));

	pool.push('false@'+generateQnsA1(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsA2(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label2, label1, scala1, scala2, false));

	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateQnsS2(label1, label2, scala1, scala2, generateMCQ) {
	if (scala1 < scala2) scala2 = [scala1, scala1 = scala2][0];
	diff = scala1 - scala2;
	labels = label1 + '%1&br%0'
			+ '&' + label2 + '%' + diff.toString() + '/' + scala1.toString()
			+ '&dotted%0';
	values = scala1.toString() + '%1'
			+ '|?%' + diff.toString() + '/' + scala1.toString()
			+ '&' + scala2.toString() + '%' + scala2.toString() + '/' + scala1.toString();


	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_A2@' + labels+'@'+values;
	if (!generateMCQ)
		return output;

	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsA1(label1, label2, scala1, scala2, false));
	pool.push('false@'+generateQnsA2(label1, label2, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label1, label2, scala1, scala2, false, false));

	pool.push('false@'+generateQnsA1(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsA2(label2, label1, scala1, scala2, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, true, false));
	pool.push('false@'+generateQnsS1(label2, label1, scala1, scala2, false, false));
	pool.push('false@'+generateQnsS2(label2, label1, scala1, scala2, false));

	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateQnsM1(scala1, scala2, generateMCQ) {
	total = scala1 * scala2;
	labels = "''%"+ scala2.toString();
	values = scala1.toString() + '%1/' + scala2.toString()
			+ '|?%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_M1@' + labels+'@'+values;
	if (!generateMCQ)
		return output;

	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsD1(scala1, scala2, false));
	pool.push('false@'+generateQnsD2(scala1, scala2, false));

	pool.push('false@'+generateWrongQnsM1(scala1, scala2, false));
	pool.push('false@'+generateWrongQnsD2(scala1, scala2, false));
	pool.push('false@'+generateWrongQnsD1(scala1, scala2, false));

	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateQnsD1(scala1, scala2, generateMCQ) {
	if (scala1 < scala2) scala2 = [scala1, scala1 = scala2][0];
	div = scala1 / scala2;
	labels = "''%"+ scala2.toString();
	values = '?%1/' + scala2.toString()
			+ '|'+ scala1.toString() +'%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}
	var output = 'MODAL_D1@' + labels+'@'+values;
	if (!generateMCQ)
		return output;

	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsM1(scala1, scala2, false));
	pool.push('false@'+generateQnsD2(scala1, scala2, false));

	pool.push('false@'+generateWrongQnsM1(scala1, scala2, false));
	pool.push('false@'+generateWrongQnsD2(scala1, scala2, false));
	pool.push('false@'+generateWrongQnsD1(scala1, scala2, false));

	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateQnsD2(scala1, scala2, generateMCQ) {
	if (scala1 < scala2) scala2 = [scala1, scala1 = scala2][0];
	div = scala1 / scala2;
	labels = "''%"+ div.toString();
	values = scala2.toString() +'%1/' + div.toString()
			+ '|'+ scala1.toString() +'%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_D2@' + labels+'@'+values;
	if (!generateMCQ)
		return output;

	// generate modal selection
	pool = [];
	
	pool.push('false@'+generateQnsM1(scala1, scala2, false));
	pool.push('false@'+generateQnsD1(scala1, scala2, false));

	pool.push('false@'+generateWrongQnsM1(scala1, scala2, false));
	pool.push('false@'+generateWrongQnsD2(scala1, scala2, false));
	pool.push('false@'+generateWrongQnsD1(scala1, scala2, false));
	shuffle(pool);

	options = [];
	options.push('true@' + output);
	options.push(pool[0]);
	options.push(pool[1]);
	options.push(pool[2]);

	shuffle(options);

	return options[0] + '#' + options[1] + '#' + options[2] + '#' + options[3];
}

function generateWrongQnsM1(scala1, scala2, generateMCQ) {
	total = scala1 * scala2;
	labels = "''%"+ scala2.toString();
	values = '?%1/' + scala2.toString()
			+ '|'+ scala1.toString() + '%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_M1@' + labels+'@'+values;
	if (!generateMCQ)
		return output;
}

function generateWrongQnsD1(scala1, scala2, generateMCQ) {
	if (scala1 < scala2) scala2 = [scala1, scala1 = scala2][0];
	div = scala1 / scala2;
	labels = "''%"+ scala2.toString();
	values = scala1.toString() +'%1/' + scala2.toString()
			+ '|?%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var output = 'MODAL_D1@' + labels+'@'+values;
	if (!generateMCQ)
		return output;
}

function generateWrongQnsD2(scala1, scala2, generateMCQ) {
	if (scala1 < scala2) scala2 = [scala1, scala1 = scala2][0];
	div = scala1 / scala2;
	labels = "''%"+ div.toString();
	values = scala1.toString() +'%1/' + div.toString()
			+ '|'+ scala2.toString() +'%1';

	if (generateMCQ) {
		console.log(labels);
		console.log(values);
	}

	var	output = 'MODAL_D2@' + labels+'@'+values;
	if (!generateMCQ)
		return output;
}

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}