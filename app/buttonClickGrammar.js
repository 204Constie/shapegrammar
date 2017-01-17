(function(document, window){
'use strict';

var x = 30;
var y = 30;
var r = 15;

var direction = 1;

var grammars = [];

var shapesData = [];
shapesData[0] = [{'x': x, 'y': y, 'r': r, 'color': '#fff176'}];
var colorData = ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b',
				'#c0ca33', '#afb42b', '#9e9d24', '#827717', '#c6ff00', '#aeaa00'];

var width = 300;
var height = 300;
var svgContainer = [];
svgContainer[0] = d3.select('body').append('svg')
									.attr('width', width)
									.attr('height', height);

function checkxy(elx, ely, i){
	for(var j=0; j<shapesData[i].length; j++){
		if(elx === shapesData[i][j].x && ely === shapesData[i][j].y){
			return true;
		}
	}

	return false;
};

function genPosition(e, i){
if(direction === 1){
	if(checkxy(e.x + 2*r, e.y, i)){
		if(checkxy(e.x, e.y + 2*r, i)){
			if(checkxy(e.x - 2*r, e.y, i)){
				if(checkxy(e.x, e.y - 2*r, i)){
					return false;
				} else {
					if(e.y - 2*r >0 && e.y - 2*r < height){
						y = e.y - 2*r;
						x = e.x;
						return true;
					} else {
						return false;
					}
				}
			} else {
				if(e.x - 2*r > 0 && e.x - 2*r < width){
					x = e.x - 2*r;
					y = e.y;
					return true;
				} else {
					return false;
				}
			}
		} else {
			if(e.y + 2*r > 0 && e.y + 2*r < height){
				y = e.y + 2*r;
				x = e.x;
				return true;
			} else {
				return false;
			}
		}
	} else {
		if(e.x + 2*r > 0 && e.x + 2*r < width){
			x = e.x + 2*r;
			y = e.y;
			return true;
		} else {
			return false;
		}
	}
} else if(direction === 2){

	if(checkxy(e.x, e.y + 2*r, i)){
		if(checkxy(e.x + 2*r, e.y, i)){
			if(checkxy(e.x - 2*r, e.y, i)){
				if(checkxy(e.x, e.y - 2*r, i)){
					return false;
				} else {
					if(e.y - 2*r >0 && e.y - 2*r < height){
						y = e.y - 2*r;
						x = e.x;
						return true;
					} else {
						return false;
					}
				}
			} else {
				if(e.x - 2*r > 0 && e.x - 2*r < width){
					x = e.x - 2*r;
					y = e.y;
					return true;
				} else {
					return false;
				}
			}
		} else {
			if(e.x + 2*r > 0 && e.x + 2*r < width){
				x = e.x + 2*r;
				y = e.y;
				return true;
			} else {
				return false;
			}
		}
	} else {
		if(e.y + 2*r > 0 && e.y + 2*r < height){
				y = e.y + 2*r;
				x = e.x;
				return true;
			} else {
				return false;
			}
	}
} else if(direction === 3){

	if(checkxy(e.x - 2*r, e.y, i)){
		if(checkxy(e.x, e.y + 2*r, i)){
			if(checkxy(e.x + 2*r, e.y, i)){
				if(checkxy(e.x, e.y - 2*r, i)){
					return false;
				} else {
					if(e.y - 2*r >0 && e.y - 2*r < height){
						y = e.y - 2*r;
						x = e.x;
						return true;
					} else {
						return false;
					}
				}
			} else {
				if(e.x + 2*r > 0 && e.x + 2*r < width){
					x = e.x + 2*r;
					y = e.y;
					return true;
				} else {
					return false;
				}
			}
		} else {
			if(e.y + 2*r > 0 && e.y + 2*r < height){
				y = e.y + 2*r;
				x = e.x;
				return true;
			} else {
				return false;
			}
		}
	} else {
		if(e.x - 2*r > 0 && e.x - 2*r < width){
			x = e.x - 2*r;
			y = e.y;
			return true;
		} else {
			return false;
		}
	}
} else {
	if(checkxy(e.x, e.y - 2*r, i)){
		if(checkxy(e.x, e.y + 2*r, i)){
			if(checkxy(e.x - 2*r, e.y, i)){
				if(checkxy(e.x + 2*r, e.y, i)){
					return false;
				} else {
					if(e.x + 2*r > 0 && e.x + 2*r < width){
						x = e.x + 2*r;
						y = e.y;
						return true;
					} else {
						return false;
					}
				}
			} else {
				if(e.x - 2*r > 0 && e.x - 2*r < width){
					x = e.x - 2*r;
					y = e.y;
					return true;
				} else {
					return false;
				}
			}
		} else {
			if(e.y + 2*r > 0 && e.y + 2*r < height){
				y = e.y + 2*r;
				x = e.x;
				return true;
			} else {
				return false;
			}
		}
	} else {
		if(e.y - 2*r >0 && e.y - 2*r < height){
			y = e.y - 2*r;
			x = e.x;
			return true;
		} else {
			return false;
		}
	}
}

};

function alterRadius(i, j){
	var rand = Math.floor((Math.random() * 4) + 1);
	switch(rand){
		case 1:
			shapesData[i][j].r *= 1.1;
			break;
		case 2:
			shapesData[i][j].r *= 1.2;
			break;
		case 3:
			shapesData[i][j].r *= 0.9;
			break;
		case 4:
			shapesData[i][j].r *= 0.8;
			break;
	}
};

function shapeMemory(i, j){
	var tmp = {};

	tmp.x = shapesData[i][j].x;
	tmp.y = shapesData[i][j].y;
	tmp.r = shapesData[i][j].r;

	return tmp;
};

function beautyCheck(i){
	var xValue = 0;
	var yValue = 0;
	var len = shapesData[i].length;
	//shapesData[i] // all the elements of a shape
	for(var j=0; j<len; j++){
		xValue += Math.abs((width/2) - shapesData[i][j].x);
		yValue += Math.abs((height/2) - shapesData[i][j].y);
	}

	shapesData[i][0].beautyRate = ((100*(xValue/len))/150 + (100*(yValue/len))/150)/2;
};

function appendPath(i){
	shapesData[i].path = [];
	for(var z=grammar.length - 1; z>grammar.length - 16; z--){
		shapesData[i].path.push(grammar[z]);
	}
};

function iterateShapes(i, j){

	var randColor = Math.floor((Math.random() * 13) + 1) - 1;

	var e = shapeMemory(i, j);
	alterRadius(i, j);
	var status = genPosition(e, i);


	if(status){
		shapesData[i].push({'x': x, 'y': y, 'r': r, 'color': colorData[randColor]});
		if(j === 14){
			beautyCheck(i);
			appendPath(i);
			update(i);
		}
	} else {
		shapesData[i].push({'x': e.x, 'y': e.y, 'r': e.r, 'color': colorData[randColor]});
		if(j === 14){
			beautyCheck(i);
			appendPath(i);
			update(i);
		}
	}
};

function update(i){
	if(i !== 0){
		svgContainer[i] = d3.select('body').append('svg')
									.attr('width', width)
									.attr('height', height);
	}

	var shapes = svgContainer[i].selectAll('circle')
							.data(shapesData[i])
							.enter()
							.append('circle');

	var shapeAttributes = shapes.attr('cx', function(d){ return d.x; })
								.attr('cy', function(d){ return d.y; })
								.attr('r', function(d){ return d.r; })
								.attr('fill', function(d){ return d.color; });
};

update(0);

var d = [];
for(var i=0; i<15; i++){
	if(i !== 0){
		shapesData[i] = [{'x': x, 'y': y, 'r': r, 'color': '#fff176'}];
	}
	for(var j=0; j<30; j++){
		iterateShapes(i, j);
	}
	d.push(shapesData[i][0].beautyRate);
}

console.log('beautyRate: ', d);

$('#left').click(function(){
	direction = 3;
});

$('#up').click(function(){
	direction = 4;
});

$('#right').click(function(){
	direction = 1;
});

$('#down').click(function(){
	direction = 2;
});

$('#copulate').click(function(){

});

})(document, window);