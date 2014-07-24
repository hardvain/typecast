package io.typecast.blog.controllers

import com.twitter.finatra.Controller
import io.typecast.blog.AppView

class HomeController extends Controller {
	get("/") { request =>
		render.static("views/index.html").toFuture
	}
}
