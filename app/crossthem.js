(function(document, window){
'use strict';

var x = 30;
var y = 30;
var r = 15;

var path = [];

var copulate = false;

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
var rand = Math.floor((Math.random() * 4) + 1);
path.push(rand);
if(rand === 1){
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
} else if(rand === 2){

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
} else if(rand === 3){

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


function genPositionbyPath(e, i, j, path){
var rand = path[j];
if(rand === 1){
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
} else if(rand === 2){

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
} else if(rand === 3){

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

function mutate(i){
	var rand = Math.floor((Math.random() * 14) + 1);
	var value = shapesData[i][0].path[rand];
	if(value === 1){
		shapesData[i][0].path[rand] = 3;
	} else if(value === 2){
		shapesData[i][0].path[rand] = 4;
	} else if(value === 3){
		shapesData[i][0].path[rand] = 1;
	} else {
		shapesData[i][0].path[rand] = 2;
	}
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

function getPretty(){
	var thePrettyOnes = [];
	var sum;
	for(var f=0; f<15; f++){
		sum += shapesData[f][0].beautyRate;
	}
	var med = sum/15;
	for(var h=0; h<15; h++){
		if(shapesData[h][0].beautyRate >= med){
			thePrettyOnes.push(h);
		}
	}

	return thePrettyOnes;
};

function appendPath(i){
	shapesData[i][0].path = [];
	for(var z=path.length - 1; z>path.length - 16; z--){
		shapesData[i][0].path.push(path[z]);
	}
};

function combinePaths(path1, path2, i){
	var path = [];
	for(var t=0; t<30; t++){
		var rand = Math.floor(Math.random() * 1);
		if(rand){
			path.push(path1[t]);
		} else {
			path.push(path2[t]);
		}
	}

	return path;
};

function crossShapes(i, prettyShapes){
	if(prettyShapes.indexOf(i) !== -1){
		for(var a=0; a<2; a++){
			var pretty = Math.floor(Math.random() * 7);
			var partner = prettyShapes[pretty];
			shapesData[i][0].path = combinePaths(shapesData[i][0].path, shapesData[partner][0].path, i);
		}
	}
};

function iterateShapes(i, j){

	var randColor = Math.floor((Math.random() * 13) + 1) - 1;

	var e = shapeMemory(i, j);
	alterRadius(i, j);
	if(copulate){
		var status = genPositionbyPath(e, i, j, shapesData[i][0].path);
	} else {
		var status = genPosition(e, i);
	}

	if(status){
		shapesData[i].push({'x': x, 'y': y, 'r': r, 'color': colorData[randColor]});
		if(j === 29){
			beautyCheck(i);
			if(i === 14){
				var prettyShapes = getPretty();
				crossShapes(i, j, prettyShapes);
			}
			if(!copulate){
				appendPath(i);
			}
			update(i);
		}
	} else {
		shapesData[i].push({'x': e.x, 'y': e.y, 'r': e.r, 'color': colorData[randColor]});
		if(j === 29){
			beautyCheck(i);
			if(i === 14){
				var prettyShapes = getPretty();
				crossShapes(i, j, prettyShapes);
			}
			if(!copulate){
				appendPath(i);
			}
			update(i);
		}
	}
};

function update(i){
	if(i !== 0 && !copulate){
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
var m = [];
for(var i=0; i<15; i++){
	if(i !== 0){
		shapesData[i] = [{'x': x, 'y': y, 'r': r, 'color': '#fff176'}];
	}
	for(var j=0; j<30; j++){
		iterateShapes(i, j);
	}
	d.push(shapesData[i][0].beautyRate);
	m.push(shapesData[i][0].path);
}

console.log('beautyRate: ', d);

console.log('path: ', m);

$('#copulate').click(function(){
	copulate = true;
	for(var i=0; i<15; i++){
		for(var j=0; j<30; j++){
			iterateShapes(i, j);
		}
	}
});

})(document, window);