(function($) {
	function render(data, type){
		if('users' === type){
			data.forEach(function(el) {
			
				$('.users').append(
					`<div class="user" data-user-id="${el.id}">
						<div class="avatar"><img src="img/avatar.png" alt="avatar"></div>
						<div class="content">
							<h4>${el.name}</h4>
							<p><small>${el.company.name}</small></p>
							<a href=# class="button view-post">View posts</a>
						</div>
					</div>`
				);
			});
			$('.view-post').first().trigger('click');

		}else if('posts' === type){
			data.forEach(function(el) {

				$('.posts').append(
					`<div class="post" data-post-id="${el.id}">
						<div class="content">
							<h2>${el.title}</h2>
							<p>${el.body}</p>
							<div class="view-comments">
								<a href=#>View comments</a>
							</div>
						</div>
					</div>`
				);
			});
		}else if('comments' === type){
			data.forEach(function(el) {
				
				$(`.post[data-post-id="${el.postId}"] .view-comments`).append(
					`<div class="comment">
						
						<p>${el.name}</p>
					</div>`
				);
			});
		}

		
	}

	function errorMessage(){
		$('body').children().remove();

		$('body').append(
			`<div class="error">
				<h1>Server Error</h1>
				<p>Check if you have an internet connection</p>
				<p>Check if the server address is correct (of course if you can :))</p>
			<div>`
		);
	}

	function addUsersData() {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
		
			success: function(data) {
				render(data, 'users');
			},
			error: function(){
				errorMessage();
			}
		});
	}

	function addUserPost() {
		let userPostData = {};

		$(document).on('click','.view-post', function(e){
			e.preventDefault();

			let $thisUser = $(this).parents('.user');
			let userId = $thisUser.data('user-id');

			if($(this).hasClass('active')){
				return false;
			}

			$('.post').remove();

			$('.view-post').removeClass('active');
			$(this).addClass('active');

			if(!userPostData[`user_id_${userId}`]) {
				$('.loading-image').show();
				
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
					
					success: function(data) {
						userPostData[`user_id_${userId}`] = data;

						render(data, 'posts');
					},
					complete: function(){
						$('.loading-image').hide();
					},
					error: function(){
						errorMessage();
					}
				});
			}else {
				render(userPostData[`user_id_${userId}`], 'posts');
			}
		})
	}

	function addPostComments(){
		
		let postCommentsData = {};

		

		$(document).on('click','.view-comments a', function(e){
			e.preventDefault();

			let $thisComments = $(this);
			let postId = $thisComments.parents('.post').data('post-id');

			if($thisComments.parents('.post').find('.comment').length){
				return false;
			}

			if(!postCommentsData[`post_id_${postId}`]) {
				
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
					
					success: function(data) {
						console.log('data: ', data);
						postCommentsData[`post_id_${postId}`] = data;
						console.log('index: ',postCommentsData[`post_id_${postId}`]);
						
						render(data, 'comments');
					},
					error: function(){
						errorMessage();
					}
				});
			}else {
				render(postCommentsData[`post_id_${postId}`], 'comments');
				console.log(2);
			}

			console.log('postCommentsData: ', postCommentsData);
		})
	}

	$(document).ready(function() {
		addUsersData();
		addUserPost();
		addPostComments();
	});
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
})(jQuery);