document.getElementById("startbutton").addEventListener("click", function(){
	document.getElementById('drawing1').style.display='block';
	document.getElementById('button').style.display='none';
	init();
});
var mark=0;
var correctwrong="";




if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool1');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
			tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView2');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool2');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView3');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool3');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView4');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool4');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView5');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool5');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView6');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool6');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView7');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool7');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView8');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool8');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView9');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool9');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}
if(window.addEventListener) {
			window.addEventListener('load', function() {
			var canvas, context, canvaso, contexto;

			// The active tool instance.
			var tool;
			var tool_default = 'rect';

		function init () {
		// Find the canvas element.
		canvaso = document.getElementById('imageView10');
		if (!canvaso) {
		alert('Error: I cannot find the canvas element!');
		return;
		}

		if (!canvaso.getContext) {
		alert('Error: no canvas.getContext!');
		return;
		}

		// Get the 2D canvas context.
		contexto = canvaso.getContext('2d');
		if (!contexto) {
			alert('Error: failed to getContext!');
			return;
		}

		// Add the temporary canvas.
		var container = canvaso.parentNode;
		canvas = document.createElement('canvas');
		if (!canvas) {
			alert('Error: I cannot create a new canvas element!');
			return;
		}

		canvas.id     = 'imageTemp';
		canvas.width  = canvaso.width;
		canvas.height = canvaso.height;
		container.appendChild(canvas);

		context = canvas.getContext('2d');

		// Get the tool select input.
		var tool_select = document.getElementById('dtool10');
		if (!tool_select) {
			alert('Error: failed to get the dtool element!');
			return;
		}
		tool_select.addEventListener('change', ev_tool_change, false);

		// Activate the default tool.
		if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
		}

		// Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',   ev_canvas, false);
		}

		// The general-purpose event handler. This function just determines the mouse 
		// position relative to the canvas element.
		function ev_canvas (ev) {
			if (ev.layerX || ev.layerX == 0) { // Firefox
				ev._x = ev.layerX;
				ev._y = ev.layerY;
			} else if (ev.offsetX || ev.offsetX == 0) { // Opera
				ev._x = ev.offsetX;
				ev._y = ev.offsetY;
			}

		// Call the event handler of the tool.
			var func = tool[ev.type];
			if (func) {
				func(ev);
			}
		}

  // The event handler for any changes made to the tool selector.
		function ev_tool_change (ev) {
			if (tools[this.value]) {
				tool = new tools[this.value]();
			}
		}

  // This function draws the #imageTemp canvas on top of #imageView, after which 
  // #imageTemp is cleared. This function is called each time when the user 
  // completes a drawing operation.
		function img_update () {
			contexto.drawImage(canvas, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);
                        context.strokeStyle="rgb(0,0,0)";
                        context.lineWidth =1;
		}

  // This object holds the implementation of each drawing tool.
  var tools = {};
  tools.eraser = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
		context.strokeStyle = "rgb(242,242,242)";
		context.globalCompositeOperation = "copy";  
		context.strokeStyle = ("rgba(242,242,242,242)");
		context.lineWidth = 15;
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The drawing pencil.
  tools.pencil = function () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };

  // The rectangle tool.
  tools.rect = function () {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      tool.started = true;
      tool.x0 = ev._x;
      tool.y0 = ev._y;
    };

    this.mousemove = function (ev) {
      if (!tool.started) {
        return;
      }

      var x = Math.min(ev._x,  tool.x0),
          y = Math.min(ev._y,  tool.y0),
          w = Math.abs(ev._x - tool.x0),
          h = Math.abs(ev._y - tool.y0);

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!w || !h) {
        return;
      }

      context.strokeRect(x, y, w, h);
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
        img_update();
      }
    };
  };
 
  init();
			}, false); 
		}

document.getElementById("nextbutton").addEventListener("click", function() {	
     document.getElementById('drawing2').style.display='block';
	 document.getElementById('drawing1').style.display='none';
	 var answer1 =  document.getElementById('ans1').value;
	 
	 if (answer1!=54) {
			alert('Answer is wrong!');
			correctwrong += "Question 1: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 1: Correct"+ "\n";
			return;
		}
	 init();
});

document.getElementById("nextbutton2").addEventListener("click", function() {		
     document.getElementById('drawing3').style.display='block';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	 var answer2 =  document.getElementById('ans2').value;
	 if (answer2!=300) {
			alert('Answer is wrong!');
			correctwrong += "Question 2: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 2: Correct"+ "\n";
			return;
		}
	 init();
});
document.getElementById("nextbutton3").addEventListener("click", function() {		
     document.getElementById('drawing4').style.display='block';
	 document.getElementById('drawing3').style.display='none';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	 var answer3 =  document.getElementById('ans3').value;

	 if (answer3!=110) {
			alert('Answer is wrong!');
			correctwrong += "Question 3: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 3: Correct"+ "\n";
			return;
		}
	 init();
});
document.getElementById("nextbutton4").addEventListener("click", function() {		
     document.getElementById('drawing5').style.display='block';
	 document.getElementById('drawing4').style.display='none';
	 document.getElementById('drawing3').style.display='none';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	 var answer4 =  document.getElementById('ans4').value;

	 if (answer4!=29) {
			alert('Answer is wrong!');
			correctwrong += "Question 4: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 4: Correct"+ "\n";
			return;
		}
	 init();
});
document.getElementById("nextbutton5").addEventListener("click", function() {		
     document.getElementById('drawing6').style.display='block';
	 document.getElementById('drawing5').style.display='none';
	 document.getElementById('drawing4').style.display='none';
	 document.getElementById('drawing3').style.display='none';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	 var answer5 =  document.getElementById('ans5').value;
	 if (answer5!=15) {
			alert('Answer is wrong!');
			correctwrong += "Question 2: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 2: Correct"+ "\n";
			return;
		}
	 init();
});
document.getElementById("nextbutton6").addEventListener("click", function() {		
     document.getElementById('drawing7').style.display='block';
	 document.getElementById('drawing6').style.display='none';
	 document.getElementById('drawing5').style.display='none';
	 document.getElementById('drawing4').style.display='none';
	 document.getElementById('drawing3').style.display='none';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	 var answer6 =  document.getElementById('ans6').value;
	
	 if (answer6!=2) {
			alert('Answer is wrong!');
			correctwrong += "Question 6: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 6: Correct"+ "\n";
			return;
		}
	 init();
});
document.getElementById("nextbutton7").addEventListener("click", function() {		
     document.getElementById('drawing8').style.display='block';
	 document.getElementById('drawing7').style.display='none';
	 document.getElementById('drawing6').style.display='none';
	 document.getElementById('drawing5').style.display='none';
	 document.getElementById('drawing4').style.display='none';
	 document.getElementById('drawing3').style.display='none';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	 var answer7 =  document.getElementById('ans7').value;
	 
	 if (answer7!=6) {
			alert('Answer is wrong!');
			correctwrong += "Question 7: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 7: Correct"+ "\n";
			return;
		}
	 init();
});
document.getElementById("nextbutton8").addEventListener("click", function() {		
     document.getElementById('drawing9').style.display='block';
	 document.getElementById('drawing8').style.display='none';
	 document.getElementById('drawing7').style.display='none';
	 document.getElementById('drawing6').style.display='none';
	 document.getElementById('drawing5').style.display='none';
	 document.getElementById('drawing4').style.display='none';
	 document.getElementById('drawing3').style.display='none';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	 var answer8 =  document.getElementById('ans8').value;
	 
	 if (answer8!=6) {
			alert('Answer is wrong!');
			correctwrong += "Question 8: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 8: Correct"+ "\n";
			return;
		}
	 init();
});
document.getElementById("nextbutton9").addEventListener("click", function() {
	 document.getElementById('drawing10').style.display='block';
	 document.getElementById('drawing9').style.display='none';
	 document.getElementById('drawing8').style.display='none';
     document.getElementById('drawing7').style.display='none';
	 document.getElementById('drawing6').style.display='none';
	 document.getElementById('drawing5').style.display='none';
	 document.getElementById('drawing4').style.display='none';
	 document.getElementById('drawing3').style.display='none';
	 document.getElementById('drawing2').style.display='none';
	 document.getElementById('drawing1').style.display='none';
	  var answer9 =  document.getElementById('ans9').value;
	  
	 if (answer9!=6) {
			alert('Answer is wrong!');
			correctwrong += "Question 9: Wrong"+ "\n";
			return;
		}
		else {
			mark+=10;
			alert('Answer is correct!');
			correctwrong += "Question 9: Correct"+ "\n";
			return;
		}
	init();
});
document.getElementById("finishbutton").addEventListener("click", function() {
	 var answer10 =  document.getElementById('ans10').value;
	 
	 if (answer10!=3) {
			alert('Answer is wrong!');
			correctwrong += "Question 10: Wrong"+ "\n";
            document.getElementById('score').value = mark;
			document.getElementById('submitt').click();
			return;
		}
		else {
		    mark+= 10;
			alert('Answer is correct! TOTAL MARKS: '+mark);
			correctwrong += "Question 10: Correct"+ "\n";
			//timeStop = timeStop();
			document.getElementById('correctwrong').value = correctwrong;
			document.getElementById('score').value = mark;
			function timeStop() {
  var timestamp;

// Date() prototype does not provide native number padding - let's add a method:
Date.prototype.pad = function(integer) {
    var result;
    // Can't decide between ternary and slicing
    // result = ("0" + integer).slice(-2); 
    result = integer < 10
                ? "0" + integer
                : integer;
    return result;
};

// Create a new Date() instance and add day, time and now properties
timestamp = new Date();

// Reorder the array entries to your own needs
timestamp.day = [
    timestamp.pad(timestamp.getDate()),
    timestamp.pad(timestamp.getMonth() + 1), // getMonth() returns 0 to 11
    timestamp.getFullYear()
];

timestamp.time = [
    timestamp.pad(timestamp.getHours()),
    timestamp.pad(timestamp.getMinutes()),
    timestamp.pad(timestamp.getSeconds())
];

timestamp.now = timestamp.time.join("");

   //if (txtFld) {
    //  if (isHidden()){
    //     txtFld.value += "TimeOut: "+ timestamp.now+"\n";
	//	 console.log("timeOff: "+timestamp.now);
	//	 }
    //  else{
	//	txtFld.value += "TimeIn: "+timestamp.now+"\n";
	//	console.log("timeIn: "+timestamp.now);
	//	}
    //  }
	return timestamp.now;
}
			
			document.getElementById('timeStop').value = timeStop();
			document.getElementById('submitt').click();
			return;
		}
	
});

		