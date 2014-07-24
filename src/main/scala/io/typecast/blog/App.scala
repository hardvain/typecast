package io.typecast.blog

import com.twitter.finatra._

import com.twitter.finatra.ContentType._
import io.typecast.blog.controllers.{HomeController}

object App extends FinatraServer{
  register(new HomeController)
}

class AppView extends View{
	val template = "/public/views/index.html"
}

