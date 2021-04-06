$.ajax('https://jsonplaceholder.typicode.com/users', {

	success: function(data) {	
		data.forEach(el => {
			let id = el.id;
			let name = el.name;
			let company = el.company.name;

			$('.users').append(
				`<div class="user" data-user-id="${id}">
					<div class="avatar"><img src="img/avatar.png" alt="avatar"></div>
					<div class="content">
						<h4>${name}</h4>
						<p><small>${company}</small></p>
					</div>
				</div>`
			);
		});
	}
});

$(document).on('click','.user', function(){
	let $thisUser = $(this);
	$('.post').remove();

	$thisUser.siblings().removeClass('active');
	$thisUser.addClass('active');

	let userId = $thisUser.data('user-id');

	$.ajax(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
		success: function(data) {
			data.forEach(el => {
				let id = el.id;
				let title = el.title;
				let body = el.body
				$('.posts').append(
					`<div class="post" data-post-id="${id}">
						<div class="content">
							<h2>${title}</h2>
							<p>${body}</p>
							<div class="comments">
								<a href=#>View comments</a>
							</div>
						</div>
					</div>`
				);
			});
		}
	});
})


$(document).on('click','.comments', function(){
	let $thisComments = $(this);
	let postId = $thisComments.data('post-id');

	$.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
		success: function(data) {
			data.forEach(el => {
				let name = el.name;
				let email = el.email;
				let body = el.body;

				$('.comments').append(
					`<div class="content">
						<h5>${name}</h5>
						<div class="meta-data">${email}</div>
						<p>${body}</p>
					</div>`
				);
			});
		}
	});
})