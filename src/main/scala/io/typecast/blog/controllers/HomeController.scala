package io.typecast.blog.controllers

import com.twitter.finatra.Controller

class HomeController extends Controller {
	get("/") { request =>
		render.static("views/index.html").toFuture
	}
	notFound{ request =>
		render.static("views/notfound.html").toFuture
	}
}
