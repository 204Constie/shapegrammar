(function(document, window){
'use strict';

var x = 30;
var y = 30;
var r = 15;
//var s = 1;

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

function clickEvent(e){

	var randColor = Math.floor((Math.random() * 13) + 1) - 1;

	genRadius(e);
	var status = genPosition(e);

	if(status){
		shapesData.push({'x': x, 'y': y, 'r': r, 'color': colorData[randColor]});
		update();
	} else {
		update();
	}
};

function update(){
	var shapes = svgContainer.selectAll('circle')
							.data(shapesData)
							.enter()
							.append('circle');

	var shapeAttributes = shapes.attr('cx', function(d){ return d.x; })
								.attr('cy', function(d){ return d.y; })
								.attr('r', function(d){ return d.r; })
								//.attr('transform', function(d){ return 'scale(' + d.s + ')'; })
								.attr('fill', function(d){ return d.color; })
								.on('click', clickEvent);
};

update();


})(document, window);