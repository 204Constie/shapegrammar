(function(document, window){
'use strict';

var x = 30;
var y = 30;
var r = 15;
var iter = 0;

var shapesData = [{'x': x, 'y': y, 'r': r, 'color': '#fff176'}];
var colorData = ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b',
				'#c0ca33', '#afb42b', '#9e9d24', '#827717', '#c6ff00', '#aeaa00'];

var svgContainer = d3.select('body').append('svg')
									.attr('width', 700)
									.attr('height', 700);

function checkxy(elx, ely){
	for(var i=0; i<shapesData.length; i++){
		if(elx === shapesData[i].x && ely === shapesData[i].y){
			console.log('true');
			return true;
		}
	}
	return false;
};

function genPosition(e){
	if(checkxy(e.x + 2*r, e.y)){
		if(checkxy(e.x, e.y + 2*r)){
			if(checkxy(e.x - 2*r, e.y)){
				if(checkxy(e.x, e.y - 2*r)){
					return false;
				} else {
					if(e.y - 2*r >0 && e.y - 2*r < 700){
						y = e.y - 2*r;
						x = e.x;
						return true;
					} else {
						return false;
					}
				}
			} else {
				if(e.x - 2*r > 0 && e.x - 2*r < 700){
					x = e.x - 2*r;
					y = e.y;
					return true;
				} else {
					return false;
				}
			}
		} else {
			if(e.y + 2*r > 0 && e.y + 2*r < 700){
				y = e.y + 2*r;
				x = e.x;
				return true;
			} else {
				return false;
			}
		}
	} else {
		if(e.x + 2*r > 0 && e.x + 2*r < 700){
			x = e.x + 2*r;
			y = e.y;
			return true;
		} else {
			return false;
		}
	}

};

function genRadius(e){
	var rand = Math.floor((Math.random() * 4) + 1);
	switch(rand){
		case 1:
			r = e.r * 1.1;
			break;
		case 2:
			r = e.r * 1.2;
			break;
		case 3:
			r = e.r * 0.9;
			break;
		case 4:
			r = e.r * 0.8;
			break;
	}
};


function swap(array, firstID, secondID){
			var tmp = array[firstID];
			array[firstID] = array[secondID];
			array[secondID] = tmp;
		};

function indexOfMin(array, startID){
			var minValue = array[startID];
			var minID = startID;

			for(var i=minID+1; i<array.length; i++){
				if(array[i]<minValue){
					minID = i;
					minValue = array[i];
				}
			}
			return minID;
		};


function realSort(array){
				var tmpID;
				for(var j=0; j<array.length; j++){
					tmpID = indexOfMin(array, j);
					swap(array, tmpID, j);
				}
				return array;
			};



function sortElements(array){
	var tmp = [];
	var bigTmp = [];

	for(var j=0; j<array.length; j++){
		tmp.push(array[j].r);
	}

	tmp = realSort(tmp);
	for(var k=0; k<tmp.length; k++){
		for(var z=0; z<array.length; z++){
			if(tmp[k] === array[z].r){
				console.log('pipa');
				bigTmp.push(array[z]);
			}
		}
	}

	return bigTmp;
};

function beautyCheck(){
	var tmp = [];
	for(var i=shapesData.length-1; i>shapesData.length - 10; i--){
		tmp.push(shapesData[i]);
	}

	console.log('tmp: ', tmp);
	tmp = sortElements(tmp);
	console.log('jcsja: ', tmp.splice(4, 5));

	tmp.splice(4, 5);

	shapesData.splice(shapesData.length - 11, 10);
	for(var p=0; p<tmp.length; p++){
		shapesData.push(tmp[p]);
	}
	console.log('shapesData: ', shapesData);
	update();
};

function clickEvent(e){

	var randColor = Math.floor((Math.random() * 13) + 1) - 1;

	genRadius(e);
	var status = genPosition(e);

	if(status){
		shapesData.push({'x': x, 'y': y, 'r': r, 'color': colorData[randColor]});
		if(iter !== 10){
			iter++;
			update();
		} else {
			beautyCheck();
			iter = 0;
		}
	} else {
		update();
	}
};

function update(){
	d3.selectAll('circle').remove();
	var shapes = svgContainer.selectAll('circle')
							.data(shapesData)
							.enter()
							.append('circle');

	var shapeAttributes = shapes.attr('cx', function(d){ return d.x; })
								.attr('cy', function(d){ return d.y; })
								.attr('r', function(d){ return d.r; })
								.attr('fill', function(d){ return d.color; })
								.on('click', clickEvent);
};

update();


})(document, window);