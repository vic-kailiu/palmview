var total_steps;
var current_step;
function initProgress(total) {
	total_steps = total;
	current_step = 0;
	updateProgress();
}

function increaseProgress() {
	if (current_step >= total_steps) return;
	current_step += 1;
	updateProgress();
}

function updateProgress() {
	var progress_bar = document.getElementById('progress-bar');
	if (!progress_bar) return;
	var percentage = ''+ parseInt(100*current_step/total_steps) + '%';
	progress_bar.style.width = percentage;
	progress_bar.innerHTML = percentage;
}

function checkCompletion() {
	return total_steps == current_step;
}