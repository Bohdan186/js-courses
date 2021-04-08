(function($) {
	// RENDER DATA FUNCTIONS

	function renderUsers(data) {
		data.forEach(function(el) {
			$('.users').append(
				`<div class="user" data-user-id="${el.id}">
					<div class="avatar"><img src="img/avatar.png" alt="avatar"></div>
					<div class="content">
						<h4>${el.name}</h4>
						<p><small>${el.company.name}</small></p>
						<div class="button-wrapper">
							<a href=# class="button view-post">View posts</a>
							<a href=# class="button view-album">Albums</a>
							<a href=# class="button view-to-do">To do</a>
						</div>
					</div>
				</div>`
			);
		});

		$('.view-post').first().trigger('click');
	}

	function renderPosts(data) {
		data.forEach(function(el) {
			$('.blog .row').append(
				`<div class="post col-6" data-post-id="${el.id}">
					<div class="content">
						<h2>${el.title}</h2>
						<p>${el.body}</p>
						<a href=# class="view-comments">View comments</a>
					</div>
				</div>`
			);
		});
	}

	function renderComments(data) {
		data.forEach(function(el) {
			$(`.post[data-post-id="${el.postId}"] .content`).append(
				`<div class="comment">
					<h6>${el.name}</h6>
					<a href=#><small>${el.email}</small></a>
					<p>${el.body}</p>
				</div>`
			);
		});
	}

	function renderAlbums(data) {
		data.forEach(function(el) {
			$('.blog .row').append(
				`<div class="album col-6" data-album-id="${el.id}">
					<div class="content">
						<h4>${el.title}</h4>
					</div>
				</div>`
			);
		});
	}

	function renderPhoto(data) {
		data.forEach(function(el) {
			$('.blog .row').append(
				`<div class="photo col-6" data-photo-id="${el.id}">
					<div class="content">
						<figure>
							<img src="${el.thumbnailUrl}">
							<figcaption>${el.title}</figcaption>
						</figure>
					</div>
				</div>`
			);
		});
	}

	// HELPERS FUNCTIONS

	function removeContent() {
		$('.view-post').removeClass('active');
		$('.view-album').removeClass('active');
		$('.post').remove();
		$('.album').remove();
		$('.photo').remove();
	}

	function errorMessage() {
		$('body').children().remove();

		$('body').append(
			`<div class="error">
				<h1>Server Error</h1>
				<p>Check if you have an internet connection</p>
				<p>Check if the server address is correct (of course if you can :))</p>
			</div>`
		);
	}

	// INITIALS DATA 

	function addUsersData() {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
		
			success: function(data) {
				renderUsers(data);
			},
			error: function(){
				errorMessage();
			}
		});
	}

	function addUserPost() {
		let userPostData = {};

		$(document).on('click','.view-post', function(e) {
			e.preventDefault();

			let $this = $(this);
			let userId =$this.parents('.user').data('user-id');

			if($this.hasClass('active')) {
				return false;
			}

			removeContent();
			$this.addClass('active');
			
			if(!userPostData[`user_id_${userId}`]) {
				$('.loading-image').show();
				
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
					
					success: function(data) {
						userPostData[`user_id_${userId}`] = data;
						renderPosts(data);
					},
					complete: function(){
						$('.loading-image').hide();
					},
					error: function(){
						errorMessage();
					}
				});
			}else {
				renderPosts(userPostData[`user_id_${userId}`]);
			}
		});
	}

	function addPostComments() {
		let postCommentsData = {};

		$(document).on('click','.view-comments', function(e) {
			e.preventDefault();

			let $this = $(this);
			let postId = $this.parents('.post').data('post-id');

			if($this.hasClass('active')) {
				$this.removeClass('active');
				$this.parents('.post').find('.comment').remove();
			}else {
				$this.addClass('active');

				if(!postCommentsData[`post_id_${postId}`]) {
					$('.loading-image').show();

					$.ajax({
						url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
						
						success: function(data) {
							postCommentsData[`post_id_${postId}`] = data;
							renderComments(data);
						},
						complete: function() {
							$('.loading-image').hide();
						},
						error: function() {
							errorMessage();
						}
					});
				}else {
					renderComments(postCommentsData[`post_id_${postId}`]);
				}
			}
		});
	}

	function addUserAlbums() {
		let userAlbumsData = {};

		$(document).on('click','.view-album', function(e) {
			e.preventDefault();

			let $this = $(this);
			let $thisUser = $this.parents('.user');
			let userId = $thisUser.data('user-id');

			if($this.hasClass('active')){
				return false;
			}

			removeContent();
			$this.addClass('active');

			if(!userAlbumsData[`user_id_${userId}`]) {
				$('.loading-image').show();
				
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
					
					success: function(data) {
						userAlbumsData[`user_id_${userId}`] = data;

						renderAlbums(data);
					},
					complete: function(){
						$('.loading-image').hide();
					},
					error: function(){
						errorMessage();
					}
				});
			}else {
				renderAlbums(userAlbumsData[`user_id_${userId}`]);
			}
		})
	}

	function addAlbumsPhoto() {
		let albumsPhotoData = {};

		$(document).on('click','.album .content', function(e) {
			e.preventDefault();

			let $this = $(this);
			let $thisAlbum = $this.parents('.album');
			let albumId = $thisAlbum.data('album-id');

			if($this.hasClass('active')) {
				return false;
			}

			removeContent();
			$this.addClass('active');

			if(!albumsPhotoData[`album_id_${albumId}`]) {
				$('.loading-image').show();
				
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
					
					success: function(data) {
						albumsPhotoData[`album_id_${albumId}`] = data;

						renderPhoto(data);
					},
					complete: function() {
						$('.loading-image').hide();
					},
					error: function() {
						errorMessage();
					}
				});
			}else {
				renderPhoto(albumsPhotoData[`album_id_${albumId}`]);
			}
		});
	}

	$(document).ready(function() {
		addUsersData();
		addUserPost();
		addPostComments();
		addUserAlbums();
		addAlbumsPhoto();
	});
})(jQuery);