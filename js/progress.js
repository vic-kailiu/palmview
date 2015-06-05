var total_steps;
var current_step;
function initProgress(total) {
	total_steps = total;

	var step;
	if (pageViewed < 2 && sessionStorage)
		step = eval(sessionStorage.getItem('progress'));

	if (step > 0)
		current_step = step;
	else
		current_step = 0;
	
	updateProgress();
}

function increaseProgress() {
	if (current_step >= total_steps) return;
	current_step += 1;
	updateProgress();
}

function updateProgress() {
	sessionStorage && sessionStorage.setItem('progress', current_step);

	var progress_bar = document.getElementById('progress-bar');
	if (!progress_bar) return;
	var percentage = ''+ parseInt(100*current_step/total_steps) + '%';
	progress_bar.style.width = percentage;
	progress_bar.innerHTML = percentage;
}

function checkCompletion() {
	return total_steps == current_step;
}