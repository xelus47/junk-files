// for me only. This file is just in case I need to reference how to write a class in js

function AI(canv,rawJsonData){ /*test*/
	var privateVariable = "foo";
	this.publicVariable = "bar";

	this.privilegedMethod = function(){
		alert(privateVariable);
	}

	this.cursorlocation=[0,0];
	this.windowActive = true;

	this.visibilityChanged = function(e){
		this.windowActive = !document.hidden;
		if(!document.hidden){
			drawing = setInterval(draw,1000);
		} else {
			clearInterval(drawing);
		}
	}

	this.onmousemove = function(event){
		this.cursorlocation = [
			Math.round(event.clientX/innerWidth*1000)/10,
			Math.round(event.clientY/innerHeight*1000)/10
		];
		//cursor = this.mouselocation;

		/*
		for (p=0;p<network.sensor.length;p++){
			sensor = network.sensor[p];
			if(/mouse\((.*)\)/gmi.test(sensor.description)){ // if function "mouse()"
				argStr = sensor.description.replace(/\)/,"").replace("mouse(","");
				args = JSON.parse("["+argStr+"]");
				dx = Math.abs(event.clientX - args[0]/100 * innerWidth);
				dy = Math.abs(event.clientY - args[1]/100 * innerHeight);
				r = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
				console.log(r);
			}
		}
		//*/
	}

	canvasEl=canv;
	this.rawJson=rawJsonData;
	this.json = JSON.parse(this.rawJson);
	this.canvas = canv;
	TIField = canvasEl.getContext('2d');

	network = { // usage: "full" in most cases use please. Only "full" is used in emulation and contains the
		sensor:[], // variables that go with that (live). The others are just the stats
		inter:[],
		actor:[],
		full:[]
	}

	sensors = {
		mouseSensor:function(t){
			for (p=0;p<network.sensor.length;p++){
				sensor = network.sensor[p];
				if(/mouse\((.*)\)/gmi.test(sensor.description)){ // if function "mouse()"
					argStr = sensor.description.replace(/\)/,"").replace("mouse(","");
					args = JSON.parse("["+argStr+"]");
					dx = Math.abs(t.cursorlocation[0] - args[0]);
					dy = Math.abs(t.cursorlocation[1] - args[1]);
					r = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
					//console.log(r);
				}
			}
		}
	}

	actuators = {
		show:function(t){
			console.log(t.canvas);
		}
	}



	for (n=0;n<this.json.length;n++){ // the json in the AI object place
		neuron = this.json[n];
		if (neuron.type in network){
			network[neuron.type].push(neuron);
		}
		neuron.emulation={
			timeoutCount: 0,
			electricPotential: neuron.actionPotential.resting, // net amount of potential being inputted
		};
		network.full.push(neuron);
	}

	this.activitylog = function(a,b){
		a=a||'~ no message ~';
		b=b||0;
		console.log('[AI] ' + a)
	}

	this.stimulate = function(searchID,amount){
		amount = amount||0;
		for(u=0;u<network.full.length;u++){
			non = network.full[u];
			if(non.id == searchID){
				non.emulation.electricPotential += amount;
				return 'Neuron[id="'+non.id+'"] stimulated by '+amount+' amount.';
			}
		}
	}

	excite = function(neu){ // "fire" neuron "neu"
		console.log('Excited neuron[id="'+neu.id+'"]');
		if(neu.type!='actor'){
			axons = neu.axon; // type array
			for(y=0;y<network.full.length;y++){
				//axons.length==0?break:alexaandsndasfjsakfaskfhkasjfasjfakfs=0;
				if(axons.indexOf(network.full[y].id)>-1){
					axons.splice(axons.indexOf(network.full[y].id),1); // take that away from the temp axon list
					e = (neu.actionPotential.peak - neu.actionPotential.resting) * neu.emulation.timeoutCount/neu.actionPotential.rising;
					network.full[y].emulation.electricPotential += e;
					console.log('neuron[id="'+neu.id+'"] exciting neuron[id="'+network.full[y].id+'"] with e = '+e);
				}
			}
		} else {
			func = neu.description.replace(/\(.*\)/gmi,"");
			if(func in actuators){
				actuators[func](this);
			}
		}
	}


	emulate = function(){ // runs 1 unit of time (defaults to 1 millisecond) of emulated 
		for(x=0;x<network.full.length;x++){
			currentNeuron = network.full[x];

			// TRIGGERS

			if(currentNeuron.type!='actor' || true){

				if (currentNeuron.emulation.timeoutCount==0){ // the neuron is not firing
					if (currentNeuron.emulation.electricPotential>currentNeuron.actionPotential.threshhold){ // input > threshhold
						currentNeuron.emulation.timeoutCount=1;
						excite(currentNeuron); // fire this neuron
					} else { // input is less than threshhold: gradually reduce/reset input
						if(currentNeuron.emulation.electricPotential - Math.abs(currentNeuron.actionPotential.resetStep)<=currentNeuron.actionPotential.resting){ // if the next tick of reduction is less than the resting value, reset back to resting value
							currentNeuron.emulation.electricPotential = currentNeuron.actionPotential.resting;
						} else {
							currentNeuron.emulation.electricPotential -= Math.abs(currentNeuron.actionPotential.resetStep);
						}
					}
				}
				else if (currentNeuron.emulation.timeoutCount>0){ // neuron is in the process of firing
					if(currentNeuron.emulation.timeoutCount < currentNeuron.actionPotential.rising){ // still peaking
						currentNeuron.emulation.timeoutCount+=1;
						excite(currentNeuron);

					} else if(currentNeuron.emulation.timeoutCount >= currentNeuron.actionPotential.timeout) { // resting period is over
						currentNeuron.emulation.timeoutCount=0;
					} else { // after peaking it rests
						currentNeuron.emulation.timeoutCount+=1;
						currentNeuron.emulation.electricPotential = currentNeuron.actionPotential.resting;
					}
				}
			}
		}
	}

	draw = function(){ // looped function
		for (i in sensors){
			sensors[i](this);
		}
		console.log(network.full[1].emulation.electricPotential + ' step: ' +network.full[1].emulation.timeoutCount);
		emulate();
	}
	drawing = setInterval(draw,1000);
}
