function addUsersData() {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/users',
	
		success: function(data) {
			data.forEach(function(el) {
	
				$('.users').append(
					`<div class="user" data-user-id="${el.id}">
						<div class="avatar"><img src="img/avatar.png" alt="avatar"></div>
						<div class="content">
							<h4>${el.name}</h4>
							<p><small>${el.company.name}</small></p>
						</div>
					</div>`
				);
			});
		}
	});
}

function addUserPost() {
	let userPostData = {};
	let userPostDataKeys = {};

	$(document).on('click','.user', function(){
		let $thisUser = $(this);
		let userId = $thisUser.data('user-id');

		if($thisUser.hasClass('active')){
			return false;
		};

		$('.post').remove();
		$thisUser.siblings().removeClass('active');
		$thisUser.addClass('active');

		if(!userPostData.hasOwnProperty(`user_id_${userId}`)) {
			
			$.ajax({
				url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
				
				success: function(data) {
					userPostData[`user_id_${userId}`] = new Array();

					data.forEach(function(el) {
						userPostData[`user_id_${userId}`].push(el);

						for (let key in userPostData) {
							userPostDataKeys[key] = key;
						}

						$('.posts').append(
							`<div class="post" data-post-id="${el.id}">
								<div class="content">
									<h2>${el.title}</h2>
									<p>${el.body}</p>
									<div class="comments">
										<a href=#>View comments</a>
									</div>
								</div>
							</div>`
						);
					});
				}
			});
		}else {
			userPostData[`user_id_${userId}`].forEach(function(el) {

				$('.posts').append(
					`<div class="post" data-post-id="${el.id}">
						<div class="content">
							<h2>${el.title}</h2>
							<p>${el.body}</p>
							<div class="comments">
								<a href=#>View comments</a>
							</div>
						</div>
					</div>`
				);
			});
		}
	})
}

addUsersData();
addUserPost();

// $(document).on('click','.comments', function(){
// 	let $thisComments = $(this);
// 	let postId = $thisComments.data('post-id');

// 	$.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
// 		success: function(data) {
// 			data.forEach(el => {
// 				let name = el.name;
// 				let email = el.email;
// 				let body = el.body;

// 				$('.comments').append(
// 					`<div class="content">
// 						<h5>${name}</h5>
// 						<div class="meta-data">${email}</div>
// 						<p>${body}</p>
// 					</div>`
// 				);
// 			});
// 		}
// 	});
// })